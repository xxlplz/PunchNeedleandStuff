const searchInput = document.getElementById("searchInput");
const searchResult = document.getElementById("searchResult");


searchInput.addEventListener("input", function(){

    let keyword = this.value.toLowerCase();


    searchResult.innerHTML = "";


    if(keyword === ""){
        return;
    }


    let result = products.filter(product => {

        return (
            product.name.toLowerCase().includes(keyword) ||
            product.category.toLowerCase().includes(keyword)
        );

    });


    result.forEach(product => {


        searchResult.innerHTML += `

        <a href="${product.url}" class="search-item">

            <img src="${product.image}">

            <div>
                <h4>${product.name}</h4>
                <p>${product.category}</p>
            </div>

        </a>

        `;


    });


});
