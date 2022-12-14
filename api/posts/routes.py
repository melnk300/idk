from flask import Blueprint, abort
from flask_pydantic import validate
from prisma.models import Post

from .models import PostCreateRequest, PostGetResponse, PostPatchStateRequest

posts = Blueprint("posts", __name__)


@posts.post("/")
@validate(body=PostCreateRequest, on_success_status=201)
def create_post(body: PostCreateRequest):
    categories = [{"id": category} for category in body.categories]
    attachments = [{"id": attachments} for attachments in body.attachments]

    post = Post.prisma().create(
        {
            "title": body.title,
            "description": body.description,
            "author": {"connect": {"id": body.author_id}},
            "attachments": {"connect": attachments},
            "categories": {"connect": categories},
        },
        {"attachments": True, "author": True, "categories": True},
    )

    return PostGetResponse.from_orm(post)


@posts.get("/")
@validate(response_many=True)
def read_posts():
    posts = Post.prisma().find_many(
        include={"attachments": True, "author": True, "categories": True}
    )

    return [PostGetResponse.from_orm(post) for post in posts]


@posts.get("/<id>")
@validate()
def read_post(id: int):
    post = Post.prisma().find_unique(
        {"id": id}, {"attachments": True, "author": True, "categories": True}
    )
    if not post:
        abort(404)

    return PostGetResponse.from_orm(post)


@posts.patch("/<id>/state")
@validate(body=PostPatchStateRequest)
def add_post_attachment(id: int, body: PostPatchStateRequest):
    post = Post.prisma().find_unique({"id": id})
    if not post:
        abort(404)

    post = Post.prisma().update(
        body.dict(),
        {"id": id},
        {"attachments": True, "author": True, "categories": True},
    )

    return PostGetResponse.from_orm(post)
