
// Displays small Pokemon Cards
function generatePokemonList(pokemon, i) {
    let name = pokemon['name'];
    let formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(); // returns first letter uppercased, rest lowercased.

    return /*html*/ `
        <div id="small_card_${i}" class="small_card" onclick="openPokemon(${i})">
            <div class="small_card_body">
                 <div class="d_flex_sb_c small_card_header">
                    <h1 class="color_white">${formattedName}</h1>
                    <div class="card_id">#${pokemon['id']}</div>
                </div>
                <div class="d_flex_sb_c">
                   <div class="types_small">
                   <div id="display_type${i * 2}" class="display_type">${pokemon['types']['0']['type']['name']}</div>
                   <div id="display_type${i * 2 + 1}" class="display_type">${pokemon['types'][1] ? `<div>${pokemon['types']['1']['type']['name']}</div>` : ''}</div>
                </div>
               <div>
                 <img class="small_card_img" src="${pokemon['sprites']['other']["official-artwork"]['front_default']}" alt="picture of Pokemon">
               </div>
             </div>
            </div>
        </div>
        `;
        
}

function generateInfoCard(formattedName, pokemon, pokemonType, pokemonImage, i){
  

  return /*html*/ `
  <div class="info_card_background">
    <div class="info_card_body">
      <div class="info_card_header">
        <div class="close_btn" onclick="closePokemonCard()"><span class="material-symbols-outlined">close</span></div>
        <div class="d_flex_sb_c">
          <h1 class="color_white">${formattedName}</h1>
          <div class="card_id">#${pokemon['id']}</div>
        </div>
        <div class="d_flex info_card_type">
          <div id="display_type${i * 2}" class="display_type">${pokemonType}</div>
          <div id="display_type${i * 2 + 1}" class="display_type">${pokemon['types'][1] ? `<div>${pokemon['types']['1']['type']['name']}</div>` : ''}</div>
        </div>
      </div>
      <div class="info_container">
        <img class="pokemonImage" src="${pokemonImage}" alt="picture of Pokemon">
        <nav class="card_navbar d_flex_se_c">
          <a href="#">About</a>
          <a href="#">Base Stats</a>
          <a href="">Evolution</a>
          <a href="">Moves</a>
        </nav>
        <div class="muss nach link gerendert werden"></div>
      </div>
    </div>
  </div>
  `
}