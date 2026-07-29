document.querySelectorAll(".custom-slider").forEach(slider=>{

    const slides = slider.querySelectorAll(".custom-slide");

    const dotsBox = slider.querySelector(".custom-dots");

    let index = 0;

    let timer;



    function showSlide(i){

        slides.forEach(s=>s.classList.remove("active"));

        dotsBox.querySelectorAll(".custom-dot")
        .forEach(d=>d.classList.remove("active"));

        slides[i].classList.add("active");

        dotsBox.children[i].classList.add("active");

    }



    slides.forEach((slide,i)=>{

        const dot=document.createElement("span");

        dot.className="custom-dot";

        if(i===0){

            dot.classList.add("active");

        }

        dot.onclick=()=>{

            index=i;

            showSlide(index);

        };

        dotsBox.appendChild(dot);

    });



    function startSlider(){

        timer=setInterval(()=>{

            index++;

            if(index>=slides.length){

                index=0;

            }

            showSlide(index);

        },4000);

    }



    function stopSlider(){

        clearInterval(timer);

    }



    slider.addEventListener("mouseenter",stopSlider);

    slider.addEventListener("mouseleave",startSlider);



    startSlider();

});
