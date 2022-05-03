import { View, Text, Image, StyleSheet } from 'react-native';
import theme from '../theme';
import Counter from './Counter';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "white",
    padding: 20,
  },
  topContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  topContainerA: {
    flexGrow: 0,
    width: 60,
    height: 60,
    borderRadius: theme.borderRadius.normal,
    marginRight: 20,
  },
  topContainerB: {
    flexGrow: 1,
    flexShrink: 1,
  },
  title: {
    fontSize: theme.fontSizes.h1,
    fontWeight: theme.fontWeights.bold,
  },
  subtitle: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.subheading,
    marginTop: 6,
  },
  language: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.normal,
    color: "white",
    marginTop: 6,
    padding: 6,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

const RepositoryItem = ({ item }) => {
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
  } = item;

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          style={styles.topContainerA}
          source={{ uri: ownerAvatarUrl }}
        />
        <View style={styles.topContainerB}>
          <Text style={styles.title}>{fullName}</Text>
          <Text style={styles.subtitle}>{description}</Text>
          <Text style={styles.language}>{language}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Counter number={stargazersCount} text="Stars" />
        <Counter number={forksCount} text="Forks" />
        <Counter number={reviewCount} text="Reviews" />
        <Counter number={ratingAverage} text="Rating" />
      </View>
    </View>
  );
};

export default RepositoryItem;