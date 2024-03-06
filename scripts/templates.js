function generatePokemonList(pokemon){
    let name = pokemon['name'];
    let formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(); // returns first letter uppercased

    return /*html*/ `
        <div id="small_card">
            <div>
                <h1>${formattedName}</h1>
                <div>${pokemon['types']['0']['type']['name']}</div>
                <div>${pokemon['types'][1] ? `<div>${pokemon['types']['1']['type']['name']}</div>` : ''}</div>
            </div>
            <div>
                <div class="card_id">#${pokemon['id']}</div>
                <img class="small_card_img" src="${pokemon['sprites']['other']["official-artwork"]['front_default']}" alt="picture of Pokemon">
            </div>
        </div>`;
}

/* <div class="info_container"></div> // wird für die große Karte gebraucht. */
    