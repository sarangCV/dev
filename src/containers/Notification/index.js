import NotificationView from 'components/Screens/Notification';
import React from 'react'
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';

const Notification = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <NotificationView navigation={navigation} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Notification;
