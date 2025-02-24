import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from 'constants/Colors';
import {Family, FontSize, IconSize} from 'constants/Fonts';
import {_InputIcon, _PlaceholderTextColor, _TextInput, _Text} from 'styles';
import {scaleSize} from 'utils/';
import Error from 'components/Text/Error';
import {Spacing} from 'constants/Layout';
import FastImage from 'react-native-fast-image';
const Input = React.forwardRef(
  (
    {
      label,
      label2,
      labelColor,
      label2Color,
      inverted,
      icon,
      placeholder,
      doAction,
      type,
      isPressable,
      onPress,
      value,
      error,
      readonly,
      multiline,
      keyboardType,
      placeholderTextColor,
      asterik,
      bgColor,
      height,
      noBorderWidth,
    },
    ref,
  ) => {
    const setInputLabelStyle = () => {
      return styles(type).defaultText;
    };

    const setTextStyle = () => {
      return styles(type).inputTextStyle;
    };

    return (
      <View>
        {label && (
          <View style={{flexDirection: 'row'}}>
            {asterik && (
              <Text
                style={[
                  setInputLabelStyle(),
                  {
                    color: 'red',
                    marginRight: scaleSize(2),
                  },
                ]}>
                *
              </Text>
            )}
            <Text
              style={[
                setInputLabelStyle(),
                labelColor && {
                  color: labelColor,
                },
              ]}>
              {label}
            </Text>
            <Text
              style={[
                setInputLabelStyle(),
                label2Color && {
                  color: label2Color,
                },
              ]}>
              {label2}
            </Text>
          </View>
        )}

        <View style={{maxHeight: scaleSize(180)}}>
          <TextInput
            style={[
              setTextStyle(),
              {
                borderWidth: !noBorderWidth ? 1 : 0,
                borderColor:
                  (error && Colors.errorText) ||
                  (type === 'ins-remark' && Colors.lightGrey) ||
                  Colors.inputDefault,
                textAlignVertical: multiline ? 'top' : 'center',
                backgroundColor: bgColor && bgColor,
                height: height && height,
                borderRadius: scaleSize(5),
              },
            ]}
            placeholder={placeholder}
            // placeholderTextColor={_PlaceholderTextColor(inverted)}
            placeholderTextColor={Colors.placeholderColor}
            onChangeText={doAction}
            pointerEvents={isPressable ? 'none' : 'auto'}
            showSoftInputOnFocus={isPressable ? false : true}
            onPressIn={onPress}
            value={value ? value : ''}
            editable={!readonly}
            multiline={multiline ? true : false}
            numberOfLines={multiline ? 6 : 1}
            keyboardType={keyboardType}
            caretHidden={type === 'date-time' && true}
          />
          {icon && (
            <View style={styles().inputIcon}>
              {type !== 'date-time' ? (
                <FontAwesome
                  name={icon}
                  size={IconSize.large}
                  color={Colors.bgBlue}
                />
              ) : (
                <FastImage
                  source={icon}
                  resizeMode={FastImage.resizeMode.contain}
                  style={styles().icon}
                />
              )}
            </View>
          )}
        </View>
        {error !== '' && <Error>{error}</Error>}
      </View>
    );
  },
);

const styles = type =>
  StyleSheet.create({
    defaultText: {
      ..._Text(
        FontSize.smallVariant,
        type === 'ins-remark' ? Family.robotoRegular : Family.regular,
        Colors.inputDefault,
      ),
      paddingBottom: Spacing.xs,
    },
    invertedText: {
      ..._Text(FontSize.regular, Family.regular, Colors.textDefault),
    },
    inputTextInvertedStyle: {
      ..._TextInput(true),
    },
    inputTextStyle: {
      // ..._TextInput(type),
      ..._Text(
        FontSize.smallVariantPlus,
        Family.semibold,
        Colors.placeholderColor,
      ),
      backgroundColor: Colors.primary,
      paddingVertical: Spacing.xs,
      paddingHorizontal: Spacing.xsVariant2,
    },
    inputIcon: {
      ..._InputIcon,
      paddingEnd: Spacing.xsVariant2,
    },
    icon: {
      width: scaleSize(25),
      height: scaleSize(25),
    },
  });

export default Input;
const LoginInput = React.forwardRef(
  (
    {
      label,
      label2,
      labelColor,
      label2Color,
      inverted,
      icon,
      placeholder,
      doAction,
      type,
      isPressable,
      onPress,
      value,
      error,
      readonly,
      multiline,
      keyboardType,
      placeholderTextColor,
    },
    ref,
  ) => {
    const setInputLabelStyle = () => {
      return styles(type).defaultText;
    };

    const setTextStyle = () => {
      return styles(type).inputTextStyle;
    };

    return (
      <View>
        <View style={{maxHeight: scaleSize(180)}}>
          <TextInput
            style={[
              setTextStyle(),
              {
                borderWidth: 1,
                borderColor:
                  (error && Colors.errorText) ||
                  (type === 'ins-remark' && Colors.lightGrey) ||
                  Colors.inputDefault,
                textAlignVertical: multiline ? 'top' : 'center',
                paddingLeft: 40,
              },
            ]}
            placeholder={placeholder}
            // placeholderTextColor={_PlaceholderTextColor(inverted)}
            placeholderTextColor={Colors.placeholderColor}
            onChangeText={doAction}
            pointerEvents={isPressable ? 'none' : 'auto'}
            showSoftInputOnFocus={isPressable ? false : true}
            onPressIn={onPress}
            value={value ? value : ''}
            editable={!readonly}
            multiline={multiline ? true : false}
            numberOfLines={multiline ? 6 : 1}
            keyboardType={keyboardType}
            caretHidden={type === 'date-time' && true}
          />
          {icon && (
            <View style={styles().inputIcon}>
              <FastImage
                source={icon}
                resizeMode={FastImage.resizeMode.contain}
                style={{...styles().icon, marginStart: 10}}
              />
            </View>
          )}
        </View>
        {error !== '' && <Error>{error}</Error>}
      </View>
    );
  },
);

// const inputStyles = StyleSheet.create({
//   LoginInputStyle: {
//     fontSize: FontSize.regularVariant,
//     fontFamily: Family.semibold,
//     marginTop: 10,
//   },
//   LoginInputContainerStyle: {
//     borderBottomColor: 'lightgrey',
//   },
// });

export {LoginInput};

const TextStyle = props => {
  const {text, textColor, size, fontfamily} = props;
  return (
    <Text
      style={{
        color: textColor,
        fontSize: size,
        fontFamily: fontfamily,
        alignSelf: 'center',
      }}>
      {text}
    </Text>
  );
};

export {TextStyle};
