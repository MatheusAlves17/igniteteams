import { Text } from "react-native";
import { Container, Content, Icon } from "./styles";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlights";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />
        <Input/>
        <Button title="Criar" />
      </Content>
    </Container>
  );
}
