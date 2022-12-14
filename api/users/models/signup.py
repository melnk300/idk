from pydantic import BaseModel


class UserSignupRequest(BaseModel):
    email: str
    login: str
    password: str