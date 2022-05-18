import { View, Text, StyleSheet } from 'react-native';
import { format } from "date-fns";

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "white",
    padding: 20,
    flexDirection: "row",
    marginBottom: 10,
  },
  leftContainer: {
    flexGrow: 0,
    width: 60,
    height: 60,
    borderRadius: theme.borderRadius.normal,
    marginRight: 20,
  },
  rightContainer: {
    flexGrow: 1,
    flexShrink: 1,
  },
  rating: {
    alignItems: 'center',
    border: `2px solid ${theme.colors.primary}`,
    borderRadius: 100,
    color: theme.colors.primary,
    display: 'flex',
    fontSize: theme.fontSizes.h1,
    fontWeight: theme.fontWeights.bold,
    justifyContent: 'center',
    height: 60,
    width: 60,
  },
  username: {
    fontSize: theme.fontSizes.h1,
    fontWeight: theme.fontWeights.bold,
  },
  date: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.subheading,
    marginBottom: 6,
    marginTop: 6,
  },
  text: {
    marginTop: 6,
  }
});

const ReviewItem = ({ item }) => {
  const {
    //id,
    createdAt,
    rating,
    text,
    user,
  } = item;

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.rating}>{rating}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.date}>{format(new Date(createdAt), "dd.mm.yyyy")}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;