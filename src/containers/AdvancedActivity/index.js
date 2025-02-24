import React from 'react'
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import AdvancedActivityView from 'components/Screens/AdvancedActivity';

const AdvancedActivity= ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <AdvancedActivityView navigation={navigation} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AdvancedActivity;
