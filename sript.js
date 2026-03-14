const botonProyectos = document.getElementById("ver-proyectos");

function mostrarProyectos() {
    const seccion = document.getElementById("projects");
    if (seccion) {
        seccion.scrollIntoView({ behavior: "smooth" });
    }
}

if (botonProyectos) {
    botonProyectos.addEventListener("click", mostrarProyectos);
}

async function cargarProyectos() {
    try {
        const response = await fetch("https://api.github.com/users/AlexandroCamacho1000/repos");
        if (!response.ok) {
            throw new Error("Error al cargar los proyectos");
        }
        const proyectos = await response.json();
        const contenedor = document.getElementById("contenedor-proyectos");
        
        contenedor.innerHTML = "";
        proyectos.forEach(proyecto => {
            contenedor.innerHTML += `
                <div class="project-card">
                    <h3>${proyecto.name}</h3>
                    <p>${proyecto.description || "Sin descripción"}</p>
                    <a href="${proyecto.html_url}" target="_blank" class="project-link">Ver en GitHub</a>
                </div>
            `;
        });

        let total = document.querySelectorAll(".project-card").length;
        let texto = document.getElementById("contador-proyectos");
        if (texto) {
            texto.innerText = "Total: " + total;
        }

    } catch (error) {
        console.log("Error al cargar proyectos de GitHub");
        const contenedor = document.getElementById("contenedor-proyectos");
        contenedor.innerHTML = "<p>No se pudieron cargar los proyectos</p>";
    }
}

cargarProyectos();

let contenedor = document.getElementById("contenedor-proyectos");
if (contenedor) {
    contenedor.addEventListener("click", function(e) {
        let tarjeta = e.target.closest(".project-card");
        if (tarjeta) {
            let nombre = tarjeta.querySelector("h3").innerText;
            alert("Proyecto: " + nombre);
        }
    });
}

let nombreDev = "Alejandro Camacho";
let habilidades = ["React", "JavaScript", "Node.js", "CSS"];
let experiencia = { años: 2, especialidad: "Desarrollo Web" };

console.log(habilidades);
console.log(experiencia);