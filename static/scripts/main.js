const posts = [
    {
        id: 1,
        text: 'lore ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. ',
        date: '2022-01-01',
        category: 'Дороги',
        state: true,
        img: 'https://picsum.photos/800/800'
    }, {
        id: 2,
        title: 'Согласование проведения студенческой весны на центральной площади города',
        text: 'lore ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. ',
        date: '2022-01-01',
        category: 'Обучение',
        state: false,
        img: 'https://picsum.photos/800/800'
    }, {
        id: 3,
        title: 'Согласование высадки деревьев на аллее космонавтов учениками школ',
        text: 'lore ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. ',
        date: '2022-01-01',title: 'Участок дороги на пересечении Мусы-Джалиля и Омской требует ремонта',
        category: 'Экология',
        state: true,
        img: 'https://picsum.photos/800/800'
    }
]

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
]

document.getElementById('content').innerHTML = posts.map(post => {
    const postDate = new Date(post.date).toLocaleDateString('ru-RU')
    const categoryColor = categories.filter(category => category.category === post.category)[0].color

    return `
        <div class="post">
                <img src="${post.img}"  class="post_image" alt="post image">
                <div class="post_content">
                    <div class="post_content-inner">
                        <div class="post_header">
                            <div class="post_header_meta">
                                <div class="post_title">${post.title}</div>
                                <div class="post_category ${categoryColor}">${post.category}</div>
                            </div>
                            <div class="post_date">${postDate}</div>
                        </div>
                        <div class="post_text">
                             ${post.text}
                        </div>
                        <div class="post_state ${post.state ? 'agree' : 'disagree'}">
                            ${post.state ? 'Одобрено' : 'Не одобрено'}
                        </div>
                    </div>
                </div>
            </div>
    `
}).join('')