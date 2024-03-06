function generatePokemonList(pokemon){
    return /*html*/ `
        <div id="small_card">
            <div>
                <h1>${pokemon['name']}</h1>
                <div>${pokemon['types']['0']['type']['name']}</div>
                <div>${pokemon['types'][1] ? `<div>${pokemon['types']['1']['type']['name']}</div>` : ''}</div>
            </div>
            <div>
                <div>${pokemon['id']}</div>
                <img src="${pokemon['sprites']['other']["official-artwork"]['front_default']}" alt="picture of Pokemon">
            </div>
        </div>`;
}

/* <div class="info_container"></div> // wird für die große Karte gebraucht. */
    