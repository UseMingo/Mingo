// Dark Mode Toggle with Auto-Save
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    darkModeToggle.textContent = "☀️ Light Mode";
}

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", body.classList.contains("dark-mode") ? "enabled" : "disabled");
    darkModeToggle.textContent = body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Button Functionality for Navigation
document.getElementById("home-btn").addEventListener("click", () => {
    switchPage("home");
});
document.getElementById("search-btn").addEventListener("click", () => {
    switchPage("search");
});
document.getElementById("explore-btn").addEventListener("click", () => {
    switchPage("explore");
});
document.getElementById("upload-btn").addEventListener("click", () => {
    switchPage("upload");
});
document.getElementById("profile-btn").addEventListener("click", () => {
    switchPage("profile");
});

// Footer Navigation Buttons
document.getElementById("home-btn-footer").addEventListener("click", () => {
    switchPage("home");
});
document.getElementById("search-btn-footer").addEventListener("click", () => {
    switchPage("search");
});
document.getElementById("upload-btn-footer").addEventListener("click", () => {
    switchPage("upload");
});
document.getElementById("profile-btn-footer").addEventListener("click", () => {
    switchPage("profile");
});

// Switch Between Pages
function switchPage(pageId) {
    const pages = document.querySelectorAll(".page");
    pages.forEach(page => page.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");
}

// ❤️ Like & Comment System
document.querySelectorAll('.post').forEach(post => {
    const likeBtn = post.querySelector('.like-btn');
    const likeCount = post.querySelector('.like-count');
    const commentInput = post.querySelector('.comment-input');
    const commentBtn = post.querySelector('.comment-btn');
    const commentSection = post.querySelector('.comment-section');

    let likes = 0;
    
    likeBtn.addEventListener("click", () => {
        likes++;
        likeCount.textContent = likes;
    });

    commentBtn.addEventListener("click", () => {
        if (commentInput.value.trim() !== "") {
            const comment = document.createElement("p");
            comment.textContent = commentInput.value;
            commentSection.appendChild(comment);
            commentInput.value = "";
        }
    });
});

// 🎨 Username Color & Status Update
document.getElementById("username-color").addEventListener("input", (e) => {
    document.getElementById("username").style.color = e.target.value;
});

document.getElementById("status").addEventListener("input", (e) => {
    document.getElementById("profile").querySelector("h2").textContent = `Your Profile - ${e.target.value}`;
});

// 🏆 Badge System
let postsMade = 5;
document.getElementById("badge").textContent = postsMade >= 10 ? "Mingo King 👑" : postsMade >= 5 ? "Pro Player 🏆" : "Newbie 👶";

// 🔥 Trending Posts Update
function updateTrending() {
    let posts = document.querySelectorAll('.post');
    let sortedPosts = [...posts].sort((a, b) => {
        let likesA = parseInt(a.querySelector('.like-count').textContent);
        let likesB = parseInt(b.querySelector('.like-count').textContent);
        return likesB - likesA;
    });

    let trendingSection = document.getElementById('trending');
    trendingSection.innerHTML = "<h2>🔥 Trending Posts</h2>";
    sortedPosts.slice(0, 3).forEach(post => trendingSection.appendChild(post.cloneNode(true)));
}
setInterval(updateTrending, 5000);

// 🎶 Music Player
document.getElementById("profile-music").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
        const audio = document.getElementById("music-player");
        audio.src = URL.createObjectURL(file);
        audio.play();
    }
});
