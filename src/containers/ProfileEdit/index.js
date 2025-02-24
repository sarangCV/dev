import ProfileEditView from 'components/Screens/ProfileEdit';
import React from 'react'
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';

const ProfileEdit = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ProfileEditView navigation={navigation} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProfileEdit;
