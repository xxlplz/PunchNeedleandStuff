document.querySelectorAll(".custom-slider").forEach(slider=>{

    const slides = slider.querySelectorAll(".custom-slide");
    const dotsBox = slider.querySelector(".custom-dots");

    let index = 0;


    // create dots
    slides.forEach((slide, i)=>{

        const dot = document.createElement("span");

        dot.classList.add("custom-dot");

        if(i === 0){
            dot.classList.add("active");
        }

        dot.addEventListener("click",()=>{

            slides[index].classList.remove("active");
            dotsBox.querySelectorAll(".custom-dot")[index].classList.remove("active");


            index = i;


            slides[index].classList.add("active");
            dot.classList.add("active");

        });


        dotsBox.appendChild(dot);

    });



    slider.querySelector(".custom-next").addEventListener("click",()=>{

        slides[index].classList.remove("active");
        dotsBox.querySelectorAll(".custom-dot")[index].classList.remove("active");


        index++;

        if(index >= slides.length){
            index = 0;
        }


        slides[index].classList.add("active");
        dotsBox.querySelectorAll(".custom-dot")[index].classList.add("active");

    });



    slider.querySelector(".custom-prev").addEventListener("click",()=>{

        slides[index].classList.remove("active");
        dotsBox.querySelectorAll(".custom-dot")[index].classList.remove("active");


        index--;

        if(index < 0){
            index = slides.length-1;
        }


        slides[index].classList.add("active");
        dotsBox.querySelectorAll(".custom-dot")[index].classList.add("active");

    });


});
