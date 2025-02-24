import EnquiryCreateView from 'components/Screens/Enquiry/Create';
import React from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';

const EnquiryCreate = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <EnquiryCreateView navigation={navigation} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default EnquiryCreate;
