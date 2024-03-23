// Función para cambiar el color del logo al pasar el mouse sobre él
function changeColor() {
  var logoImg = document.getElementById('logoImg');
  var hue = 0; // Inicializa el valor de matiz

  // Función para cambiar el color del logo a RGB
  function animateColor() {
      hue = (hue + 1) % 360; // Incrementa el valor de matiz de 0 a 360 grados
      logoImg.style.filter = 'hue-rotate(' + hue + 'deg)'; // Aplica el cambio de color al logo
      requestAnimationFrame(animateColor); // Solicita al navegador que ejecute esta función en el próximo cuadro de animación
  }

  // Inicia la animación de cambio de color del logo
  animateColor();
}

// Llama a la función changeColor para iniciar la animación al cargar la página
changeColor();
/* GALERIA DE IMAGENES */
document.querySelectorAll('.servicio').forEach(item => {
  item.addEventListener('click', event => {
      // Agrega aquí la lógica para la animación al hacer clic en una imagen
      console.log('Imagen clicada:', item.querySelector('img').alt);
  });
});
// Obtener todas las preguntas
// Obtener todas las preguntas
const preguntas = document.querySelectorAll('.pregunta');

// Iterar sobre cada pregunta y agregar un evento de clic para mostrar/ocultar la respuesta
preguntas.forEach(pregunta => {
    pregunta.addEventListener('click', () => {
        // Si la pregunta actual está activa
        if (pregunta.classList.contains('activa')) {
            // Remover la clase activa de todas las preguntas
            preguntas.forEach(otraPregunta => {
                otraPregunta.classList.remove('activa');
            });
        } else {
            // Si la pregunta actual no está activa, remover la clase activa de todas las preguntas
            preguntas.forEach(otraPregunta => {
                otraPregunta.classList.remove('activa');
            });
            // Y luego activar la pregunta actual
            pregunta.classList.add('activa');
        }
    });
});









