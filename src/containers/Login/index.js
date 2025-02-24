import React from 'react'
import LoginView from '../../components/Screens/Login/index';

import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';

const Login = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <LoginView navigation={navigation} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Login;
