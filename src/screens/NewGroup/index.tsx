import {useNavigation, useRoute} from '@react-navigation/native';
import { Alert } from 'react-native'
import { useState } from 'react';

import { groupCreate } from '../../storage/group/groupCreate';
import { AppError } from '../../utils/AppError';

import { Container, Content, Icon } from "./styles";

import { Highlight } from "../../components/Highlights";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";


export function NewGroup() {

  const navigation = useNavigation()
  const route = useRoute();
  const [group, setGroup] = useState('');

  async function handleNew() {
    try {

      if(group.trim().length === 0){
        return Alert.alert('Novo grupo', 'Informe o nome da turma')
      }

      await groupCreate(group)
      
      navigation.navigate('players',{ group })

    } catch (error) {
      
      if(error instanceof AppError){
        Alert.alert('Novo grupo', error.message)
      }else{
        Alert.alert('Novo grupo','Não foi possível adicionar novo grupo')
        console.log(error);
      }
    
    }
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
        <Input placeholder='Nome da turma' onChangeText={setGroup} />
        <Button title="Criar" onPress={handleNew} />
      </Content>
    </Container>
  );
}
