// ======================================================
// MOBILE MENU
// ======================================================

const menuToggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-close");
const nav = document.querySelector(".main-nav");

if (menuToggle && menuClose && nav) {

    menuToggle.addEventListener("click", () => {

        nav.classList.add("show");

    });

    menuClose.addEventListener("click", () => {

        nav.classList.remove("show");

    });

    // ปิดเมนูเมื่อกดนอกเมนู
    document.addEventListener("click", (e) => {

        if (
            nav.classList.contains("show") &&
            !nav.contains(e.target) &&
            !menuToggle.contains(e.target)
        ) {

            nav.classList.remove("show");

        }

    });

}
