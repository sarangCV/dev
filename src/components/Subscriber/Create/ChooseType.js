import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {_Text, commonStyles} from 'styles/index';
import {Family, FontSize} from 'constants/Fonts';
// Importing assets
import bg_2 from 'images/subscribers/create/bg_2.png';
import date from 'images/subscribers/create/date.png';

import Colors from 'constants/Colors';
import {scaleSize} from 'utils/index';
import AccentButtonOne from 'components/Button/AccentButtonOne';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  addCreateSubscriberInput,
  subscriberSelector,
} from 'features/Subscribers/SubscriberSlice';
import {RadioButton} from 'react-native-paper';
import AccentButtonTwo from 'components/Button/AccentButtonTwo';
import Input from 'components/Input';
import DropdownPicker from 'components/Input/DropdownPicker';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';
import {validateEmptyValues} from 'utils/Validator';

const ChooseType = ({setPage}) => {
  const [individual, setIndividual] = useState(true);
  const [enterprise, setEnterprise] = useState(false);
  const [visible, setVisible] = useState(false);
  const [gstDate, setGstDate] = useState('');
  const [gstHolderName, setGstHolderName] = useState('');
  const [gstNumber, setGstNumber] = useState('');

  const dispatch = useDispatch();

  // Importing subscriberData state values from reducer
  const {createSubscriberInput} = useSelector(subscriberSelector);
  // Destructuring input values

  const {
    connection_type,
    enterprise_sub,
    gst_number,
    gst_reg_date,
    name_gst_holder,
  } = createSubscriberInput;

  useEffect(() => {
    connection_type == 'individual'
      ? setIndividual(true)
      : setIndividual(false);
    if (enterprise_sub) setEnterprise(true);
    if (name_gst_holder) setGstHolderName(name_gst_holder);
    if (gst_number) setGstNumber(gst_number);
    if (gst_reg_date) setGstDate(gst_reg_date);
  }, []);

  // TODO: Setting subscriber type to the state
  const actionHandler = type => {
    if (enterprise) {
      const emptyCheck = validateEmptyValues({
        gstHolderName,
        gstNumber,
        gstDate,
      });
      if (emptyCheck.isValid) {
        dispatch(
          addCreateSubscriberInput({
            connection_type: type,
            enterprise_sub: enterprise,
            name_gst_holder: gstHolderName,
            gst_number: gstNumber,
            gst_reg_date: gstDate,
          }),
        );
        setPage();
      } else {
        emptyCheck.isValid;
        alert(`${emptyCheck.emptyKey.toUpperCase()} is empty`);
      }
    } else {
      dispatch(
        addCreateSubscriberInput({
          connection_type: type,
          enterprise_sub: enterprise,
        }),
      );
      setPage();
    }

    // console.log('TYPE---', type);
  };

  const typePressHandler = () => {
    setIndividual(prev => !prev);
  };

  const enterprisePressHandler = () => {
    setEnterprise(prev => !prev);
  };

  const showModal = () => setVisible(true);

  return (
    <>
      <ScrollView>
        <View style={styles.bgWrapper}>
          <Image style={styles.bg} source={bg_2} />
        </View>
        <View style={styles.body}>
          <View
            style={{
              ...styles.layoutBg,
              height: enterprise ? scaleSize(620) : scaleSize(360),
            }}></View>
          <View style={styles.content}>
            <Text style={styles.title}>Choose Type</Text>
            <Text style={styles.description}>
              Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod
              tenpor incidunt ut labore et dolore nagna aliqua.{' '}
            </Text>

            <View style={{...commonStyles.row, ...styles.typeWrapper}}>
              {/* Radio */}
              <TouchableOpacity
                style={styles.radioWrapper}
                onPress={typePressHandler}>
                <RadioButton
                  value={individual}
                  status={individual ? 'checked' : 'unchecked'}
                  onPress={typePressHandler}
                  // style={{height: 5, width: 5}}
                />
                <Text style={styles.radioLabel}>Individual</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.radioWrapper}
                onPress={typePressHandler}>
                <RadioButton
                  value={individual}
                  status={!individual ? 'checked' : 'unchecked'}
                  onPress={typePressHandler}
                  style={{height: 10, width: 10}}
                />
                <Text style={styles.radioLabel}>Bulk/Corporate</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={commonStyles.row}
              onPress={enterprisePressHandler}>
              {/* Radio */}
              <View style={styles.radioWrapper}>
                <Text style={styles.radioLabel}>GST/Enterprise subscriber</Text>
                <RadioButton
                  value={enterprise}
                  status={enterprise ? 'checked' : 'unchecked'}
                  onPress={enterprisePressHandler}
                  style={{height: 10, width: 10}}
                />
              </View>
            </TouchableOpacity>

            {enterprise && (
              <View>
                {/* Billing Details */}
                <View style={styles.inputWrapper}>
                  <View style={styles.inputGroupWrapper}>
                    <Input
                      label="Name of GST Holder"
                      placeholder={''}
                      labelColor={Colors.label2}
                      doAction={text => setGstHolderName(text)}
                      value={gstHolderName}
                      multiline={false}
                      error={''}
                      readonly={false}
                      bgColor={'#fff'}
                      height={45}
                      asterik
                    />
                    <View style={{paddingVertical: scaleSize(5)}}></View>
                    <Input
                      label="GST Number"
                      placeholder={''}
                      labelColor={Colors.label2}
                      doAction={text => setGstNumber(text)}
                      value={gstNumber}
                      multiline={false}
                      error={''}
                      readonly={false}
                      bgColor={'#fff'}
                      height={45}
                      asterik
                    />
                    <View style={{paddingVertical: scaleSize(5)}}></View>

                    {/* <Input
                      label="GST Registration Date"
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
                    /> */}
                    <View style={styles.inputWrapper}>
                      <Text style={styles.dobLabel}>
                        {' '}
                        <Text style={{color: 'red', marginRight: 3}}>*</Text>
                        GST Registration Date
                      </Text>
                      <TouchableOpacity style={styles.dob} onPress={showModal}>
                        <Text style={styles.dobText}>
                          {gstDate
                            ? moment(gstDate).format('L')
                            : `GST Registration Date`}
                        </Text>
                        <Image style={styles.dobIcon} source={date} />
                      </TouchableOpacity>
                      <DatePicker
                        modal
                        mode="date"
                        open={visible}
                        date={new Date()}
                        onConfirm={date => {
                          setVisible(false);
                          setGstDate(date);
                        }}
                        onCancel={() => {
                          setVisible(false);
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
            )}

            <View style={styles.actionWrapper}>
              <AccentButtonTwo
                title={'Proceed'}
                onPress={() =>
                  actionHandler(individual ? 'individual' : 'corporate')
                }
              />
            </View>
          </View>

          {/* <AccentButtonOne
            title={'Individual Connection'}
            onPress={() => actionHandler('individual')}
          />
          <AccentButtonOne
            title={'Bulk/Corporate Connection'}
            onPress={() => actionHandler('corporate')}
          /> */}
        </View>
      </ScrollView>
    </>
  );
};

export default ChooseType;

const styles = StyleSheet.create({
  bgWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    width: scaleSize(240),
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
    paddingRight: scaleSize(50),
  },

  typeWrapper: {
    backgroundColor: Colors.white,
    paddingHorizontal: scaleSize(15),
    borderRadius: scaleSize(10),
    marginVertical: scaleSize(10),
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scaleSize(5),
  },
  radioLabel: {
    ..._Text(FontSize.smallVariant, Family.regular, Colors.placeholderColor),
  },
  inputWrapper: {marginTop: scaleSize(12)},
  actionWrapper: {
    marginTop: scaleSize(20),
  },
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
});
