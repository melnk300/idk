from pydantic import BaseModel


class UserSigninRequest(BaseModel):
    login: str
    password: str
