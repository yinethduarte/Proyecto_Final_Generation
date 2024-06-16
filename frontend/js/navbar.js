document.addEventListener("DOMContentLoaded", function () {
  // Obtener la página actual
  const currentPage = window.location.pathname;

  // Cargar la barra de navegación desde el archivo externo
  fetch("/frontend/html/navbar.html")
    .then((response) => response.text())
    .then((html) => {
      // Inserta el contenido de la barra de navegación en el elemento con id "navbar-container"
      document.getElementById("navbar-container").innerHTML = html;

      // Obtener todos los enlaces de navegación
      const navLinks = document.querySelectorAll(".nav-link");

      // Iterar sobre los enlaces de navegación
      navLinks.forEach(function (link) {
        // Comprobar si la URL del enlace coincide con la URL actual
        if (link.getAttribute("href") === currentPage) {
          link.classList.add("active"); // Agregar la clase 'active' al enlace correspondiente
        }
      });
    })
    .catch((error) => {
      console.error("Error al cargar la barra de navegación:", error);
    });
});
