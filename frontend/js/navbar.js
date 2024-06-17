// document.addEventListener("DOMContentLoaded", function () {
//   // Obtener la página actual
//   const currentPage = window.location.pathname;

//   // Cargar la barra de navegación desde el archivo externo
//   fetch("/frontend/html/navbar.html")
//     .then((response) => response.text())
//     .then((html) => {
//       // Inserta el contenido de la barra de navegación en el elemento con id "navbar-container"
//       document.getElementById("navbar-container").innerHTML = html;

//       // Obtener todos los enlaces de navegación
//       const navLinks = document.querySelectorAll(".nav-link");

//       // Iterar sobre los enlaces de navegación
//       navLinks.forEach(function (link) {
//         // Comprobar si la URL del enlace coincide con la URL actual
//         if (link.getAttribute("href") === currentPage) {
//           link.classList.add("active"); // Agregar la clase 'active' al enlace correspondiente
//         }
//       });
//     })
//     .catch((error) => {
//       console.error("Error al cargar la barra de navegación:", error);
//     });
// });

fetchAndBuildMenu()
 
async function fetchAndBuildMenu() {
    const navmenu = await this.fetchMenu();
    buildMenu(navmenu);
}
 
async function fetchMenu() {
    return fetch('/frontend/html/navbar.html')
    .then(response => response.text())
    .then(navmenu => { return navmenu });
}
 
// function buildMenu(menu) {
//     document.getElementById('menu-container').innerHTML = menu;
//     const nav = document.getElementById('nav');
//     document.getElementById('abrir').addEventListener('click', () =>{
//         nav.classList.add('visible')
//     })
//     document.getElementById('cerrar').addEventListener('click', () =>{
//         nav.classList.remove('visible')
//     })
// }


function buildMenu(navmenu){
  document.getElementById('navbar-container').innerHTML = navmenu;
  const listElements = document.querySelectorAll(".lista-item--show");
  const list = document.querySelector(".lista");
  const menu = document.querySelector(".lista-hamburger");
  
  const addClick=()=>{
      listElements.forEach(element =>{
          element.addEventListener('click',()=>{
              let subMenu =element.children[1];
              let height=0;
              element.classList.toggle("lista-item--active")
              if(subMenu.clientHeight ===0){
                  height=subMenu.scrollHeight;
              }
              subMenu.style.height=`${height}px`;
          })
      })
  }

  const deleteStyleHeight=()=>{
      listElements.forEach(element=>{
          if(element.children[1].getAttribute('style')){
              element.children[1].removeAttribute('style');
              element.classList.remove('lista-item--active');
          }
      })
  }

  // RESPONSIVE

  window.addEventListener('resize',()=>{
      if(window.innerWidth>800){
          deleteStyleHeight();
          if(list.classList.contains('lista--show')){
              list.classList.remove('lista--show')
          };
      }else{
          addClick();
      }
  });

  if(window.innerWidth<=800){
      addClick();
  };

  menu.addEventListener('click',()=>list.classList.toggle('lista--show'))
};