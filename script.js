document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var navbar = document.querySelector(".navbar");
        var videoSection = document.querySelector("#video-section");

        if (window.scrollY >= videoSection.offsetHeight) {
            navbar.classList.remove("transparent-navbar");
            navbar.classList.add("scrolled-navbar");
        } else {
            navbar.classList.remove("scrolled-navbar");
            navbar.classList.add("transparent-navbar");
        }
    });
});
