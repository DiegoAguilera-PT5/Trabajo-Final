"use strick";

const etapa = ["se encuentra en planta de distribución","se encuentra en camino al destinatario",
"se encuentra listo para su retiro en nuestra estacion","se encuentra retenido en aduana",
"ha sido cancelado por una la falta de una direccion valida"];
const form = document.querySelector('.busqueda');
const input = document.querySelector('.form');

// Agregamos el evento submit al formulario
form.addEventListener('submit', (event) => {
  // Prevenimos que se recargue la página al enviar el formulario
  event.preventDefault();

  // Obtenemos el valor del input
  const codigo = tryParseInt(input.value);
  tryParseInt(input.value);

  // Verificamos si el código está dentro del rango válido
  if (codigo >= 0 && codigo <= 50000) {
    // Si está dentro del rango, mostramos un mensaje indicando que el paquete se encuentra en planta de distribución
    alert(`El paquete con código ${codigo} ` + etapa[Math.floor(Math.random() * etapa.length)]);
  } else {
    // Si no está dentro del rango, mostramos un mensaje indicando que no hay ningún paquete con ese código
    alert(`No se ha encontrado ningún paquete con el código ${codigo}`);
  }
});