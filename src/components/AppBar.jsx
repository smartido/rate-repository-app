import { Pressable, View, Text, ScrollView, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';
import { ME } from '../graphql/queries';
import { useQuery, useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';
import { useNavigate } from 'react-router-native';

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
  const { data } = useQuery(ME);

  const authStorage = useAuthStorage();

  const apolloClient = useApolloClient();
  
  let navigate = useNavigate();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate('/');
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollView}>
        <Link to="/">
          <Text style={styles.text}>Repositories</Text>
        </Link>
        {data && data.me ? (
          <Pressable onPress={() => signOut()}>
            <Text style={styles.text}>Sign out</Text>
          </Pressable>
        ) : (
          <Link to="/signin">
            <Text style={styles.text}>Sign In</Text>
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;