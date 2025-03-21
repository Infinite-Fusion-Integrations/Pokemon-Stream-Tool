import { current } from "../../Globals.mjs";
import { getBattleAddress } from "./Battle Addresses.mjs";
import { citra } from "./Citra.mjs";

class ReadBattleType {

    /**
     * Compares data to determine if the player is currently in a battle
     * @param {Number} partyReference - Number of first pokemon on the player's party
     * @returns {String} "Wild", "Trainer", or undefined
     */
    async getBattleType(partyReference) {

        // battle data memory is used for other stuff when outside battle
        // because of this, we need to check if the memory is what we expect
        // one easy check is just comparing our first pokemon dex number
        // with the battle memory slot for the first player pokemon

        const wildAdress = getBattleAddress("Wild", current.game);

        const wildData = await citra.readMemory(wildAdress + 4, 2);

        if (partyReference == wildData[0] + wildData[1]*256) {
            return "Wild";
        }

        const trainerAdress = getBattleAddress("Trainer", current.game);

        const trainerData = await citra.readMemory(trainerAdress + 4, 2);

        if (partyReference == trainerData[0] + trainerData[1]*256) {
            return "Trainer";
        }

    }

}

export const readBattleType = new ReadBattleType;