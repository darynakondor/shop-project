const  productsCountEl = document.getElementById("products-count");
const addToCartBtns = document.querySelectorAll(".btn-cart");
let count = 0;

addToCartBtns.forEach((item) =>
    item.addEventListener("click", function () {
        count += 1;
        productsCountEl.innerHTML = count;
    })
);



const buttonLike = document.querySelectorAll(".icon-like");
const iconLike = document.querySelectorAll(".like");
buttonLike.forEach((item) =>
    item.addEventListener("click", function () {
        let colorBlue = '#2c71b8';
        item.style.background = colorBlue;
    })
);

iconLike.forEach((item) =>
    item.addEventListener("click", function() {
        let imgIconLike = 'url("image/icon-like-white.png")';
        item.style.backgroundImage = imgIconLike;
    })
);


