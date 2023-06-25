import { loadKeybinds } from './GUI/Keybinds.mjs';
import { inside, stPath } from './GUI/Globals.mjs';
import { pokemons } from './GUI/Pokemon/Pokemons.mjs'
import { settings } from './GUI/Settings.mjs';
import { Pokemon } from './GUI/Pokemon/Pokemon.mjs';
import { pokeFinder } from './GUI/Finder/Pokemon Finder.mjs';
import { updateGUI } from './GUI/Remote Update.mjs';
import { getJson } from './GUI/File System.mjs';
import { updatePlayer } from './GUI/Player/Update Player.mjs';
import { updateTeam } from './GUI/Pokemon/Update Team.mjs';
// so it loads the listeners
import './GUI/Top Bar.mjs';

// this is a weird way to have file svg's that can be recolored by css
customElements.define("load-svg", class extends HTMLElement {
    async connectedCallback(
      shadowRoot = this.shadowRoot || this.attachShadow({mode:"open"})
    ) {
      shadowRoot.innerHTML = await (await fetch(this.getAttribute("src"))).text()
    }
});

// just in case we somehow go out of view
window.onscroll = () => { window.scroll(0, 0) };


init();
/** It all starts here */
async function init() {
    
    // we need to set the current char path
    await settings.load();


    // initialize our pokemon class
    const pokeEls = document.getElementsByClassName("pokemonDiv");
    for (let i = 0; i < pokeEls.length; i++) {
        pokemons.push(new Pokemon(pokeEls[i]))
    }

    
    // initialize the character list
    pokeFinder.loadCharacters();


    // get those keybinds running
    loadKeybinds();


    // update the GUI on startup so we have something to send to browsers
    if (inside.electron) {

        // load previous gui state
        const storedData = await getJson(`${stPath.text}/GUI State`);
        updateGUI(storedData.storedTeamData, true);
        updateGUI(storedData.storedPlayerData, true);

        // send that data
        updatePlayer();
        updateTeam();

    } else { // remote GUIs will ask about the current main GUI state
        const remote = await import("./GUI/Remote Requests.mjs");
        remote.startWebsocket();
    }

}
