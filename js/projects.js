import {myProjects} from "./projectsObject.js";
const proyectos_container = document.getElementById('proyectos_container');


var mydata = myProjects
console.log(mydata);
//const fetchProjects= fetch("js\projects.json").then(res => { return res.json();}).then(json => console.log(json));



/*const createProjectCard = (proyectos) => {


    const pokemontElement = document.createElement('div');
    pokemontElement.classList.add('pokemon');

    const pokeInnerHTML = `<div class="pokemon-info">
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
    </div>`;

    pokemontElement.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemontElement);

    //*SWITCH TIPO DE POKEMON
    pokemontElement.classList.add(pokemon.types[0].type.name);

}*/


