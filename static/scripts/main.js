"use strict";
exports.__esModule = true;
var PostCard_1 = require("./components/PostCard");
// На вид я очень скудный, неопрятный господин
// Лицо мое все в шарамах, руки склонны к приступлениям. Ну вот,
// Совсем недавнго мне друг подарил спортивные очки на мой день рождения
var posts = [
    {
        id: 1,
        title: 'Согласование проведения студенческой весны на центральной площади города',
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
        date: '2022-01-01',
        category: 'Экология',
        state: true,
        img: 'https://picsum.photos/800/800'
    }
];
var categories = [
    {
        category: 'Дороги',
        color: 'blue'
    }, {
        category: 'Обучение',
        color: 'green'
    }, {
        category: 'Безопасность',
        color: 'red'
    }, {
        category: 'Экология',
        color: 'yellow'
    }
];
fetch('http://localhost:5000/users/').then(function (res) { return res.json().then(function (resp) { return console.log(resp); }); });
document.getElementById('content').innerHTML = posts.map(function (post) { return (0, PostCard_1.PostCard)(post); }).join('');
