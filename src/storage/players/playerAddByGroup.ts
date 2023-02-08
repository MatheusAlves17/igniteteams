import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "../../utils/AppError";

import { playersGetByGroup } from "./playersGetByGroup";
import { TPlayerStorageDTO } from './PlayerStorageDTO';
import { PLAYER_COLLECTION } from '../storageConfig';

export async function playerAddByGroup(newPlayer: TPlayerStorageDTO, group: string){
    try {

        const storedPlayers = await playersGetByGroup(group)
        const playerAlredyExists = storedPlayers.filter(player => player.name === newPlayer.name)

        if(playerAlredyExists.length > 0){
            throw new AppError('Participante já foi adicionado');
        }

        const storage = JSON.stringify([...storedPlayers, newPlayer]);

        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage); 

    } catch (error) {
        throw error;
    }
}