document.addEventListener("DOMContentLoaded", () => {
    const products = Array.from(document.querySelectorAll(".product-card"));
    const grid = document.querySelector(".product-grid");

    const selects = document.querySelectorAll(".filters select");
    const sortSelect = document.getElementById("sort");

    selects.forEach(select => {
        select.addEventListener("change", filterProducts);
    });

    function filterProducts() {
        let category = selects[1].value;
        let color = selects[2].value;
        let price = selects[3].value;
        let rating = selects[4].value;
        let discount = selects[5].value;

        products.forEach(product => {
            let matches = true;

            if (category !== "Category" && product.dataset.category !== category)
                matches = false;

            if (color !== "Color" && product.dataset.color !== color)
                matches = false;

            if (price !== "Price") {
                let p = parseInt(product.dataset.price);
                if (price === "Under 199" && p >= 199) matches = false;
                if (price === "Under 299" && p >= 299) matches = false;
                if (price === "Under 399" && p >= 399) matches = false;
                if (price === "Under 499" && p >= 499) matches = false;
            }

            if (rating !== "Rating") {
                let r = parseInt(product.dataset.rating);
                if (rating === "4 Stars+" && r < 4) matches = false;
                if (rating === "3 Stars+" && r < 3) matches = false;
            }

            if (discount !== "Discount") {
                let d = parseInt(product.dataset.discount);
                if (discount === "10% Off" && d < 10) matches = false;
                if (discount === "20% Off" && d < 20) matches = false;
            }

            product.style.display = matches ? "block" : "none";
        });
    }

    // SORTING FUNCTION
    sortSelect.addEventListener("change", () => {
        let value = sortSelect.value;

        let sorted = [...products];

        if (value === "low-high") {
            sorted.sort((a, b) => a.dataset.price - b.dataset.price);
        }
        if (value === "high-low") {
            sorted.sort((a, b) => b.dataset.price - a.dataset.price);
        }

        grid.innerHTML = "";
        sorted.forEach(p => grid.appendChild(p));
    });
});










document.querySelector(".add-to-cart").addEventListener("click", function() {

    const product = {
        id: document.getElementById("productId").value,
        color: document.getElementById("color").value,
        size: document.getElementById("size").value,
        qty: document.getElementById("qty").value
    };

    console.log(product); 
    alert("Product added! (Check console)");

});

