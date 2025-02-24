import HelpView from 'components/Screens/Help';
import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'

const Help = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <HelpView navigation={navigation} />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Help
