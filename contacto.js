// variables globales
const formContact = document.querySelector(".form-container");
const inputNombre = document.querySelector("#name");
const inputTelefono = document.querySelector("#phone");
const inputCorreo = document.querySelector("#email");
const inputConsulta = document.querySelector("#txtConsult");
const btnEnviar = document.querySelector("#submit")

const inputs = [inputNombre, inputTelefono, inputCorreo, inputConsulta];

let consulta = {
  name: "",
  email: "",
  phone: "",
  txtConsult: "",
};

// normalizar natos

function normalizar(input) {
  return input.value.trim();
}

// validar correo

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validarCorreo() {
  if (!emailRegex.test(normalizar(inputCorreo))) {
    inputCorreo.value = "";
    inputCorreo.placeholder = "ingrese un correo válido";
  } 
}

// Validad inputs
function validarInputs() {
  inputs.forEach((input) => {
    input.classList.remove("error");
    if (normalizar(input) === "") {
      validarCorreo()
      input.classList.add("error");
      input.placeholder = "Este campo es requerido";
      
    }
  });
}

// evento submit
btnEnviar.addEventListener("click", (e) => {
  e.preventDefault();
  validarInputs();
  validarCorreo();
});
