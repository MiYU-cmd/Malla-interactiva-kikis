const grid = document.getElementById("grid");

const courses = {
  "Semestre 1": [
    "Estrategias para el Aprendizaje",
    "Antropología",
    "Fundamentos Biológicos del Comportamiento",
    "Procesos Cognitivos",
    "Evolución Histórica de la Psicología",
    "Fundamentos Filosóficos de la Psicología",
    "Taller de Comunicación"
  ],
  "Semestre 2": [
    { name: "Ética", reqs: ["Antropología"] },
    { name: "Neuropsicología", reqs: ["Fundamentos Biológicos del Comportamiento"] },
    "Procesos Afectivos",
    "Fundamentos Sociantropológicos del Comportamiento",
    "Introducción a la Metodología de la Investigación",
    "Taller de Trabajo Grupal",
    { name: "Electivo de Formación Integral I", reqs: ["Ética"] }
  ],
  "Semestre 3": [
    { name: "Psicología Evolutiva I", reqs: ["Procesos Cognitivos", "Procesos Afectivos"] },
    { name: "Psicología de la Personalidad", reqs: ["Procesos Cognitivos", "Procesos Afectivos"] },
    "Psicología Social I",
    { name: "Metodología de la Investigación Aplicada a la Psicología", reqs: ["Introducción a la Metodología de la Investigación"] },
    "Taller de Entrevista",
    "Electivo Formación Integral II"
  ],
  "Semestre 4": [
    { name: "Psicopatología General", reqs: ["Psicología de la Personalidad"] },
    { name: "Psicología Evolutiva II", reqs: ["Psicología Evolutiva I"] },
    { name: "Psicología Social II", reqs: ["Psicología Social I"] },
    { name: "Análisis de Datos Cuantitativos", reqs: ["Metodología de la Investigación Aplicada a la Psicología"] },
    { name: "Evaluación Psicológica Cognitiva", reqs: ["Neuropsicología", "Psicología de la Personalidad"] },
    "Electivo de Formación Integral III"
  ],
  "Semestre 5": [
    { name: "Psicopatología y Psiquiatría Infantil", reqs: ["Psicopatología General"] },
    { name: "Teorías Psicológicas I", reqs: ["Evolución Histórica de la Psicología"] },
    { name: "Análisis de Datos Cualitativos", reqs: ["Metodología de la Investigación Aplicada a la Psicología"] },
    { name: "Evaluación Psicológica de la Personalidad", reqs: ["Evaluación Psicológica Cognitiva"] },
    "Políticas Públicas",
    "Electivo de Formación Integral IV"
  ],
  "Semestre 6": [
    { name: "Teorías Psicológicas II", reqs: ["Evolución Histórica de la Psicología"] },
    { name: "Psicopatología y Psiquiatría Adulto", reqs: ["Psicopatología General"] },
    { name: "Evaluación Psicológica Integrada", reqs: ["Evaluación Psicológica de la Personalidad"] },
    { name: "Introducción a la Formulación y Evaluación de Proyectos Sociales", reqs: ["Metodología de la Investigación Aplicada a la Psicología"] },
    { name: "Taller Persona del Psicólogo", reqs: ["Evaluación Psicológica de la Personalidad"] }
  ],
  "Semestre 7": [
    { name: "Introducción a la Psicoterapia Sistémica", reqs: ["Teorías Psicológicas I"] },
    { name: "Introducción a la Psicoterapia Psicoanalítica", reqs: ["Teorías Psicológicas I"] },
    { name: "Comportamiento Organizacional", reqs: ["Psicología Social II", "Teorías Psicológicas I", "Teorías Psicológicas II"] },
    { name: "Factores Psicológicos en Procesos Educativos", reqs: ["Psicología Social II", "Teorías Psicológicas I", "Teorías Psicológicas II"] },
    { name: "Problemas Psicosociales Actuales", reqs: ["Psicología Social II", "Teorías Psicológicas I", "Teorías Psicológicas II"] }
  ],
  "Semestre 8": [
    { name: "Introducción a la Psicoterapia Cognitiva", reqs: ["Teorías Psicológicas II"] },
    { name: "Introducción a la Psicoterapia Humanista", reqs: ["Teorías Psicológicas II"] },
    { name: "Gestión de Personas y Organizaciones", reqs: ["Comportamiento Organizacional", "Teorías Psicológicas I", "Teorías Psicológicas II"] },
    { name: "Gestión Escolar", reqs: ["Factores Psicológicos en Procesos Educativos", "Teorías Psicológicas I", "Teorías Psicológicas II"] },
    { name: "Psicología Comunitaria", reqs: ["Problemas Psicosociales Actuales", "Teorías Psicológicas I", "Teorías Psicológicas II"] },
    "Electivos Especialización I y II"
  ],
  "Semestre 9": [
    { name: "Proyecto de Investigación", reqs: ["Análisis de Datos Cuantitativos"] },
    "Electivo Especialización III",
    { name: "Integración en Psicología", reqs: ["Teorías Psicológicas I", "Teorías Psicológicas II"] }
  ],
  "Semestre 10": [
    { name: "Práctica Profesional", reqs: ["Proyecto de Investigación", "Integración en Psicología"] },
    { name: "Seminario de Investigación", reqs: ["Proyecto de Investigación", "Integración en Psicología"] }
  ]
};

const state = {};

function isUnlocked(course, approved) {
  if (typeof course === "string") return true;
  return course.reqs.every(r => approved[r]);
}

function renderGrid() {
  grid.innerHTML = "";
  const approved = {};
  for (const k in state) if (state[k]) approved[k] = true;

  Object.entries(courses).forEach(([semester, list]) => {
    const label = document.createElement("div");
    label.textContent = semester;
    label.className = "semester-label";
    grid.appendChild(label);

    list.forEach(item => {
      const name = typeof item === "string" ? item : item.name;
      const unlocked = isUnlocked(item, approved);
      const approvedNow = !!state[name];

      const cell = document.createElement("div");
      cell.className = "course";
      if (!unlocked) cell.classList.add("locked");
      if (approvedNow) cell.classList.add("approved");
      cell.textContent = name;

      if (unlocked) {
        cell.addEventListener("click", () => {
          state[name] = !state[name];
          renderGrid();
        });
      }

      grid.appendChild(cell);
    });
  });
}

renderGrid();
