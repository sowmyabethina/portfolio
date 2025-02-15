document.addEventListener("DOMContentLoaded", function () {
    // Mobile Navbar Toggle
    const nav = document.querySelector("nav ul");
    const toggle = document.createElement("div");
    toggle.innerHTML = "&#9776;";
    toggle.style.fontSize = "2rem";
    toggle.style.cursor = "pointer";
    toggle.style.display = "none";
    toggle.style.color = "white";
    toggle.style.position = "absolute";
    toggle.style.right = "20px";
    toggle.style.top = "10px";

    document.querySelector("nav").appendChild(toggle);

    toggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth <= 768) {
            nav.style.display = "none";
            toggle.style.display = "block";
        } else {
            nav.style.display = "flex";
            toggle.style.display = "none";
        }
    });

    // Smooth Scrolling
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Initial Check for Mobile View
    if (window.innerWidth <= 768) {
        nav.style.display = "none";
        toggle.style.display = "block";
    }
});
