import { FlatList } from "react-native";
import { useState, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";

import { groupsGetAll } from "../../storage/group/groupsGetAll";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ListEmpty } from "../../components/ListEmpty";
import { GroupCard } from "../../components/GroupCard";
import { Highlight } from "../../components/Highlights";

import { Container, Title } from "./styles";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("new");
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      throw error;
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("players", { group });
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight title="Turma" subtitle="jogue com suas turmas" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
            onPress={() => handleOpenGroup(item)}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={
          <ListEmpty message="Que tal adicionar turmas à sua lista?" />
        }
      />
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}
