// Datos completos de ramos por semestre
const ramosPorSemestre = {
  "Semestre I": [
    { nombre: "Derecho Romano", creditos: 10 },
    { nombre: "Derecho Político", creditos: 10 },
    { nombre: "Teoría del Derecho", creditos: 10 },
    { nombre: "Historia del Derecho", creditos: 4 },
    { nombre: "Fundamentos Filosóficos", creditos: 4 },
    { nombre: "Técnicas para el manejo del estrés y la ansiedad frente a evaluaciones", creditos: 4 }
  ],
  "Semestre II": [
    { nombre: "Derecho Económico I", creditos: 4 },
    { nombre: "Fundamentos Teológicos", creditos: 4 },
    { nombre: "Integración del Saber II", creditos: 4 }
  ],
  "Semestre III": [
    { nombre: "Derecho Civil I", creditos: 5 },
    { nombre: "Derecho Procesal I", creditos: 5 },
    { nombre: "Derecho Constitucional I", creditos: 4 },
    { nombre: "Derecho Internacional Público I", creditos: 4 },
    { nombre: "Derecho Económico II", creditos: 4 },
    { nombre: "Derecho Canónico", creditos: 3 },
    { nombre: "Integración del Saber III", creditos: 4 }
  ],
  "Semestre IV": [
    { nombre: "Derecho Civil II", creditos: 5 },
    { nombre: "Derecho Procesal II", creditos: 5 },
    { nombre: "Derecho Constitucional II", creditos: 4 },
    { nombre: "Derecho Internacional Público II", creditos: 4 },
    { nombre: "Derecho Económico III", creditos: 4 },
    { nombre: "Inglés I", creditos: 4 },
    { nombre: "Seminario Jurídico I", creditos: 4 }
  ],
  "Semestre V": [
    { nombre: "Derecho Civil III", creditos: 5 },
    { nombre: "Derecho Procesal III", creditos: 5 },
    { nombre: "Derecho Penal I", creditos: 4 },
    { nombre: "Derecho Comercial I", creditos: 4 },
    { nombre: "Derecho del Trabajo I", creditos: 4 },
    { nombre: "Derecho Administrativo I", creditos: 4 },
    { nombre: "Integración del Saber IV", creditos: 4 }
  ],
  "Semestre VI": [
    { nombre: "Derecho Civil IV", creditos: 5 },
    { nombre: "Derecho Procesal IV", creditos: 5 },
    { nombre: "Derecho Penal II", creditos: 4 },
    { nombre: "Derecho Comercial II", creditos: 4 },
    { nombre: "Derecho del Trabajo II", creditos: 4 },
    { nombre: "Derecho Administrativo II", creditos: 4 },
    { nombre: "Seminario Jurídico II", creditos: 4 }
  ],
  "Semestre VII": [
    { nombre: "Derecho Civil V", creditos: 5 },
    { nombre: "Derecho Procesal V", creditos: 5 },
    { nombre: "Derecho Penal III", creditos: 4 },
    { nombre: "Derecho Comercial III", creditos: 4 },
    { nombre: "Seguridad Social", creditos: 3 },
    { nombre: "Derecho Tributario I", creditos: 4 },
    { nombre: "Litigación", creditos: 3 },
    { nombre: "Ética Profesional", creditos: 4 }
  ],
  "Semestre VIII": [
    { nombre: "Derecho Civil VI", creditos: 5 },
    { nombre: "Derecho Procesal VI", creditos: 5 },
    { nombre: "Derecho Penal IV", creditos: 4 },
    { nombre: "Derecho Comercial IV", creditos: 4 },
    { nombre: "Derecho Tributario II", creditos: 4 },
    { nombre: "Seminario Jurídico III", creditos: 4 },
    { nombre: "Optativo de Profundización I", creditos: 4 }
  ],
  "Semestre IX": [
    { nombre: "Práctica Profesional", creditos: 12 },
    { nombre: "Derecho Civil VII", creditos: 5 },
    { nombre: "Derecho Procesal VII", creditos: 5 },
    { nombre: "Anteproyecto de Investigación", creditos: 5 },
    { nombre: "Derecho Internacional Privado", creditos: 3 },
    { nombre: "Filosofía del Derecho", creditos: 3 },
    { nombre: "Optativo de Profundización II", creditos: 4 }
  ],
  "Semestre X": [
    { nombre: "Derecho Civil VIII", creditos: 5 },
    { nombre: "Tesina", creditos: 8 },
    { nombre: "Optativo de Profundización III", creditos: 4 },
    { nombre: "Optativo de Profundización IV", creditos: 4 }
  ]
};

// Prerrequisitos (simplificados, puedes expandir si es necesario)
const prerrequisitos = {
  "Derecho Civil I": ["Derecho Romano", "Teoría del Derecho"],
  "Derecho Constitucional I": ["Derecho Político"],
  "Derecho Internacional Público I": ["Derecho Político"],
  "Derecho Económico II": ["Derecho Económico I"],
  "Derecho Canónico": ["Fundamentos Teológicos"],
  "Derecho Civil II": ["Derecho Civil I"],
  "Derecho Procesal II": ["Derecho Procesal I"],
  "Derecho Constitucional II": ["Derecho Constitucional I"],
  "Derecho Internacional Público II": ["Derecho Internacional Público I"],
  "Derecho Económico III": ["Derecho Económico II"],
  "Seminario Jurídico I": ["Derecho Civil I", "Derecho Procesal I"],
  "Derecho Civil III": ["Derecho Civil II"],
  "Derecho Procesal III": ["Derecho Procesal II"],
  "Derecho Penal I": [],
  "Derecho Comercial I": ["Derecho Civil II"],
  "Derecho del Trabajo I": ["Teoría del Derecho"],
  "Derecho Administrativo I": ["Derecho Constitucional I"],
  "Derecho Civil IV": ["Derecho Civil III"],
  "Derecho Procesal IV": ["Derecho Procesal III"],
  "Derecho Penal II": ["Derecho Penal I"],
  "Derecho Comercial II": ["Derecho Comercial I"],
  "Derecho del Trabajo II": ["Derecho del Trabajo I"],
  "Derecho Administrativo II": ["Derecho Administrativo I"],
  "Seminario Jurídico II": ["Derecho Civil III", "Derecho Procesal III", "Seminario Jurídico I"],
  "Derecho Civil V": ["Derecho Civil IV"],
  "Derecho Procesal V": ["Derecho Procesal IV"],
  "Derecho Penal III": ["Derecho Penal II"],
  "Derecho Comercial III": ["Derecho Comercial II"],
  "Derecho Tributario I": ["Derecho Económico III"],
  "Litigación": ["Derecho Procesal IV"],
  "Derecho Civil VI": ["Derecho Civil V"],
  "Derecho Procesal VI": ["Derecho Procesal V"],
  "Derecho Penal IV": ["Derecho Penal III"],
  "Derecho Comercial IV": ["Derecho Comercial III"],
  "Derecho Tributario II": ["Derecho Tributario I"],
  "Seminario Jurídico III": ["Derecho Civil V", "Derecho Procesal V", "Seminario Jurídico II"],
  "Derecho Civil VII": ["Derecho Civil VI"],
  "Derecho Procesal VII": ["Derecho Procesal VI"],
  "Tesina": ["Anteproyecto de Investigación"]
};

let creditosAprobados = 0;
const aprobados = new Set();

function actualizarCreditos() {
  document.getElementById("creditos-aprobados").innerText = `Créditos Aprobados: ${creditosAprobados}`;
}

function verificarPrerrequisitos(nombre) {
  const requisitos = prerrequisitos[nombre];
  if (!requisitos) return true;
  return requisitos.every(r => aprobados.has(r));
}

function crearRamo(ramo) {
  const div = document.createElement("div");
  div.className = "ramo";
  div.innerText = ramo.nombre;

  if (prerrequisitos[ramo.nombre] && !verificarPrerrequisitos(ramo.nombre)) {
    div.classList.add("bloqueado");
  }

  div.addEventListener("click", () => {
    if (div.classList.contains("bloqueado")) return;

    if (!div.classList.contains("aprobado")) {
      div.classList.add("aprobado");
      aprobados.add(ramo.nombre);
      creditosAprobados += ramo.creditos;
    } else {
      div.classList.remove("aprobado");
      aprobados.delete(ramo.nombre);
      creditosAprobados -= ramo.creditos;
    }

    dibujarMalla();
  });

  return div;
}

function dibujarMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";
  actualizarCreditos();

  for (const [semestre, ramos] of Object.entries(ramosPorSemestre)) {
    const divSem = document.createElement("div");
    divSem.className = "semestre";

    const h3 = document.createElement("h3");
    h3.innerText = semestre;
    divSem.appendChild(h3);

    ramos.forEach(r => {
      const divRamo = crearRamo(r);
      if (aprobados.has(r.nombre)) divRamo.classList.add("aprobado");
      divSem.appendChild(divRamo);
    });

    contenedor.appendChild(divSem);
  }
}

dibujarMalla();
