import ReceiptView from 'components/Screens/Receipt';
import React from 'react'
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';


const Receipt = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ReceiptView navigation={navigation} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Receipt;
