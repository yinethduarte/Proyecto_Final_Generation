// Función para obtener y procesar el JSON

const contenedorCategoria = document.querySelector(".categoria");

async function fetchAndPrintJSON() {
  try {
    // Realizar la solicitud para obtener el archivo JSON local
    const response = await fetch("../json/productos_y_servicios.json");
    // Verificar si la solicitud fue exitosa
    if (!response.ok) {
      throw new Error("Error al obtener el archivo JSON");
    }
    // Parsear el contenido del JSON
    const data = await response.json();
    let productos = data.productos;
    let servicios = data.servicios;

    function fitlarCategoria(categoria) {
      for (const key in categoria) {
        categoria[key].forEach((product) => {
          let producto = `<div class="contenedor-producto">
          <div class="header-producto">
            <h4 class="nombre-producto">${product.nombre}</h4>
            <p class="precio-producto">${product.precio}</p>
          </div>
          <div class="contenedor-img-producto">
            <img
              src="https://jousfit.com/cdn/shop/files/456CF653-F41F-488A-B49C-396D8CCAD6D1.jpg?v=1704999170"
              alt=""
            />
          </div>
          <div class="contenedor-addCart">
            <button>Add to Cart</button>
          </div>`;

          contenedorCategoria.innerHTML += producto;
        });
      }
    }

    fitlarCategoria(productos);
  } catch (error) {
    // Manejar cualquier error que ocurra durante la solicitud
    console.error("Hubo un problema con la operación fetch:", error);
  }
}

// Llamar a la función para obtener y procesar el JSON
fetchAndPrintJSON();
