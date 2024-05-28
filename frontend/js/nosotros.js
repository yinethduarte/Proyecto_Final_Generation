let participantes = [
  {
    foto: "/frontend/css/img/perfil.jpeg",
    nombre: "Yineth Duarte",
    descripcion:
      "Ingeniera de Sistemas con bases en lógica de programación y dominio de lenguajes como JavaScript y Java. Yineth es una persona curiosa, responsable y comprometida, siempre interesada en aprender y explorar diferentes áreas del conocimiento.",
    linkedin: "https://www.linkedin.com/in/yineth-paola-duarte-contreras-3b67b8176/",
    github: "https://github.com/yinethduarte",
    correo: "mailto:yineth.duarte@genstudents.org",
  },
  {
    foto: "/frontend/css/img/foto-juliana.jpeg",
    nombre: "Juliana Espinosa",
    descripcion:
      "Juliana enfoca su capacidad creativa en el desarrollo de páginas web innovadoras y dinámicas que se enfocan en las necesidades y preferencias de los usuarios. <br> Es proactiva en aprender nuevas herramientas y aplicarlas en su trabajo.",
    linkedin: "https://www.linkedin.com/in/juliana-espinosa-escobar-desarrolladora-web/",
    github: "https://github.com/Ribatosis",
    correo: "mailto:espinosajuliana44@gmail.com",
  },
  {
    foto: "/frontend/css/img/foto-Sara.jpg",
    nombre: "Sara Salazar",
    descripcion:
      "Ingeniera física con fuertes bases en tecnología, posee amplios conocimientos que van desde el análisis de datos hasta el desarrollo web y de aplicaciones. Manejando Java,Python, C++, R, HTML, CSS y JavaScript. Se considera una mente inquieta que busca resolver problemas complejos.",
    linkedin: "linkedin.com/in/sarasalazarz",
    github: "https://github.com/SaraDSala",
    correo: "mailto:sara.salazar@gmail.com",
  },
  {
    foto: "/frontend/css/img/foto-angela.JPEG",
    nombre: "Angela Rubio",
    descripcion:
      "Front-End developer y una mente creativa en el mundo digital. Ha trabajado en una amplia gama de proyectos, desde aplicaciones web innovadoras hasta e-commerce dinámicas. Su habilidad para entender las necesidades del usuario y traducirlas en interfaces intuitivas ha sido fundamental en el éxito de cada proyecto.",
    linkedin: "https://www.linkedin.com/in/anrubiodev/",
    github: "https://github.com/AnrubioG",
    correo: "mailto:angela.rubio@genstudents.org",
  },
];

// variables globales
let teamContainer = document.querySelector("#cards-team-container");

let crearCardParticipantes = (container, participante) => {
  let card = `<div class="card col-12 col-md-5 px-0 col-lg card-teammate">
                  <div class="imgcontainer" >
                    <img src="${participante.foto}" class="card-img-top" alt="foto de ${participante.nombre}">
                  </div>
                  <div class="overlay" >
                    <p class="card-text">${participante.descripcion}</p>
                  </div>
                  <div class="card-body">
                      <p class="card-text">${participante.nombre}</p>
                      <div class="teamater-contact">
                          <a href="${participante.github}" target="_blank" rel="noopener noreffer"><i class="bi bi-github"></i></a>
                          <a href="${participante.linkedin}" target="_blank" rel="noopener noreffer"><i class="bi bi-linkedin"></i></a>
                          <a href="${participante.correo}" target="_blank" rel="noopener noreffer"><i class="bi bi-envelope-at-fill"></i></a>   
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
