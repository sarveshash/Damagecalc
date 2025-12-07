var themeBtn = document.querySelector(".theme-change");
var sunIcon = document.querySelector(".sun-icon");
var moonIcon = document.querySelector(".moon-icon");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");

    // switch icon
    if (document.body.classList.contains("light-theme")) {
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
    } 
    else {
        sunIcon.style.display = "block";
        moonIcon.style.display = "none";
    }
});
