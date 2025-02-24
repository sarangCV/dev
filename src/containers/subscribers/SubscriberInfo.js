import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SubscriberInfoView from 'components/Screens/Subscribers/SubscriberInfo';

const SubscriberInfo = () => {
  return (
    <View style={styles.container}>
      <SubscriberInfoView />
    </View>
  );
};

export default SubscriberInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
