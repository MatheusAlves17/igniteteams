import { BackButton, BackIcon, Container, Logo } from "./styles";

import logoImg from "../../assets/logo.png";

type THeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: THeaderProps) {
  return (
    <Container>
      {
      showBackButton &&
        <BackButton>
          <BackIcon />
        </BackButton>
      }
      <Logo source={logoImg} />
    </Container>
  );
}
