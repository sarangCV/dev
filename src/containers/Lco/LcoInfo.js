import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LcoInfoView from 'components/Screens/Lco/LcoInfo';

const LcoInfo = () => {
  return (
    <View style={styles.container}>
      <LcoInfoView />
    </View>
  );
};

export default LcoInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
