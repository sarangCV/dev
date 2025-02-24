import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TicketsView from 'components/Screens/Tickets';

const Tickets = () => {
  return (
    <View style={styles.container}>
      <TicketsView />
    </View>
  );
};

export default Tickets;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
