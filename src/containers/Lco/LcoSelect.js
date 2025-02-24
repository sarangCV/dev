import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FeasibilityView from 'components/Screens/Lco/Feasibility';
import LcoSelectView from 'components/Screens/Lco/LcoSelect';

const LcoSelect = () => {
  return (
    <View style={styles.container}>
      <LcoSelectView />
    </View>
  );
};

export default LcoSelect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
