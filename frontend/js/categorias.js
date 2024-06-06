// Función para obtener y procesar el JSON
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

    let nombreSubCategoria;
    let tituloSubCategoría = document.createElement("h2");
    //Recorre cada elemento del arreglo accesorios para crear la lista de los párrafos
    for (let key in data.productos) {
      nombreSubCategoria = key;
      console.log(nombreSubCategoria);
      tituloSubCategoría.innerHTML = nombreSubCategoria;
      document.getElementById("divProductos").appendChild(tituloSubCategoría);
    }
  } catch (error) {
    // Manejar cualquier error que ocurra durante la solicitud
    console.error("Hubo un problema con la operación fetch:", error);
  }
}

// Llamar a la función para obtener y procesar el JSON
fetchAndPrintJSON();
