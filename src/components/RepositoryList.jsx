import { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import RepositoryItem from './RepositoryItem';
import theme from '../theme';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.lightGray,
  },
  separator: {
    height: 10,
    backgroundColor: theme.colors.lightGray,
  },
  picker: {
    backgroundColor: theme.colors.lightGray,
    border: 0,
    margin: 20,
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, orderDirection, setOrderDirection }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={orderDirection}
        onValueChange={(item) => setOrderDirection(item)}
        style={styles.picker}
      >
        <Picker.Item label="Latest repositories" value={""} />
        <Picker.Item label="Highest related repositories" value="DESC" />
        <Picker.Item label="Lowest related repositories" value="ASC" />
      </Picker>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const RepositoryList = () => {
  const [orderDirection, setOrderDirection] = useState("");

  const { dataRepositories } = useRepositories(orderDirection);

  return (
    <RepositoryListContainer
      repositories={dataRepositories}
      orderDirection={orderDirection}
      setOrderDirection={setOrderDirection} 
    />
  );
};

export default RepositoryList;