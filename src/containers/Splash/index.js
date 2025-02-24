import React from 'react';
import SplashView from 'components/Screens/Splash';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';

const Splash = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <SplashView navigation={navigation} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Splash;
