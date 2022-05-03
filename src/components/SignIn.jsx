import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.normal,
    color: 'white',
    fontWeight: theme.fontWeights.bold,
    margin: 20,
    padding: 10,
  }
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry={true}/>
      <TouchableWithoutFeedback onPress={onSubmit}>
        <Text style={styles.button}>Sign In</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const SignIn = () => {
  const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });
  
  const onSubmit = (values) => {
    console.log('VALUES', values)
  }

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;