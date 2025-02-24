import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scaleSize} from 'utils/index';
import Colors from 'constants/Colors';
import {_Text} from 'styles/index';
import {Family, FontSize} from 'constants/Fonts';

const AccentButtonOne = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AccentButtonOne;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: scaleSize(10),
    borderColor: Colors.button,
    paddingHorizontal: scaleSize(60),
    paddingVertical: scaleSize(10),
    alignItems: 'center',
    marginBottom: scaleSize(9),
  },
  buttonText: {
    ..._Text(FontSize.regularVariant, Family.semibold, Colors.cancelBtn),
    // backgroundColor: 'blue',
  },
});
