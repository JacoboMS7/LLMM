let documentoXml = null;
let indiceActual = 0;
let puntos = 0;
let tiempoSegundos = 0;
let timer;

const traducciones = {
  es: {
    titulo: "Examen XML & DTD",
    sig: "Siguiente Pregunta",
    final: "Puntuación final:",
    reiniciar: "Reiniciar Prueba",
  },
  en: {
    titulo: "XML & DTD Test",
    sig: "Next Question",
    final: "Final Score:",
    reiniciar: "Restart Quiz",
  },
};

function cargarCuestionario() {
  const lang = document.getElementById("selector-idioma").value;
  const archivo = lang === "es" ? "preguntas_es.xml" : "preguntas_en.xml";

  document.getElementById("titulo-test").innerText = traducciones[lang].titulo;
  document.getElementById("btn-siguiente").innerText = traducciones[lang].sig;
  document.getElementById("btn-reiniciar").innerText =
    traducciones[lang].reiniciar;

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    if (this.status === 200) {
      documentoXml = this.responseXML;
      indiceActual = 0;
      puntos = 0;
      tiempoSegundos = 0;

      document.getElementById("pantalla-inicio").classList.add("oculto");
      document.getElementById("pantalla-quiz").classList.remove("oculto");
      document.getElementById("pantalla-resultados").classList.add("oculto");

      mostrarPreguntaActual();
      iniciarCronometro();
    }
  };
  xhttp.open("GET", archivo);
  xhttp.send();
}

function iniciarCronometro() {
  if (timer) clearInterval(timer);
  timer = setInterval(() => {
    tiempoSegundos++;
    let min = Math.floor(tiempoSegundos / 60)
      .toString()
      .padStart(2, "0");
    let seg = (tiempoSegundos % 60).toString().padStart(2, "0");
    document.getElementById("cronometro").innerText = `${min}:${seg}`;
  }, 1000);
}

function mostrarPreguntaActual() {
  const listaPreguntas = documentoXml.getElementsByTagName("question");

  if (indiceActual >= listaPreguntas.length) {
    mostrarResultadosFinales();
    return;
  }

  const btnSiguiente = document.getElementById("btn-siguiente");
  btnSiguiente.disabled = true;

  const nodoPregunta = listaPreguntas[indiceActual];
  document.getElementById("texto-pregunta").innerText =
    `${indiceActual + 1}. ${nodoPregunta.getElementsByTagName("wording")[0].textContent}`;

  const opciones = nodoPregunta.getElementsByTagName("choice");
  const contenedor = document.getElementById("opciones-lista");
  contenedor.innerHTML = "";

  for (let i = 0; i < opciones.length; i++) {
    const div = document.createElement("div");
    div.className = "opcion-item";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "quiz-opt";
    input.id = "opt" + i;
    input.value = opciones[i].getAttribute("correct") === "yes" ? "1" : "0";

    input.onchange = () => {
      btnSiguiente.disabled = false;
    };

    const label = document.createElement("label");
    label.htmlFor = "opt" + i;
    label.innerText = opciones[i].textContent;

    div.appendChild(input);
    div.appendChild(label);
    contenedor.appendChild(div);
  }
}

function siguientePregunta() {
  const seleccion = document.querySelector('input[name="quiz-opt"]:checked');
  if (seleccion.value === "1") {
    puntos++;
  }
  indiceActual++;
  mostrarPreguntaActual();
}

function mostrarResultadosFinales() {
  clearInterval(timer);
  const lang = document.getElementById("selector-idioma").value;
  document.getElementById("pantalla-quiz").classList.add("oculto");
  document.getElementById("pantalla-resultados").classList.remove("oculto");

  const total = documentoXml.getElementsByTagName("question").length;
  document.getElementById("puntuacion-final").innerText =
    `${traducciones[lang].final} ${puntos} / ${total}`;
}

function cambiarIdioma() {
  if (documentoXml) {
    cargarCuestionario();
  }
}
