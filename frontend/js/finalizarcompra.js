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
  const contenedorCarrito = document.querySelector(".resumen-pedido");
  contenedorCarrito.innerHTML = "";

  // Agregar el total
  contenedorCarrito.innerHTML += `<h3>Total: ${Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(
    carrito.reduce(
      (acc, producto) => acc + producto.precio * producto.cantidad,
      0
    )
  )}</h3>`;

  if (carrito.length === 0) {
    contenedorCarrito.innerHTML = `<p class="fs-5">No tienes elementos en el carrito</p>`;
  } else {
    carrito.forEach((producto) => {
      const productCard = `<div class="card mb-3" >
        <div class="row g-0 align-items-center">
            <div class="col-3 ms-1">${
              producto.video
                ? `<img src="/frontend/css/img/reproductor.png" class="img-fluid" alt="${producto.nombre}"></img>`
                : `<img src="${producto.imagen}" class="img-fluid" alt="${producto.nombre}"></img>`
            }
            </div>
            <div class="col-8">
                <div class="card-body row p-3">
                    <div class="col-10">
                        <p>${producto.nombre}<span class="mx-2">x</span>${
        producto.cantidad
      }</p>
                        <p>${Intl.NumberFormat("es-CO", {
                          style: "currency",
                          currency: "COP",
                          minimumFractionDigits: 0,
                        }).format(producto.precio * producto.cantidad)}</p>
                    </div>
                    <div class="col-2 m-0 p-1 d-sm-flex flex-sm-column align-items-sm-center flex-md-row d-md-flex align-items-md-center">
                        <button class="btn btn-outline-danger" id="decrementar-${
                          producto.id
                        }">-</button>
                        <button class="btn btn-outline-success" id="aumentar-${
                          producto.id
                        }">+</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
      contenedorCarrito.innerHTML += productCard;
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

renderizarCarrito();

const finalizarCompraForm = document.querySelector(".finalizarCompra-form");
function normalizar(input) {
  return input.value.trim().toLowerCase();
}

// Validar inputs
function validarInputs() {
  const inputs = [
    document.getElementById("email"),
    document.getElementById("nombre"),
    document.getElementById("telefono"),
    document.getElementById("apellidos"),
    document.getElementById("documento"),
    document.getElementById("direccion"),
    document.getElementById("detallesDireccion"),
    document.getElementById("ciudad"),
  ];

  let isValid = true;
  inputs.forEach((input) => {
    input.placeholder = " ";
    if (normalizar(input) === "") {
      input.placeholder = "Este campo es requerido";
      isValid = false;
    }
  });
  return isValid;
}

finalizarCompraForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputsValidos = validarInputs();
  if (inputsValidos) {
    Swal.fire({
      title: "Tu compra se ha registrado con exito",
      text: "Número de orden: fgi25ajtiq236ad",
      icon: "success",
      iconColor: "#49a078ff",
      confirmButtonColor: "#49a078ff",
      showClass: {
        popup: `
      animate__animated
      animate__zoomIn
      animate__faster
    `,
      },
      hideClass: {
        popup: `
      animate__animated
      animate__zoomIn
      animate__faster
    `,
      },
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "home.html";
      }
    });
  }
});
