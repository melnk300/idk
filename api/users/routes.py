import bcrypt
from flask import Blueprint, abort
from flask_pydantic import validate
from prisma.models import User

from .models import UserGetResponse, UserSigninRequest, UserSignupRequest
from .models.user_post import UserPostGetResponse

users = Blueprint("users", __name__)


@users.post("/signup")
@validate(body=User, on_success_status=201)
def signup(body: UserSignupRequest):
    user = User.prisma().find_first(
        where={"OR": [{"email": body.email}, {"login": body.login}]}
    )
    if user:
        abort(409)

    body.password = bcrypt.hashpw(body.password.encode(), bcrypt.gensalt()).decode()

    user = User.prisma().create(body.dict())

    return UserGetResponse.from_orm(user)


@users.post("/signin")
@validate(body=UserSigninRequest)
def signin(body: UserSigninRequest):
    user = User.prisma().find_unique({"login": body.login})
    if not user and bcrypt.checkpw(body.password.encode(), user.password.encode()):
        return abort(403)

    return UserGetResponse.from_orm(user)


@users.get("/<id>")
@validate()
def read_user(id: int):
    user = User.prisma().find_unique({"id": id})

    if not user:
        abort(404)

    return UserGetResponse.parse_obj(user)

@users.get("/<id>/posts")
@validate(response_many=True)
def read_user_posts(id: int):
    user = User.prisma().find_unique({"id": id}, {"posts": {"include": {"attachments": True, "categories": True}}})

    if not user:
        abort(404)

    return [UserPostGetResponse.from_orm(post) for post in user.posts]