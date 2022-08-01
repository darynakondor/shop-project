const  productsCountEl = document.getElementById("products-count");
const addToCartBtns = document.querySelectorAll(".btn-cart");
let count = 0;
addToCartBtns.forEach((item) =>
    item.addEventListener("click", function () {
        count += 1;
        productsCountEl.textContent = count;
    })
);



let buttonLike = document.querySelectorAll(".icon-like");
buttonLike.forEach((item) => {
    item.addEventListener("click", function(e) {
        item.classList.toggle("liked");
        item.style.backgroundColor = "#2c71b8";
    })
})



let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".btn-close");

window.addEventListener('scroll', function(e) {
  if (window.scrollY >= (document.documentElement.scrollHeight - document.documentElement.clientHeight)*0.5) {
    window.requestAnimationFrame(function() {
        modal.classList.add('show');
    });
  }
});

closeBtn.addEventListener("click", function() {
    modal.classList.add("hide");
});


$(".slider-block").slick({
    autoplay:true,
    dots:true
})



