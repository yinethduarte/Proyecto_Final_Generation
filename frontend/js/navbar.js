fetchAndBuildMenu();

async function fetchAndBuildMenu() {
  const navmenu = await this.fetchMenu();
  buildMenu(navmenu);
}

async function fetchMenu() {
  return fetch("/frontend/html/navbar.html")
    .then((response) => response.text())
    .then((navmenu) => {
      return navmenu;
    });
}

function buildMenu(navmenu) {
  document.getElementById("navbar-container").innerHTML = navmenu;
  const listElements = document.querySelectorAll(".lista-navbar-item--show");
  const list = document.querySelector(".lista-navbar");
  const menu = document.querySelector(".lista-navbar-hamburger");

  const addClick = () => {
    listElements.forEach((element) => {
      element.addEventListener("click", () => {
        let subMenu = element.children[1];
        let height = 0;
        element.classList.toggle("lista-navbar-item--active");
        if (subMenu.clientHeight === 0) {
          height = subMenu.scrollHeight;
        }
        subMenu.style.height = `${height}px`;
      });
    });
  };

  const deleteStyleHeight = () => {
    listElements.forEach((element) => {
      if (element.children[1].getAttribute("style")) {
        element.children[1].removeAttribute("style");
        element.classList.remove("lista-navbar-item--active");
      }
    });
  };

  // RESPONSIVE

  window.addEventListener("resize", () => {
    if (window.innerWidth > 991) {
      deleteStyleHeight();
      if (list.classList.contains("lista-navbar--show")) {
        list.classList.remove("lista-navbar--show");
      }
    } else {
      addClick();
    }
  });

  if (window.innerWidth <= 991) {
    addClick();
  }

  menu.addEventListener("click", () =>
    list.classList.toggle("lista-navbar--show")
  );
}

// crear la lista de filtros
function crearFiltroCategorias() {
  const categorias = document.querySelectorAll(".lista-navbar-nesting");
  console.log(categorias);
}
crearFiltroCategorias();
