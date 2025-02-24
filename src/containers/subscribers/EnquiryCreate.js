import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import EnquiryCreateScreen from 'components/Screens/Lco/Enquiry/Create';

const EnquiryCreate = ({navigation}) => {
  return (
    <View style={styles.container}>
      <EnquiryCreateScreen navigation={navigation} />
    </View>
  );
};

export default EnquiryCreate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
