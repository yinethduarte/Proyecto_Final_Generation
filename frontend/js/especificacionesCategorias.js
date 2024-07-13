document.addEventListener("DOMContentLoaded", () => {
  // Función para obtener y procesar el JSON
  async function fetchAndPrintJSON() {
    try {
      const params = new URLSearchParams(window.location.search);
      const idElemento = params.get("id");
      const tipo = params.get("tipo");
      console.log(`${tipo} recibido con id ${idElemento}`);
      const response = await fetch(`http://localhost:8080/${tipo}/obtener`);
      if (!response.ok) {
        throw new Error("Error al obtener el archivo JSON");
      }

      let elemento = undefined;
      const productos_o_servicios = await response.json();
      elemento = productos_o_servicios.find((p) => p.id == idElemento);

      if (elemento) {
        // Cambiar el innerHTML de los elementos h1 y p
        document.getElementById("nomProducto").innerHTML = elemento.nombre;
        document.getElementById(
          "precProducto"
        ).innerHTML = `Precio: $${elemento.precio}`;
        document.getElementById("desProducto").innerHTML = elemento.descripcion;

        // Cambiar el src del elemento img
        document.getElementById("divImagenVideo").innerHTML =
          validarIndefinidoVideo(elemento);
      } else {
        document.getElementById("catalogoDetalles").textContent =
          "Producto no encontrado";
      }
    } catch (error) {
      console.error("Hubo un problema con la operación fetch:", error);
    }
  }

  function validarIndefinidoVideo(product) {
    if (typeof product.video === "string") {
      return product.video;
    }
    if (typeof product.imagen === "string") {
      return `<img src="${product.imagen}" alt="" />`;
    }
    return `<img src="${product.imagen}" alt="" />`;
  }
  fetchAndPrintJSON();
});
