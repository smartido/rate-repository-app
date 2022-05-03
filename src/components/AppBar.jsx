import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.darkGray,
  },
  scrollView: {
    flexDirection: "row",
    padding: 10,
  },
  text: {
    color: 'white',
    fontWeight: theme.fontWeights.bold,
    margin: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollView}>
        <Link to="/">
          <Text style={styles.text}>Repositories</Text>
        </Link>
        <Link to="/signin">
          <Text style={styles.text}>Sign In</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;