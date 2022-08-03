const  productsCountEl = document.getElementById("products-count");
const addToCartBtns = document.querySelectorAll(".btn-cart");
addToCartBtns.forEach((item) =>
    item.addEventListener("click", function () {
        productsCountEl.textContent++;
    })
);


let buttonLike = document.querySelectorAll(".icon-like");
buttonLike.forEach((item) => {
    item.addEventListener("click", function() {
        item.classList.toggle("liked");
        item.classList.toggle("bg-color")
    })
})


let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".btn-close");

window.addEventListener('scroll', function() {
  if (window.scrollY >= (document.documentElement.scrollHeight - document.documentElement.clientHeight)*0.5) {
    window.requestAnimationFrame(function() {
        modal.classList.add('show');
    });
  }
});

closeBtn.addEventListener("click", function() {
    modal.classList.add("hide");
});

modal.addEventListener("click", function() {
    modal.classList.add("hide");
});


$(".slider-block").slick({
    autoplay:true,
    dots:true
})


function amountProducts(count) {
    let btnIncrement = count.querySelector(".btn-increment");
    let btnDecrement = count.querySelector(".btn-decrement");
    let inputValue = count.querySelector(".input-value");
    
    btnIncrement.addEventListener("click", function() {
        btnDecrement.disabled = false;
        inputValue.value++; 
        btnDecrement.classList.remove("disable");
        if (inputValue.value >= 5) {
            this.disabled = true;
            this.classList.add("disable");
        }
    });

    btnDecrement.addEventListener("click", function() {
        btnIncrement.disabled = false;
        btnIncrement.classList.remove("disable");
        this.disabled = true;
        this.classList.add("disable");
        
        if (inputValue.value > 1) {
            this.disabled = false;
            inputValue.value--;
            this.classList.remove("disable");
        }
    })
}

let productQuantity = document.querySelectorAll(".product-quantity");
productQuantity.forEach(amountProducts);











    
    








