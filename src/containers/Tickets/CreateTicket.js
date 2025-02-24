import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CreateTicketView from 'components/Screens/Tickets/CreateTicket';

const CreateTicket = () => {
  return (
    <View style={styles.container}>
      <CreateTicketView />
    </View>
  );
};

export default CreateTicket;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
