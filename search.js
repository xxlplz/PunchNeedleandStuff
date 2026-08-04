function initSearch() {

    const searchInput = document.getElementById("searchInput");
    const searchResult = document.getElementById("searchResult");

    if (!searchInput || !searchResult) return;

    searchInput.addEventListener("input", function () {

        const keyword = this.value.trim().toLowerCase();

        searchResult.innerHTML = "";

        if (keyword === "") {
            searchResult.style.display = "none";
            return;
        }

        const result = products.filter(product =>
            product.name.toLowerCase().includes(keyword) ||
            product.category.toLowerCase().includes(keyword)
        );

        if (result.length === 0) {
            searchResult.innerHTML =
                `<div class="search-empty">No products found</div>`;
        } else {

            result.forEach(product => {

                searchResult.innerHTML += `
                    <a href="${product.url}" class="search-item">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="search-info">
                            <h4>${product.name}</h4>
                            <p>${product.category}</p>
                        </div>
                    </a>
                `;

            });

        }

        searchResult.style.display = "block";

    });

    // คลิกนอกกล่องแล้วปิด
    document.addEventListener("click", function (e) {

        if (!e.target.closest(".search-container")) {

            searchResult.style.display = "none";

        }

    });

}
