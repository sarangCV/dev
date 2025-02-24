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
import Geolocation from '@react-native-community/geolocation';

import {_Row, _Text, commonStyles} from 'styles/index';
import {Family, FontSize} from 'constants/Fonts';
// Importing assets
import bg_7 from 'images/subscribers/create/bg_7.png';
import date from 'images/subscribers/create/date.png';

import Colors from 'constants/Colors';
import {WINDOW_HEIGHT, scaleSize} from 'utils/index';
import AccentButtonOne from 'components/Button/AccentButtonOne';
import Salutation from 'components/Subscriber/Create/Elements/Salutation';
import Input from 'components/Input';
import DropdownPicker from 'components/Input/DropdownPicker';
import AccentButtonTwo from 'components/Button/AccentButtonTwo';
import {PermissionsAndroid} from 'react-native';
import {
  addCreateSubscriberInput,
  subscriberSelector,
} from 'features/Subscribers/SubscriberSlice';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {validateEmptyValues} from 'utils/Validator';

const CustomerAvailability = ({setPage, setImage, data}) => {
  const [startDateVisible, setStartDateVisible] = useState(false);
  const [endDateVisible, setEndDateVisible] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState('');
  const [tlOpen, setTlOpen] = useState(false);
  const [selectedTl, setSelectedTl] = useState('');

  const [ascoOpen, setAscoOpen] = useState('');
  const [selectedAsco, setSelectedAsco] = useState('');

  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [electricPost, setElectricPost] = useState('');

  const dispatch = useDispatch();

  const calendarRef = useRef();

  // Importing subscriberData state values from reducer
  const {subscriberCreateData, createSubscriberInput} =
    useSelector(subscriberSelector);

  const {asco, electric_post, from_date_time, tl, to_date_time} =
    createSubscriberInput;

  // If local data already available in the reducer set data to state
  useEffect(() => {
    if (asco) setSelectedAsco(asco);
    if (electric_post) setElectricPost(electric_post);
    if (from_date_time) setStartDate(from_date_time);
    if (to_date_time) setEndDate(to_date_time);
    if (tl) setSelectedTl(tl);
    if (createSubscriberInput.location)
      setLocation(createSubscriberInput.location);
  }, []);

  // On change value of drop down
  const dropDownChange = (type, item) => {
    console.log(type, item);
    setSelectedCountry(item);
  };

  // Function to get permission for location
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('granted', granted);
      if (granted === 'granted') {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  };

  // function to check permissions and get Location
  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            setLocation(position);
          },
          error => setLocation(false),
          {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
        );
      }
    });
    console.log(location);
  };

  // On proceeding
  const submitHandler = () => {
    const emptyCheck = validateEmptyValues({
      startDate,
      endDate,
      location,
      electricPost,
      Tl: selectedTl,
      Asco: selectedAsco,
    });
    if (emptyCheck.isValid) {
      dispatch(
        addCreateSubscriberInput({
          location: location,
          from_date_time: startDate,
          to_date_time: endDate,
          electric_post: electricPost,
          tl: selectedTl,
          asco: selectedAsco,
        }),
      );
      setPage();
    } else {
      alert(`${emptyCheck.emptyKey.toUpperCase()} should not be blank`);
    }
  };

  return (
    <>
      <Provider>
        <ScrollView>
          <View style={styles.bgWrapper}>
            <Image style={styles.bg} source={bg_7} />
          </View>
          <View style={styles.body}>
            <View style={styles.layoutBg}></View>
            <View style={styles.content}>
              <Text style={styles.title}>CustomerAvailability</Text>
              <Text style={styles.description}>
                Loren ipsun dolor sit anet, consectetur
              </Text>
              {/* Form details */}
              <View style={styles.detailsWrapper}>
                {/* From date and time */}
                <View style={styles.inputWrapper}>
                  <View style={commonStyles.row}>
                    <Text style={{color: Colors.red}}>*</Text>
                    <Text style={styles.dobLabel}>From date and time</Text>
                  </View>

                  <TouchableOpacity
                    style={styles.dob}
                    onPress={() => setStartDateVisible(true)}>
                    <>
                      <Text style={styles.dobText}>
                        {' '}
                        {startDate ? moment(startDate).format('L') : `Select`}
                      </Text>
                      <Image style={styles.dobIcon} source={date} />
                    </>
                  </TouchableOpacity>
                  <DatePicker
                    modal
                    mode="date"
                    open={startDateVisible}
                    date={new Date()}
                    onConfirm={date => {
                      setStartDateVisible(false);
                      setStartDate(date);
                    }}
                    onCancel={() => {
                      setStartDateVisible(false);
                    }}
                  />
                </View>
                {/* To date and time */}
                <View style={styles.inputWrapper}>
                  <Text style={styles.dobLabel}>To date and time</Text>
                  <TouchableOpacity
                    style={styles.dob}
                    onPress={() => setEndDateVisible(true)}>
                    <>
                      <Text style={styles.dobText}>
                        {' '}
                        {endDate ? moment(endDate).format('L') : `Select`}
                      </Text>
                      <Image style={styles.dobIcon} source={date} />
                    </>
                  </TouchableOpacity>
                  <DatePicker
                    modal
                    mode="date"
                    open={endDateVisible}
                    date={new Date()}
                    onConfirm={date => {
                      setEndDateVisible(false);
                      setEndDate(date);
                    }}
                    onCancel={() => {
                      setEndDateVisible(false);
                    }}
                  />
                </View>
                {/* Location */}
                <View style={styles.inputWrapper}>
                  <Input
                    label="Location"
                    placeholder={'Location'}
                    labelColor={Colors.label2}
                    doAction={text => setLocation(text)}
                    value={location}
                    multiline={false}
                    error={''}
                    readonly={false}
                    asterik
                    bgColor={'#fff'}
                    height={45}
                  />
                </View>

                {/* Electric Post No */}
                <View style={styles.inputWrapper}>
                  <Input
                    label="Electric Post No"
                    placeholder={'Post Number'}
                    labelColor={Colors.label2}
                    doAction={text => setElectricPost(text)}
                    value={electricPost}
                    multiline={false}
                    error={''}
                    readonly={false}
                    bgColor={'#fff'}
                    height={45}
                    asterik
                  />
                </View>

                {/* TL */}
                <View style={styles.inputWrapper}>
                  <View style={styles.row}>
                    <Text style={styles.asterikText}>*</Text>
                    <Text style={styles.dobLabel}>TL</Text>
                  </View>
                  <DropdownPicker
                    schema={{
                      label: 'name',
                      value: 'slug',
                    }}
                    isOpen={tlOpen}
                    disabled={false}
                    value={selectedTl}
                    defaultValue={selectedTl}
                    items={data.tl_users}
                    // setItems={selectedTl}
                    setOpen={setTlOpen}
                    setValue={setSelectedTl}
                    type="enquiryType"
                    placeHolder="Select TL"
                    dropDownMaxHeight={1000}
                    // error={''}
                    direction="TOP"
                    showIcon={true}
                    changeItem={(type, value) => setSelectedTl(value)}
                    // dropDownItemSelected={(value, type = 'district') =>
                    //   dropDownItemSelected(value, type)
                    // }
                    // onPress={(value, type = 'district') =>
                    //   dropDownPressed(type)
                    // }
                  />
                </View>

                {/* ASCO */}
                <View style={styles.inputWrapper}>
                  <View style={styles.row}>
                    <Text style={styles.asterikText}>*</Text>
                    <Text style={styles.dobLabel}>ASCO</Text>
                  </View>
                  <DropdownPicker
                    schema={{
                      label: 'name',
                      value: 'slug',
                    }}
                    isOpen={ascoOpen}
                    disabled={false}
                    value={selectedAsco}
                    defaultValue={selectedAsco}
                    items={data.asco_users}
                    // setItems={setCountryList}
                    setOpen={setAscoOpen}
                    setValue={setSelectedAsco}
                    type="enquiryType"
                    placeHolder="Select ASCO"
                    dropDownMaxHeight={1000}
                    // error={''}
                    direction="TOP"
                    showIcon={true}
                    changeItem={(type, value) => setSelectedAsco(value)}
                    // dropDownItemSelected={(value, type = 'district') =>
                    //   dropDownItemSelected(value, type)
                    // }
                    // onPress={(value, type = 'district') =>
                    //   dropDownPressed(type)
                    // }
                  />
                </View>

                <View style={styles.actionWrapper}>
                  <AccentButtonTwo title={'Proceed'} onPress={submitHandler} />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </Provider>
    </>
  );
};

export default CustomerAvailability;

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
    height: scaleSize(720),
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
  row: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  asterikText: {
    ..._Text(FontSize.smallVariant, Family.regular, Colors.red),
    marginRight: scaleSize(2),
  },
});
