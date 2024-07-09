//Solicitud para obtener footer.html e insertarlo en esta página.
fetch("/frontend/html/footer.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("footer").innerHTML = data;
  });
