import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DocumentsView from 'components/Screens/Subscribers/Documents';

const Documents = () => {
  return (
    <View style={styles.container}>
      <DocumentsView />
    </View>
  );
};

export default Documents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
