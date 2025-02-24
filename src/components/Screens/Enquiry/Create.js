import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {CalendarList} from 'react-native-calendars';
import {Button, Modal, Portal, Provider} from 'react-native-paper';

import {_Row, _Text, commonStyles} from 'styles/index';
import {Family, FontSize} from 'constants/Fonts';
// Importing assets
import bg from 'images/Enquiry/create/bg.png';

import Colors from 'constants/Colors';
import {WINDOW_HEIGHT, scaleSize} from 'utils/index';
import AccentButtonOne from 'components/Button/AccentButtonOne';
import Salutation from 'components/Subscriber/Create/Elements/Salutation';
import Input from 'components/Input';
import DropdownPicker from 'components/Input/DropdownPicker';
import AccentButtonTwo from 'components/Button/AccentButtonTwo';
import Header from 'components/Header';

const EnquiryCreateView = ({setPage, setImage}) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryListOpen, setCountryListOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('field_visit');

  const dispatch = useDispatch();

  const country = [
    {name: 'India', slug: 'india'},
    {name: 'China', slug: 'china'},
  ];

  // On change value of drop down
  const dropDownChange = (type, item) => {
    console.log(type, item);
    setSelectedCountry(item);
  };

  //   On changing tab
  const tabHandler = type => {
    setSelectedTab(type);
  };

  return (
    <>
      <StatusBar backgroundColor={Colors.statusBar} barStyle="light-content" />

      {/* Header section */}
      <Header title={'Create Ticket'} wallet={false} />

      <ScrollView
        style={{
          backgroundColor: 'white',
          flex: 1,
          paddingHorizontal: scaleSize(20),
        }}>
        <View style={styles.bgWrapper}>
          <Image style={styles.bg} source={bg} />
        </View>
        <View style={styles.body}>
          {/* Field visit or enquiry tab */}
          <View style={styles.tabWrapper}>
            <TouchableOpacity
              onPress={() => tabHandler('field_visit')}
              style={{
                ...styles.tabItem,
                backgroundColor:
                  selectedTab == 'field_visit'
                    ? Colors.cancelBtn
                    : Colors.disablebtn,
              }}>
              <Text style={styles.tabTitle}>Field Visit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => tabHandler('enquiry')}
              style={{
                ...styles.tabItem,
                backgroundColor:
                  selectedTab == 'enquiry'
                    ? Colors.cancelBtn
                    : Colors.disablebtn,
              }}>
              <Text style={styles.tabTitle}>Enquiry</Text>
            </TouchableOpacity>
          </View>
          {/* Form details */}
          {selectedTab == 'field_visit' ? (
            <View style={styles.detailsWrapper}>
              {/* Name Description */}
              <View style={styles.inputWrapper}>
                <Input
                  label="Name"
                  placeholder={''}
                  labelColor={Colors.label2}
                  // doAction={text => onChangeValue('pincode', text)}
                  // value={'pincode'}
                  multiline={false}
                  error={''}
                  readonly={false}
                  bgColor={'#fff'}
                  height={45}
                  asterik
                />
              </View>
              {/* Email ID Description */}
              <View style={styles.inputWrapper}>
                <Input
                  label="Email ID"
                  placeholder={''}
                  labelColor={Colors.label2}
                  // doAction={text => onChangeValue('pincode', text)}
                  // value={'pincode'}
                  multiline={false}
                  error={''}
                  readonly={false}
                  bgColor={'#fff'}
                  height={45}
                  asterik
                />
              </View>
              {/* Address Description */}
              <View style={styles.inputWrapper}>
                <Input
                  label="Address"
                  placeholder={''}
                  labelColor={Colors.label2}
                  // doAction={text => onChangeValue('pincode', text)}
                  // value={'pincode'}
                  multiline={false}
                  error={''}
                  readonly={false}
                  bgColor={'#fff'}
                  height={45}
                  asterik
                />
              </View>
              {/* Pincode */}
              <View style={styles.inputWrapper}>
                <Input
                  label="Pincode"
                  placeholder={''}
                  labelColor={Colors.label2}
                  // doAction={text => onChangeValue('pincode', text)}
                  // value={'pincode'}
                  multiline={false}
                  error={''}
                  readonly={false}
                  bgColor={'#fff'}
                  height={45}
                  asterik
                />
              </View>
              {/* Location */}
              <View style={styles.inputWrapper}>
                <Input
                  label="Location"
                  placeholder={''}
                  labelColor={Colors.label2}
                  // doAction={text => onChangeValue('pincode', text)}
                  // value={'pincode'}
                  multiline={false}
                  error={''}
                  readonly={false}
                  bgColor={'#fff'}
                  height={45}
                  asterik
                />
              </View>
              {/* Mobile number */}
              <View style={styles.inputWrapper}>
                <Input
                  label="Mobile number"
                  placeholder={''}
                  labelColor={Colors.label2}
                  // doAction={text => onChangeValue('pincode', text)}
                  // value={'pincode'}
                  multiline={false}
                  error={''}
                  readonly={false}
                  bgColor={'#fff'}
                  height={45}
                  asterik
                />
              </View>
              {/* Queries */}
              <View style={styles.inputWrapper}>
                <Input
                  label="Queries"
                  placeholder={''}
                  labelColor={Colors.label2}
                  // doAction={text => onChangeValue('pincode', text)}
                  // value={'pincode'}
                  multiline={false}
                  error={''}
                  readonly={false}
                  bgColor={'#fff'}
                  height={65}
                />
              </View>
              {/* Services   */}
              <View style={styles.inputWrapper}>
                <View style={styles.row}>
                  <Text style={styles.asterikText}>*</Text>
                  <Text style={styles.dobLabel}>Services </Text>
                </View>
                <DropdownPicker
                  schema={{
                    label: 'name',
                    value: 'slug',
                  }}
                  isOpen={countryListOpen}
                  disabled={false}
                  value={selectedCountry}
                  defaultValue={selectedCountry}
                  items={country}
                  // setItems={setCountryList}
                  setOpen={setCountryListOpen}
                  setValue={setSelectedCountry}
                  type="enquiryType"
                  placeHolder="Select Service  "
                  dropDownMaxHeight={1000}
                  // error={''}
                  direction="TOP"
                  showIcon={true}
                  changeItem={dropDownChange}
                  // dropDownItemSelected={(value, type = 'district') =>
                  //   dropDownItemSelected(value, type)
                  // }
                  // onPress={(value, type = 'district') =>
                  //   dropDownPressed(type)
                  // }
                />
              </View>

              <View style={styles.actionWrapper}>
                <AccentButtonTwo title={'Proceed'} onPress={setPage} />
              </View>
            </View>
          ) : (
            <View style={styles.detailsWrapper}>
              {/* Name Description */}
              <View style={styles.inputWrapper}>
                <Input
                  label="Name"
                  placeholder={''}
                  labelColor={Colors.label2}
                  // doAction={text => onChangeValue('pincode', text)}
                  // value={'pincode'}
                  multiline={false}
                  error={''}
                  readonly={false}
                  bgColor={'#fff'}
                  height={45}
                  asterik
                />
              </View>
              {/* Email ID Description */}
              <View style={styles.inputWrapper}>
                <Input
                  label="Email ID"
                  placeholder={''}
                  labelColor={Colors.label2}
                  // doAction={text => onChangeValue('pincode', text)}
                  // value={'pincode'}
                  multiline={false}
                  error={''}
                  readonly={false}
                  bgColor={'#fff'}
                  height={45}
                  asterik
                />
              </View>
              {/* Address Description */}
              <View style={styles.inputWrapper}>
                <Input
                  label="Address"
                  placeholder={''}
                  labelColor={Colors.label2}
                  // doAction={text => onChangeValue('pincode', text)}
                  // value={'pincode'}
                  multiline={false}
                  error={''}
                  readonly={false}
                  bgColor={'#fff'}
                  height={45}
                  asterik
                />
              </View>
              {/* Pincode */}
              <View style={styles.inputWrapper}>
                <Input
                  label="Pincode"
                  placeholder={''}
                  labelColor={Colors.label2}
                  // doAction={text => onChangeValue('pincode', text)}
                  // value={'pincode'}
                  multiline={false}
                  error={''}
                  readonly={false}
                  bgColor={'#fff'}
                  height={45}
                  asterik
                />
              </View>
              {/* State   */}
              <View style={styles.inputWrapper}>
                <View style={styles.row}>
                  <Text style={styles.asterikText}>*</Text>
                  <Text style={styles.dobLabel}>State </Text>
                </View>
                <DropdownPicker
                  schema={{
                    label: 'name',
                    value: 'slug',
                  }}
                  isOpen={countryListOpen}
                  disabled={false}
                  value={selectedCountry}
                  defaultValue={selectedCountry}
                  items={country}
                  // setItems={setCountryList}
                  setOpen={setCountryListOpen}
                  setValue={setSelectedCountry}
                  type="enquiryType"
                  placeHolder="Select State  "
                  dropDownMaxHeight={1000}
                  // error={''}
                  direction="TOP"
                  showIcon={true}
                  changeItem={dropDownChange}
                  // dropDownItemSelected={(value, type = 'district') =>
                  //   dropDownItemSelected(value, type)
                  // }
                  // onPress={(value, type = 'district') =>
                  //   dropDownPressed(type)
                  // }
                />
              </View>
              {/* District   */}
              <View style={styles.inputWrapper}>
                <View style={styles.row}>
                  <Text style={styles.asterikText}>*</Text>
                  <Text style={styles.dobLabel}>District </Text>
                </View>
                <DropdownPicker
                  schema={{
                    label: 'name',
                    value: 'slug',
                  }}
                  isOpen={countryListOpen}
                  disabled={false}
                  value={selectedCountry}
                  defaultValue={selectedCountry}
                  items={country}
                  // setItems={setCountryList}
                  setOpen={setCountryListOpen}
                  setValue={setSelectedCountry}
                  type="enquiryType"
                  placeHolder="Select District  "
                  dropDownMaxHeight={1000}
                  // error={''}
                  direction="TOP"
                  showIcon={true}
                  changeItem={dropDownChange}
                  // dropDownItemSelected={(value, type = 'district') =>
                  //   dropDownItemSelected(value, type)
                  // }
                  // onPress={(value, type = 'district') =>
                  //   dropDownPressed(type)
                  // }
                />
              </View>
              {/* Location */}
              <View style={styles.inputWrapper}>
                <Input
                  label="Location"
                  placeholder={''}
                  labelColor={Colors.label2}
                  // doAction={text => onChangeValue('pincode', text)}
                  // value={'pincode'}
                  multiline={false}
                  error={''}
                  readonly={false}
                  bgColor={'#fff'}
                  height={45}
                  asterik
                />
              </View>
              {/* Mobile number */}
              <View style={styles.inputWrapper}>
                <Input
                  label="Mobile number"
                  placeholder={''}
                  labelColor={Colors.label2}
                  // doAction={text => onChangeValue('pincode', text)}
                  // value={'pincode'}
                  multiline={false}
                  error={''}
                  readonly={false}
                  bgColor={'#fff'}
                  height={45}
                  asterik
                />
              </View>
              {/* Nearest Area   */}
              <View style={styles.inputWrapper}>
                <View style={styles.row}>
                  <Text style={styles.asterikText}>*</Text>
                  <Text style={styles.dobLabel}>Nearest Area </Text>
                </View>
                <DropdownPicker
                  schema={{
                    label: 'name',
                    value: 'slug',
                  }}
                  isOpen={countryListOpen}
                  disabled={false}
                  value={selectedCountry}
                  defaultValue={selectedCountry}
                  items={country}
                  // setItems={setCountryList}
                  setOpen={setCountryListOpen}
                  setValue={setSelectedCountry}
                  type="enquiryType"
                  placeHolder="Select Nearest Area  "
                  dropDownMaxHeight={1000}
                  // error={''}
                  direction="TOP"
                  showIcon={true}
                  changeItem={dropDownChange}
                  // dropDownItemSelected={(value, type = 'district') =>
                  //   dropDownItemSelected(value, type)
                  // }
                  // onPress={(value, type = 'district') =>
                  //   dropDownPressed(type)
                  // }
                />
              </View>
              {/* Queries */}
              <View style={styles.inputWrapper}>
                <Input
                  label="Queries"
                  placeholder={''}
                  labelColor={Colors.label2}
                  // doAction={text => onChangeValue('pincode', text)}
                  // value={'pincode'}
                  multiline={false}
                  error={''}
                  readonly={false}
                  bgColor={'#fff'}
                  height={65}
                />
              </View>

              <View style={styles.actionWrapper}>
                <AccentButtonTwo title={'Proceed'} onPress={setPage} />
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default EnquiryCreateView;

const styles = StyleSheet.create({
  bgWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    width: scaleSize(450),
    height: scaleSize(260),
    resizeMode: 'contain',
  },
  body: {
    marginTop: scaleSize(20),
    flex: 1,
    // zIndex: 999,
    // backgroundColor: 'red',
    // alignItems: 'center',
  },
  content: {
    // position: 'absolute',
    // top: 50,
    // left: 20,
    // marginLeft: 185,
    // backgroundColor: 'red',
    width: scaleSize(320),
  },

  detailsWrapper: {
    // backgroundColor: 'red',
    // marginTop: scaleSize(10),
  },
  inputWrapper: {marginTop: scaleSize(10)},
  dobWrapper: {},
  dobLabel: {
    ..._Text(FontSize.smallVariant, Family.regular, Colors.label2),
    marginBottom: scaleSize(5),
  },
  dob: {
    backgroundColor: Colors.white,
    height: scaleSize(45),
    borderWidth: 1,
    borderColor: Colors.inputDefault,
    borderRadius: scaleSize(5),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scaleSize(10),
  },
  dobText: {
    ..._Text(
      FontSize.smallVariantPlus,
      Family.semibold,
      Colors.placeholderColor,
    ),
  },
  dobIcon: {
    width: scaleSize(14),
    height: scaleSize(14),
  },

  actionWrapper: {
    marginTop: scaleSize(50),
  },
  row: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  asterikText: {
    ..._Text(FontSize.smallVariant, Family.regular, Colors.red),
    marginRight: scaleSize(2),
  },
  tabWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scaleSize(10),
    gap: 10,
  },
  tabItem: {
    // paddingHorizontal: scaleSize(10),
    alignItems: 'center',
    paddingVertical: scaleSize(10),
    borderRadius: scaleSize(5),
    flex: 1,
  },
  tabTitle: {
    ..._Text(FontSize.smallVariant, Family.medium, Colors.white),
    lineHeight: 14,
  },
  documentWrapper: {
    borderRadius: scaleSize(5),
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    padding: scaleSize(5),
  },
  docIcon: {
    width: scaleSize(24),
    height: scaleSize(24),
    resizeMode: 'contain',
  },
});
