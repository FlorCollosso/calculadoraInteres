// Función para calcular el interés acumulado
function calcularInteresAcumulado() {
  const cifraInicial = parseFloat(document.getElementById('cifraInicial').value);
  const tasaInteresAnual = parseFloat(document.getElementById('tasaInteres').value);
  const tasaReinversionMensual = parseFloat(document.getElementById('tasaReinversion').value);
  const periodoMeses = parseInt(document.getElementById('periodoMeses').value);
  const resultado = document.getElementById('resultado');
  const interesAcu = document.getElementById('interes');
  const mesAMes = document.getElementById('mesAMes');
  const datosTable = document.getElementById('datosTable');

  const tasaInteresDecimal = tasaInteresAnual / 100;
  const tasaReinversionDecimal = tasaReinversionMensual / 100;

  const opciones = {
    useGrouping: true,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    notation: "standard",
    style: "decimal",
  };

  var inputs = document.getElementsByTagName('input');

  // Verificar si alguno de los inputs está vacío
  var isEmpty = false;
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value === '') {
      isEmpty = true;
      const errorMessageIn = 'Este campo es obligatorio.';
      showError(inputs[i], errorMessageIn);
    };
  };

  // Si hay campos vacíos, no se envía el formulario
  if (isEmpty) {
    return;
  };

  // Si los campos no están vacíos, añadir función toggleOn al elemento mes a mes
  mesAMes.onclick = toggleOn;

  let cifraActual = cifraInicial;
  let interes = 0;
  let interesUltimoMes = 0;
  let mesNum = 1;

  //Limpiar Tabla
  datosTable.innerHTML = '';

  for (let mes = 1; mes <= periodoMeses; mes++) {
    const interesMensual = cifraActual * (tasaInteresDecimal / 365) * 30;
    const reinversionMensual = interesMensual * tasaReinversionDecimal;
    cifraActual += reinversionMensual;
    interes += reinversionMensual;
    interesUltimoMes = reinversionMensual;

    const row = document.createElement('tr');

    // Crear elemento <td> para mostrar el número de mes y añadir a row
    const title = document.createElement('td');
    title.textContent = `${mesNum}`;
    row.appendChild(title);
    mesNum += 1;

    // Crear elemento <td> para mostrar el interés acumulado del mes y añadir a row
    const cifraInteres = document.createElement('td');
    cifraInteres.textContent = `$ ${interesUltimoMes.toLocaleString('es', opciones)}`;
    row.appendChild(cifraInteres);

    // Crear elemento <td> para mostrar el capital retirado y añadir a row
    const capRetirado = document.createElement('td');
    capRetirado.textContent = `$ ${(interesUltimoMes * tasaReinversionMensual / 100).toLocaleString('es', opciones)}`;
    row.appendChild(capRetirado);

    // Añadir row a datosTable
    datosTable.appendChild(row);
  };

  resultado.innerHTML = `$ ${cifraActual.toLocaleString('es', opciones)}`;
  interesAcu.innerHTML = `$ ${interes.toLocaleString('es', opciones)}`;
  mesAMes.innerHTML = 'Ver';
};

// Función para abrir ventana de detalles
function toggleOn() {
  const panelMesAMes = document.getElementById('containerInfo');
  panelMesAMes.style.display = 'flex';
};

// Función para cerrar ventana de detalles
function toggleOff() {
  const panelMesAMes = document.getElementById('containerInfo');
  panelMesAMes.style.display = 'none';
};

// Función para limpiar el mensaje de error y color rojo al cambiar el valor del input
function clearError(input) {
  input.classList.remove('error-input');
  input.placeholder = '';
}

// Función para mostrar mensaje de error y cambiar el color del input
function showError(input, errorMessage) {
  input.classList.add('error-input');
  input.placeholder = errorMessage;
}

// Función cursor
var isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

if (isTouchDevice) {
  const cursor = document.querySelector('.cursor');
  cursor.style.display = 'none';
}

if (!isTouchDevice) {
  document.addEventListener('mousemove', function (e) {
    var customCursor = document.querySelector('.cursor');
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
  });
};