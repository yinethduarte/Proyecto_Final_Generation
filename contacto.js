// variables globales
const formContact = document.querySelector(".form-container");
const inputNombre = document.querySelector("#name");
const inputTelefono = document.querySelector("#phone");
const inputCorreo = document.querySelector("#email");
const inputConsulta = document.querySelector("#txtConsult");


const inputs = [inputNombre, inputTelefono, inputCorreo, inputConsulta];
console.log(inputs);
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


// remover error 
function validarInputs(){
  inputs.forEach((input) => {
    input.classList.remove('error')
    if (normalizar(input) === "") {
      input.classList.add("error");
    }
  });
}

// validar Inputs

submit.addEventListener("click", (e) => {
  e.preventDefault();
  validarInputs()

});
