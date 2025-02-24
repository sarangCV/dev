import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import UsageViewInfo from 'components/Screens/Subscribers/UsageInfo';
import SubscriberUsageInfoView from 'components/Screens/Subscribers/SubscriberUsageInfo';

const SubscriberUsage = () => {
  return (
    <View style={styles.container}>
      <SubscriberUsageInfoView />
    </View>
  );
};

export default SubscriberUsage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
