import RechargeView from 'components/Screens/BottomTabs/Recharge';
import React from 'react';
import {Text, View} from 'react-native'
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'

const Recharge = ({navigation}) => {
    
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
        <View style={styles.container}>
        <RechargeView navigation={navigation} />
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Recharge
