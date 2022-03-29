import {myProjects} from "./projectsObject.js";
const proyectos_container = document.getElementById('proyectos_container');


var projects = myProjects
const misProyectos = projects.proyects;


misProyectos.slice().reverse().forEach(proyecto => { //dar vuelta el array para que se muestren primero los más recientes
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
        
        </div>
    </div>
    </div>`;

    proyectElement.innerHTML = projectInnerHTML;
    proyectos_container.appendChild(proyectElement);

    let proyectoLinks = proyectElement.querySelector('.proyecto-links');
    
    let isLive = "";

    if (proyecto.live != null) {

        isLive = `
        <a href="${proyecto.repo}" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="${proyecto.live}" target="_blank" rel="noopener noreferrer">Web</a>`;
        proyectoLinks.innerHTML = isLive;
    } else {
        isLive = `
        <a href="${proyecto.repo}" target="_blank" rel="noopener noreferrer">Github</a>
        <span>-EN DESARROLLO-</span>`;
        proyectoLinks.innerHTML = isLive;
    }
});


