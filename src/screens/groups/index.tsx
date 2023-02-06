import { Highlight } from "../../components/Highlights";
import { Header } from "../../components/Header";
import { Container, Title } from "./styles";
import { GroupCard } from "../../components/GroupCard";

export function Groups (){
    return(
        <Container>
            <Header/>
            <Highlight title="Turmas" subtitle="jogue com suas turmas"/>
            <GroupCard title="LOLzinho"/>
        </Container>
    )
}