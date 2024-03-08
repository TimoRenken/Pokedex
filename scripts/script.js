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
function typeBgColor(pokemon, i){
  let displayedType1 = document.getElementById(`display_type${i * 2}`);
  let displayedType2 = document.getElementById(`display_type${i * 2 + 1}`);
  let type1 = pokemon['types']['0']['type']['name'];
  displayedType1.classList.add(`type_${type1}`);
  
  if (pokemon['types'][1]) {
    let type2 = pokemon['types']['1']['type']['name'];
    displayedType2.classList.add(`type_${type2}`);
  }
}