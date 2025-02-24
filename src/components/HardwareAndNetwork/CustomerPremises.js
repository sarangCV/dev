import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useRef, useState} from 'react';

import {_Text} from 'styles/index';
import {Family, FontSize} from 'constants/Fonts';
// Importing assets
import bg from 'images/subscribers/hardware_network/bg_3.png';

import Colors from 'constants/Colors';
import {WINDOW_HEIGHT, scaleSize} from 'utils/index';

import Input from 'components/Input';
import DropdownPicker from 'components/Input/DropdownPicker';
import AccentButtonTwo from 'components/Button/AccentButtonTwo';

const CustomerPremises = ({setPage}) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [centerOpen, setCenterOpen] = useState(false);

  const country = [
    {name: 'India', slug: 'india'},
    {name: 'China', slug: 'china'},
  ];

  // On change value of drop down
  const dropDownChange = (type, item) => {
    console.log(type, item);
    setSelectedCountry(item);
  };
  return (
    <>
      <ScrollView>
        <View style={styles.bgWrapper}>
          <Image style={styles.bg} source={bg} />
        </View>
        <View style={styles.body}>
          <View
            style={{
              ...styles.layoutBg,
            }}></View>
          <View style={styles.content}>
            <Text style={styles.title}>
              Customer Premises Details (NW/HW/Others)
            </Text>
            <Text style={styles.description}>
              Loren ipsun dolor sit anet, consectetur
            </Text>
            {/* Form details */}
            <View style={styles.detailsWrapper}>
              {/* OLT Port Number */}
              <View style={styles.inputWrapper}>
                <Text style={styles.dobLabel}>OLT Port Number</Text>
                <DropdownPicker
                  schema={{
                    label: 'name',
                    value: 'slug',
                  }}
                  isOpen={centerOpen}
                  disabled={false}
                  value={selectedCountry}
                  defaultValue={selectedCountry}
                  items={country}
                  // setItems={setCountryList}
                  setOpen={setCenterOpen}
                  setValue={setSelectedCountry}
                  type="enquiryType"
                  placeHolder="Port 2"
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
              {/* Splitter No */}
              <View style={styles.inputWrapper}>
                <Text style={styles.dobLabel}>Splitter No</Text>
                <DropdownPicker
                  schema={{
                    label: 'name',
                    value: 'slug',
                  }}
                  isOpen={centerOpen}
                  disabled={false}
                  value={selectedCountry}
                  defaultValue={selectedCountry}
                  items={country}
                  // setItems={setCountryList}
                  setOpen={setCenterOpen}
                  setValue={setSelectedCountry}
                  type="enquiryType"
                  placeHolder="Splitter 2"
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
              {/* Splitter Ratio */}
              <View style={styles.inputWrapper}>
                <Input
                  label="Splitter Ratio"
                  placeholder={'1:8'}
                  labelColor={Colors.label2}
                  // doAction={text => onChangeValue('pincode', text)}
                  // value={'pincode'}
                  multiline={false}
                  error={''}
                  readonly={false}
                  bgColor={'#fff'}
                  height={45}
                />
              </View>
              {/* Drop Length */}
              <View style={styles.inputWrapper}>
                <Input
                  label="Drop Length"
                  placeholder={'60'}
                  labelColor={Colors.label2}
                  // doAction={text => onChangeValue('pincode', text)}
                  // value={'pincode'}
                  multiline={false}
                  error={''}
                  readonly={false}
                  bgColor={'#fff'}
                  height={45}
                />
              </View>
              {/* Fiber Optic Level */}
              <View style={styles.inputWrapper}>
                <Input
                  label="Fiber Optic Level"
                  placeholder={'20'}
                  labelColor={Colors.label2}
                  // doAction={text => onChangeValue('pincode', text)}
                  // value={'pincode'}
                  multiline={false}
                  error={''}
                  readonly={false}
                  bgColor={'#fff'}
                  height={45}
                />
              </View>
              {/* Cable Done By */}
              <View style={styles.inputWrapper}>
                <Text style={styles.dobLabel}>Cable Done By</Text>
                <DropdownPicker
                  schema={{
                    label: 'name',
                    value: 'slug',
                  }}
                  isOpen={centerOpen}
                  disabled={false}
                  value={selectedCountry}
                  defaultValue={selectedCountry}
                  items={country}
                  // setItems={setCountryList}
                  setOpen={setCenterOpen}
                  setValue={setSelectedCountry}
                  type="enquiryType"
                  placeHolder="Contractor"
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
              {/* Name */}
              <View style={styles.inputWrapper}>
                <Text style={styles.dobLabel}>Name</Text>
                <DropdownPicker
                  schema={{
                    label: 'name',
                    value: 'slug',
                  }}
                  isOpen={centerOpen}
                  disabled={false}
                  value={selectedCountry}
                  defaultValue={selectedCountry}
                  items={country}
                  // setItems={setCountryList}
                  setOpen={setCenterOpen}
                  setValue={setSelectedCountry}
                  type="enquiryType"
                  placeHolder="Fiber Solutions(Gummadi Padma)"
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
              {/* Splicing Done By */}
              <View style={styles.inputWrapper}>
                <Text style={styles.dobLabel}>Splicing Done By</Text>
                <DropdownPicker
                  schema={{
                    label: 'name',
                    value: 'slug',
                  }}
                  isOpen={centerOpen}
                  disabled={false}
                  value={selectedCountry}
                  defaultValue={selectedCountry}
                  items={country}
                  // setItems={setCountryList}
                  setOpen={setCenterOpen}
                  setValue={setSelectedCountry}
                  type="enquiryType"
                  placeHolder="Contractor"
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
              {/* Name */}
              <View style={styles.inputWrapper}>
                <Text style={styles.dobLabel}>Name</Text>
                <DropdownPicker
                  schema={{
                    label: 'name',
                    value: 'slug',
                  }}
                  isOpen={centerOpen}
                  disabled={false}
                  value={selectedCountry}
                  defaultValue={selectedCountry}
                  items={country}
                  // setItems={setCountryList}
                  setOpen={setCenterOpen}
                  setValue={setSelectedCountry}
                  type="enquiryType"
                  placeHolder="Fiber Solutions(Gummadi Padma)"
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
              {/* Reg. Team Remarks */}
              <View style={styles.inputWrapper}>
                <Input
                  label="Reg. Team Remarks"
                  placeholder={'Test'}
                  labelColor={Colors.label2}
                  // doAction={text => onChangeValue('pincode', text)}
                  // value={'pincode'}
                  multiline={false}
                  error={''}
                  readonly={false}
                  bgColor={'#fff'}
                  height={45}
                />
              </View>

              <View style={styles.actionWrapper}>
                <AccentButtonTwo title={'Submit'} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default CustomerPremises;

const styles = StyleSheet.create({
  bgWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    width: scaleSize(320),
    height: scaleSize(250),
    resizeMode: 'contain',
    // backgroundColor: 'red',
  },
  body: {
    marginTop: scaleSize(20),
    flex: 1,
    zIndex: 999,
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  layoutBg: {
    position: 'relative',
    backgroundColor: '#F5F6F8',
    // flex: 1,
    borderTopLeftRadius: scaleSize(550),
    borderTopRightRadius: scaleSize(550),
    height: scaleSize(1250),
    width: scaleSize(550),
    overflow: 'hidden',
    marginLeft: scaleSize(-180),
    // alignItems: 'flex-end',
  },
  content: {
    position: 'absolute',
    top: 50,
    left: 20,
    // marginLeft: 185,
    // backgroundColor: 'red',
    width: scaleSize(320),
  },
  title: {
    ..._Text(FontSize.large, Family.semibold, Colors.cancelBtn),
    paddingRight: scaleSize(10),
  },
  description: {
    ..._Text(FontSize.smallVariant, Family.regular, Colors.description_1),
    marginTop: scaleSize(5),
    opacity: 0.7,
    lineHeight: 22,
  },
  cameraIcon: {
    width: scaleSize(65),
    height: scaleSize(65),
    resizeMode: 'contain',
    marginLeft: scaleSize(10),
  },
  skipText: {
    ..._Text(FontSize.regularVariant, Family.semibold, Colors.description_1),
    opacity: 0.7,
    marginTop: scaleSize(33),
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    // backgroundColor: 'red',
    paddingBottom: 5,
    alignSelf: 'center',
  },
  salutationWrapper: {
    flexDirection: 'row',
    marginTop: scaleSize(10),
  },
  detailsWrapper: {
    // backgroundColor: 'red',
    // marginTop: scaleSize(10),
  },
  inputWrapper: {marginTop: scaleSize(12)},
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
  fatherSalutaionWrapper: {
    borderWidth: 1,
    borderColor: Colors.inputDefault,
    borderRadius: scaleSize(5),
    paddingHorizontal: scaleSize(10),
    paddingBottom: scaleSize(10),
  },
  actionWrapper: {
    marginTop: scaleSize(50),
  },
});
