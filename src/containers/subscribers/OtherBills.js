import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OtherBillsView from 'components/Screens/Subscribers/OtherBills';

const OtherBills = () => {
  return (
    <View style={styles.container}>
      <OtherBillsView />
    </View>
  );
};

export default OtherBills;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
