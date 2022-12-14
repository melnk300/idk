"use strict";
exports.__esModule = true;
exports.PostCard = void 0;
var PostCard = function (post) {
    var postDate = new Date(post.date).toLocaleDateString('ru-RU');
    var categoryColor = post.category.color;
    console.log(post);
    return "\n        <div class=\"post\">\n            <img src=\"".concat(post.img, "\"  class=\"post_image\" alt=\"post image\">\n            <div class=\"post_content\">\n                <div class=\"post_content-inner\">\n                    <div class=\"post_header\">\n                        <div class=\"post_header_meta\">\n                            <div class=\"post_title\">").concat(post.title, "</div>\n                            <div class=\"post_category ").concat(categoryColor, "\">").concat(post.category, "</div>\n                        </div>\n                        <div class=\"post_date\">").concat(postDate, "</div>\n                    </div>\n                    <div class=\"post_text\">\n                            ").concat(post.text, "\n                    </div>\n                    <div class=\"post_state ").concat(post.state ? 'agree' : 'disagree', "\">\n                        ").concat(post.state ? 'Одобрено' : 'Не одобрено', "\n                    </div>\n                </div>\n            </div>\n        </div>\n    ");
};
exports.PostCard = PostCard;
