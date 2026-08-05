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
