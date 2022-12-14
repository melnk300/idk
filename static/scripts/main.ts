import { Post, PostCard } from './components/PostCard.js'

const userId = localStorage.getItem('id')
const userName = localStorage.getItem('login')
if (!userId) {
    let alink = document.getElementById('lk') as HTMLAnchorElement
    alink.href = '/auth'
    alink.innerText = 'Вход\Регистрация'
} else {
    let alink = document.getElementById('lk') as HTMLAnchorElement
    alink.href = '/lk'
    alink.innerText = userName
}

fetch(`api/posts/`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => res.json()).then(data => {
    document.getElementById('content')!.innerHTML = data.map(post => PostCard(post)).join('')
})
// document.getElementById('content')!.innerHTML = posts.map(post => PostCard(post)).join('')