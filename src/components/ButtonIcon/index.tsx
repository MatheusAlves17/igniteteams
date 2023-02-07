import { TouchableOpacityProps } from "react-native";
import { Container, Icon, TButtonIconStyleProps } from "./styles";
import { MaterialIcons } from '@expo/vector-icons'

type TButtonIconProps = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap;
    type?: TButtonIconStyleProps;
}

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: TButtonIconProps){
    return(
        <Container {...rest}>
            <Icon
                name={icon}
                type={type}
            />
        </Container>
    )
}