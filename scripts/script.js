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

// determine Backgroundcolor of Cards by Pokemontype
function determineBackgroundColor(i){
  let card = document.getElementById(`small_card_${i}`);                      
  let type = allPokemon[i]['types']['0']['type']['name'];
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
    displayedType2.classList.add(`type_${type2}`); // watch CSS-Style "background_colors".
  }
}

// open a Pokemon for more Details
function openPokemon(i){
  let content = document.getElementById('detail_card');
  let name = allPokemon[i]['name']; 
  let formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(); // returns first letter uppercased, rest lowercased.
  let pokemon = allPokemon[i];
  let pokemonType = pokemon['types']['0']['type']['name'];
  let pokemonImage = pokemon['sprites']['other']["official-artwork"]['front_default']
  content.innerHTML = generateInfoCard(formattedName,pokemon,pokemonType,pokemonImage, i);
  content.style.display = 'block';
  BackgroundColorOfInfoCard(i);
  typeBgColorOfInfoCard(i);
  renderChart(pokemon);
  toggleScrolling(true);
}

// determine Backgroundcolor of Infocard by Pokemontype.
function BackgroundColorOfInfoCard(i){
  let detailCard = document.getElementById('info_card_Bg')
  let type = allPokemon[i]['types']['0']['type']['name'];
  detailCard.classList.add(`type_${type}`);
}

// determine  "Type - Backgroundcolor" of Infocard.
function typeBgColorOfInfoCard(i){
  let displayedType1 = document.getElementById(`display_type${i * 2}IC`);
  let displayedType2 = document.getElementById(`display_type${i * 2 + 1}IC`);
  let pokemon = allPokemon[i];
  let type1 = pokemon['types']['0']['type']['name'];
  displayedType1.classList.add(`type_${type1}`);
  
  if (pokemon['types'][1]) { // checks if [1] is true / available.
    let type2 = pokemon['types']['1']['type']['name'];
    displayedType2.classList.add(`type_${type2}`); // watch CSS-Style "background_colors".
  }
}

// close Pokemondetails
function closePokemonCard(){
  document.getElementById('detail_card').style.display = 'none';
  toggleScrolling(false);
}

// toogle Scrollbar
function toggleScrolling(stopScrolling){
  let body = document.getElementById('body');
  if(stopScrolling){ // if true
    body.classList.add("toggle_scrollbar");
  } else { // if false
    body.classList.remove("toggle_scrollbar");
  }
}

// load next Pokemon in the Infocard
function nextPokemon(i){
  toggleScrolling(false);
  if(i == allPokemon.length -1){
    i = 0;
  } else i++;
  openPokemon(i);
}

// load previous Pokemon in the Infocard
function previousPokemon(i){
  toggleScrolling(false);
  if(i == 0){
    i = allPokemon.length -1;
  }else i--;
  openPokemon(i);
}

// do not close Content on Click.
function doNotClose(event){
  event.stopPropagation();
}

// search Pokemon 

function searchPokemon(){
  let search = document.getElementById('search').value;
  search = search.toLowerCase();
  let content = document.getElementById('content');
  content.innerHTML = '';
  let foundPokemon = searchInPokemonList(search, content); // returns true or false. If it's true, generatePokemonList() is executed. Else generatePokomonNotFound().

  if (!foundPokemon){ // if false
    content.innerHTML = generatePokemonNotFound();
  }
  document.getElementById('loading_btn').style.display = "none";
}

function searchInPokemonList(search, content) {
  let foundPokemon = false;
  for (let i = 0; i < allPokemon.length; i++) {
    let searchedPokemon = allPokemon[i]['name'];
    if(searchedPokemon.toLowerCase().includes(search)){ // if the value of the inputfield is in the Array allPokemon => generatePokemonList()
      content.innerHTML += generatePokemonList(allPokemon[i], i); 
      determineBackgroundColor(i);
      typeBgColor(i); 
      foundPokemon = true;
    }
  }
  return foundPokemon; // else return false
}

// add Eventlistener to Input search Pokemon
function searchAfter3Letters(){
let inputField = document.getElementById('search');
inputField.addEventListener('input', function() { // 'input' = event = type in inputfield / function() = anonym Function = only usable in this function. 
  let search = this.value;  // current text in inputfield.

  if (search.length >= 3) {
    searchPokemon();
  } else if (search.length === 0) {
    renderPokemonList();
    document.getElementById('loading_btn').style.display = "flex";
  }
});
}
