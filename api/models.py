from pydantic import BaseModel


class ResponseBase(BaseModel):
    class Config:
        orm_mode = True