import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TicketInfoView from 'components/Screens/Tickets/TicketInfo';

const TicketInfo = () => {
  return (
    <View style={styles.container}>
      <TicketInfoView />
    </View>
  );
};

export default TicketInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
