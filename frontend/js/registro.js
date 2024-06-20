const registroForm = document.querySelector("#registro-form");
const name = document.querySelector("#name");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const inputs = [name, phone, email, password];

// Normalizar datos
function normalizar(input) {
  return input.value.trim().toLowerCase();
}

// Validar correo
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validarCorreo() {
  if (!emailRegex.test(normalizar(email))) {
    email.value = "";
    email.placeholder = "Ingrese un correo válido";
    email.classList.add("error");
    return false;
  }
  return true;
}

// Validar número

function validarTelefono() {
  if (isNaN(normalizar(phone))) {
    phone.value = "";
    phone.placeholder = "Ingrese un teléfono válido";
    phone.classList.add("error");
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

registroForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // validar si el usuario ya se encuentra registrado
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const esUsuarioRegistrado = users.find(
    (user) => user.email === normalizar(email)
  );

  if (esUsuarioRegistrado) {
    return Swal.fire({
      title: "El usuario ya se encuentra registrado",
      icon: "warning",
      confirmButtonText: "Inicia inicia sesion aquí",
      iconColor: "#ff8811ff",
      confirmButtonColor: "#ff8811ff",
      showClass: {
        popup: `
      animate__animated
      animate__zoomIn
      animate__faster
    `,
      },
      hideClass: {
        popup: `
      animate__animated
      animate__zoomIn
      animate__faster
    `,
      },
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "login.html";
      }
    });
  }

  // Validar todos los inputs y el correo antes de enviar y guardar
  const inputsValidos = validarInputs();
  const correoValido = validarCorreo();
  const telefonoValido = validarTelefono();

  // Si todos los campos son válidos, enviar el formulario
  if (inputsValidos && correoValido && telefonoValido) {
    users.push({
      name: normalizar(name),
      phone: normalizar(phone),
      email: normalizar(email),
      password: normalizar(password),
    });

    // guardar usuario en el local storage
    localStorage.setItem("users", JSON.stringify(users));

    Swal.fire({
      title: "Te has registrado exitosamente",
      text: "Bienvenido a tu nuevo reto",
      icon: "success",
      iconColor: "#49a078ff",
      confirmButtonColor: "#49a078ff",
      showClass: {
        popup: `
      animate__animated
      animate__zoomIn
      animate__faster
    `,
      },
      hideClass: {
        popup: `
      animate__animated
      animate__zoomIn
      animate__faster
    `,
      },
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "login.html";
      }
    });
  }
});
