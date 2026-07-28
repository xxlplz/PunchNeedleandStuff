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

document.querySelectorAll(".slider").forEach(slider=>{

    const slides = slider.querySelectorAll(".slide");

    let index = 0;

    slider.querySelector(".next").onclick = ()=>{

        slides[index].classList.remove("active");

        index = (index + 1) % slides.length;

        slides[index].classList.add("active");

    }

    slider.querySelector(".prev").onclick = ()=>{

        slides[index].classList.remove("active");

        index = (index - 1 + slides.length) % slides.length;

        slides[index].classList.add("active");

    }

});
