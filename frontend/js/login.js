const loginForm = document.querySelector("#login-form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const inputs = [email, password];

// Normalizar datos
function normalizar(input) {
  return input.value.trim().toLowerCase();
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

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // traer los usuarios del local storage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  console.log(users);
  // validar que los campos estén completos
  const inputsValidos = validarInputs();

  // validar si el usuario existe en el local storage
  const usuarioValido = users.find(
    (user) =>
      user.email === normalizar(email) && user.password === normalizar(password)
  );

  if (inputsValidos && usuarioValido) {
    Swal.fire({
      title: `Bienvenida ${usuarioValido.name}`,
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
        window.location.href = "categorias.html";
      }
    });
  } else if (!usuarioValido) {
    return Swal.fire({
      title: "Ingresa un usuario valido",
      icon: "warning",
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
});
