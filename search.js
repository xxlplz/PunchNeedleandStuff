document.addEventListener("DOMContentLoaded", function(){

    const searchInput = document.getElementById("searchInput");


    if(!searchInput){
        console.log("Search input not found");
        return;
    }


    searchInput.addEventListener("input", function(){

        console.log(this.value);

    });

});
