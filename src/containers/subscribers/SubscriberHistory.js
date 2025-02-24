import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SubscriberHistoryView from 'components/Screens/Subscribers/SubscriberHistory.js';

const SubscriberHistory = () => {
  return (
    <View style={styles.container}>
      <SubscriberHistoryView />
    </View>
  );
};

export default SubscriberHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
