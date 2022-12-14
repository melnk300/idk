from api.posts.models.mixins import AttachmentsMixin, AuthorMixin
from api.posts.models.post import PostGetBase


class CategoryPostGetResponse(PostGetBase, AttachmentsMixin, AuthorMixin):
    pass
