import { ButtonIcon } from "../../components/ButtonIcon";
import { Container, Icon, Name } from "./styles";

type TPlayerCard = {
  name: string;
  onRemove: () => void;
};

export function PlayerCard({ name, onRemove }: TPlayerCard) {
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>
      <ButtonIcon
        icon="close"
        type="SECONDARY"
        onPress={onRemove}
      />
    </Container>
  );
}
