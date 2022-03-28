import {myProjects} from "./projectsObject.js";
const proyectos_container = document.getElementById('proyectos_container');


var projects = myProjects
const misProyectos = projects.proyects;

misProyectos.forEach(proyecto => {
    let proyectElement = document.createElement('div');
    proyectElement.classList.add('proyecto');

    //aca tengo que crear la estructura de cada card
    let projectInnerHTML = `<div class="proyecto-info">esto es un proyecto</div>`;

    proyectElement.innerHTML = projectInnerHTML;
    proyectos_container.appendChild(proyectElement);
});

//console.log(projects); TODO EL OBJETO
//console.log(projects.proyects.length); EL LARGO DE TODO EL OBJETO
//console.log(projects.proyects[0].tecnologias.length); EL LARGO DEL ARRAY DE TECNOLOGIAS


//ejemplo de card 
/*const projectInnerHTML = `<div class="proyecto-info">
        <div class="img-container"><img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"></div>
        <div class="pokemon-main-data">
        <h3>
            Nombre: ${pokemon.name}
        </h3>
        <p> Type: ${pokemon.types[0].type.name}</p>
        </div>
        <div class="pokemon-stats">
        <p>
            Height: ${pokemon.height}
        </p>
        <p>
            Weight: ${pokemon.weight}
        </p>
        </div>
    </div>`;*/