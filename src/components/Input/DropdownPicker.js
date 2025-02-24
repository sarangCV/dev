import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import {Spacing, Rounded, Border} from 'constants/Layout';
import Colors from 'constants/Colors';
import {scaleSize} from 'utils/';
import Error from 'components/Text/Error';
import {Family, FontSize} from 'constants/Fonts';
import {_Text} from 'styles/index';

const DropdownPicker = ({
  schema,
  isOpen,
  value,
  defaultValue,
  items,
  setOpen,
  setValue,
  setItems,
  changeItem,
  type,
  placeHolder,
  onOpen,
  zIndex,
  zIndexInverse,
  disabled,
  error,
  showIcon,
  direction,
  listMode,
}) => {
  return (
    <>
      <DropDownPicker
        searchable={false}
        schema={schema && schema}
        showArrowIcon={showIcon ? true : false}
        showTickIcon={false}
        disabled={disabled}
        disableBorderRadius={disabled ? true : false}
        zIndex={zIndex}
        // dropDownDirection="AUTO"
        // onOpen={() => onOpen(type, true)}
        open={isOpen}
        value={value}
        defaultValue={defaultValue}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        dropDownContainerStyle={styles(type).dropdownContainerStyle}
        style={{
          ...styles(type).pickerViewStyle,
          ...styles(error).borderStyle,
        }}
        dropDownStyle={styles(type).dropdownStyle}
        disabledStyle={styles().disabledStyle}
        onChangeValue={item => {
          changeItem(type, item);
        }}
        placeholder={placeHolder}
        placeholderStyle={styles().placeholderStyle}
        closeAfterSelecting={true}
        listMode={listMode ?? 'SCROLLVIEW'}
        scrollViewProps={{
          nestedScrollEnabled: true,
        }}
        dropDownDirection={direction}
      />
      {error ? (
        <View style={styles().errorRow}>
          <Error>{error}</Error>
        </View>
      ) : null}
    </>
  );
};

const styles = type =>
  StyleSheet.create({
    pickerViewStyle: {
      borderWidth: Border.thin,
      borderRadius: scaleSize(5),
      // height: scaleSize(50),
    },
    dropdownContainerStyle: {
      backgroundColor: Colors.white,
      borderWidth: Border.thin,
      borderRadius: Rounded.xs,
      borderColor: Colors.lightGrey,
      borderTopLeftRadius: Rounded.tiny,
      borderTopRightRadius: Rounded.tiny,
      elevation: 10,
    },
    dropdownStyle: {
      backgroundColor: '#fafafa',
      borderRadius: Rounded.xs,
      borderColor: Colors.lightGrey,
      paddingHorizontal: Spacing.medium,
      maxHeight: scaleSize(30),
    },

    disabledStyle: {
      opacity: 1,
    },
    placeholderStyle: {
      ..._Text(FontSize.smallVariant, Family.semibold, Colors.placeholderColor),
    },
    errorRow: {
      alignSelf: 'flex-start',
      paddingVertical: Spacing.xs,
    },
    borderStyle: {
      borderColor: type ? Colors.errorText : Colors.lightGrey,
    },
  });

export default DropdownPicker;
