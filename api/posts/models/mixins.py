from pydantic import BaseModel

from api.categories.models.category import CategoryGetResponse
from api.users.models.user import UserGetResponse


class AuthorMixin(BaseModel):
    author: UserGetResponse

class CategoriesMixin(BaseModel):
    categories: list[CategoryGetResponse]

class AttachmentsMixin(BaseModel):
    attachments: list[int]