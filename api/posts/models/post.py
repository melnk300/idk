from prisma.enums import PostState
from pydantic import BaseModel, Field

from api.models import ResponseBase

from .base import PostBase
from .mixins import AttachmentsMixin, AuthorMixin, CategoriesMixin


class PostCreateRequest(PostBase):
    author_id: int = Field(alias="authorId")
    attachments: list[int] = []
    categories: list[int] = []


class PostGetBase(PostBase, ResponseBase):
    id: int
    state: PostState


class PostGetResponse(PostGetBase, AuthorMixin, CategoriesMixin, AttachmentsMixin):
    pass


class PostPatchStateRequest(BaseModel):
    state: PostState
