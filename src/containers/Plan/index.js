import PlanView from 'components/Screens/Plan';
import React from 'react';
import {Text, View} from 'react-native';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';

const Plan = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.container}>
        <PlanView navigation={navigation} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Plan;
