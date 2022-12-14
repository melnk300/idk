from flask import (Flask, flash, jsonify, redirect, render_template, request,
                   url_for)

from api.categories.routes import categories
from api.posts.routes import posts
from api.users.routes import users
from prisma import Prisma

app = Flask(__name__)
app.debug = True

app.register_blueprint(users, url_prefix="/api/users")
app.register_blueprint(categories, url_prefix="/api/categories")
app.register_blueprint(posts, url_prefix="/api/posts")

@app.before_first_request
def on_startup():
    db = Prisma(auto_register=True)
    db.connect()


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/lk")
def lk():
    return render_template("lk.html")


@app.route("/auth")
def auth():
    return render_template("auth.html")


if __name__ == "__main__":
    app.run()
