import FeasibilityInfoView from 'components/Screens/Feasibility/Info';
import React from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';

const FeasibilityInfo = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <FeasibilityInfoView navigation={navigation} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FeasibilityInfo;
