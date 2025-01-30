// Handle dark mode toggle (already in your script)
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    darkModeToggle.textContent = "Switch to Light Mode";
}

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", body.classList.contains("dark-mode") ? "enabled" : "disabled");
    darkModeToggle.textContent = body.classList.contains("dark-mode") ? "Switch to Light Mode" : "Switch to Dark Mode";
});

// Button Functionality for Navigation
const pages = document.querySelectorAll(".page");

function switchPage(pageId) {
    pages.forEach(page => page.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");
}

document.getElementById("home-btn").addEventListener("click", () => switchPage("home"));
document.getElementById("explore-btn").addEventListener("click", () => switchPage("explore"));
document.getElementById("upload-btn").addEventListener("click", () => switchPage("upload"));
document.getElementById("profile-btn").addEventListener("click", () => switchPage("profile"));

/// Handle Profile Picture Upload (existing code)
const profilePicInput = document.getElementById("profile-pic");
const profileImg = document.getElementById("profile-img");

// Event listener for profile picture input
profilePicInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profileImg.src = e.target.result; // Set the profile picture to the selected file
        };
        reader.readAsDataURL(file); // Read the image file as a data URL
    }
});

// Existing functions (like saveProfile, saveProfileSettings, etc.) go here...

// ** Add the functions below **
function saveProfileSettings() {
    const username = document.getElementById("settings-username").value;
    const bio = document.getElementById("settings-bio").value;
    const profilePic = document.getElementById("settings-profile-pic").files[0];

    if (username && bio) {
        localStorage.setItem("username", username);
        localStorage.setItem("bio", bio);
        if (profilePic) {
            const reader = new FileReader();
            reader.onload = function(e) {
                localStorage.setItem("profilePic", e.target.result);
            };
            reader.readAsDataURL(profilePic);
        }
        alert("Profile settings saved!");
    } else {
        alert("Please fill out both fields.");
    }
}

function changePassword() {
    const newPassword = document.getElementById("settings-password").value;
    const confirmPassword = document.getElementById("settings-confirm-password").value;

    if (newPassword && confirmPassword && newPassword === confirmPassword) {
        localStorage.setItem("password", newPassword);
        alert("Password changed successfully!");
    } else {
        alert("Passwords don't match or are empty.");
    }
}

function saveNotificationSettings() {
    const notificationsEnabled = document.getElementById("settings-notifications").checked;
    localStorage.setItem("notifications", notificationsEnabled ? "enabled" : "disabled");
    alert("Notification settings saved!");
}

function saveThemeSettings() {
    const darkModeEnabled = document.getElementById("theme-toggle").checked;
    if (darkModeEnabled) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
    }
    alert("Theme settings saved!");
}

function deactivateAccount() {
    if (confirm("Are you sure you want to deactivate your account? This action is irreversible.")) {
        localStorage.clear();
        alert("Your account has been deactivated.");
        window.location.reload();
    }
}

// Handle dark mode toggle (if not already handled elsewhere in your script)
document.getElementById("dark-mode-toggle").addEventListener("click", function () {
    const darkModeEnabled = document.body.classList.contains("dark-mode");
    if (darkModeEnabled) {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
    } else {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    }
});
