import { BackButton, BackIcon, Container, Logo } from "./styles";
import { useNavigation } from '@react-navigation/native';
import logoImg from "../../assets/logo.png";

type THeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: THeaderProps) {
  const navigation = useNavigation()
  function handleGoBack(){
    navigation.navigate('group');
  }
  return (
    <Container>
      {
      showBackButton &&
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      }
      <Logo source={logoImg} />
    </Container>
  );
}
