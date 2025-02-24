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
import bg from 'images/subscribers/create/bg_16.png';

import Colors from 'constants/Colors';
import {WINDOW_HEIGHT, scaleSize} from 'utils/index';
import Input from 'components/Input';
import AccentButtonTwo from 'components/Button/AccentButtonTwo';
import {
  addCreateSubscriberInput,
  subscriberSelector,
} from 'features/Subscribers/SubscriberSlice';
import {validateEmptyValues, validateFormatValues} from 'utils/Validator';

const Catv = ({setPage, setImage}) => {
  const [catvBpId, setCatvBpId] = useState('');
  const [stbMac, setStbMac] = useState('');
  const [postpaidBpId, setPostpaidBpId] = useState('');
  const [modemMac, setModemMac] = useState('');

  const dispatch = useDispatch();

  const calendarRef = useRef();

  // Importing subscriberData state values from reducer
  const {subscriberCreateData, createSubscriberInput} =
    useSelector(subscriberSelector);

  const {catv_bp_id, stb_mc_id, postpaid_isp_id, modem_mac_id} =
    createSubscriberInput;

  // Check whether previous data available
  useEffect(() => {
    if (catv_bp_id) setCatvBpId(catv_bp_id);
    if (stb_mc_id) setStbMac(stb_mc_id);
    if (postpaid_isp_id) setPostpaidBpId(postpaid_isp_id);
    if (modem_mac_id) setModemMac(modem_mac_id);
  }, []);

  // On changing inputs
  const onChangeValue = (type, value) => {
    // Object of types
    const types = {
      catvBpId: () => setCatvBpId(value),
      stbMac: () => setStbMac(value),
      postpaidBpId: () => setPostpaidBpId(value),
      modemMac: () => setModemMac(value),
    };
    if (types[type]) {
      types[type]();
    }
  };
  // On proceeding
  const submitHandler = () => {
    dispatch(
      addCreateSubscriberInput({
        catv_bp_id: catvBpId,
        stb_mc_id: stbMac,
        postpaid_isp_id: postpaidBpId,
        modem_mac_id: modemMac,
      }),
    );
    setPage();
  };

  console.log('SUBSCRIBER DATA FROM CATV ===', createSubscriberInput);

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
          {/* Form details */}
          <View style={styles.detailsWrapper}>
            {/* Installation Details */}
            <View style={styles.inputWrapper}>
              <Text style={styles.dobLabel}>CATV Detail</Text>
              <View style={styles.inputGroupWrapper}>
                <Input
                  label="CATV BP ID"
                  placeholder={'Id'}
                  labelColor={Colors.label2}
                  doAction={text => onChangeValue('catvBpId', text)}
                  value={catvBpId}
                  multiline={false}
                  error={''}
                  readonly={false}
                  bgColor={'#fff'}
                  height={45}
                />
                <View style={{paddingVertical: scaleSize(5)}}></View>
                <Input
                  label="STB MAC"
                  placeholder={'Id'}
                  labelColor={Colors.label2}
                  doAction={text => onChangeValue('stbMac', text)}
                  value={stbMac}
                  multiline={false}
                  error={''}
                  readonly={false}
                  bgColor={'#fff'}
                  height={45}
                />
              </View>
            </View>

            {/* Installation Details */}
            <View style={styles.inputWrapper}>
              <Text style={styles.dobLabel}>ISP Postpaid Detail</Text>
              <View style={styles.inputGroupWrapper}>
                <Input
                  label="Postpaid ISP BP ID"
                  placeholder={'Id'}
                  labelColor={Colors.label2}
                  doAction={text => onChangeValue('postpaidBpId', text)}
                  value={postpaidBpId}
                  multiline={false}
                  error={''}
                  readonly={false}
                  bgColor={'#fff'}
                  height={45}
                />
                <View style={{paddingVertical: scaleSize(5)}}></View>
                <Input
                  label="Modem MAC"
                  placeholder={'Id'}
                  labelColor={Colors.label2}
                  doAction={text => onChangeValue('modemMac', text)}
                  value={modemMac}
                  multiline={false}
                  error={''}
                  readonly={false}
                  bgColor={'#fff'}
                  height={45}
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

export default Catv;

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
    borderTopLeftRadius: scaleSize(800),
    borderTopRightRadius: scaleSize(600),
    width: 800,
    height: scaleSize(600),
    overflow: 'hidden',
    marginLeft: scaleSize(-150),
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
