const mainImage = document.getElementById("mainImage");

const thumbs = document.querySelectorAll(".thumb");

function changeImage(img){

    mainImage.src = img.src;

    thumbs.forEach(t=>t.classList.remove("active"));

    img.classList.add("active");

}

function openColor(src){

    document.getElementById("colorModal").style.display="flex";

    document.getElementById("colorImage").src = src;

}


function closeColor(){

    document.getElementById("colorModal").style.display="none";

}
