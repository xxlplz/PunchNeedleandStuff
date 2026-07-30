// ==========================
// Product Gallery
// ==========================

const mainImage = document.getElementById("mainImage");

const thumbs = document.querySelectorAll(".thumb");

let current = 0;


// ==========================
// Change Main Image
// ==========================

function changeImage(img){

    mainImage.src = img.src;

    thumbs.forEach(t => {
        t.classList.remove("active");
    });

    img.classList.add("active");

    current = [...thumbs].indexOf(img);

}


// ==========================
// Product Gallery Arrows
// ==========================

const productLeft = document.querySelector(".product-gallery .left");

const productRight = document.querySelector(".product-gallery .right");



productLeft.addEventListener("click",()=>{

    current--;

    if(current < 0){

        current = thumbs.length - 1;

    }

    changeImage(thumbs[current]);

});



productRight.addEventListener("click",()=>{

    current++;

    if(current >= thumbs.length){

        current = 0;

    }

    changeImage(thumbs[current]);

});



// ==========================
// Color Modal
// ==========================

function openColor(src){

    document.getElementById("colorModal").style.display="flex";

    document.getElementById("colorImage").src = src;

}



function closeColor(){

    document.getElementById("colorModal").style.display="none";

}



// ESC close color modal

document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        closeColor();

    }

});



// ==========================
// Product Lightbox
// ==========================


const lightbox = document.querySelector(".lightbox");

const lightboxImage = document.querySelector(".lightbox-image");

const closeLightbox = document.querySelector(".lightbox-close");

const lightboxLeft = document.querySelector(".lightbox .left");

const lightboxRight = document.querySelector(".lightbox .right");


let lightboxImages = [];

let lightboxIndex = 0;



// เปิด Lightbox เมื่อคลิกภาพใหญ่

mainImage.addEventListener("click",()=>{


    lightboxImages = [...thumbs].map(img => img.src);


    lightboxIndex = current;


    lightboxImage.src = lightboxImages[lightboxIndex];


    lightbox.classList.add("show");


});



// แสดงรูปใน Lightbox

function showLightbox(){

    lightboxImage.src = lightboxImages[lightboxIndex];

}



// Lightbox Previous

lightboxLeft.addEventListener("click",(e)=>{

    e.stopPropagation();


    lightboxIndex--;


    if(lightboxIndex < 0){

        lightboxIndex = lightboxImages.length - 1;

    }


    showLightbox();

});



// Lightbox Next

lightboxRight.addEventListener("click",(e)=>{

    e.stopPropagation();


    lightboxIndex++;


    if(lightboxIndex >= lightboxImages.length){

        lightboxIndex = 0;

    }


    showLightbox();

});



// Close button

closeLightbox.addEventListener("click",()=>{

    lightbox.classList.remove("show");

});



// Click outside image

lightbox.addEventListener("click",(e)=>{


    if(e.target === lightbox){

        lightbox.classList.remove("show");

    }

});



// Keyboard control

document.addEventListener("keydown",(e)=>{


    if(!lightbox.classList.contains("show")) return;



    if(e.key === "Escape"){

        lightbox.classList.remove("show");

    }



    if(e.key === "ArrowLeft"){

        lightboxLeft.click();

    }



    if(e.key === "ArrowRight"){

        lightboxRight.click();

    }


});
