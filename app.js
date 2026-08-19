let pokemon = document.getElementById("pokeUser");
let buscar = document.getElementById("buscar");
let resultado = document.getElementById("resultado");

// Función async para buscar el Pokémon
async function buscarPokemon() {

    try {

        console.log(pokemon.value);

        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.value.toLowerCase()}`
        );

        if (!response.ok) {
            throw new Error("Pokemon no encontrado");
        }

        const data = await response.json();

        console.log(data);

        resultado.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>Altura: ${data.height}</p>
            <p>Peso: ${data.weight}</p>
            <p>Tipo: ${data.types.map(type => type.type.name).join(", ")}</p>
            <p>Habilidades: ${data.abilities.map(ability => ability.ability.name).join(", ")}</p>
        `;

    } catch (error) {

        console.error(error);

        resultado.innerHTML = `
            <p>No hemos encontrado tu pokemon, revisa el nombre e intenta de nuevo...</p>
        `;

    }
}


// Buscar con el botón
buscar.addEventListener("click", function(event) {

    event.preventDefault();

    buscarPokemon();

});


// Buscar presionando Enter
pokemon.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        event.preventDefault();

        buscarPokemon();

    }

});