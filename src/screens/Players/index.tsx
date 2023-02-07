import { FlatList } from "react-native";
import { useState } from "react";

import { ButtonIcon } from "../../components/ButtonIcon";
import { PlayerCard } from "../../components/PlayerCard";
import { Highlight } from "../../components/Highlights";
import { ListEmpty } from "../../components/ListEmpty";
import { Header } from "../../components/Header";
import { Filter } from "../../components/Filter";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

export function Players() {
  const [team, setTeam] = useState("Team B");
  const [players, setPlayers] = useState(["Ana", "Bruno", "Carlos", "Diego",'Eduardo','Francisco', 'Gabriel','Heloísa']);

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />
      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
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
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard
          onRemove={() => {}}
          name={item}
          />
          )}
          ListEmptyComponent={() => ( <ListEmpty message="Não há pessoas nesse time" /> )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[{paddingBottom: 100}, players.length === 0 && {flex: 1}]}
      />
      <Button
        title="Remover turma"
        type="SECONDARY"
      />
    </Container>
  );
}