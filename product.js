const mainImage = document.getElementById("mainImage");

const thumbs = document.querySelectorAll(".thumb");

let current = 0;


// คลิกรูปเล็ก

function changeImage(img){

    mainImage.src = img.src;

    thumbs.forEach(t => t.classList.remove("active"));

    img.classList.add("active");

    current = [...thumbs].indexOf(img);

}


// ปุ่มซ้าย

document.querySelector(".left").onclick = function(){

    current--;

    if(current < 0){

        current = thumbs.length - 1;

    }

    changeImage(thumbs[current]);

};


// ปุ่มขวา

document.querySelector(".right").onclick = function(){

    current++;

    if(current >= thumbs.length){

        current = 0;

    }

    changeImage(thumbs[current]);

};

function openColor(src){

    document.getElementById("colorModal").style.display="flex";

    document.getElementById("colorImage").src = src;

}


function closeColor(){

    document.getElementById("colorModal").style.display="none";

}

document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        closeColor();

    }

});

// ==========================
// Product Lightbox
// ==========================

const mainImage = document.querySelector("#mainImage");

const thumbs = document.querySelectorAll(".thumb");

const lightbox = document.querySelector(".lightbox");

const lightboxImage = document.querySelector(".lightbox-image");

const closeLightbox = document.querySelector(".lightbox-close");

const lightboxLeft = document.querySelector(".lightbox-arrow.left");

const lightboxRight = document.querySelector(".lightbox-arrow.right");


let lightboxImages = [];

let lightboxIndex = 0;



thumbs.forEach(img => {

    lightboxImages.push(img.src);

});



// เปิด Lightbox

mainImage.addEventListener("click", ()=>{


    lightboxImages = [...document.querySelectorAll(".thumb")]
        .map(img => img.src);


    lightboxIndex = lightboxImages.indexOf(mainImage.src);


    lightboxImage.src = lightboxImages[lightboxIndex];


    lightbox.classList.add("show");


});



// เปลี่ยนรูป

function showLightbox(){

    lightboxImage.src = lightboxImages[lightboxIndex];

}



// ซ้าย

lightboxLeft.addEventListener("click",(e)=>{

    e.stopPropagation();

    lightboxIndex--;

    if(lightboxIndex < 0){

        lightboxIndex = lightboxImages.length-1;

    }

    showLightbox();

});



// ขวา

lightboxRight.addEventListener("click",(e)=>{

    e.stopPropagation();


    lightboxIndex++;


    if(lightboxIndex >= lightboxImages.length){

        lightboxIndex = 0;

    }


    showLightbox();

});



// ปิด

closeLightbox.addEventListener("click",()=>{

    lightbox.classList.remove("show");

});



// คลิกพื้นหลังปิด

lightbox.addEventListener("click",(e)=>{

    if(e.target === lightbox){

        lightbox.classList.remove("show");

    }

});
