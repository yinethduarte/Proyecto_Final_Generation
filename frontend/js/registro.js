const registroForm = document.querySelector("#registro-form");
const inputName = document.querySelector("#name");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const inputs = [inputName, phone, email, password];

// Normalizar datos
function normalizar(input) {
  return input.value.trim();
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

registroForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const correoValido = validarCorreo();

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const esUsuarioRegistrado = users.find((user) => user.email === email);

  if (esUsuarioRegistrado && correoValido) {
    return alert("el usuario ya está registrado");
  }
  users.push({
    name: inputName,
    phone: phone,
    email: email,
    password: password,
  });

  localStorage.setItem("users", JSON.stringify(users));
  alert("registro exitoso");

  //   redirección a login
  window.location.href = "login.html";
});
