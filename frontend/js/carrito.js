// Abrir y cerrar carrito

const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("cart-close");

cartIcon.addEventListener("click", () => {
    cart.classList.add("active");
});

closeCart.addEventListener("click", () => {
    cart.classList.remove("active");
});

// 

if (document.readyState == 'loading'){
    document.addEventListener("DOMContentLoaded", start);
}else{
    start();
}



//Comenzar

function start(){
    addEvents();
}