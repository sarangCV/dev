import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CreateSubscriberScreen from 'components/Screens/Subscribers/Create';

const CreateSubscriber = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CreateSubscriberScreen navigation={navigation} />
    </View>
  );
};

export default CreateSubscriber;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
