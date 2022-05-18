import { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';
import { useDebounce } from "use-debounce";

import RepositoryItem from './RepositoryItem';
import theme from '../theme';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.lightGray,
    padding: 20,
  },
  separator: {
    height: 10,
    backgroundColor: theme.colors.lightGray,
  },
  picker: {
    backgroundColor: theme.colors.lightGray,
    border: 0,
    marginTop: 20,
    padding: 10,
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({
  repositories,
  orderDirection,
  setOrderDirection,
  searchKeyword,
  setSearchKeyword,
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const renderHeader = () => {
    return (
      <View style={styles.container}>
        <Searchbar
          placeholder="Search"
          onChangeText={(keyword) => setSearchKeyword(keyword)}
          value={searchKeyword}
        />
        <Picker
          selectedValue={orderDirection}
          onValueChange={(item) => setOrderDirection(item)}
          style={styles.picker}
        >
          <Picker.Item label="Latest repositories" value='' />
          <Picker.Item label="Highest related repositories" value='DESC' />
          <Picker.Item label="Lowest related repositories" value='ASC' />
        </Picker>
      </View>
    )
  }

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      keyExtractor={item => item.id}
      ListHeaderComponent={renderHeader}
    />
  );
};

const RepositoryList = () => {
  const [orderDirection, setOrderDirection] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [debouncedSearchKeyword] = useDebounce(searchKeyword, 500);

  const { dataRepositories } = useRepositories(orderDirection, debouncedSearchKeyword);

  return (
    <RepositoryListContainer
      repositories={dataRepositories}
      orderDirection={orderDirection}
      setOrderDirection={setOrderDirection}
      searchKeyword={debouncedSearchKeyword}
      setSearchKeyword={setSearchKeyword}
    />
  );
};

export default RepositoryList;