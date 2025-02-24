import React from 'react'
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import SettingsView from 'components/Screens/Settings'

const Settings = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <SettingsView navigation={navigation} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Settings;
