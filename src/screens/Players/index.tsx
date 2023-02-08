import { useRoute } from "@react-navigation/native";
import { FlatList, Alert, TextInput} from 'react-native';
import { useState, useEffect, useRef } from "react";

import { AppError } from "../../utils/AppError";

import { playerGetByGroupAndTeam } from '../../storage/players/playerGetByGroupAndTeam';
import { playerRemoveByGroup } from '../../storage/players/playerRemoveByGroup';
import { TPlayerStorageDTO } from "../../storage/players/PlayerStorageDTO";
import { playerAddByGroup } from '../../storage/players/playerAddByGroup';

import { ButtonIcon } from "../../components/ButtonIcon";
import { PlayerCard } from "../../components/PlayerCard";
import { Highlight } from "../../components/Highlights";
import { ListEmpty } from "../../components/ListEmpty";
import { Header } from "../../components/Header";
import { Filter } from "../../components/Filter";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

type TRouteParams = {
  group: string;
};

export function Players() {
  const route = useRoute();
  const { group } = route.params as TRouteParams;
  const newPlayerNameInput = useRef<TextInput>(null)
  
  const [players, setPlayers] = useState<TPlayerStorageDTO[]>([]); 
  const [newPlayerName,setNewPlayerName] = useState('');
  const [team, setTeam] = useState("Team A");


  async function handleAddPlayer(){
    if(newPlayerName.trim().length === 0){
      return Alert.alert('Novo participante', 'Informe um nome para adicionar alguém ao time')
    }
    const newPlayer = {
      name: newPlayerName,
      team,
    }

    try {
      await playerAddByGroup(newPlayer, group);
      newPlayerNameInput.current?.blur()
      fetchPlayersByTeam();
      setNewPlayerName('');
      
    } catch (error) {
      if(error instanceof AppError){
        Alert.alert('Novo participante', error.message)
      }
      else{
        console.log(error);
        Alert.alert('Novo participante', 'Não foi possível adicionar participante ao grupo')
        
      }
    }
  }

  async function handlePlayerRemove(playerName: string){
    try {
      await playerRemoveByGroup(playerName, group)
      fetchPlayersByTeam()
    } catch (error) {
      throw error;
    }
  }


  async function fetchPlayersByTeam(){
    try {
      const playersByTeam = await playerGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);


    } catch (error) {
      console.log(error);
      Alert.alert('Participantes', 'Não foi possível carregar os participantes do time selecionado')
      
    }
  } 


  useEffect(() => {
    fetchPlayersByTeam()
  },[team])


  return (
    <Container>
      <Header showBackButton />
      <Highlight 
        title={group}
        subtitle="adicione a galera e separe os times"
      />
      <Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
          inputRef={newPlayerNameInput}
          value={newPlayerName}
          onChangeText={setNewPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType='done'
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer}/>
      </Form>
      <HeaderList>
        <FlatList
          data={["Team A", "Team B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <PlayerCard onRemove={() => {handlePlayerRemove(item.name)}} name={item.name} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />
      <Button title="Remover turma" type="SECONDARY" />
    </Container>
  );
}
