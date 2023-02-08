import AsyncStorage from "@react-native-async-storage/async-storage";
import { playersGetByGroup } from "./playersGetByGroup";
import { PLAYER_COLLECTION } from '../storageConfig';

export async function playerRemoveByGroup(playerName: string, group: string){
    try {
        const storedPlayers = await playersGetByGroup(group);
        if(storedPlayers){
            const players = storedPlayers.filter(player => player.name !== playerName)
            const storage = JSON.stringify(players)
            await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
            return players;
        }
    } catch (error) {
        throw error
    }
}