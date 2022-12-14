import { PostCard } from './components/PostCard.js';
import { createPost } from './components/createPost.js';
localStorage.getItem('id') || location.replace('/auth');
document.getElementById('alink').innerHTML = localStorage.getItem('login') || 'Вход\Регистрация';
fetch(`/posts/${localStorage.getItem('id')}/posts`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => res.json()).then(data => {
    document.getElementById('content').innerHTML = data.map(post => PostCard(post)).join('');
});
document.getElementById('newPost').addEventListener('click', () => {
    createPost();
    fetch(`/api/users/${localStorage.getItem('id')}/posts`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(data => {
        console.log(data);
        document.getElementById('content').innerHTML = data.map(post => PostCard(post)).join('');
    });
});
fetch(`/api/users/${localStorage.getItem('id')}/posts`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => res.json()).then(data => {
    console.log(data);
    document.getElementById('content').innerHTML = data.map(post => PostCard(post)).join('');
});
