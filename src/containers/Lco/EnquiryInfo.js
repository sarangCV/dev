import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import EnquiryInfoView from 'components/Screens/Lco/Enquiry/EnquiryInfo';

const EnquiryInfo = () => {
  return (
    <View style={styles.container}>
      <EnquiryInfoView />
    </View>
  );
};

export default EnquiryInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
