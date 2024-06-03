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

    // Imprimir los valores del JSON en la consola
    console.log("Productos:");
    console.log(data.productos);
    //Recorre cada elemento del arreglo accesorios para crear la lista de los párrafos
    data.productos.accesorios.forEach((accesorio) => {
      //Crea el párrafo
      const parrafo = document.createElement("p");
      //le asigna como texto el valor de nombre de cada accesorio
      parrafo.innerText = accesorio.nombre;
      //usa el dom para buscar el div con id divProductos para agregarle el parrafo que acabamos de crear
      document.getElementById("divProductos").appendChild(parrafo);
    });

    console.log("Servicios:");
    console.log(data.servicios);
  } catch (error) {
    // Manejar cualquier error que ocurra durante la solicitud
    console.error("Hubo un problema con la operación fetch:", error);
  }
}

// Llamar a la función para obtener y procesar el JSON
fetchAndPrintJSON();
