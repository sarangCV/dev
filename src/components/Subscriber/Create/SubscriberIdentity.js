import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {CalendarList} from 'react-native-calendars';
import {Button, Modal, Portal, Provider} from 'react-native-paper';

import {_Text} from 'styles/index';
import {Family, FontSize} from 'constants/Fonts';
// Importing assets
import bg_5 from 'images/subscribers/create/bg_5.png';
import date from 'images/subscribers/create/date.png';

import Colors from 'constants/Colors';
import {WINDOW_HEIGHT, scaleSize} from 'utils/index';
import AccentButtonOne from 'components/Button/AccentButtonOne';
// import {
//   addUserData,
//   subscriberSelector,
// } from 'features/Subscriber/SubscriberSlice';
import Salutation from 'components/Subscriber/Create/Elements/Salutation';
import Input from 'components/Input';
import DropdownPicker from 'components/Input/DropdownPicker';
import AccentButtonTwo from 'components/Button/AccentButtonTwo';
import userType from 'utils/userType';
import {
  addCreateSubscriberInput,
  subscriberSelector,
} from 'features/Subscribers/SubscriberSlice';
import {
  validate,
  validateEmptyValues,
  validateFormatValues,
} from 'utils/Validator';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

const SubscriberIdentity = ({setPage, setImage}) => {
  const [visible, setVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [nationalityDropDownOpen, setNationalityDropDownOpen] = useState(false);
  const [subscriberSelectedSalutation, setSubscriberSelectedSalutation] =
    useState('');
  const [fatherName, setFatherName] = useState('');
  const [fatherSalutation, setFatherSalutation] = useState('');
  const [name, setName] = useState('');
  const [primaryEmail, setPrimaryEmail] = useState('');
  const [secondaryEmail, setSecondaryEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [dob, setDob] = useState();
  const [pan, setPan] = useState('');
  const [gender, setGender] = useState('');
  const [homePhone, setHomePhone] = useState('');
  const [workPhone, setWorkPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();

  // Importing subscriberData state values from reducer
  const {subscriberCreateData, createSubscriberInput} =
    useSelector(subscriberSelector);

  const {connection_type, home_phone} = createSubscriberInput;

  // If local data already available in the reducer set data to state
  useEffect(() => {
    if (createSubscriberInput.gender) setGender(createSubscriberInput.gender);
    if (home_phone) setHomePhone(home_phone);
    if (createSubscriberInput.mobile) setMobile(createSubscriberInput.mobile);
    if (createSubscriberInput.name) setName(createSubscriberInput.name);
    if (createSubscriberInput.salutation_authority)
      setFatherSalutation(createSubscriberInput.salutation_authority);
    if (createSubscriberInput.name_authority)
      setFatherName(createSubscriberInput.name_authority);

    if (createSubscriberInput.nationality)
      setSelectedCountry(createSubscriberInput.nationality);
    if (createSubscriberInput.panNum) setPan(createSubscriberInput.panNum);
    if (createSubscriberInput.primary_email)
      setPrimaryEmail(createSubscriberInput.primary_email);
    if (createSubscriberInput.salutation)
      setSubscriberSelectedSalutation(createSubscriberInput.salutation);
    if (createSubscriberInput.secondary_email)
      setSecondaryEmail(createSubscriberInput.secondary_email);
    if (createSubscriberInput.work_phone)
      setWorkPhone(createSubscriberInput.work_phone);
  }, []);

  // const containerStyle = {backgroundColor: 'white', padding: 2};

  // const setLayoutBgStyle = () => {
  //   return styles(connection_type).layoutBg;
  // };
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
      name: () => setName(value),
      primaryEmail: () => setPrimaryEmail(value),
      secondaryEmail: () => setSecondaryEmail(value),
      mobile: () => setMobile(value),
      dob: () => setDob(value),
      pan: () => setPan(value),
      subSalutation: () => setSubscriberSelectedSalutation(value),
      gender: () => setGender(value),
      nationality: () => setSelectedCountry(value),
      fatherName: () => setFatherName(value),
      fatherSalutation: () => setFatherSalutation(value),
      homePhone: () => setHomePhone(value),
      workPhone: () => setWorkPhone(value),
    };
    if (types[type]) {
      types[type]();
    }
  };

  // TODO: Setting subscriber type to the state
  const actionHandler = type => {
    // Check whether value is empty params: {Value1: value1, value2}

    // Check whether value is in correct format params: {type1: [value1, value2], type2: [value1, value2]}
    const formatCheck = validateFormatValues({
      email: [primaryEmail, secondaryEmail],
      phone: [mobile],
      pan: [pan],
    });

    if (connection_type == 'individual') {
      const emptyCheck = validateEmptyValues({
        Salutation: subscriberSelectedSalutation,
        Name: name,
        Gender: gender,
        Nationality: selectedCountry,
        FatherSalutation: fatherSalutation,
        FatherName: fatherName,
        PrimaryEmail: primaryEmail,
        Mobile: mobile,
      });
      if (emptyCheck.isValid && formatCheck.isValid) {
        dispatch(
          addCreateSubscriberInput({
            salutation: subscriberSelectedSalutation,
            name,
            gender,
            salutation_authority: fatherSalutation,
            name_authority: fatherName,
            dob: moment(dob).format('YYYY-MM-DD'),
            nationality: selectedCountry,
            primary_email: primaryEmail,
            secondary_email: secondaryEmail,
            panNum: pan,
            home_phone: homePhone,
            mobile,
            work_phone: workPhone,
          }),
        );
        setPage();
      } else {
        emptyCheck.isValid
          ? formatCheck.isValid
            ? null
            : alert(`${formatCheck.errorMsg}`)
          : alert(`${emptyCheck.emptyKey} is empty`);
      }
    } else {
      const emptyCheck = validateEmptyValues({
        Salutation: subscriberSelectedSalutation,
        Name: name,
        FatherSalutation: fatherSalutation,
        FatherName: fatherName,
        PrimaryEmail: primaryEmail,
        Mobile: mobile,
      });
      if (emptyCheck.isValid && formatCheck.isValid) {
        dispatch(
          addCreateSubscriberInput({
            salutation: subscriberSelectedSalutation,
            name,
            salutation_authority: fatherSalutation,
            name_authority: fatherName,
            dob: moment(dob).format('YYYY-MM-DD'),
            primary_email: primaryEmail,
            secondary_email: secondaryEmail,
            panNum: pan,
            home_phone: homePhone,
            mobile,
            work_phone: workPhone,
          }),
        );
        setPage();
      } else {
        emptyCheck.isValid
          ? formatCheck.isValid
            ? null
            : alert(`${formatCheck.errorMsg}`)
          : alert(`${emptyCheck.emptyKey} is empty`);
      }
    }

    // console.log('TYPE---', type);
  };
  console.log('VALIDATED RSULT---------', subscriberCreateData);

  return (
    <>
      <Provider>
        <ScrollView>
          <View style={styles.bgWrapper}>
            <Image style={styles.bg} source={bg_5} />
          </View>
          <View style={styles.body}>
            <View
              style={{
                ...styles.layoutBg,
                height:
                  connection_type == 'individual'
                    ? scaleSize(1260)
                    : scaleSize(1060),
              }}></View>
            <View style={styles.content}>
              <Text style={styles.title}>Identify Subscriber</Text>
              <Text style={styles.description}>
                Loren ipsun dolor sit anet, consectetur
              </Text>
              {/* Form details */}
              <View style={styles.detailsWrapper}>
                {/* Salutation */}
                <View style={styles.salutationWrapper}>
                  <Text style={{color: 'red', marginRight: 3}}>*</Text>
                  {subscriberCreateData?.salutations &&
                    subscriberCreateData?.salutations?.map((item, index) => (
                      <Salutation
                        item={item}
                        key={index.toString()}
                        onPress={value => onChangeValue('subSalutation', value)}
                        selected={subscriberSelectedSalutation}
                      />
                    ))}
                </View>
                {/* Name */}
                <View style={styles.inputWrapper}>
                  <Input
                    label={
                      connection_type == 'individual' ? 'Name' : 'Company Name'
                    }
                    placeholder={'Name'}
                    labelColor={Colors.label2}
                    doAction={text => onChangeValue('name', text)}
                    value={name}
                    multiline={false}
                    error={''}
                    readonly={false}
                    asterik
                    bgColor={'#fff'}
                    height={45}
                  />
                </View>
                {/* Gender */}
                {connection_type == 'individual' && (
                  <View
                    style={{
                      ...styles.salutationWrapper,
                      marginBottom: scaleSize(0),
                    }}>
                    <Text style={{color: 'red', marginRight: 3}}>*</Text>

                    {subscriberCreateData?.genders?.map((item, index) => (
                      <Salutation
                        item={item}
                        key={index.toString()}
                        onPress={value => onChangeValue('gender', value)}
                        selected={gender}
                      />
                    ))}
                  </View>
                )}

                {/* DOB */}
                {connection_type == 'individual' && (
                  <View style={styles.inputWrapper}>
                    <Text style={styles.dobLabel}>
                      {' '}
                      <Text style={{color: 'red', marginRight: 3}}>*</Text>
                      DOB
                    </Text>
                    <TouchableOpacity style={styles.dob} onPress={showModal}>
                      <Text style={styles.dobText}>
                        {dob ? moment(dob).format('L') : `DOB`}
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
                        setDob(date);
                      }}
                      onCancel={() => {
                        setVisible(false);
                      }}
                    />
                  </View>
                )}

                {/* Nationality */}
                {connection_type == 'individual' && (
                  <View style={styles.inputWrapper}>
                    <Text style={styles.dobLabel}>
                      {' '}
                      <Text style={{color: 'red', marginRight: 3}}>*</Text>
                      Nationality
                    </Text>
                    <DropdownPicker
                      schema={{
                        label: 'name',
                        value: 'value',
                      }}
                      isOpen={nationalityDropDownOpen}
                      disabled={false}
                      value={selectedCountry}
                      defaultValue={selectedCountry}
                      items={subscriberCreateData?.nationalities}
                      // setItems={setCountryList}
                      setOpen={setNationalityDropDownOpen}
                      setValue={setSelectedCountry}
                      type="enquiryType"
                      placeHolder="Select a Nationality"
                      dropDownMaxHeight={1000}
                      // error={''}
                      direction="TOP"
                      showIcon={true}
                      // changeItem={(type, value) =>
                      //   console.log('FROM DROPDOWN-------------', type, value)
                      // }

                      changeItem={(type, value) =>
                        onChangeValue('nationality', value)
                      }

                      // dropDownItemSelected={value => (value, type) =>
                      //   console.log(
                      //     'NATIONALITY===>>>>>>>>>>>>>----',
                      //     value,
                      //     type,
                      //   )}
                      // onPress={(value, type = 'district') =>
                      //   console.log('NATIONALITY===>>>>>>>>>>>>>----', value)
                      // }
                    />
                  </View>
                )}

                {/* Father details */}
                <View style={styles.inputWrapper}>
                  <Text style={styles.dobLabel}>
                    {connection_type == 'individual'
                      ? 'Father’s / Mother’s / Spouse Details'
                      : 'Authorised Signatory Details'}
                  </Text>
                  <View style={styles.fatherSalutaionWrapper}>
                    <View
                      style={{
                        ...styles.salutationWrapper,
                        marginBottom: scaleSize(10),
                      }}>
                      <Text style={{color: 'red', marginRight: 3}}>*</Text>
                      {subscriberCreateData?.salutations?.map((item, index) => (
                        <Salutation
                          item={item}
                          key={index.toString()}
                          onPress={value =>
                            onChangeValue('fatherSalutation', value)
                          }
                          selected={fatherSalutation}
                        />
                      ))}
                    </View>
                    <Input
                      label="Full Name"
                      placeholder={'Name'}
                      labelColor={Colors.label2}
                      doAction={text => onChangeValue('fatherName', text)}
                      value={fatherName}
                      multiline={false}
                      error={''}
                      readonly={false}
                      bgColor={'#fff'}
                      height={45}
                    />
                  </View>
                </View>
                {/* Subscriber Code */}
                {userType() == 'lco' && (
                  <View style={styles.inputWrapper}>
                    <Input
                      label="Subscriber Code"
                      placeholder={'32123001000019'}
                      labelColor={Colors.label2}
                      // doAction={text => onChangeValue('pincode', text)}
                      // value={'pincode'}
                      multiline={false}
                      error={''}
                      readonly={false}
                      asterik
                      bgColor={'#fff'}
                      height={45}
                    />
                  </View>
                )}

                {/* Primary email */}
                <View style={styles.inputWrapper}>
                  <Input
                    label="Primary Email"
                    placeholder={'Primary Email'}
                    labelColor={Colors.label2}
                    doAction={text => onChangeValue('primaryEmail', text)}
                    value={primaryEmail}
                    multiline={false}
                    error={''}
                    readonly={false}
                    asterik
                    bgColor={'#fff'}
                    height={45}
                  />
                </View>
                {/* Secondary email */}
                <View style={styles.inputWrapper}>
                  <Input
                    label="Secondary Email"
                    placeholder={'Secondary Email'}
                    labelColor={Colors.label2}
                    doAction={text => onChangeValue('secondaryEmail', text)}
                    value={secondaryEmail}
                    multiline={false}
                    error={''}
                    readonly={false}
                    bgColor={'#fff'}
                    height={45}
                  />
                </View>
                {/* PAN */}
                <View style={styles.inputWrapper}>
                  <Input
                    label="PAN"
                    placeholder={'PAN'}
                    labelColor={Colors.label2}
                    doAction={text => onChangeValue('pan', text)}
                    value={pan}
                    multiline={false}
                    error={''}
                    readonly={false}
                    bgColor={'#fff'}
                    height={45}
                    asterik={connection_type !== 'individual'}
                  />
                </View>
                {/* Home phone */}
                <View style={styles.inputWrapper}>
                  <Input
                    label="Home Phone"
                    placeholder={'Home Phone'}
                    labelColor={Colors.label2}
                    doAction={text => onChangeValue('homePhone', text)}
                    value={homePhone}
                    multiline={false}
                    error={''}
                    readonly={false}
                    bgColor={'#fff'}
                    height={45}
                  />
                </View>
                {/* Mobile */}
                <View style={styles.inputWrapper}>
                  <Input
                    label="Mobile"
                    placeholder={'Mobile'}
                    labelColor={Colors.label2}
                    doAction={text => onChangeValue('mobile', text)}
                    value={mobile}
                    multiline={false}
                    error={''}
                    readonly={false}
                    bgColor={'#fff'}
                    height={45}
                    asterik
                  />
                </View>
                {/* Work phone */}
                <View style={styles.inputWrapper}>
                  <Input
                    label="Work Phone"
                    placeholder={'Work Phone'}
                    labelColor={Colors.label2}
                    doAction={text => onChangeValue('workPhone', text)}
                    value={workPhone}
                    multiline={false}
                    error={''}
                    readonly={false}
                    bgColor={'#fff'}
                    height={45}
                  />
                </View>

                <View style={styles.actionWrapper}>
                  <AccentButtonTwo title={'Proceed'} onPress={actionHandler} />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        {/* DOB Date picker modal */}
        {/* <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            style={{paddingHorizontal: scaleSize(0)}}
            // contentContainerStyle={{backgroundColor: 'red'}}
          >
            <CalendarList
              ref={calendarRef}
              hideExtraDays={true}
              hideArrows={false}
              // onVisibleMonthsChange={(months) => {
              //   console.log('now these months are visible', months);
              // }}
              // calendarWidth={'100%'}
              removeClippedSubviews={false}
              current={new Date()}
              pastScrollRange={24}
              futureScrollRange={24}
              horizontal
              pagingEnabled
              onDayPress={day => {
                onChangeValue('dob', day.dateString), hideModal();
              }}
              style={{marginBottom: 0}}
              onPressArrowLeft={subtractMonth => subtractMonth()}
              // calendarHeight={200}
              // style={{height: 350, position: 'relative'}}
              // markedDates={dateList}
              theme={{
                arrowColor: '#232323',
                backgroundColor: '#F7F9FF',
                calendarBackground: '#ffff',
                selectedDayBackgroundColor: '#0B78E3',
                selectedDayTextColor: '#fff',
                todayTextColor: 'red',
                textDisabledColor: '#232323',
                dayTextColor: '#232323',
                dotColor: '#0483B5',
                selectedDotColor: '#fff',
                textDayHeaderFontSize: FontSize.small,
                textDayHeaderFontFamily: Family.semibold,
                textMonthFontFamily: Family.medium,
                textMonthFontWeight: 'bold',
                textSectionTitleColor: '#232323',
                textMonthFontSize: FontSize.regularVariant,
                textDayStyle: {
                  fontSize: FontSize.smallVariant,
                  fontFamily: Family.regular,
                },
                // 'stylesheet.calendar.header': {
                //   week: {
                //     marginTop: 4,
                //     flexDirection: 'row',
                //     justifyContent: 'space-between',
                //     // height: 30,
                //     // backgroundColor: 'red',
                //   },
                //   // header: {
                //   //   backgroundColor: 'green',
                //   //   // height: 0,
                //   //   // opacity: 0,
                //   // },
                // },
                // 'stylesheet.day.basic': {
                //   today: {
                //     borderRadius: 16,
                //     backgroundColor: '#F8D57E',
                //     height: scaleSize(25),
                //     width: scaleSize(25),
                //     alignItems: 'center',
                //     justifyContent: 'center',
                //   },
                //   todayText: {
                //     color: '#2C2543',
                //     fontWeight: 'bold',
                //   },
                // },
                // 'stylesheet.calendar.main': {
                //   week: {
                //     marginTop: 7,
                //     marginBottom: 7,
                //     flexDirection: 'row',
                //     justifyContent: 'space-around',
                //     // backgroundColor: 'green',
                //     height: 10,
                //   },
                //   month: {
                //     backgroundColor: 'green',
                //   },
                // },
                // 'stylesheet.calendar.body': {
                //   height: 100,
                // },
              }}
            />
          </Modal>
        </Portal> */}
      </Provider>
    </>
  );
};

export default SubscriberIdentity;

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
    // height: scaleSize(800),
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
