// THEME SWITCHER
var themeBtn = document.querySelector(".theme-change");
var sunIcon = document.querySelector(".sun-icon");
var moonIcon = document.querySelector(".moon-icon");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
    } else {
        sunIcon.style.display = "block";
        moonIcon.style.display = "none";
    }
});

// PAGE SLIDE + NAVIGATE
var button = document.querySelector(".gs-button");

button.addEventListener("click", function (event) {
    event.preventDefault(); // stop immediate navigation

    document.body.classList.add("slide-out"); // start slide animation

    setTimeout(function () {
        window.location.href = "mainpage.html";
    }, 500); // match body transition time (0.5s)
});
