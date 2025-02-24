import React from 'react'
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import PrivacyPolicyView from 'components/Screens/PrivacyPolicy'

const PrivacyPolicy= ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <PrivacyPolicyView navigation={navigation} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PrivacyPolicy;
