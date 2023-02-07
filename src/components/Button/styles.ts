import styled, {css} from "styled-components/native";
import { TouchableOpacity } from 'react-native';

export type TButtonStyleProps = 'PRIMARY' | 'SECONDARY';

type TProps ={
    type: TButtonStyleProps
}


export const Container = styled(TouchableOpacity) <TProps>`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK };
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    
`

export const Title = styled.Text`
    ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
    `};
    text-align: center;
`;