import EnquiryInfoView from 'components/Screens/Enquiry/Info';
import React from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';

const EnquiryInfo = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <EnquiryInfoView navigation={navigation} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default EnquiryInfo;
