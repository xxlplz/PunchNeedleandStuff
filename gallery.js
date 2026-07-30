// ==========================
// Latest Works Lightbox
// ==========================

const workImages = document.querySelectorAll(".work-image");


workImages.forEach((img, i) => {

    img.addEventListener("click", () => {

        currentImages = [...workImages];

        currentIndex = i;

        lightboxImg.src = currentImages[currentIndex].src;

        lightbox.classList.add("show");

    });

});

// ==========================
// Custom Slider + Lightbox
// ==========================

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-image");
const closeBtn = document.querySelector(".lightbox-close");
const prevBtn = document.querySelector(".lightbox .left");
const nextBtn = document.querySelector(".lightbox .right");

let currentImages = [];
let currentIndex = 0;

// ==========================
// Create Slider
// ==========================

document.querySelectorAll(".custom-slider").forEach((slider) => {

    const slides = slider.querySelectorAll(".custom-slide");
    const dotsBox = slider.querySelector(".custom-dots");

    let index = 0;
    let timer;

    // ---------- Show Slide ----------

    function showSlide(i) {

        slides.forEach(slide => slide.classList.remove("active"));
        dotsBox.querySelectorAll(".custom-dot")
               .forEach(dot => dot.classList.remove("active"));

        slides[i].classList.add("active");
        dotsBox.children[i].classList.add("active");

        index = i;
    }

    // ---------- Create Dots ----------

    slides.forEach((slide, i) => {

        const dot = document.createElement("span");
        dot.className = "custom-dot";

        if (i === 0) {
            dot.classList.add("active");
        }

        dot.addEventListener("click", () => {
            showSlide(i);
        });

        dotsBox.appendChild(dot);

    });

    // ---------- Auto Slide ----------

    function startSlider() {

        timer = setInterval(() => {

            index++;

            if (index >= slides.length) {
                index = 0;
            }

            showSlide(index);

        }, 4000);

    }

    function stopSlider() {
        clearInterval(timer);
    }

    slider.addEventListener("mouseenter", stopSlider);
    slider.addEventListener("mouseleave", startSlider);

    startSlider();

    // ---------- Open Lightbox ----------

    slides.forEach((slide, i) => {

        slide.addEventListener("click", () => {

            currentImages = [...slides];
            currentIndex = i;

            lightboxImg.src = currentImages[currentIndex].src;
            lightbox.classList.add("show");

        });

    });

});

// ==========================
// Lightbox
// ==========================

function showLightboxImage() {

    lightboxImg.src = currentImages[currentIndex].src;

}

// Previous

prevBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = currentImages.length - 1;
    }

    showLightboxImage();

});

// Next

nextBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    currentIndex++;

    if (currentIndex >= currentImages.length) {
        currentIndex = 0;
    }

    showLightboxImage();

});

// Close Button

closeBtn.addEventListener("click", () => {

    lightbox.classList.remove("show");

});

// Click Background

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.classList.remove("show");

    }

});

// Keyboard

document.addEventListener("keydown", (e) => {

    if (!lightbox.classList.contains("show")) return;

    if (e.key === "Escape") {

        lightbox.classList.remove("show");

    }

    if (e.key === "ArrowLeft") {

        prevBtn.click();

    }

    if (e.key === "ArrowRight") {

        nextBtn.click();

    }

});
