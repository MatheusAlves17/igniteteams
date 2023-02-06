import { Container, Subtitle, Title } from "./styles";

type THighlightProps = {
    title: string,
    subtitle: string,
}


export function Highlight({title, subtitle}: THighlightProps){
    return(
        <Container>
            <Title>{ title }</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Container>
    )
}