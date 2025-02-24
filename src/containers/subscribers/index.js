import React from 'react';
import {Text, View} from 'react-native';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import SubscribersView from 'components/Screens/Subscribers';

const Subscribers = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.container}>
        <SubscribersView navigation={navigation} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Subscribers;
