import RechargeListView from 'components/Screens/AdvancedActivityDetails';
import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'

const AdvancedActivityDetails = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <RechargeListView navigation={navigation} />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default AdvancedActivityDetails
