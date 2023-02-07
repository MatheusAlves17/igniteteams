import {useNavigation} from '@react-navigation/native'
import { Highlight } from "../../components/Highlights";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container, Content, Icon } from "./styles";

export function NewGroup() {

  const navigation = useNavigation()

  function handlePlayers() {
    navigation.navigate('players',{group: 'rocket'})
  }
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />
        <Input />
        <Button title="Criar" onPress={handlePlayers} />
      </Content>
    </Container>
  );
}
