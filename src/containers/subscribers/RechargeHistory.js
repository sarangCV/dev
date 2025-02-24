import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RechargeBillsView from 'components/Screens/Subscribers/RechagreBills';

const RechargeBills = () => {
  return (
    <View style={styles.container}>
      <RechargeBillsView />
    </View>
  );
};

export default RechargeBills;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
