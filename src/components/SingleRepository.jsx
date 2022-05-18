import { View, StyleSheet } from 'react-native';

import theme from '../theme';
import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.lightGray,
    height: '100%',
  },
});

const SingleRepository = () => {
  const { dataRepository } = useRepository();

  console.log('DATA_REPOSITORY', dataRepository);

  return (
    <View style={styles.container}>
      {dataRepository && (
        <RepositoryItem item={dataRepository} link={true} />
      )}
    </View>
  );
};

export default SingleRepository;