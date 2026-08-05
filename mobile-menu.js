document.addEventListener("click", function(e){


    // เปิด mobile menu
    if(e.target.closest(".menu-toggle")){

        document.querySelector(".main-nav")
        .classList.add("active");

    }


    // ปิด mobile menu
    if(e.target.closest(".menu-close")){

        document.querySelector(".main-nav")
        .classList.remove("active");

    }



    // mobile dropdown
    const dropBtn = e.target.closest(".dropbtn");


    if(
        dropBtn &&
        window.innerWidth <= 768
    ){

        const dropdown = dropBtn.closest(".dropdown");


        dropdown.classList.toggle("active");


        e.preventDefault();

    }


});
