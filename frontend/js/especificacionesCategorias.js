document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  const producto = products.find((p) => p.id == productId);

  if (producto) {
    const detalleProducto = document.getElementById("catalogoDetalles");

    const nombreProducto = document.createElement("h1");
    nombreProducto.textContent = producto.name;

    const descripcionProducto = document.createElement("p");
    descripcionProducto.textContent = producto.description;

    const precioProducto = document.createElement("p");
    precioProducto.textContent = `Precio: $${producto.price}`;

    const imagenProducto = document.createElement("img");
    imagenProducto.src = producto.imageUrl;

    const agregarCarrito = document.createElement("button");
    agregarCarrito.textContent = "Agregar al carrito";
    agregarCarrito.addEventListener("click", () => {
      // funcionalidad para agregar al carrito
      alert(`Producto ${producto.name} agregado al carrito`);
    });

    detalleProducto.appendChild(nombreProducto);
    detalleProducto.appendChild(descripcionProducto);
    detalleProducto.appendChild(precioProducto);
    detalleProducto.appendChild(imagenProducto);
    detalleProducto.appendChild(agregarCarrito);
  } else {
    document.getElementById("catalogoDetalles").textContent =
      "Producto no encontrado";
  }
});
