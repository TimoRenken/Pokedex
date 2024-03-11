async function includeHTML() {
    let includeElements = document.querySelectorAll("[w3-include-html]");
    for (let i = 0; i < includeElements.length; i++) {
      const element = includeElements[i];
      file = element.getAttribute("w3-include-html");
      let resp = await fetch(file);
      if (resp.ok) {
        element.innerHTML = await resp.text();
      } else {
        element.innerHTML = "Page not found";
      }
    }
  }

// determine Backgroundcolor of small Card by Pokemontype
function determineBackgroundColor(pokemon, i){
  let card = document.getElementById(`small_card_${i}`);
  let type = pokemon['types']['0']['type']['name'];
  card.classList.add(`type_${type}`);
}

// determine Backgroundcolor of Type.
function typeBgColor(i){
  let displayedType1 = document.getElementById(`display_type${i * 2}`);
  let displayedType2 = document.getElementById(`display_type${i * 2 + 1}`);
  let pokemon = allPokemon[i];
  let type1 = pokemon['types']['0']['type']['name'];
  displayedType1.classList.add(`type_${type1}`);
  
  if (pokemon['types'][1]) { // checks if [1] is true.
    let type2 = pokemon['types']['1']['type']['name'];
    displayedType2.classList.add(`type_${type2}`);
  }
}

function openPokemon(i){
  let content = document.getElementById('content');
  let name = allPokemon[i]['name']; 
  let formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(); // returns first letter uppercased, rest lowercased.
  let pokemon = allPokemon[i];
  let pokemonType = pokemon['types']['0']['type']['name'];
  let pokemonImage = pokemon['sprites']['other']["official-artwork"]['front_default']
  content.innerHTML = generateInfoCard(formattedName,pokemon,pokemonType,pokemonImage, i);
  typeBgColor(i);
}

function closePokemonCard(){
  renderPokemonList();
}