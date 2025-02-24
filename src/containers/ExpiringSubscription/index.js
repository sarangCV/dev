import ExpiringSubscriptionView from 'components/Screens/ExpiringSubscription';
import React from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';

const ExpiringSubscription = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ExpiringSubscriptionView navigation={navigation} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ExpiringSubscription;
