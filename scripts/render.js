let allPokemon = [];
let loadLimit = 151; // 1.Gen


async function init(){ 
   await loadInitialPokemon(); 
    includeHTML();
    renderPokemonList();
}

// push 20 Pokemon to Array allPokemon and start loading remaining Pokemon.
async function loadInitialPokemon() {
    for (let i = 1; i <= 20; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}` // starts with ...pokemon/0
        let response = await fetch(url); 
        let pokemon = await response.json();
        allPokemon.push(pokemon);   
    }
    loadRemainingPokemon(); 
}

// push remaining Pokemon to Array allPokemon
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
        determineBackgroundColor(i);
        typeBgColor(i); 
    }
}

// displays 20 more Pokemon. 
function loadMorePokemon(){
    let content = document.getElementById('content');
    let currentLength = content.children.length; // shows how many Pokemon are already displayed.
    let newLimit = Math.min(currentLength+20, 151) // allows up to 151 Pokemon (1. Gen).

    for (let i = currentLength; i < newLimit; i++) {
        let pokemon = allPokemon[i];
        content.innerHTML += generatePokemonList(pokemon, i);
        determineBackgroundColor(i);
        typeBgColor(i);
    }
}