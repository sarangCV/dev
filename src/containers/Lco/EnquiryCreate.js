import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import EnquiryView from 'components/Screens/Lco/Enquiry';
import EnquiryCreateView from 'components/Screens/Lco/Enquiry/Create';

const EnquiryCreate = () => {
  return (
    <View style={styles.container}>
      <EnquiryCreateView />
    </View>
  );
};

export default EnquiryCreate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
