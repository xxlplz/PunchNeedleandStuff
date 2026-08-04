const searchInput = document.getElementById("searchInput");

const products = document.querySelectorAll(".product-item");


searchInput.addEventListener("input", function(){

    const keyword = this.value.toLowerCase();


    products.forEach(product => {

        const text = product.innerText.toLowerCase();


        if(text.includes(keyword)){

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });

});
