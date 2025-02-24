import FiberView from 'components/Screens/BottomTabs/Fiber';
import React from 'react';
import {Text} from 'react-native';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';

const Fibernet = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <FiberView navigation={navigation} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Fibernet;
