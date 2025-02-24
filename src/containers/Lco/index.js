import React from 'react';
import {Text, View} from 'react-native';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import LcoListView from 'components/Screens/Lco';

const LcoList = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.container}>
        <LcoListView navigation={navigation} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LcoList;
