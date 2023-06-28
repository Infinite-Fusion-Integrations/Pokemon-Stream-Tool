import { pokeFinder } from "../Finder/Pokemon Finder.mjs";
import { current, stPath } from "../Globals.mjs";

const dexGen = new pkmn.data.Generations(pkmn.dex.Dex);
const pokeInfo = dexGen.get(current.generation).species;

export class Pokemon {

    #gender = "M";
    #types = [];

    constructor(el) {

        this.pokeSel = el.getElementsByClassName(`pokeSelector`)[0];
        this.nickInp = el.getElementsByClassName(`pokeNickName`)[0];
        this.lvlInp = el.getElementsByClassName("pokeLvlNumber")[0];
        this.formSel = el.getElementsByClassName(`pokeForm`)[0];

        this.genderButt = el.getElementsByClassName(`pokeGenderButton`)[0];
        this.genderIcon = el.getElementsByClassName(`pokeGenderIcon`)[0];

        this.typeImg1 = el.getElementsByClassName('typeIcon1')[0];
        this.typeImg2 = el.getElementsByClassName('typeIcon2')[0];
        
        
        // set a listener that will trigger when pokemon selector is clicked
        this.pokeSel.addEventListener("click", () => {
            pokeFinder.open(this.pokeSel);
            pokeFinder.setCurrentPokemon(this);
            pokeFinder.focusFilter();
        });
        // also set an initial pokemon value
        this.setSpecies();

        this.genderButt.addEventListener("click", () => {this.swapGender()});

    }

    getSpecies() {
        return this.pokeSel.children[1].innerHTML;
    }
    /**
     * Sets a new pokemon based on the name
     * @param {String} name - Name of the pokemon
     */
    setSpecies(name) {

        // if we select none, just display nothin
        if (!name || name == "None") {
            this.pokeSel.children[1].innerHTML = "";
            this.pokeSel.children[0].src = `${stPath.poke}/../None.png`;
        } else {

            // this will fetch us all the data we will ever need
            const pokeData = pokeInfo.get(name);

            // set the pokemon name and icon on the selector
            this.pokeSel.children[1].innerHTML = name;
            this.pokeSel.children[0].src = `${stPath.poke}/${name}/Icon/Default.png`;

            // set pokemon types
            this.#types = pokeData.types;
            // set type images
            this.typeImg1.src = `${stPath.assets}/Type Icons/${this.#types[0]}.png`;
            // show or hide second type image
            if (this.#types[1]) {
                this.typeImg2.src = `${stPath.assets}/Type Icons/${this.#types[1]}.png`;
                this.typeImg2.style.display = "block";
            } else {
                this.typeImg2.style.display = "none";
            }

            // gender locking
            if (pokeData.genderRatio.M == 1) {
                this.setGender("M");
                this.disableGenderButt();
            } else if (pokeData.genderRatio.F == 1) {
                this.setGender("F");
                this.disableGenderButt();
            } else if (pokeData.genderRatio.M == 0 && pokeData.genderRatio.F == 0) {
                this.setGender();
                this.disableGenderButt();
            } else {
                this.enableGenderButt();
            }
            

        }

    }

    getNickName() {
        return this.nickInp.value;
    }
    setNickName(name) {
        if (name) {
            this.nickInp.value = name;
        } else {
            this.nickInp.value = "";
        }
    }

    getLvl() {
        return this.lvlInp.value;
    }
    setLvl(value) {
        this.lvlInp.value = value;
    }

    getForm() {
        return this.formSel.value;
    }
    setForm(value) {
        this.formSel.value = value;
    }

    getGender() {
        return this.#gender;
    }
    setGender(value) {
        if (value) {
            this.#gender = value;
            this.genderIcon.src = `${stPath.assets}/Gender ${value}.png`;
        } else {
            this.#gender = "M";
            this.genderIcon.src = `${stPath.assets}/Gender N.png`;
        }
    }
    swapGender() {
        if (this.getGender() == "M") {
            this.setGender("F");
        } else {
            this.setGender("M");
        }
    }
    disableGenderButt() {
        this.genderButt.disabled = true;
    }
    enableGenderButt() {
        this.genderButt.disabled = false;
    }

    getTypes() {
        return this.#types;
    }

    getSriteImgSrc() {
        return `../../Resources/Assets/Pokemon/${this.getSpecies()}/Sprite Anim/${this.getForm()}.gif`;
    }

}