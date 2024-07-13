// selección del DOM
const contenedorCategoria = document.querySelector(".categoria");
const listaSubcategorias = document.querySelector(".lista-subcategorias");

function validarIndefinidoVideo(service) {
  if (typeof service.video === "string") {
    return service.video;
  }
  if (typeof service.imagen === "string") {
    return `<img src="${service.imagen}" alt="" />`;
  }
  return `<img src="${service.imagen}" alt="" />`;
}

// crear una tarjeta de producto
function crearCardProducto(service) {
  const serviciosHTML = `
    <div class="contenedor-servicio">
      <div class="header-servicio" onclick="window.location.href = 'especificacionesCategorias.html?id=${
        service.id
      }'">
        <h4 class="nombre-servicio">${service.nombre}</h4>
        <p class="precio-servicio">${service.precio}</p>
      </div>
      <div class="contenedor-img-servicio" onclick="window.location.href = 'especificacionesCategorias.html?id=${
        service.id
      }'">
      ${validarIndefinidoVideo(service)}
        
      </div>
      <div class="contenedor-addCart">
        <button id="product-${service.id}">Agregar al carrito</button>
      </div>
    </div>`;
  contenedorCategoria.innerHTML += serviciosHTML;
}

//Crear funcion para agregar al carrito
function eventoAgregarAlCarrito(servicio) {
  document
    .querySelector(`button#product-${servicio.id}`)
    .addEventListener("click", () => {
      agregarAlCarrito(servicio);
    });
}

// filtrar y renderizar productos por SUBCATEGORIA
function renderizarProductos(servicios, subcategoria) {
  contenedorCategoria.innerHTML = "";
  if (subcategoria && subcategoria !== "ver_todo") {
    const serviciosFiltrados = servicios.filter(
      (res) => res.categoria === subcategoria
    );
    if (serviciosFiltrados) {
      serviciosFiltrados.forEach((servicios) => {
        crearCardProducto(servicios);
      });
      serviciosFiltrados.forEach((servicio) => {
        eventoAgregarAlCarrito(servicio);
      });
    }
  } else {
    servicios.forEach((servicios) => {
      crearCardProducto(servicios);
    });
    Object.values(servicios).forEach((servicio) =>
      eventoAgregarAlCarrito(servicio)
    );
  }
}

// evento al selecciónar de una subcategoría
function handleSubcategoriaClick(e, servicios) {
  const subcategoria = e.target.textContent.toLowerCase().replace(/\s+/g, "_");
  renderizarProductos(servicios, subcategoria);
}

// filtrar los productos por CATEGORIA
function filtrarCategoria(data) {
  const servicios = data;
  crearFiltrosSubcategorias(servicios);
  renderizarProductos(servicios, null);
}

// crear la lista de filtros
function crearFiltrosSubcategorias(productos) {
  categoriasDiferentes = [];
  productos.forEach(function (producto) {
    const subcategoria =
      producto.categoria.charAt(0).toUpperCase() + producto.categoria.slice(1);
    if (categoriasDiferentes.indexOf(subcategoria) === -1) {
      categoriasDiferentes.push(subcategoria);
    }
  });
  categoriasDiferentes.forEach(function (subcategoria) {
    const itemSubcategoria = `<li class="subcategoria">${subcategoria.replace(
      /_/g,
      " "
    )}</li>`;
    listaSubcategorias.innerHTML += itemSubcategoria;
  });
  const subcategorias = document.querySelectorAll(".subcategoria");
  subcategorias.forEach((sub) => {
    sub.addEventListener("click", (e) => handleSubcategoriaClick(e, productos));
  });
}

// Función para obtener y procesar el JSON
async function fetchAndPrintJSON() {
  try {
    //const response = await fetch("../json/productos_y_servicios.json");
    const response = await fetch("http://localhost:8080/servicio/obtener");
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
