fetchAndBuildContact();

async function fetchAndBuildContact() {
  const contactfrom = await this.fetchContact();
  buildContac(contactfrom);
}

async function fetchContact() {
  return fetch("/frontend/html/contacto.html")
    .then((response) => response.text())
    .then((contactfrom) => {
      return contactfrom;
    });
}

function buildContac(contactfrom) {
  document.getElementById("contacto-container-home").innerHTML = contactfrom;
  // Variables globales
  const $form = document.querySelector("#form");
  const inputNombre = document.querySelector("#name");
  const inputTelefono = document.querySelector("#phone");
  const inputCorreo = document.querySelector("#email");
  const inputConsulta = document.querySelector("#txtConsult");
  const btnEnviar = document.querySelector("#submit");

  const inputs = [inputNombre, inputTelefono, inputCorreo, inputConsulta];

  // Normalizar datos
  function normalizar(input) {
    return input.value.trim();
  }

  // Validar correo
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validarCorreo() {
    if (!emailRegex.test(normalizar(inputCorreo))) {
      inputCorreo.value = "";
      inputCorreo.placeholder = "Ingrese un correo válido";
      inputCorreo.classList.add("error");
      return false;
    }
    return true;
  }

  // Validar número

  function validarTelefono() {
    if (isNaN(normalizar(inputTelefono))) {
      inputTelefono.value = "";
      inputTelefono.placeholder = "Ingrese un teléfono válido";
      inputTelefono.classList.add("error");
      return false;
    }
    return true;
  }

  // Validar inputs
  function validarInputs() {
    let isValid = true;
    inputs.forEach((input) => {
      input.classList.remove("error");
      input.placeholder = " ";
      if (normalizar(input) === "") {
        input.classList.add("error");
        input.placeholder = "Este campo es requerido";
        isValid = false;
      }
    });
    return isValid;
  }

  // Evento submit
  async function handleSubmit(event) {
    event.preventDefault();

    // Validar todos los inputs y el correo
    const inputsValidos = validarInputs();
    const correoValido = validarCorreo();
    const telefonoValido = validarTelefono();

    // Si todos los campos son válidos, enviar el formulario
    if (inputsValidos && correoValido && telefonoValido) {
      const form = new FormData($form);
      try {
        const response = await fetch("https://formspree.io/f/mrgnvjgo", {
          method: "POST",
          body: form,
          headers: {
            Accept: "application/json",
          },
        });
        if (response.ok) {
          $form.reset();
          alert("Gracias por contactarnos");
        } else {
          alert(
            "Hubo un problema con el envío. Por favor, inténtelo de nuevo."
          );
        }
      } catch (error) {
        alert("Error al enviar el formulario. Por favor, inténtelo de nuevo.");
      }
    }
  }

  $form.addEventListener("submit", handleSubmit);
}
