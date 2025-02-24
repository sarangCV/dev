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
import bg from 'images/subscribers/hardware_network/bg.png';
import user from 'images/subscribers/hardware_network/user_icon.png';

import Colors from 'constants/Colors';
import {WINDOW_HEIGHT, scaleSize} from 'utils/index';

import Input from 'components/Input';
import DropdownPicker from 'components/Input/DropdownPicker';
import AccentButtonTwo from 'components/Button/AccentButtonTwo';

const HardwareAndNetworkDetails = ({setPage}) => {
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
            <Text style={styles.title}>Hardware and Network Details</Text>
            <Text style={styles.description}>
              Loren ipsun dolor sit anet, consectetur
            </Text>

            <View style={styles.userWrapper}>
              <Image source={user} style={styles.userIcon} />
              <View>
                <Text style={styles.userTitle}>Sreeju S</Text>
                <Text style={styles.userDescription}>OTHER-Finance</Text>
              </View>
            </View>
            {/* Form details */}
            <View style={styles.detailsWrapper}>
              {/* OLT Name */}
              <View style={styles.inputWrapper}>
                <Text style={styles.dobLabel}>OLT Name</Text>
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
                  placeHolder="OLT-14-KANKIPPAD-02"
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

              {/* No. of Ports */}
              <View style={styles.inputWrapper}>
                <Input
                  label="No. of Ports"
                  placeholder={'8'}
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
              {/* OLT ID */}
              <View style={styles.inputWrapper}>
                <Input
                  label="OLT ID"
                  placeholder={'OLT3700002'}
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
              {/* OLT Management IP */}
              <View style={styles.inputWrapper}>
                <Input
                  label="OLT Management IP"
                  placeholder={'172.20.140.246'}
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
              {/* OLT Brand */}
              <View style={styles.inputWrapper}>
                <Input
                  label="OLT Brand"
                  placeholder={'GENEXIS'}
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
              {/* OLT MAC ID */}
              <View style={styles.inputWrapper}>
                <Input
                  label="OLT MAC ID"
                  placeholder={'000F949B25EB'}
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
              {/* OLT Location */}
              <View style={styles.inputWrapper}>
                <Input
                  label="OLT Location"
                  placeholder={'KANKIPADU'}
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

              <View style={styles.actionWrapper}>
                <AccentButtonTwo title={'Proceed'} onPress={setPage} />
              </View>
            </View>
          </View>
          <View
            style={{
              // backgroundColor: 'red',
              position: 'absolute',
              // width: scaleSize(280),
              bottom: 30,
            }}></View>
        </View>
      </ScrollView>
    </>
  );
};

export default HardwareAndNetworkDetails;

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
    height: scaleSize(1050),
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
  userWrapper: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: scaleSize(10),
    padding: scaleSize(12),
    marginTop: scaleSize(15),
  },
  userIcon: {
    width: scaleSize(55),
    height: scaleSize(55),
    resizeMode: 'contain',
    marginRight: scaleSize(15),
  },
  userTitle: {
    ..._Text(FontSize.regularVariantPlus, Family.semibold, Colors.userText),
  },
  userDescription: {
    ..._Text(FontSize.small, Family.semibold, Colors.userSubText),
    marginTop: scaleSize(5),
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
