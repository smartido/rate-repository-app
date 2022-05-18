import { View, FlatList, StyleSheet } from 'react-native';

import theme from '../theme';
import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.lightGray,
  },
  header: {
    backgroundColor: theme.colors.lightGray,
    paddingBottom: 10,
  }
});

const SingleRepository = () => {
  const { dataRepository } = useRepository();

  const reviewNodes = dataRepository && dataRepository.reviews
    ? dataRepository.reviews.edges.map((edge) => edge.node)
    : [];

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <>
      {dataRepository && (
        <FlatList
          data={reviewNodes}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item }) => <ReviewItem item={item} />}
          keyExtractor={({ id }) => id}
          ListHeaderComponent={() => <RepositoryItem item={dataRepository} link={true} />}
          ListHeaderComponentStyle={styles.header}
        />
      )}
    </>
  );
};

export default SingleRepository;