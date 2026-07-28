document.querySelectorAll(".custom-slider").forEach(slider=>{

    const slides = slider.querySelectorAll(".custom-slide");

    let index = 0;

    slider.querySelector(".custom-next").addEventListener("click",()=>{

        slides[index].classList.remove("active");

        index++;

        if(index>=slides.length){

            index=0;

        }

        slides[index].classList.add("active");

    });

    slider.querySelector(".custom-prev").addEventListener("click",()=>{

        slides[index].classList.remove("active");

        index--;

        if(index<0){

            index=slides.length-1;

        }

        slides[index].classList.add("active");

    });

});
