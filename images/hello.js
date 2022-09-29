const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        liked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        liked: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        liked: false
    }
]

for( let i=0; i < posts.length; i++){
    let section = document.createElement('section')
    section.innerHTML = 
    `<div class="container">
        <div class="post-header default-padding">
            <img src="${posts[i].avatar}" alt="profile pic" class="icon">
            <div class="post-header-text">
            <h2 class="bold">
                ${posts[i].name}
            </h2>
            <h3>${posts[i].location}</h3>
        </div>
        </div>
        <img src="${posts[i].post}" alt="${posts[i].name} portrait" class="post">
        <div class="more-info default-padding">
            <div class="post-icons">
                <img src="./images/icon-heart.png" alt="Heart icon" class="icon small heart">
                <img src="./images/icon-comment.png" alt="Comment icon" class="icon small">
                <img src="./images/icon-dm.png" alt="Dm icon" class="icon small">
            </div>
            <h4 class="bold likes">${posts[i].likes} Likes</h4>
            <p><span class="bold">${posts[i].username}</span> ${posts[i].comment}</p>
        </div>
    </div>`
    document.body.appendChild(section)
}

let heartsIcons = document.getElementsByClassName('heart')
let likesEl = document.getElementsByClassName('likes')
let imageEl = document.getElementsByClassName('post')

for( let i = 0; i<heartsIcons.length; i++){
    heartsIcons[i].addEventListener('click', ()=>{
        if(!posts[i].liked)
            like(i)
        else
            removeLike(i)
        rerender(likesEl[i], i)
    })
}

for( let i = 0; i <imageEl.length; i++){
    imageEl[i].addEventListener('dblclick', ()=>{
        if(!posts[i].liked){
            like(i)
        }
            
        else
            removeLike(i)
        rerender(likesEl[i], i)
    })
}

function like(i){
    posts[i].likes += 1
    heartsIcons[i].src = './images/icon-heart-selected.png'
    posts[i].liked = true
}

function removeLike(i){
    posts[i].likes -= 1
    heartsIcons[i].src = './images/icon-heart.png'
    posts[i].liked = false
}

function rerender(element, index){
    element.innerHTML = `${posts[index].likes} Likes`
}