import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from 'constants/Colors';
import {scaleSize} from 'utils/index';
import {_Text} from 'styles/index';
import {Family, FontSize} from 'constants/Fonts';

const Salutation = ({item, onPress, selected}) => {
  // console.log('FROM SALUTATION', selected, item);
  return (
    <TouchableOpacity
      style={
        // styles.salutationWrapprer
        selected && selected == item.name
          ? [
              {backgroundColor: Colors.lightGreyTextColor},
              styles.salutationWrapprer,
            ]
          : styles.salutationWrapprer
      }
      onPress={() => onPress(item.name)}>
      <Text
        style={
          selected && selected == item.name
            ? [styles.salutationTitle, {color: Colors.white}]
            : styles.salutationTitle
        }>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default Salutation;

const styles = StyleSheet.create({
  salutationWrapprer: {
    borderWidth: 1,
    borderColor: Colors.border2,
    borderRadius: scaleSize(8),
    marginRight: scaleSize(5),
    paddingHorizontal: scaleSize(4),
    paddingVertical: scaleSize(2),
  },

  salutation: {},
  salutationTitle: {
    ..._Text(FontSize.smallVariant, Family.semibold, Colors.text_2),
  },
});
