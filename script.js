// Función para calcular el interés acumulado
function calcularInteresAcumulado() {
  const cifraInicial = parseFloat(document.getElementById('cifraInicial').value);
  const tasaInteresAnual = parseFloat(document.getElementById('tasaInteres').value);
  const tasaReinversionMensual = parseFloat(document.getElementById('tasaReinversion').value);
  const periodoMeses = parseInt(document.getElementById('periodoMeses').value);
  const resultado = document.getElementById('resultado');
  const interesAcu = document.getElementById('interes');
  const mesAMes = document.getElementById('mesAMes');
  const infoText = document.getElementById('infoText');

  const tasaInteresDecimal = tasaInteresAnual / 100;
  const tasaReinversionDecimal = tasaReinversionMensual / 100;

  const opciones = { 
    useGrouping: true,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    notation: "standard",
    style: "decimal",
  };

  let cifraActual = cifraInicial;
  let interes = 0;
  let interesUltimoMes = 0;
  let mesNum = 1;

  infoText.innerHTML = '';

  for (let mes = 1; mes <= periodoMeses; mes++) {
    const interesMensual = cifraActual * (tasaInteresDecimal / 365) * 30;
    const reinversionMensual = interesMensual * tasaReinversionDecimal;
    cifraActual += reinversionMensual;
    interes += reinversionMensual;
    interesUltimoMes = reinversionMensual;

    titleH3 = document.createElement('h3');
    titleH3.textContent = `Mes ${mesNum}`;
    infoText.appendChild(titleH3);
    mesNum += 1;

    parrafo = document.createElement('p');
    parrafo.textContent = `$ ${interesUltimoMes.toLocaleString('es', opciones)}`;
    infoText.appendChild(parrafo);
  } 

  resultado.innerHTML = `$ ${cifraActual.toLocaleString('es', opciones)}`;
  interesAcu.innerHTML = `$ ${interes.toLocaleString('es', opciones)}`;
  mesAMes.innerHTML = 'Ver';
}

function toggleOn() {
  const panelMesAMes = document.getElementById('containerInfo');
  panelMesAMes.style.display = 'flex';
}

function toggleOff() {
  const panelMesAMes = document.getElementById('containerInfo');
  panelMesAMes.style.display = 'none';
}

let calculado = false;
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  calculado = true;
  mesAMes.onclick = toggleOn;
});

// Función cursor

const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', function(e) {
  var customCursor = document.querySelector('.cursor');
  customCursor.style.left = e.clientX + 'px';
  customCursor.style.top = e.clientY + 'px';
});