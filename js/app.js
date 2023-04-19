const text = document.querySelector(".text h2");
document.addEventListener("scroll", function () {
    const smoon = document.querySelector(".small");
    smoon.style.top = 600 - scrollY + "px";
    text.style.opacity = scrollY / 1000;
    if (scrollY < 500) {
        text.style.left = scrollY + "px";
    }
});