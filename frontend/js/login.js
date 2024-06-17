const loginForm = document.querySelector("#login-form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const inputs = [email, password];

// Normalizar datos
function normalizar(input) {
  return input.value.trim();
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
    alert(`Bienvenido ${usuarioValido.name}`);
    window.location.href = "categorias.html";
  } else if (!usuarioValido) {
    return alert("usuario y/o contraseña incorrectos");
  }
});
