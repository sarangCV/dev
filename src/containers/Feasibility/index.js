import FeasibilityView from 'components/Screens/Feasibility';
import React from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';

const Feasibility = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <FeasibilityView navigation={navigation} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Feasibility;
