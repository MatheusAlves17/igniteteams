import { TouchableOpacity } from "react-native";
import { Container, TButtonStyleProps, Title } from "./styles";

type TButtonProps = TouchableOpacity & {
    title: string;
    type?: TButtonStyleProps;
}

export function Button({title, type = 'PRIMARY', ...rest}: TButtonProps){
    return (
        <Container type={type} {...rest}>
            <Title>{title}</Title>
        </Container>
    )
}