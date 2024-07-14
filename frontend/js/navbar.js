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

function agregarAlCarrito(producto) {
  const carrito = JSON.parse(localStorage.getItem("cart")) || [];
  const productoEnCarrito = carrito.find((p) => p.id == producto.id);

  if (!productoEnCarrito) {
    producto.cantidad = 1;
    carrito.push(producto);
  } else {
    productoEnCarrito.cantidad += 1;
  }

  localStorage.setItem("cart", JSON.stringify(carrito));
}

function eliminarDelCarrito(producto) {
  let carrito = JSON.parse(localStorage.getItem("cart")) || [];
  const productoEnCarrito = carrito.find((p) => p.id == producto.id);

  if (productoEnCarrito) {
    if (productoEnCarrito.cantidad === 1) {
      carrito = carrito.filter((p) => p.id != producto.id);
    } else {
      productoEnCarrito.cantidad -= 1;
    }
  }

  localStorage.setItem("cart", JSON.stringify(carrito));
}

function renderizarCarrito() {
  const carrito = JSON.parse(localStorage.getItem("cart")) || [];
  const contenedorCarrito = document.querySelector(
    "#offcanvasCarrito .offcanvas-body"
  );
  contenedorCarrito.innerHTML = "";

  if (carrito.length === 0) {
    contenedorCarrito.innerHTML = `<p class="fs-5">No tienes elementos en el carrito</p>`;
  } else {
    carrito.forEach((producto) => {
      const productCard = `<div class="card" style="width: 18rem;">
  ${
    producto.video
      ? `<div style="overflow:hidden;">${producto.video}</div>`
      : `<img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}"></img>`
  }
  <div class="card-body">
    <h5 class="card-title">${producto.nombre}<span class="mx-2">x</span>${
        producto.cantidad
      }</h5>
    <h5 class="card-title">
    ${Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(producto.precio * producto.cantidad)}
   </h5>
    <button class="btn btn-outline-danger" id="decrementar-${
      producto.id
    }">-</button>
    <button class="btn btn-outline-success" id="aumentar-${
      producto.id
    }">+</button>
  </div>
</div>`;
      contenedorCarrito.innerHTML += productCard;
    });

    // Agregar el total
    contenedorCarrito.innerHTML += `<p>Total: ${Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(
      carrito.reduce(
        (acc, producto) => acc + producto.precio * producto.cantidad,
        0
      )
    )}</p>`;

    //  Boton continuar compra
    contenedorCarrito.innerHTML += `<button class=" continuar-compra">Continuar compra</button>`;
    const continuarCompra = document.querySelector(".continuar-compra");
    continuarCompra.addEventListener("click", () => {
      window.location.href = "finalizarCompra.html";
    });

    // Añadir eventos
    carrito.forEach((producto) => {
      const decrementarButton = document.querySelector(
        `button#decrementar-${producto.id}`
      );
      const aumentarButton = document.querySelector(
        `button#aumentar-${producto.id}`
      );

      decrementarButton.addEventListener("click", () => {
        eliminarDelCarrito(producto);
        renderizarCarrito();
      });

      aumentarButton.addEventListener("click", () => {
        agregarAlCarrito(producto);
        renderizarCarrito();
      });
    });
  }
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

  const offcanvasCarrito = document.querySelector("#offcanvasCarrito");

  offcanvasCarrito.addEventListener("shown.bs.offcanvas", (event) => {
    renderizarCarrito();
  });
}
