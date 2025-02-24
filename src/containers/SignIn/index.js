import React from 'react'
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import SignInView from 'components/Screens/SignIn'

const SignIn = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <SignInView navigation={navigation} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SignIn;
