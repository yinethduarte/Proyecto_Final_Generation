// selección del DOM
const contenedorCategoria = document.querySelector(".categoria");
const listaSubcategorias = document.querySelector(".lista-subcategorias");

// crear una tarjeta de producto
function crearCardProducto(product) {
  const productoHTML = `
    <div class="contenedor-producto">
      <div class="header-producto">
        <h4 class="nombre-producto">${product.nombre}</h4>
        <p class="precio-producto">${product.precio}</p>
      </div>
      <div class="contenedor-img-producto">
        <img src="https://jousfit.com/cdn/shop/files/456CF653-F41F-488A-B49C-396D8CCAD6D1.jpg?v=1704999170" alt="" />
      </div>
      <div class="contenedor-addCart">
        <button class="add-cart">Add to Cart</button>
      </div>
    </div>`;
  contenedorCategoria.innerHTML += productoHTML;
}

// filtrar y renderizar productos por SUBCATEGORIA
function renderizarProductos(productos, subcategoria) {
  contenedorCategoria.innerHTML = "";
  if (subcategoria) {
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
  const productos = data.productos; // aca se debe hacer la lógica para que se elija la categoria seleccionada en el nav
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

// Abrir y cerrar carrito

const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("cart-close");

cartIcon.addEventListener("click",() => {
  cart.classList.add("active");
})

closeCart.addEventListener("click", () => {
  cart.classList.remove("active")
})

// 

if (document.readyState == 'loading'){
  document.addEventListener("DOMContentLoaded", start);

}else{
  start();
}

// Comenzar

function start (){
  addEvents();
}

// Actualizar y volver a presentar

function update (){
  addEvents();
  updateTotal();
}

// Eventos

function addEvents(){

  // Quitar articulo

  let cartRemove_btns = document.querySelectorAll(".cart-remove");

  console.log(cartRemove_btns);

  cartRemove_btns.forEach((btn) =>{
    btn.addEventListener("click", handle_removeCartItem);
  })

  // Cambiar cantidad de articulos

  let cartQuantity_inputs = document.querySelectorAll(".cart-quantity");

  cartQuantity_inputs.forEach((input) => {
    input.addEventListener("change", handle_changeItemQuantity);
  });

  // Añadir articulos al carrito

  let addCart_btns = document.querySelectorAll(".add-cart");

  addCart_btns.forEach((btn) => {
    btn.addEventListener("click", handle_addCartItem);
  });
}

// Comprar orden

const buy_btn = document.querySelector(".btn-buy");
buy_btn.addEventListener("click", handle_buyOrder);

// Funciones de manejo de eventos

let itemsAdded = [];

function handle_addCartItem(){
  let product = this.parentElement;
  let title = product.querySelector(".nombre-producto").innerHTML;
  let price = product.querySelector(".precio-producto").innerHTML;
  let imgSrc = product.querySelector(".contenedor-img-producto").src;

  console.log(title, price, imgSrc)
}

let newToAdd = {
  title,
  price,
  imgSrc,
};

// Manejo de elemento ya existente

if(itemsAdded.find((el) => el.title == newToAdd.title)){
  alert("Este articulo ya existe");
  return;
}else{
  itemsAdded.push(newToAdd);
}

// Añadir productos al carrito

let cartBoxElement = cartBoxComponent(title, price, imgSrc);
let newNode = document.createElement("div");
newNode.innerHTML = cartBoxElement;
const cartContent = cart.querySelector(".cart-content");
cartContent.appendChild(newNode);

update();

function handle_removeCartItem(){
  this.parentElement.remove();

  itemsAdded = itemsAdded.filter{
    (el) =>
      el.title != this.parentElement.querySelector(".nombre-producto").innerHTML
  };

  update();
}

function handle_changeItemQuantity(){
  if(isNaN(this.value) || this.value < 1 ){
    this.value = 1;
  }

  this.value = Math.floor(this.value); // Mantener el número entero

  update();

}

function handle_buyOrder(){
  if(itemsAdded.length <= 0){
    alert("Aun no hay ningun pedido para realizar");
    return;
  }

  const cartContent = cart.querySelector("cart-content");
  cartContent.innerHTML = "";
  alert("Su pedido se realizó con exito: ");
  itemsAdded = [];
  update();
}