const productForm = document.getElementById("add-product");
const allProducts = document.getElementById("all-product");

//input area
const productNameInput = document.getElementById("product-name");
const productImageInput = document.getElementById("product-image");
const productPriceInput = document.getElementById("product-price");
const productDescriptionInput = document.getElementById("product-description");

//Local Storeage Data Check
const products = JSON.parse(localStorage.getItem("productKey")) || [];

//Add Product
const addProduct = (nameValue, imageValue, priceValue, descriptionValue) => {
        // Create and Array for LocalStorage
        products.push({
            image: imageValue,
            price: priceValue,
            name: nameValue,
            description: descriptionValue,
        });
    
        // Add products localstorage
        localStorage.setItem("productKey", JSON.stringify(products));

}

// Create Element
const createElement = (nameValue, imageValue, priceValue, descriptionValue) => {
     // Create a div and col-lg-3 class
     const productCol = document.createElement("div");
     productCol.classList.add("col-lg-3");
 
     // Create a div and single product class
     const productDiv = document.createElement("div");
     productDiv.classList.add("single-product");
 
     // Create single product div and create img attribute
     const productImage = document.createElement("img");
     productImage.setAttribute("src", imageValue);
 
     // Create single product price(h5)
     const productPrice = document.createElement("h5");
     productPrice.innerText = priceValue;
 
     // Create single product name (h3)
     const productName = document.createElement("h3");
     productName.innerText = nameValue;
 
     // Create Single product description (p)
     const productDescription = document.createElement("p");
     productDescription.innerText = descriptionValue;
 
     // Complete Single Product
     productDiv.append (productImage, productPrice, productName, productDescription);
 
     // Complete Col
     productCol.appendChild(productDiv);
     console.log(productCol);
 
     // Display Product
     allProducts.appendChild(productCol);

}

// Main Click Function
productForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const nameValue = productNameInput.value;
    const imageValue = productImageInput.value;
    const priceValue = productPriceInput.value;
    const descriptionValue = productDescriptionInput.value;

    // Create Element
    createElement(nameValue, imageValue, priceValue, descriptionValue);
   

    // Create and Array for LocalStorage
    addProduct(nameValue, imageValue, priceValue, descriptionValue);

    // empty the input field after submit 
        productNameInput.value = "";
        productImageInput.value = "";
        productPriceInput.value = "";
        productDescriptionInput.value = "";

    
});

// Show products from localstroge
products.forEach((product) =>
{
    createElement(product["name"], product["image"], product["price"], product["Description"]);

});