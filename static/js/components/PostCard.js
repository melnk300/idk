const categories = [
    {
        category: 'Дороги',
        color: 'blue',
    }, {
        category: 'Обучение',
        color: 'green',
    }, {
        category: 'Безопасность',
        color: 'red',
    }, {
        category: 'Экология',
        color: 'yellow',
    }
];
const states = [
    {
        state: 'Новая',
        color: 'royalblue',
    }, {
        state: 'Решена',
        color: 'green',
    }, {
        state: 'Отклонена',
        color: 'red',
    }
];
const statesParse = [
    {
        state: 'Новая',
        title: 'NEW'
    }, {
        state: 'Решена',
        title: 'ACCEPTED'
    }, {
        state: 'Отклонена',
        title: 'REJECTED'
    }
];
export const PostCard = (post, isAuthor = false, isAdmin = false) => {
    const postDate = new Date(post.date).toLocaleDateString('ru-RU');
    const categoryColor = categories.find(c => c.category === post.category)?.color;
    const state = statesParse.find(s => s.title === post.state)?.state;
    const stateColor = states.find(s => s.state === state)?.color;
    return /*html*/ `
        <div class="post">
            <div class="post_images">
                <img src="https://zaryasa.ru/wp-content/uploads/2022/05/doroga.jpg" class="post_image" alt="post image">
                <img src="http://nationalinterest.ru/wp-content/uploads/2020/11/asfalt_at_it_again_326729.jpg" class="post_image--after">
            </div>
            <div class="post_content">
                <div class="post_content-inner">
                    <div class="post_header">
                        <div class="post_header_meta">
                            <div class="post_title">${post.title}</div>
                            <div class="post_header_meta_info">
                                <div class="post_category ${categoryColor}">${post.category}</div>
                            </div>  
                        </div>
                        <div class="post_date">${postDate}</div>
                    </div>
                    <div class="post_text">
                            ${post.text}
                    </div>
                    <div class="controls">
                        <div class="post_state" style="color: ${stateColor}; border-color: ${stateColor};">
                            ${state}
                        </div>
                        ${isAuthor && state === "Новая" ? `<button id="deletePost"><img id="trash" src="static/icons/trash.svg" alt="delete"></button>` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
};
