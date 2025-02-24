import Colors from 'constants/Colors';
import {Family, FontSize, IconSize} from 'constants/Fonts';
import {Rounded, Spacing} from 'constants/Layout';
import React from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import {_Row} from 'styles';
import {scaleSize} from 'utils';
import FastImage from 'react-native-fast-image';
import {Pressable} from 'react-native';

const SearchInput = ({
  onChangeText,
  doAction,
  containerStyle,
  value,
  doActionClose,
}) => {
  // TextInput.defaultProps.selectionColor = Colors.textDark

  return (
    <View style={[styles.inputContainer, containerStyle]}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={doActionClose}>
          <View style={{flex: 1}}>
            <FastImage
              source={require('../../images/close.png')}
              resizeMode={FastImage.resizeMode.contain}
              style={styles.search}
            />
          </View>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        onEndEditing={doAction}
        returnKeyType="search"
        placeholder="Search Amount "
        placeholderTextColor={'#696969'}
        selectionColor={Colors.textDark}
        defaultValue={value}
        keyboardType="numeric"
        maxLength={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    ..._Row,
    backgroundColor: 'white',
    borderRadius: Rounded.xs,
  },
  input: {
    height: scaleSize(35),
    flex: 0.9,
    fontSize: FontSize.smallVariant,
    fontFamily: Family.semibold,
    paddingRight: Spacing.small,
    paddingStart: Spacing.regular,
    color: Colors.greyDarkVarient,
  },
  iconContainer: {
    paddingHorizontal: Spacing.small,
    position: 'absolute',
    right: 5,
    padding: Spacing.small,
    flex: 1,
  },
  search: {
    width: 15,
    height: 15,
  },
});

export default SearchInput;
