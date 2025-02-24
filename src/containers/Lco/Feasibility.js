import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FeasibilityView from 'components/Screens/Lco/Feasibility';

const Feasibility = () => {
  return (
    <View style={styles.container}>
      <FeasibilityView />
    </View>
  );
};

export default Feasibility;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
