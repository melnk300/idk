from api.models import ResponseBase

from .base import CategoryBase


class CategoryCreateRequest(CategoryBase):
    pass

class CategoryGetResponse(CategoryBase, ResponseBase):
    id: str