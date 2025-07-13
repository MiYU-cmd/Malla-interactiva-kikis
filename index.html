<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Malla Curricular Interactiva</title>
    <style>
        * {
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }
        
        body {
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5;
        }
        
        h1 {
            text-align: center;
            color: #333;
            margin-bottom: 20px;
        }
        
        .semester-container {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            margin-bottom: 15px;
            overflow: hidden;
        }
        
        .semester-header {
            background-color: #4a6fa5;
            color: white;
            padding: 12px 15px;
            font-weight: bold;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .semester-header:hover {
            background-color: #3a5a8a;
        }
        
        .semester-courses {
            display: none;
            padding: 0;
            margin: 0;
        }
        
        .semester-courses.show {
            display: block;
        }
        
        .course {
            padding: 12px 15px;
            border-bottom: 1px solid #eee;
            position: relative;
        }
        
        .course:last-child {
            border-bottom: none;
        }
        
        .course.locked {
            color: #999;
            background-color: #f9f9f9;
        }
        
        .course.approved {
            background-color: #e8f5e9;
            color: #2e7d32;
        }
        
        .toggle-icon {
            transition: transform 0.3s;
        }
        
        .toggle-icon.rotated {
            transform: rotate(90deg);
        }
        
        @media (min-width: 768px) {
            body {
                padding: 30px;
                max-width: 800px;
                margin: 0 auto;
            }
        }
    </style>
</head>
<body>
    <h1>Malla Curricular de Psicología</h1>
    <div id="grid"></div>

    <script>
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
            // ... (resto de los semestres como en tu código original)
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

            const ordered = Object.entries(courses).sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }));

            ordered.forEach(([semester, list]) => {
                const container = document.createElement("div");
                container.className = "semester-container";
                
                const header = document.createElement("div");
                header.className = "semester-header";
                header.innerHTML = `
                    <span>${semester}</span>
                    <span class="toggle-icon">›</span>
                `;
                
                const coursesContainer = document.createElement("div");
                coursesContainer.className = "semester-courses";
                
                list.forEach(item => {
                    const name = typeof item === "string" ? item : item.name;
                    const unlocked = isUnlocked(item, approved);
                    const approvedNow = !!state[name];

                    const course = document.createElement("div");
                    course.className = "course";
                    if (!unlocked) course.classList.add("locked");
                    if (approvedNow) course.classList.add("approved");
                    course.textContent = name;

                    if (unlocked) {
                        course.addEventListener("click", () => {
                            state[name] = !state[name];
                            renderGrid();
                        });
                    }

                    coursesContainer.appendChild(course);
                });
                
                header.addEventListener("click", () => {
                    coursesContainer.classList.toggle("show");
                    header.querySelector(".toggle-icon").classList.toggle("rotated");
                });
                
                container.appendChild(header);
                container.appendChild(coursesContainer);
                grid.appendChild(container);
            });
        }
        
        renderGrid();
    </script>
</body>
</html>
