// ======================================================
// MOBILE MENU
// ======================================================

document.addEventListener("click", function(e){


    if(e.target.closest(".menu-toggle")){

        document.querySelector(".main-nav")
        .classList.add("active");

    }


    if(e.target.closest(".menu-close")){

        document.querySelector(".main-nav")
        .classList.remove("active");

    }


});

document.addEventListener("click", function(e){


    const dropBtn = e.target.closest(".dropbtn");


    if(
        dropBtn &&
        window.innerWidth <= 768
    ){

        const dropdown = dropBtn.parentElement;


        dropdown.classList.toggle("active");


        e.preventDefault();

    }


});
