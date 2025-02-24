import React from 'react'
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import ForgotPasswordView from 'components/Screens/ForgotPassword';

const FogotPswd = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ForgotPasswordView navigation={navigation} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FogotPswd;
