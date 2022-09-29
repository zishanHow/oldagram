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

const main = document.getElementById("main")

let heart = "images/icon-heart.png"
let comment = "images/icon-comment.png"
let dm = "images/icon-dm.png"


let feedPost = ""
for (let i = 0; i < posts.length; i++) {
    feedPost += `
            <section>

                <div class="timeline-user-info">
                    <img class="user-avatar" src="${posts[i].avatar}" alt="avater of ${posts[i].name}">

                    <div class="username-location">
                        <h3 class="timeline-user">${posts[i].name}</h3>
                        <p class="timeline-user-location">${posts[i].location}</p>
                    </div>

                </div>


                <img class="timeline-user-post" src="${posts[i].post}" alt="an picture post of ${posts[i].name}">


                <img class="input-imgs heart" src="${heart}" alt="like button">
                <img class="input-imgs" src="${comment}" alt="comment button">
                <img class="input-imgs" src="${dm}" alt="dm button">


                <p class="like-count likes">${posts[i].likes} Likes</p>
                <p class="tags"><span class="strong">${posts[i].username}</span> ${posts[i].comment}</p>

            </section>
            `
}
main.innerHTML = feedPost



// increment and decrement like count. 
let heartIcons = document.getElementsByClassName("heart")
let heartEl = document.getElementsByClassName("likes")

for (let i = 0; i < heartIcons.length; i++) {
    heartIcons[i].addEventListener("click", function () {
        if (posts[i].liked == false) {
            like(i)
            rerender(heartEl[i], i)
        } else if (posts[i].liked == true) {
            removeLike(i)
            rerender(heartEl[i], i)
        }
    })
}

function like(i) {
    posts[i].liked = true
    posts[i].likes += 1
}

function removeLike(i) {
    posts[i].liked = false
    posts[i].likes -= 1
}

function rerender(element, index) {
    element.innerHTML = `${posts[index].likes} Likes`
}
