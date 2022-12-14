from api.posts.models.mixins import AttachmentsMixin, CategoriesMixin
from api.posts.models.post import PostGetBase


class UserPostGetResponse(PostGetBase, CategoriesMixin, AttachmentsMixin):
    pass