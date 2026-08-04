function initSearch(){

    const searchInput = document.getElementById("searchInput");


    if(!searchInput){

        console.log("Search input not found");

        return;

    }


    console.log("Search ready");


    searchInput.addEventListener("input", function(){

        console.log(this.value);

    });

}
