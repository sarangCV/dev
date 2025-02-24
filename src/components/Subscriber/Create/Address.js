import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CalendarList} from 'react-native-calendars';
import {Button, Modal, Portal, Provider, RadioButton} from 'react-native-paper';

import {_Text} from 'styles/index';
import {Family, FontSize} from 'constants/Fonts';
// Importing assets
import bg from 'images/subscribers/create/bg_9.png';

import Colors from 'constants/Colors';
import {WINDOW_HEIGHT, scaleSize} from 'utils/index';
import Input from 'components/Input';
import AccentButtonTwo from 'components/Button/AccentButtonTwo';
import {
  addCreateSubscriberInput,
  subscriberSelector,
} from 'features/Subscribers/SubscriberSlice';
import {validateEmptyValues, validateFormatValues} from 'utils/Validator';

const Address = ({setPage, setImage}) => {
  const [visible, setVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [billingInstallationSame, setBillingInstallationSame] = useState(false);
  const [permanentInstallationSame, setPermanentInstallationSame] =
    useState(false);

  const [billingAddress, setBillingAddress] = useState('');
  const [billingPincode, setBillingPincode] = useState('');
  const [installationAddress, setInstallationAddress] = useState('');
  const [installationPincode, setInstallationPincode] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [permanentPincode, setPermanentPincode] = useState('');

  const dispatch = useDispatch();

  const calendarRef = useRef();

  // Importing subscriberData state values from reducer
  const {subscriberCreateData, createSubscriberInput} =
    useSelector(subscriberSelector);
  const {
    billing_addr,
    billing_addr_pin,
    installation_addr,
    installation_addr_pin,
    permanent_addr,
    permanent_addr_pin,
  } = createSubscriberInput;

  // Check whether previous data available
  useEffect(() => {
    if (billing_addr) setBillingAddress(billing_addr);
    if (billing_addr_pin) setBillingPincode(billing_addr_pin);
    if (installation_addr) setInstallationAddress(installation_addr);
    if (installation_addr_pin) setInstallationPincode(installation_addr_pin);
    if (permanent_addr) setPermanentAddress(permanent_addr);
    if (permanent_addr_pin) setPermanentPincode(permanent_addr_pin);
  }, []);

  useEffect(() => {
    if (billingInstallationSame) {
      setBillingAddress(installationAddress);
      setBillingPincode(installationPincode);
    }
    if (permanentInstallationSame) {
      setPermanentAddress(installationAddress);
      setPermanentPincode(installationPincode);
    }
  }, [billingInstallationSame, permanentInstallationSame]);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  // On change value of drop down
  const dropDownChange = (type, item) => {
    console.log(type, item);
    setSelectedCountry(item);
  };

  // On changing inputs
  const onChangeValue = (type, value) => {
    // Object of types
    const types = {
      installationAddress: () => setInstallationAddress(value),
      installationPincode: () => setInstallationPincode(value),
      billingAddress: () => setBillingAddress(value),
      billingPincode: () => setBillingPincode(value),
      permanentAddress: () => setPermanentAddress(value),
      permanentPincode: () => setPermanentPincode(value),
    };
    if (types[type]) {
      types[type]();
    }
  };
  // On proceeding
  const submitHandler = () => {
    const emptyCheck = validateEmptyValues({
      billingAddress: billingAddress,
      billingPincode,
      installationAddress,
      installationPincode,
      permanentAddress,
      permanentPincode,
    });
    // Check whether value is in correct format params: {type1: [value1, value2], type2: [value1, value2]}
    const formatCheck = validateFormatValues({
      pincode: [billingPincode, installationPincode, permanentPincode],
    });
    if (emptyCheck.isValid && formatCheck.isValid) {
      dispatch(
        addCreateSubscriberInput({
          installation_addr: installationAddress,
          installation_addr_pin: installationPincode,
          billing_addr: billingInstallationSame
            ? installationAddress
            : billingAddress,
          billing_addr_pin: billingInstallationSame
            ? installationPincode
            : billingPincode,
          permanent_addr: permanentInstallationSame
            ? installationAddress
            : permanentAddress,
          permanent_addr_pin: permanentInstallationSame
            ? installationPincode
            : permanentPincode,
        }),
      );
      setPage();
    } else {
      emptyCheck.isValid
        ? formatCheck.isValid
          ? null
          : alert(`${formatCheck.errorMsg}`)
        : alert(`${emptyCheck.emptyKey} is empty`);
      // alert(`${emptyCheck.emptyKey.toUpperCase()} should not be blank`);
    }
  };

  console.log(
    'SUBSCRIBER DATA FROM IDENTITY SCREEN ===',
    createSubscriberInput,
  );

  return (
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
          <Text style={styles.title}>Address</Text>
          <Text style={styles.description}>
            Loren ipsun dolor sit anet, consectetur
          </Text>
          {/* Form details */}
          <View style={styles.detailsWrapper}>
            {/* Installation Details */}
            <View style={styles.inputWrapper}>
              <Text style={styles.dobLabel}>Installation Details</Text>
              <View style={styles.inputGroupWrapper}>
                <Input
                  label="Address"
                  placeholder={''}
                  labelColor={Colors.label2}
                  doAction={text => onChangeValue('installationAddress', text)}
                  value={installationAddress}
                  multiline={true}
                  error={''}
                  readonly={false}
                  bgColor={'#fff'}
                  height={65}
                  style={{textAlignVertical: 'top'}}
                  asterik
                />
                <View style={{paddingVertical: scaleSize(5)}}></View>
                <Input
                  label="Pincode"
                  placeholder={'Pincode'}
                  labelColor={Colors.label2}
                  doAction={text => onChangeValue('installationPincode', text)}
                  value={installationPincode}
                  multiline={false}
                  error={''}
                  readonly={false}
                  bgColor={'#fff'}
                  height={45}
                  asterik
                />
              </View>
            </View>
            {/* Radio */}
            <View style={styles.radioWrapper}>
              <RadioButton
                value={billingInstallationSame}
                status={billingInstallationSame ? 'checked' : 'unchecked'}
                onPress={() => setBillingInstallationSame(prev => !prev)}
                style={{height: 10, width: 10}}
              />
              <Text style={styles.radioLabel}>
                Billing address same as installation address
              </Text>
            </View>

            {/* Billing Details */}
            <View style={styles.inputWrapper}>
              <Text style={styles.dobLabel}>Billing Details</Text>
              <View style={styles.inputGroupWrapper}>
                <Input
                  label="Address"
                  placeholder={''}
                  labelColor={Colors.label2}
                  doAction={text => onChangeValue('billingAddress', text)}
                  value={
                    billingInstallationSame
                      ? installationAddress
                      : billingAddress
                  }
                  multiline={true}
                  error={''}
                  readonly={billingInstallationSame}
                  bgColor={'#fff'}
                  height={65}
                  style={{textAlignVertical: 'top'}}
                  asterik
                />
                <View style={{paddingVertical: scaleSize(5)}}></View>
                <Input
                  label="Pincode"
                  placeholder={'Pincode'}
                  labelColor={Colors.label2}
                  doAction={text => onChangeValue('billingPincode', text)}
                  value={
                    billingInstallationSame
                      ? installationPincode
                      : billingPincode
                  }
                  multiline={false}
                  error={''}
                  readonly={billingInstallationSame}
                  bgColor={'#fff'}
                  height={45}
                  asterik
                />
              </View>
            </View>
            {/* Radio */}
            <View style={styles.radioWrapper}>
              <RadioButton
                value={permanentInstallationSame}
                status={permanentInstallationSame ? 'checked' : 'unchecked'}
                onPress={() => setPermanentInstallationSame(prev => !prev)}
                style={{height: 10, width: 10}}
              />
              <Text style={styles.radioLabel}>
                Permanent address same as installation address
              </Text>
            </View>
            {/* Permanent Address Details */}
            <View style={styles.inputWrapper}>
              <Text style={styles.dobLabel}>Permanent Address Details</Text>
              <View style={styles.inputGroupWrapper}>
                <Input
                  label="Address"
                  placeholder={''}
                  labelColor={Colors.label2}
                  doAction={text => onChangeValue('permanentAddress', text)}
                  value={
                    permanentInstallationSame
                      ? installationAddress
                      : permanentAddress
                  }
                  multiline={true}
                  error={''}
                  readonly={permanentInstallationSame}
                  bgColor={'#fff'}
                  height={65}
                  style={{textAlignVertical: 'top'}}
                  asterik
                />
                <View style={{paddingVertical: scaleSize(5)}}></View>
                <Input
                  label="Pincode"
                  placeholder={'Pincode'}
                  labelColor={Colors.label2}
                  doAction={text => onChangeValue('permanentPincode', text)}
                  value={
                    permanentInstallationSame
                      ? installationPincode
                      : permanentPincode
                  }
                  multiline={false}
                  error={''}
                  readonly={permanentInstallationSame}
                  bgColor={'#fff'}
                  height={45}
                  asterik
                />
              </View>
            </View>

            <View style={styles.actionWrapper}>
              <AccentButtonTwo title={'Proceed'} onPress={submitHandler} />
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
  );
};

export default Address;

const styles = StyleSheet.create({
  bgWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    width: scaleSize(260),
    height: scaleSize(240),
    resizeMode: 'contain',
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
    width: 550,
    height: scaleSize(1000),
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
    ..._Text(FontSize.largeVariant12, Family.semibold, Colors.cancelBtn),
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
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scaleSize(5),
  },
  radioLabel: {
    ..._Text(FontSize.smallVariant, Family.regular, Colors.placeholderColor),
  },
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
  inputGroupWrapper: {
    borderWidth: 1,
    borderColor: Colors.inputDefault,
    borderRadius: scaleSize(5),
    paddingHorizontal: scaleSize(10),
    paddingVertical: scaleSize(10),
  },
  actionWrapper: {
    marginTop: scaleSize(50),
  },
});
