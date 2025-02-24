import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import {Button, Modal, Portal, Provider} from 'react-native-paper';
import {pick} from 'react-native-document-picker';

import {scaleSize} from 'utils/index';
import Colors from 'constants/Colors';
import {_Text} from 'styles/index';
import {Family, FontSize} from 'constants/Fonts';
import DropdownPicker from 'components/Input/DropdownPicker';
import Input from 'components/Input';
import upload from 'images/subscribers/create/upload_2.png';

const UploadModal = ({
  visible,
  hideModal,
  dropdownData,
  //   filePickerHandler,
  //   pickedFile,
  //   dropDownValue,
  //   setDropDownValue,
  //   dropDownChange,
  //   inputOnChangeValue,
  //   inputValue,
  type,
  passDocValues,
}) => {
  const [centerOpen, setCenterOpen] = useState(false);

  const [dropDownValue, setDropDownValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [file, setFile] = useState({});
  const [filePickerId, setfilePickerId] = useState(0);

  // const [additionalFile, setAdditionalFile] = useState('');

  const country = [
    {name: 'India', slug: 'india'},
    {name: 'China', slug: 'china'},
  ];

  // Random id for front and back ID proof

  // File picker
  const filePickerHandler = async (id, attribute) => {
    try {
      const [pickResult] = await pick();
      if (pickResult.type !== 'image/jpeg' && pickResult.type !== 'image/png')
        return alert('Please upload a jpeg or png file');
      if (type == 'idProof') {
        if (filePickerId < 2) {
          setFile(prev => ({
            ...prev,
            [filePickerId]: {
              uri: pickResult.uri,
              name: pickResult.name,
              type: pickResult.type,
            },
          }));
          setfilePickerId(prev => prev + 1);
        }
        console.log('ID------>>', filePickerId);
      } else {
        setFile({
          uri: pickResult.uri,
          name: pickResult.name,
          type: pickResult.type,
        });
      }
      // const [pickResult] = await pick({mode: 'import'}); // equivalent
      console.log('PICKED FILE IS -----', pickResult);
      // do something with the picked file
    } catch (err) {
      console.log(err);
      // see error handling
    }
  };
  const dropDownChange = () => console.log();

  // On modal dissmiss
  const modalDismissHandler = () => {
    hideModal();
    clearValues();
  };
  //   On submit
  const submitHandler = () => {
    passDocValues({dropDownValue, inputValue, file});
    hideModal();
    clearValues();
  };

  // Clear all the input values
  const clearValues = () => {
    setCenterOpen(false);
    setInputValue('');
    setDropDownValue('');
    setFile('');
  };
  // console.log('FROM CHILD', dropDownValue);

  return (
    <Modal
      visible={visible}
      onDismiss={modalDismissHandler}
      style={{paddingHorizontal: scaleSize(0)}}
      // contentContainerStyle={{backgroundColor: 'red'}}
    >
      <View style={styles.modalInnerWrapper}>
        <View style={styles.modalTitleWrapper}>
          <Text style={styles.modalTitle}>Upload Document</Text>
        </View>
        <View style={styles.modalBodyWrapper}>
          {/* Document Type */}
          <View style={styles.dropdownRelative}>
            <View style={styles.inputWrapper}>
              <Text style={styles.dobLabel}>Document Type</Text>
              <DropdownPicker
                schema={{
                  label: 'name',
                  value: 'value',
                }}
                isOpen={centerOpen}
                disabled={false}
                value={dropDownValue}
                defaultValue={dropDownValue}
                items={dropdownData}
                // setItems={setCountryList}
                setOpen={setCenterOpen}
                setValue={setDropDownValue}
                type="enquiryType"
                placeHolder="Select"
                dropDownMaxHeight={1000}
                // error={''}
                direction="BOTTOM"
                showIcon={true}
                changeItem={(type, value) => setDropDownValue(value)}
                // dropDownItemSelected={(value, type = 'district') =>
                //   dropDownItemSelected(value, type)
                // }
                // onPress={(value, type = 'district') =>
                //   dropDownPressed(type)
                // }
              />
            </View>
          </View>

          {/* Doc number */}
          <View style={styles.inputWrapper}>
            <Input
              label="Document Number"
              placeholder={'Number'}
              labelColor={Colors.label2}
              doAction={text => setInputValue(text)}
              value={inputValue}
              multiline={false}
              error={''}
              readonly={false}
              bgColor={'#fff'}
              height={45}
            />
          </View>
          <TouchableOpacity
            style={styles.uploadButtonWrapper}
            onPress={filePickerHandler}>
            <Image style={styles.uploadIcon} source={upload} />
            <Text style={styles.uploadText}>Upload</Text>
          </TouchableOpacity>
          {type == 'idProof' ? (
            <View style={{marginVertical: scaleSize(7)}}>
              {Object.values(file).map((item, index) => (
                <Text
                  style={styles.pickedFileNameTextIdProof}
                  key={index.toString()}>
                  {item.name}
                </Text>
              ))}
            </View>
          ) : (
            file && <Text style={styles.pickedFileNameText}>{file.name}</Text>
          )}
          {type == 'idProof' && Object.keys(file).length < 2 ? (
            <Text style={styles.uploadWarningText}>
              Please upload front and back
            </Text>
          ) : null}
          <TouchableOpacity
            disabled={
              type == 'idProof'
                ? Object.keys(file).length < 2 || !dropDownValue || !inputValue
                : !Object.keys(file).length == 1 ||
                  !dropDownValue ||
                  !inputValue
            }
            style={{
              ...styles.modalSubmitButtonWrapper,
              marginTop: !file ? scaleSize(20) : 0,
              backgroundColor:
                type == 'idProof'
                  ? Object.keys(file).length < 2 ||
                    !dropDownValue ||
                    !inputValue
                    ? Colors.drawerTextGrey
                    : Colors.cancelBtn
                  : !Object.keys(file).length == 1 ||
                    !dropDownValue ||
                    !inputValue
                  ? Colors.drawerTextGrey
                  : Colors.cancelBtn,
            }}
            onPress={submitHandler}>
            <Text style={styles.modalSubmitButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default UploadModal;

const styles = StyleSheet.create({
  // Modal
  modalInnerWrapper: {
    backgroundColor: 'white',
    marginHorizontal: scaleSize(20),
    borderRadius: scaleSize(12),
    overflow: 'hidden',
  },
  modalTitleWrapper: {
    backgroundColor: Colors.modalHeader,
    alignItems: 'center',
    paddingVertical: scaleSize(15),
  },
  modalTitle: {
    ..._Text(FontSize.regularVariantPlus, Family.semibold, Colors.userText),
  },
  dobLabel: {
    ..._Text(FontSize.smallVariant, Family.regular, Colors.label2),
    marginBottom: scaleSize(5),
  },
  modalBodyWrapper: {
    paddingHorizontal: scaleSize(35),
    paddingVertical: scaleSize(28),
  },
  dropdownRelative: {position: 'relative', zIndex: 999},
  inputWrapper: {marginBottom: scaleSize(10)},
  uploadButtonWrapper: {
    backgroundColor: Colors.bg_light,
    alignItems: 'center',
    paddingVertical: scaleSize(12),
    borderRadius: scaleSize(10),
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: Colors.border1,
    marginTop: scaleSize(10),
  },
  uploadIcon: {
    width: scaleSize(20),
    height: scaleSize(20),
    resizeMode: 'contain',
    marginBottom: scaleSize(3),
  },
  uploadText: {
    ..._Text(FontSize.smallVariant, Family.semibold, Colors.label2),
  },
  pickedFileNameText: {
    ..._Text(FontSize.small, Family.semibold, Colors.green),
    marginVertical: scaleSize(15),
  },
  uploadWarningText: {
    ..._Text(FontSize.small, Family.medium, Colors.errorText),
    alignSelf: 'center',
    marginBottom: scaleSize(7),
  },
  pickedFileNameTextIdProof: {
    ..._Text(FontSize.small, Family.semibold, Colors.green),
    marginVertical: scaleSize(5),
  },
  modalSubmitButtonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scaleSize(15),
    paddingHorizontal: scaleSize(75),
    alignSelf: 'center',
    borderRadius: scaleSize(15),
  },
  modalSubmitButtonText: {
    ..._Text(FontSize.regular, Family.semibold, Colors.white),
  },
});
