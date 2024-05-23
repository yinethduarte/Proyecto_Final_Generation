let participantes = [
  {
    foto: "/Proyecto_Final_Generation/frontend/css/img/perfil.jpeg",
    nombre: "Yineth Duarte",
    descripcion:
      "Ingeniera de Sistemas con bases en lógica de programación y dominio de lenguajes como JavaScript y Java. Yineth es una persona curiosa, responsable y comprometida, siempre interesada en aprender y explorar diferentes áreas del conocimiento.",
    linkedin:
      "https://www.linkedin.com/in/yineth-paola-duarte-contreras-3b67b8176/",
    github: "https://github.com/yinethduarte",
    correo: "yineth.duarte@genstudents.org",
  },
  {
    foto: "/Proyecto_Final_Generation/frontend/css/img/teamater.jpeg",
    nombre: "Juliana Espinosa",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores illo vero magnam natus suscipit veritatis velit inventore! Nihil non autem",
    linkedin: "#",
    github: "#",
    correo: "#",
  },
  {
    foto: "/Proyecto_Final_Generation/frontend/css/img/teamater.jpeg",
    nombre: "Sara Salazar",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores illo vero magnam natus suscipit veritatis velit inventore! Nihil non autem",
    linkedin: "#",
    github: "#",
    correo: "#",
  },
  {
    foto: "/Proyecto_Final_Generation/frontend/css/img/teamater.jpeg",
    nombre: "Angela Rubio",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores illo vero magnam natus suscipit veritatis velit inventore! Nihil non autem",
    linkedin: "#",
    github: "#",
    correo: "#",
  },
];

// variables globales
let teamContainer = document.querySelector("#cards-team-container");

let crearCardParticipantes = (container, participante) => {
  let card = `<div class="card col-12 col-md-5 px-0 col-lg card-teammate">
                  <img src="${participante.foto}" class="card-img-top" alt="foto de ${participante.nombre}">
                  <div class="overlay" >
                    <p class="card-text">${participante.descripcion}</p>
                  </div>
                  <div class="card-body">
                      <p class="card-text">${participante.nombre}</p>
                      <div class="teamater-contact">
                          <a href="${participante.github}"><i class="bi bi-github"></i></a>
                          <a href="${participante.linkedin}"><i class="bi bi-linkedin"></i></a>
                          <a href="${participante.correo}"><i class="bi bi-envelope-at-fill"></i></a>   
                      </div>
                  </div>
              </div>`;

  container.innerHTML += card;
};

let renderizarCardsParticipantes = (participantes) => {
  for (const participante of participantes) {
    crearCardParticipantes(teamContainer, participante);
  }
};

renderizarCardsParticipantes(participantes);
