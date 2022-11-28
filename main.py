# flask app
from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.debug = True


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/posts/', methods=['POST'])
def get_posts():
    return 200


if __name__ == '__main__':
    app.run()
