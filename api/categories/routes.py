from flask import Blueprint, abort
from flask_pydantic import validate
from prisma.models import Category

from .models import CategoryCreateRequest, CategoryGetResponse
from .models.category_post import CategoryPostGetResponse

categories = Blueprint("categories", __name__)


@categories.post("/")
@validate(body=CategoryCreateRequest, on_success_status=201)
def create_category(body: CategoryCreateRequest):
    category = Category.prisma().find_unique({"name": body.name})
    if category:
        abort(409)

    category = Category.prisma().create(body.dict())

    return CategoryGetResponse.from_orm(category)


@categories.get("/")
@validate(response_many=True)
def read_categories():
    categories = Category.prisma().find_many()

    return [CategoryGetResponse.from_orm(category) for category in categories]


@categories.get("/<id>")
@validate()
def read_category(id: int):
    category = Category.prisma().find_unique({"id": id})
    if not category:
        abort(404)

    return CategoryGetResponse.from_orm(category)


@categories.delete("/<id>")
@validate()
def delete_category(id: int):
    category = Category.prisma().find_unique({"id": id})
    if not category:
        abort(404)

    category = Category.prisma().delete({"id": category.id})

    return CategoryGetResponse.from_orm(category)


@categories.get("/<id>/posts")
@validate(response_many=True)
def read_category_posts(id: int):
    category = Category.prisma().find_unique({"id": id}, {"posts": {"include": {"author": True, "attachments": True}}})
    if not category:
        abort(404)

    return [CategoryPostGetResponse.from_orm(post) for post in category.posts]
