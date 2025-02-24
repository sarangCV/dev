import ProfileEditSaveView from 'components/Screens/ProfileEditSave';
import React from 'react'
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';

const ProfileEditSave = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ProfileEditSaveView navigation={navigation} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProfileEditSave;
