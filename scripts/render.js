let allPokemon = [];
let loadLimit = 151;

async function init(){ 
   await loadInitialPokemon(); // await entfernt . evtl probleme beim Laden
    includeHTML();
    renderPokemonList();
}

// push 20 Pokemon to Array allPokemon
async function loadInitialPokemon() {
    for (let i = 1; i <= 20; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}` // starts with ...pokemon/0
        let response = await fetch(url); 
        let pokemon = await response.json();
        allPokemon.push(pokemon);   
    }
    loadRemainingPokemon();
}
// push rest of Pokemon to Array allPokemon
async function loadRemainingPokemon() {
    for (let i = 21; i <= loadLimit; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}` 
        let response = await fetch(url); 
        let pokemon = await response.json();
        allPokemon.push(pokemon);   
    }
}

// shows small Pokemoncards as a List. 
function renderPokemonList(){
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < 20; i++) {
        let pokemon = allPokemon[i];
        content.innerHTML += generatePokemonList(pokemon, i);
        determineBackgroundColor(pokemon, i);
        typeBgColor(pokemon, i);
    }
}
// displays 20 more Pokemon. 
function loadMorePokemon(){
    let content = document.getElementById('content');
    let currentLength = content.children.length;
    let newLimit = Math.min(currentLength+20, 151) // allows up to 151 Pokemon (1. Gen).

    for (let i = currentLength; i < newLimit; i++) {
        let pokemon = allPokemon[i];
        content.innerHTML += generatePokemonList(pokemon, i);
        determineBackgroundColor(pokemon, i);
        typeBgColor(pokemon, i);
    }
}

function renderPokemonInfo() {
    document.getElementById('pokemon_name').innerHTML = currentPokemon['name'];
    document.getElementById('pokemonImage').src = currentPokemon['sprites']['other']["official-artwork"]['front_default'];
}