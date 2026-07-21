const mainImage = document.getElementById("mainImage");

const thumbs = document.querySelectorAll(".thumb");

function changeImage(img){

    mainImage.src = img.src;

    thumbs.forEach(t=>t.classList.remove("active"));

    img.classList.add("active");

}
