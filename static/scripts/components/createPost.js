"use strict";
exports.__esModule = true;
exports.createPost = void 0;
var createPost = function () {
    var categories = [];
    fetch("/api/categories", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(function (res) { return res.json(); })
        .then(function (data) {
        categories = data;
    });
    var createPost = document.createElement("div");
    createPost.classList.add("create_post");
    createPost.innerHTML = /*html*/ "\n    <div class=\"create_post\">\n        <input type=\"text\" class=\"create_post_title\" placeholder=\"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A\">\n        <textarea class=\"create_post_text\" placeholder=\"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\"></textarea>\n        <select class=\"create_post_category\">\n            ".concat(categories.map(function (category) {
        return /*html*/ "\n                    <option value=\"".concat(category.id, "\">").concat(category.name, "</option>\n                ");
    }), "\n        <input type=\"file\" class=\"create_post_image\">\n    </div>\n  ");
    document.body.appendChild(createPost);
};
exports.createPost = createPost;
