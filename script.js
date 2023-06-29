// Función para calcular el interés acumulado
function calcularInteresAcumulado() {
  const cifraInicial = parseFloat(document.getElementById('cifraInicial').value);
  const tasaInteresAnual = parseFloat(document.getElementById('tasaInteres').value);
  const tasaReinversionMensual = parseFloat(document.getElementById('tasaReinversion').value);
  const periodoMeses = parseInt(document.getElementById('periodoMeses').value);

  const tasaInteresDecimal = tasaInteresAnual / 100;
  const tasaReinversionDecimal = tasaReinversionMensual / 100;

  let cifraActual = cifraInicial;
  let interes = 0;

  for (let mes = 1; mes <= periodoMeses; mes++) {
    const interesMensual = cifraActual * (tasaInteresDecimal / 365) * 30;
    const reinversionMensual = interesMensual * tasaReinversionDecimal;
    cifraActual += reinversionMensual;
    interes += reinversionMensual;
  } 

  document.getElementById('resultado').innerHTML = `$ ${cifraActual.toFixed(2)}`;
  document.getElementById('interes').innerHTML = `$ ${interes.toFixed(2)}`;
}

// Funcion cursor

document.addEventListener('mousemove', function(e) {
  var customCursor = document.querySelector('.cursor');
  customCursor.style.left = e.clientX + 'px';
  customCursor.style.top = e.clientY + 'px';
});

var elements = document.querySelectorAll('calculator'); // Elementos a mostrar al hacer hover

elements.forEach(function(element) {
  element.addEventListener('mouseenter', function() {
    var customCursor = document.querySelector('.custom-cursor');
    customCursor.classList.add('hover');
  });

  element.addEventListener('mouseleave', function() {
    var customCursor = document.querySelector('.custom-cursor');
    customCursor.classList.remove('hover');
  });
});
