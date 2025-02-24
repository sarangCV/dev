import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scaleSize} from 'utils/index';
import Colors from 'constants/Colors';
import {_Text} from 'styles/index';
import {Family, FontSize} from 'constants/Fonts';

const AccentButtonTwo = ({title, onPress, width}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AccentButtonTwo;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.cancelBtn,
    borderRadius: scaleSize(10),
    paddingHorizontal: scaleSize(40),
    paddingVertical: scaleSize(10),
    alignItems: 'center',
    marginBottom: scaleSize(9),
  },
  buttonText: {
    ..._Text(FontSize.regularVariant, Family.semibold, Colors.white),
    // backgroundColor: 'blue',
  },
});
