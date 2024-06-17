const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const usuarioValido = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!usuarioValido) {
    return alert("usuario y/o contraseña incorrectos");
  }
  alert(`Bienvenido ${usuarioValido.name}`);
  window.location.href = "categorias.html";
});
