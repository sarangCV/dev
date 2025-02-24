import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import EnquiryView from 'components/Screens/Lco/Enquiry';
import FeasibilityView from 'components/Screens/Lco/Enquiry';

const Enquiry = () => {
  return (
    <View style={styles.container}>
      <FeasibilityView />
    </View>
  );
};

export default Enquiry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
