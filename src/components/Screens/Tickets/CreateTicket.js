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
import bg from 'images/Tickets/bg.png';
import attach from 'images/Tickets/attach.png';

import date from 'images/subscribers/create/date.png';

import Colors from 'constants/Colors';
import {WINDOW_HEIGHT, scaleSize} from 'utils/index';
import AccentButtonOne from 'components/Button/AccentButtonOne';
import Salutation from 'components/Subscriber/Create/Elements/Salutation';
import Input from 'components/Input';
import DropdownPicker from 'components/Input/DropdownPicker';
import AccentButtonTwo from 'components/Button/AccentButtonTwo';
import Header from 'components/Header';

const CreateTicketView = ({setPage, setImage}) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryListOpen, setCountryListOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('individual');

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
          {/* Individual or area tab */}
          <View style={styles.tabWrapper}>
            <TouchableOpacity
              onPress={() => tabHandler('individual')}
              style={{
                ...styles.tabItem,
                backgroundColor:
                  selectedTab == 'individual'
                    ? Colors.cancelBtn
                    : Colors.disablebtn,
              }}>
              <Text style={styles.tabTitle}>Individual Subscriber</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => tabHandler('area')}
              style={{
                ...styles.tabItem,
                backgroundColor:
                  selectedTab == 'area' ? Colors.cancelBtn : Colors.disablebtn,
              }}>
              <Text style={styles.tabTitle}>Area Issue / Outage</Text>
            </TouchableOpacity>
          </View>
          {/* Form details */}
          {selectedTab == 'individual' ? (
            <View style={styles.detailsWrapper}>
              {/* Subscriber ID  */}
              <View style={styles.inputWrapper}>
                <View style={styles.row}>
                  <Text style={styles.asterikText}>*</Text>
                  <Text style={styles.dobLabel}>Subscriber ID </Text>
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
                  placeHolder="Select Subscriber ID "
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
              {/* Subscriber Name   */}
              <View style={styles.inputWrapper}>
                <View style={styles.row}>
                  <Text style={styles.asterikText}>*</Text>
                  <Text style={styles.dobLabel}>Subscriber Name </Text>
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
                  placeHolder="Select Subscriber Name  "
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
              {/* Category   */}
              <View style={styles.inputWrapper}>
                <View style={styles.row}>
                  <Text style={styles.asterikText}>*</Text>
                  <Text style={styles.dobLabel}>Issue Category </Text>
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
                  placeHolder="Select Category  "
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
              {/* Priority   */}
              <View style={styles.inputWrapper}>
                <View style={styles.row}>
                  <Text style={styles.asterikText}>*</Text>
                  <Text style={styles.dobLabel}>Priority </Text>
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
                  placeHolder="Select Priority  "
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
              {/* Issue Description */}
              <View style={styles.inputWrapper}>
                <Input
                  label="Issue Description"
                  placeholder={''}
                  labelColor={Colors.label2}
                  // doAction={text => onChangeValue('pincode', text)}
                  // value={'pincode'}
                  multiline={false}
                  error={''}
                  readonly={false}
                  bgColor={'#fff'}
                  height={65}
                  asterik
                />
              </View>

              <View style={styles.actionWrapper}>
                <AccentButtonTwo title={'Proceed'} onPress={setPage} />
              </View>
            </View>
          ) : (
            <View style={styles.detailsWrapper}>
              {/* Username   */}
              <View style={styles.inputWrapper}>
                <View style={styles.row}>
                  <Text style={styles.asterikText}>*</Text>
                  <Text style={styles.dobLabel}>Username </Text>
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
                  placeHolder="Select Username  "
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
              {/* Name   */}
              <View style={styles.inputWrapper}>
                <View style={styles.row}>
                  <Text style={styles.asterikText}>*</Text>
                  <Text style={styles.dobLabel}>Name </Text>
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
                  placeHolder="Select Name  "
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
              {/* Category   */}
              <View style={styles.inputWrapper}>
                <View style={styles.row}>
                  <Text style={styles.asterikText}>*</Text>
                  <Text style={styles.dobLabel}>Issue Category </Text>
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
                  placeHolder="Select Category  "
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
              {/* Priority   */}
              <View style={styles.inputWrapper}>
                <View style={styles.row}>
                  <Text style={styles.asterikText}>*</Text>
                  <Text style={styles.dobLabel}>Priority </Text>
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
                  placeHolder="Select Priority  "
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
              {/* Issue Description */}
              <View style={styles.inputWrapper}>
                <Input
                  label="Issue Description"
                  placeholder={''}
                  labelColor={Colors.label2}
                  // doAction={text => onChangeValue('pincode', text)}
                  // value={'pincode'}
                  multiline={false}
                  error={''}
                  readonly={false}
                  bgColor={'#fff'}
                  height={65}
                  asterik
                />
              </View>
              <View style={styles.inputWrapper}>
                <View style={styles.row}>
                  <Text style={styles.dobLabel}>Attach File (max 3 files)</Text>
                </View>
                <TouchableOpacity style={styles.documentWrapper}>
                  <Image source={attach} style={styles.docIcon} />
                </TouchableOpacity>
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

export default CreateTicketView;

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
    paddingHorizontal: scaleSize(10),
    paddingVertical: scaleSize(5),
    borderRadius: scaleSize(5),

    // flex: 0.8,
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
