// main.js completo con todos los ramos de la malla UCSC, incluyendo créditos y prerrequisitos.

const ramos = [
  // 1° año
  { semestre: 1, nombre: "Derecho Romano", creditos: 10, prerrequisitos: [] },
  { semestre: 1, nombre: "Derecho Político", creditos: 10, prerrequisitos: [] },
  { semestre: 1, nombre: "Teoría del Derecho", creditos: 10, prerrequisitos: [] },
  { semestre: 1, nombre: "Historia del Derecho", creditos: 4, prerrequisitos: [] },
  { semestre: 1, nombre: "Fundamentos Filosóficos", creditos: 4, prerrequisitos: [] },
  { semestre: 1, nombre: "Técnicas para el manejo del estrés y la ansiedad frente a evaluaciones", creditos: 4, prerrequisitos: [] },
  { semestre: 2, nombre: "Derecho Económico I", creditos: 4, prerrequisitos: [] },
  { semestre: 2, nombre: "Fundamentos Teológicos", creditos: 4, prerrequisitos: [] },
  { semestre: 2, nombre: "Integración del Saber II", creditos: 4, prerrequisitos: [] },

  // 2° año
  { semestre: 3, nombre: "Derecho Civil I", creditos: 5, prerrequisitos: ["Derecho Romano", "Teoría del Derecho"] },
  { semestre: 3, nombre: "Derecho Procesal I", creditos: 5, prerrequisitos: [] },
  { semestre: 3, nombre: "Derecho Constitucional I", creditos: 4, prerrequisitos: ["Derecho Político"] },
  { semestre: 3, nombre: "Derecho Internacional Público I", creditos: 4, prerrequisitos: ["Derecho Político"] },
  { semestre: 3, nombre: "Derecho Económico II", creditos: 4, prerrequisitos: ["Derecho Económico I"] },
  { semestre: 3, nombre: "Derecho Canónico", creditos: 3, prerrequisitos: ["Fundamentos Teológicos"] },
  { semestre: 3, nombre: "Integración del Saber III", creditos: 4, prerrequisitos: [] },
  { semestre: 4, nombre: "Derecho Civil II", creditos: 5, prerrequisitos: ["Derecho Civil I"] },
  { semestre: 4, nombre: "Derecho Procesal II", creditos: 5, prerrequisitos: ["Derecho Procesal I"] },
  { semestre: 4, nombre: "Derecho Constitucional II", creditos: 4, prerrequisitos: ["Derecho Constitucional I"] },
  { semestre: 4, nombre: "Derecho Internacional Público II", creditos: 4, prerrequisitos: ["Derecho Internacional Público I"] },
  { semestre: 4, nombre: "Derecho Económico III", creditos: 4, prerrequisitos: ["Derecho Económico II"] },
  { semestre: 4, nombre: "Inglés I", creditos: 4, prerrequisitos: [] },
  { semestre: 4, nombre: "Seminario Jurídico I", creditos: 4, prerrequisitos: ["Derecho Civil I", "Derecho Procesal I"] },

  // 3° año
  { semestre: 5, nombre: "Derecho Civil III", creditos: 5, prerrequisitos: ["Derecho Civil II"] },
  { semestre: 5, nombre: "Derecho Procesal III", creditos: 5, prerrequisitos: ["Derecho Procesal II"] },
  { semestre: 5, nombre: "Derecho Penal I", creditos: 4, prerrequisitos: ["54 créditos"] },
  { semestre: 5, nombre: "Derecho Comercial I", creditos: 4, prerrequisitos: ["Derecho Civil II"] },
  { semestre: 5, nombre: "Derecho del Trabajo I", creditos: 4, prerrequisitos: ["Teoría del Derecho"] },
  { semestre: 5, nombre: "Derecho Administrativo I", creditos: 4, prerrequisitos: ["Derecho Constitucional I"] },
  { semestre: 5, nombre: "Integración del Saber IV", creditos: 4, prerrequisitos: [] },
  { semestre: 6, nombre: "Derecho Civil IV", creditos: 5, prerrequisitos: ["Derecho Civil III"] },
  { semestre: 6, nombre: "Derecho Procesal IV", creditos: 5, prerrequisitos: ["Derecho Procesal III"] },
  { semestre: 6, nombre: "Derecho Penal II", creditos: 4, prerrequisitos: ["Derecho Penal I"] },
  { semestre: 6, nombre: "Derecho Comercial II", creditos: 4, prerrequisitos: ["Derecho Comercial I"] },
  { semestre: 6, nombre: "Derecho del Trabajo II", creditos: 4, prerrequisitos: ["Derecho del Trabajo I"] },
  { semestre: 6, nombre: "Derecho Administrativo II", creditos: 4, prerrequisitos: ["Derecho Administrativo I"] },
  { semestre: 6, nombre: "Seminario Jurídico II", creditos: 4, prerrequisitos: ["Derecho Civil III", "Derecho Procesal III", "Seminario Jurídico I"] },

  // 4° año
  { semestre: 7, nombre: "Derecho Civil V", creditos: 5, prerrequisitos: ["Derecho Civil IV"] },
  { semestre: 7, nombre: "Derecho Procesal V", creditos: 5, prerrequisitos: ["Derecho Procesal IV"] },
  { semestre: 7, nombre: "Derecho Penal III", creditos: 4, prerrequisitos: ["Derecho Penal II"] },
  { semestre: 7, nombre: "Derecho Comercial III", creditos: 4, prerrequisitos: ["Derecho Comercial II"] },
  { semestre: 7, nombre: "Seguridad Social", creditos: 3, prerrequisitos: ["Derecho del Trabajo I"] },
  { semestre: 7, nombre: "Derecho Tributario I", creditos: 4, prerrequisitos: ["Derecho Económico III"] },
  { semestre: 7, nombre: "Litigación", creditos: 3, prerrequisitos: ["Derecho Procesal IV"] },
  { semestre: 7, nombre: "Ética Profesional", creditos: 4, prerrequisitos: ["54 créditos"] },
  { semestre: 8, nombre: "Derecho Civil VI", creditos: 5, prerrequisitos: ["Derecho Civil V"] },
  { semestre: 8, nombre: "Derecho Procesal VI", creditos: 5, prerrequisitos: ["Derecho Procesal V"] },
  { semestre: 8, nombre: "Derecho Penal IV", creditos: 4, prerrequisitos: ["Derecho Penal III"] },
  { semestre: 8, nombre: "Derecho Comercial IV", creditos: 4, prerrequisitos: ["Derecho Comercial III"] },
  { semestre: 8, nombre: "Derecho Tributario II", creditos: 4, prerrequisitos: ["Derecho Tributario I"] },
  { semestre: 8, nombre: "Seminario Jurídico III", creditos: 4, prerrequisitos: ["Derecho Civil V", "Derecho Procesal V", "Seminario Jurídico II"] },
  { semestre: 8, nombre: "Optativo de Profundización I", creditos: 4, prerrequisitos: ["173 créditos"] },

  // 5° año
  { semestre: 9, nombre: "Práctica Profesional", creditos: 12, prerrequisitos: ["Seminario Jurídico III"] },
  { semestre: 9, nombre: "Derecho Civil VII", creditos: 5, prerrequisitos: ["Derecho Civil VI"] },
  { semestre: 9, nombre: "Derecho Procesal VII", creditos: 5, prerrequisitos: ["Derecho Procesal VI"] },
  { semestre: 9, nombre: "Anteproyecto de Investigación", creditos: 5, prerrequisitos: ["235 créditos"] },
  { semestre: 9, nombre: "Derecho Internacional Privado", creditos: 3, prerrequisitos: ["Derecho Civil IV"] },
  { semestre: 9, nombre: "Filosofía del Derecho", creditos: 3, prerrequisitos: ["Fundamentos Filosóficos"] },
  { semestre: 9, nombre: "Optativo de Profundización II", creditos: 4, prerrequisitos: ["173 créditos"] },
  { semestre: 10, nombre: "Derecho Civil VIII", creditos: 5, prerrequisitos: ["Derecho Civil VII"] },
  { semestre: 10, nombre: "Tesina", creditos: 8, prerrequisitos: ["Anteproyecto de Investigación"] },
  { semestre: 10, nombre: "Optativo de Profundización III", creditos: 4, prerrequisitos: ["173 créditos"] },
  { semestre: 10, nombre: "Optativo de Profundización IV", creditos: 4, prerrequisitos: ["173 créditos"] }
];

let creditosAprobados = 0;
const ramosAprobados = new Set();

function calcularCreditos() {
  creditosAprobados = 0;
  ramos.forEach(r => {
    if (ramosAprobados.has(r.nombre)) {
      creditosAprobados += r.creditos;
    }
  });
}

function cumplePrerrequisitos(ramo) {
  return ramo.prerrequisitos.every(pr => {
    if (pr.includes("créditos")) {
      const requeridos = parseInt(pr);
      return creditosAprobados >= requeridos;
    }
    return ramosAprobados.has(pr);
  });
}

function crearRamo(ramo) {
  const div = document.createElement("div");
  div.className = "ramo";
  div.textContent = ramo.nombre;
  div.dataset.nombre = ramo.nombre;
  div.dataset.creditos = ramo.creditos;
  div.dataset.prerrequisitos = ramo.prerrequisitos.length ? `Requiere: ${ramo.prerrequisitos.join(", ")}` : "Sin prerrequisitos";

  const aprobado = ramosAprobados.has(ramo.nombre);
  const desbloqueado = cumplePrerrequisitos(ramo);

  if (aprobado) {
    div.classList.add("aprobado");
  } else if (!desbloqueado) {
    div.classList.add("bloqueado");
  } else {
    div.classList.add("no-aprobado");
  }

  div.addEventListener("click", () => {
    if (div.classList.contains("bloqueado")) return;

    if (aprobado) {
      ramosAprobados.delete(ramo.nombre);
    } else {
      ramosAprobados.add(ramo.nombre);
    }
    actualizar();
  });

  return div;
}

function actualizarCreditos() {
  document.getElementById("creditos-aprobados").textContent = `Créditos aprobados: ${creditosAprobados}`;
}

function actualizar() {
  calcularCreditos();
  actualizarCreditos();
  renderizarMalla();
}

function renderizarMalla() {
  const container = document.getElementById("malla-container");
  container.innerHTML = "";
  const semestres = {};

  ramos.forEach(ramo => {
    if (!semestres[ramo.semestre]) {
      const div = document.createElement("div");
      div.className = "semestre";
      div.innerHTML = `<h3>${ramo.semestre}° Semestre</h3>`;
      container.appendChild(div);
      semestres[ramo.semestre] = div;
    }
    semestres[ramo.semestre].appendChild(crearRamo(ramo));
  });
}

document.addEventListener("DOMContentLoaded", actualizar);
