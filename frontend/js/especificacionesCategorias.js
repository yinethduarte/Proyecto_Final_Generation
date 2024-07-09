document.addEventListener("DOMContentLoaded", () => {
  // Función para obtener y procesar el JSON
  async function fetchAndPrintJSON() {
    try {
      const response = await fetch("../json/productos_y_servicios.json");
      if (!response.ok) {
        throw new Error("Error al obtener el archivo JSON");
      }

      const params = new URLSearchParams(window.location.search);
      const productoId = params.get("id");
      console.log("producto recibido con id " + productoId);
      let producto = undefined;
      const productos_y_servicios = await response.json();
      const productos = productos_y_servicios.productos;
      for (var categoria in productos) {
        if (Object.prototype.hasOwnProperty.call(productos, categoria)) {
          if (!producto) {
            producto = productos[categoria].find((p) => p.id == productoId);
          }
        }
      }
      const servicios = productos_y_servicios.servicios;
      for (var categoria in servicios) {
        if (Object.prototype.hasOwnProperty.call(servicios, categoria)) {
          if (!producto) {
            producto = servicios[categoria].find((p) => p.id == productoId);
          }
        }
      }

      if (producto) {
        // Cambiar el innerHTML de los elementos h1 y p
        document.getElementById("nomProducto").innerHTML = producto.nombre;
        document.getElementById(
          "precProducto"
        ).innerHTML = `Precio: $${producto.precio}`;
        document.getElementById("desProducto").innerHTML = producto.descripcion;

        // Cambiar el src del elemento img
        document.getElementById("divImagenVideo").innerHTML =
          validarIndefinidoVideo(producto);
      } else {
        document.getElementById("catalogoDetalles").textContent =
          "Producto no encontrado";
      }
    } catch (error) {
      console.error("Hubo un problema con la operación fetch:", error);
    }
  }

  function validarIndefinidoVideo(product) {
    if (typeof product.video !== "undefined") {
      return product.video;
    }
    if (typeof product.imagen !== "undefined") {
      return `<img src="${product.imagen}" alt="" />`;
    }
    return `<img src="${product.imagen}" alt="" />`;
  }
  fetchAndPrintJSON();
});
