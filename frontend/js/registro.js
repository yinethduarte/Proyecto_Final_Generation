const registroForm = document.querySelector("#registro-form");
const label = document.querySelectorAll("label");

registroForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const phone = document.querySelector("#phone").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const esUsuarioRegistrado = users.find((user) => user.email === email);
  if (esUsuarioRegistrado) {
    return alert("el usuario ya está registrado");
  }
  users.push({
    name: name,
    phone: phone,
    email: email,
    password: password,
  });

  localStorage.setItem("users", JSON.stringify(users));
  alert("registro exitoso");

  //   redirección a login
  window.location.href = "login.html";
});
