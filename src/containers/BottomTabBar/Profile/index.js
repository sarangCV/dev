import ProfileView from 'components/Screens/BottomTabs/Profile';
import React from 'react'
import { Text, View } from 'react-native'
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';

const Profile = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.container}>
        <ProfileView navigation={navigation} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Profile;
