import {myProjects} from "./projectsObject.js";
const proyectos_container = document.getElementById('proyectos_container');


var projects = myProjects
const misProyectos = projects.proyects;


misProyectos.forEach(proyecto => {
    let proyectElement = document.createElement('div');
    proyectElement.classList.add('proyecto');


    let projectInnerHTML =`<div class="proyecto-info">

    <img src="${proyecto.imagen}" alt="${proyecto.nombre}">
    <div class="proyecto-info-text">
        <h2>${proyecto.nombre}</h2>
        <p>${proyecto.descripcion}</p>
        <div class="proyecto-tecnologias">
            <ul>
                ${proyecto.tecnologias.map(tecnologia => `<li>${tecnologia}</li>`).join('')}
            </ul>
        </div>
        <div class="proyecto-links">
            <a href="${proyecto.repo}" target="_blank" rel="noopener noreferrer">Repo</a>
            <a href="${proyecto.live}" target="_blank" rel="noopener noreferrer">Live</a>
        </div>
    </div>
    </div>`;

    proyectElement.innerHTML = projectInnerHTML;
    proyectos_container.appendChild(proyectElement);
});
