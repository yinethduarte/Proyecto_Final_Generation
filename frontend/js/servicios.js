// selección del DOM
const contenedorCategoria = document.querySelector(".categoria");
const listaSubcategorias = document.querySelector(".lista-subcategorias");

function validarIndefinidoVideo(service) {
  if (typeof service.video !== "undefined") {
    return service.video;
  }
  if (typeof service.imagen !== "undefined") {
    return `<img src="${service.imagen}" alt="" />`;
  }
  return `<img src="${service.imagen}" alt="" />`;
}

// crear una tarjeta de producto
function crearCardProducto(service) {
  const serviciosHTML = `
    <div class="contenedor-servicio"  onclick="window.location.href = 'especificacionesCategorias.html?id=${
      service.id
    }'">
      <div class="header-servicio">
        <h4 class="nombre-servicio">${service.nombre}</h4>
        <p class="precio-servicio">${service.precio}</p>
      </div>
      <div class="contenedor-img-servicio">
      ${validarIndefinidoVideo(service)}
        
      </div>
      <div class="contenedor-addCart">
        <button>Add to Cart</button>
      </div>
    </div>`;
  contenedorCategoria.innerHTML += serviciosHTML;
}

// filtrar y renderizar productos por SUBCATEGORIA
function renderizarProductos(servicios, subcategoria) {
  contenedorCategoria.innerHTML = "";
  if (subcategoria && subcategoria !== "ver_todo") {
    const serviciosFiltrados = servicios[subcategoria];
    if (serviciosFiltrados) {
      serviciosFiltrados.forEach((servicios) => {
        crearCardProducto(servicios);
      });
    }
  } else {
    for (const key in servicios) {
      servicios[key].forEach((servicios) => {
        crearCardProducto(servicios);
      });
    }
  }
}

// evento al selecciónar de una subcategoría
function handleSubcategoriaClick(e, servicios) {
  const subcategoria = e.target.textContent.toLowerCase().replace(/\s+/g, "_");
  renderizarProductos(servicios, subcategoria);
}


// filtrar los productos por CATEGORIA
function filtrarCategoria(data) {
  const productos = data.servicios; 
  crearFiltrosSubcategorias(productos);
  renderizarProductos(productos, null);
}


// crear la lista de filtros
function crearFiltrosSubcategorias(servicios) {
  for (const key in servicios) {
    const subcategoria = key.charAt(0).toUpperCase() + key.slice(1);
    const itemSubcategoria = `<li class="subcategoria">${subcategoria.replace(
      /_/g,
      " "
    )}</li>`;
    listaSubcategorias.innerHTML += itemSubcategoria;
  }

  const subcategorias = document.querySelectorAll(".subcategoria");
  subcategorias.forEach((sub) => {
    sub.addEventListener("click", (e) => handleSubcategoriaClick(e, servicios));
  });
}




// Función para obtener y procesar el JSON
async function fetchAndPrintJSON() {
  try {
    const response = await fetch("../json/productos_y_servicios.json");
    if (!response.ok) {
      throw new Error("Error al obtener el archivo JSON");
    }
    const data = await response.json();
    filtrarCategoria(data);
  } catch (error) {
    console.error("Hubo un problema con la operación fetch:", error);
  }
}

// Llamar a la función principal para obtener y procesar el JSON
fetchAndPrintJSON();
