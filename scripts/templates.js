
// Displays small Pokemon Cards
function generatePokemonList(pokemon, i) {
    let name = pokemon['name'];
    let formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(); // returns first letter uppercased, rest lowercased.

    return /*html*/ `
        <div id="small_card_${i}" class="small_card">
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

/* <div class="info_container"></div> // wird für die große Karte gebraucht. */
