let allPokemon = [];
let currentPokemon;  // ich bin mir noch nicht ganz sicher, ob das wirklich notwendig ist. 
let loadLimit = 21;

async function init(){ 
    await loadPokemon();
    includeHTML();
    renderPokemonList();
}

// push API to Array allPokemon
async function loadPokemon() {
    for (let i = 1; i < loadLimit; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}` // starts with ...pokemon/0
        let response = await fetch(url); 
        currentPokemon = await response.json();
        allPokemon.push(currentPokemon);   
    }
    console.log('loaded Pokemon', currentPokemon); 
}

function renderPokemonInfo() {
    document.getElementById('pokemon_name').innerHTML = currentPokemon['name'];
    document.getElementById('pokemonImage').src = currentPokemon['sprites']['other']["official-artwork"]['front_default'];
}
// shows small Pokemoncards as a List. 
function renderPokemonList(){
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < allPokemon.length; i++) {
        const pokemon = allPokemon[i];
        content.innerHTML += generatePokemonList(pokemon, i);
        determineBackgroundColor(pokemon, i);
    }

}

