import BillView from 'components/Screens/Bill';
import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'

const Bill = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <BillView navigation={navigation} />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Bill
