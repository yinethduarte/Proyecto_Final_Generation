// selección del DOM
const contenedorCategoria = document.querySelector(".categoria");
const listaSubcategorias = document.querySelector(".lista-subcategorias");
//window.location.replace('productos.html', 'especificacionesCategorias.html?');
// console.log(window.location);
// crear una tarjeta de producto
function crearCardProducto(product) {
  const productoHTML = `
    <div class="contenedor-producto">
      <div class="header-producto" onclick="window.location.href = 'especificacionesCategorias.html?id=${product.id}&tipo=producto'">
        <h4 class="nombre-producto">${product.nombre}</h4>
        <p class="precio-producto">${product.precio}</p>
      </div>
      <div class="contenedor-img-producto" onclick="window.location.href = 'especificacionesCategorias.html?id=${product.id}&tipo=producto'">
        <img src="${product.imagen}" alt="" />
      </div>
      <div class="contenedor-addCart">
      <button id="product-${product.id}">Agregar al carrito</button>
      </div>
    </div>`;
  contenedorCategoria.innerHTML += productoHTML;
}
//crear función para carrito

function eventoAgregarAlCarrito(producto) {
  document
    .querySelector(`button#product-${producto.id}`)
    .addEventListener("click", () => {
      producto.tipo = "producto";
      agregarAlCarrito(producto);
      cacularItemsCarrito();
    });
}

// filtrar y renderizar productos por SUBCATEGORIA
function renderizarProductos(productos, subcategoria) {
  contenedorCategoria.innerHTML = "";
  if (subcategoria && subcategoria !== "ver_todo") {
    const productosFiltrados = productos.filter(
      (res) => res.categoria === subcategoria
    );
    if (productosFiltrados) {
      productosFiltrados.forEach((producto) => {
        crearCardProducto(producto);
      });
      productosFiltrados.forEach((producto) => {
        eventoAgregarAlCarrito(producto);
      });
    }
  } else {
    productos.forEach((producto) => {
      crearCardProducto(producto);
    });
    Object.values(productos).forEach((producto) =>
      eventoAgregarAlCarrito(producto)
    );
  }
}

// evento al selecciónar de una subcategoría
function handleSubcategoriaClick(e, productos) {
  const subcategoria = e.target.textContent.toLowerCase().replace(/\s+/g, "_");
  renderizarProductos(productos, subcategoria);
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

// filtrar los productos por CATEGORIA
function filtrarCategoria(data) {
  const productos = data; // aca se debe hacer la lógica para que se elija la categoria seleccionada en el nav
  crearFiltrosSubcategorias(productos);
  renderizarProductos(productos, null);
}

// Función para obtener y procesar el JSON
async function fetchAndPrintJSON() {
  try {
    //const response = undefined; await fetch("../json/productos_y_servicios.json");
    const response = await fetch("http://localhost:8080/producto/obtener");
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
