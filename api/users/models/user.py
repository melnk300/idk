from prisma.enums import Role

from api.models import ResponseBase


class UserGetResponse(ResponseBase):
    id: int
    login: str
    email: str
    role: Role

    class Config:
        orm_mode = True
