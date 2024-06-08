let verificar = document.querySelector("#verificar");

verificar.addEventListener("click", () => {
  casilla1 = parseInt(document.querySelector("#casilla1").value);
  casilla2 = parseInt(document.querySelector("#casilla2").value);
  casilla3 = parseInt(document.querySelector("#casilla3").value);
  if (casilla1 === 9 && casilla2 === 1 && casilla3 === 1) {
    document.querySelector("p").innerHTML = "Password 1 Correcto";
  } else if (casilla1 === 7 && casilla2 === 1 && casilla3 === 4) {
    document.querySelector("p").innerHTML = "Password 2 Correcto";
  } else {
    document.querySelector("p").innerHTML = "Contraseña Incorrecta";
  }
});
