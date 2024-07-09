fetchAndBuildMenu();

async function fetchAndBuildMenu() {
  const navmenu = await this.fetchMenu();
  buildMenu(navmenu);
}

async function fetchMenu() {
  return fetch("/frontend/html/navbar.html")
    .then((response) => response.text())
    .then((navmenu) => {
      return navmenu;
    });
}

function buildMenu(navmenu) {
  document.getElementById("navbar-container").innerHTML = navmenu;
  const listElements = document.querySelectorAll(".lista-navbar-item--show");
  const list = document.querySelector(".lista-navbar");
  const menu = document.querySelector(".lista-navbar-hamburger");

  const addClick = () => {
    listElements.forEach((element) => {
      element.addEventListener("click", () => {
        let subMenu = element.children[1];
        let height = 0;
        element.classList.toggle("lista-navbar-item--active");
        if (subMenu.clientHeight === 0) {
          height = subMenu.scrollHeight;
        }
        subMenu.style.height = `${height}px`;
      });
    });
  };

  const deleteStyleHeight = () => {
    listElements.forEach((element) => {
      if (element.children[1].getAttribute("style")) {
        element.children[1].removeAttribute("style");
        element.classList.remove("lista-navbar-item--active");
      }
    });
  };

  // RESPONSIVE

  window.addEventListener("resize", () => {
    if (window.innerWidth > 991) {
      deleteStyleHeight();
      if (list.classList.contains("lista-navbar--show")) {
        list.classList.remove("lista-navbar--show");
      }
    } else {
      addClick();
    }
  });

  if (window.innerWidth <= 991) {
    addClick();
  }

  menu.addEventListener("click", () =>
    list.classList.toggle("lista-navbar--show")
  );

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

  if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }

  // Comenzar

  function start() {
    addEvents();
  }

  // Actualizar y volver a presentar

  function update() {
    addEvents();

    updateTotal();
  }

  // Eventos

  function addEvents() {
    // Quitar articulo

    let cartRemove_btns = document.querySelectorAll(".cart-remove");

    console.log(cartRemove_btns);

    cartRemove_btns.forEach((btn) => {
      btn.addEventListener("click", handle_removeCartItem);
    });

    // Cambiar cantidad de articulos

    let cartQuantity_inputs = document.querySelectorAll(".cart-quantity");

    cartQuantity_inputs.forEach((input) => {
      input.addEventListener("change", handle_changeItemQuantity);
    });

    // Añadir articulos al carrito

    let addCart_btns = document.querySelectorAll(".add-cart");

    addCart_btns.forEach((btn) => {
      btn.addEventListener("click", handle_addCartItem);
    });
  }

  // Comprar orden

  const buy_btn = document.querySelector(".btn-buy");

  buy_btn.addEventListener("click", handle_buyOrder);

  // Funciones de manejo de eventos

  let itemsAdded = [];

  function handle_addCartItem() {
    let product = this.parentElement;

    let title = product.querySelector(".nombre-producto").innerHTML;

    let price = product.querySelector(".precio-producto").innerHTML;

    let imgSrc = product.querySelector(".contenedor-img-producto").src;

    console.log(title, price, imgSrc);
  }

  let newToAdd = {
    title,

    price,

    imgSrc,
  };

  // Manejo de elemento ya existente

  if (itemsAdded.find((el) => el.title == newToAdd.title)) {
    alert("Este articulo ya existe");

    return;
  } else {
    itemsAdded.push(newToAdd);
  }

  // Añadir productos al carrito

  let cartBoxElement = cartBoxComponent(title, price, imgSrc);

  let newNode = document.createElement("div");

  newNode.innerHTML = cartBoxElement;

  const cartContent = cart.querySelector(".cart-content");

  cartContent.appendChild(newNode);

  update();

  function handle_removeCartItem() {
    this.parentElement.remove();

    itemsAdded = itemsAdded.filter(
      (el) =>
        el.title !=
        this.parentElement.querySelector(".nombre-producto").innerHTML
    );

    update();
  }

  function handle_changeItemQuantity() {
    if (isNaN(this.value) || this.value < 1) {
      this.value = 1;
    }

    this.value = Math.floor(this.value); // Mantener el número entero

    update();
  }

  function handle_buyOrder() {
    if (itemsAdded.length <= 0) {
      alert("Aun no hay ningun pedido para realizar");

      return;
    }

    const cartContent = cart.querySelector("cart-content");

    cartContent.innerHTML = "";

    alert("Su pedido se realizó con exito: ");

    itemsAdded = [];

    update();
  }

  // Funciones de actualizar

  function updateTotal() {
    let cartBoxes = document.querySelectorAll(".cart-box");

    const totalElement = cart.querySelector(".total-price");

    let total = 0;

    cartBoxes.forEach((cartBox) => {
      let priceElement = cartBox.querySelector(".cart-price");

      let price = parseFloat(priceElement.innerHTML.replace("$", " "));

      let quantity = cartBox.querySelector(".cart-quantity").value;

      total += price * quantity;
    });

    total = total.toFixed(2); // Mantener 2 digitos despues del decimal

    totalElement.innerHTML = "$" + total;
  }

  // Componentes HTML

  function cartBoxComponent(title, price, imgSrc) {
    return `

<div class="cart-box">

<img src=${imgSrc} alt="" class="cart-img">

<div class="detail-box">

<div class="nombre-producto"> ${title} </div>

<div class="precio-producto"> ${price} </div>

<input type="number" value"1" class="cart-quantity">

</div>

//

<i class='bx bxs-trash-alt cart-remove'></i>

</div>

`;
  }
}
