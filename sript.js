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

let nombreDev = "Alejandro Camacho";
let habilidades = ["React", "JavaScript", "Node.js", "CSS"];
let experiencia = { años: 2, especialidad: "Desarrollo Web" };

let misProyectos = [
    { nombre: "App de Testimonios", techs: ["React", "CSS"] },
    { nombre: "Contador de Clicks", techs: ["React"] },
    { nombre: "Calculadora", techs: ["React"] },
    { nombre: "App de Tareas", techs: ["React", "JavaScript"] }
];

let nombresProyectos = misProyectos.map(p => p.nombre);
console.log(nombresProyectos);

let proyectosReact = misProyectos.filter(p => p.techs.includes("React"));
console.log(proyectosReact);

let stackStats = misProyectos.flatMap(p => p.techs).reduce((acc, tech) => {
    acc[tech] = (acc[tech] || 0) + 1;
    return acc;
}, {});

console.log(stackStats);

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

function crearContador(inicial) {
    let contador = inicial;
    return {
        incrementar: function() {
            contador++;
            return contador;
        },
        obtenerTotal: function() {
            return contador;
        }
    };
}

let totalTarjetas = document.querySelectorAll(".project-card").length;
let contadorProyectos = crearContador(totalTarjetas);

console.log(contadorProyectos.obtenerTotal());
console.log(contadorProyectos.incrementar());

let textoContador = document.getElementById("contador-proyectos");
if (textoContador) {
    textoContador.innerText = "Total: " + contadorProyectos.obtenerTotal();
}