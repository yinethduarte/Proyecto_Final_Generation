// selección del DOM
const contenedorCategoria = document.querySelector(".categoria");
const listaSubcategorias = document.querySelector(".lista-subcategorias");

function validarIndefinidoVideo(product) {
  if (typeof product.video !== "undefined") {
    return product.video;
  }
  if (typeof product.imagen !== "undefined") {
    return `<img src="${product.imagen}" alt="" />`;
  }
  return `<img src="${product.imagen}" alt="" />`;
}

// crear una tarjeta de producto
function crearCardProducto(product) {
  const productoHTML = `
    <div class="contenedor-producto"  onclick="window.location.href = 'especificacionesCategorias.html?id=${
      product.id
    }'">
      <div class="header-producto">
        <h4 class="nombre-producto">${product.nombre}</h4>
        <p class="precio-producto">${product.precio}</p>
      </div>
      <div class="contenedor-img-producto">
      ${validarIndefinidoVideo(product)}
        
      </div>
      <div class="contenedor-addCart">
        <button>Add to Cart</button>
      </div>
    </div>`;
  contenedorCategoria.innerHTML += productoHTML;
}

// filtrar y renderizar productos por SUBCATEGORIA
function renderizarProductos(productos, subcategoria) {
  contenedorCategoria.innerHTML = "";
  if (subcategoria && subcategoria !== "ver_todo") {
    const productosFiltrados = productos[subcategoria];
    if (productosFiltrados) {
      productosFiltrados.forEach((producto) => {
        crearCardProducto(producto);
      });
    }
  } else {
    for (const key in productos) {
      productos[key].forEach((producto) => {
        crearCardProducto(producto);
      });
    }
  }
}

// evento al selecciónar de una subcategoría
function handleSubcategoriaClick(e, productos) {
  const subcategoria = e.target.textContent.toLowerCase().replace(/\s+/g, "_");
  renderizarProductos(productos, subcategoria);
}

// crear la lista de filtros
function crearFiltrosSubcategorias(productos) {
  for (const key in productos) {
    const subcategoria = key.charAt(0).toUpperCase() + key.slice(1);
    const itemSubcategoria = `<li class="subcategoria">${subcategoria.replace(
      /_/g,
      " "
    )}</li>`;
    listaSubcategorias.innerHTML += itemSubcategoria;
  }

  const subcategorias = document.querySelectorAll(".subcategoria");
  subcategorias.forEach((sub) => {
    sub.addEventListener("click", (e) => handleSubcategoriaClick(e, productos));
  });
}

// filtrar los productos por CATEGORIA
function filtrarCategoria(data) {
  const productos = data.servicios; // aca se debe hacer la lógica para que se elija la categoria seleccionada en el nav
  crearFiltrosSubcategorias(productos);
  renderizarProductos(productos, null);
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
