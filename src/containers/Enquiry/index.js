import EnquiryView from 'components/Screens/Enquiry';
import React from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';

const Enquiry = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <EnquiryView navigation={navigation} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Enquiry;
