// Solicitud para obtener footer.html e insertarlo en esta página.
fetch("/frontend/html/footer.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("footer").innerHTML = data;
  });

// Añadir un evento de scroll para mostrar/ocultar el botón
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener("scroll", handleScrollButton);

function handleScrollButton() {
  var bot = document.getElementById('botup');
  if (window.pageYOffset > 10) {
    var botStyle = window.getComputedStyle(bot);
    var offset = parseInt(botStyle.getPropertyValue('font-size')) * 2 + 10;
    bot.style.top = document.documentElement.clientHeight - offset + "px";
    bot.style.left = document.documentElement.clientWidth - offset + "px";
    bot.style.display = "block";
  } else {
    bot.style.display = "none";
  }
}

