import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {CalendarList} from 'react-native-calendars';
import {Button, Modal, Portal, Provider} from 'react-native-paper';

import {_Text} from 'styles/index';
import {Family, FontSize} from 'constants/Fonts';
// Importing assets
import bg_6 from 'images/subscribers/create/bg_6.png';
import date from 'images/subscribers/create/date.png';

import Colors from 'constants/Colors';
import {WINDOW_HEIGHT, scaleSize} from 'utils/index';
import AccentButtonOne from 'components/Button/AccentButtonOne';
import Salutation from 'components/Subscriber/Create/Elements/Salutation';
import Input from 'components/Input';
import DropdownPicker from 'components/Input/DropdownPicker';
import AccentButtonTwo from 'components/Button/AccentButtonTwo';

const CableIdentity = ({setPage, setImage}) => {
  const [visible, setVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryListOpen, setCountryListOpen] = useState(false);
  const [selectedSalutation, setSelectedSalutation] = useState('');

  const dispatch = useDispatch();

  const calendarRef = useRef();

  // Salutation list
  const salutation = [
    {id: 1, title: 'Mr'},
    {id: 2, title: 'Ms'},
    {id: 3, title: 'Dr'},
    {id: 4, title: 'M/S'},
  ];

  const gender = [
    {id: 1, title: 'Male'},
    {id: 2, title: 'Female'},
    {id: 3, title: 'Other'},
  ];

  const country = [
    {name: 'India', slug: 'india'},
    {name: 'China', slug: 'china'},
  ];
  // const containerStyle = {backgroundColor: 'white', padding: 2};

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  // On change value of drop down
  const dropDownChange = (type, item) => {
    console.log(type, item);
    setSelectedCountry(item);
  };

  // On selecting subscriber salutation
  const subscriberSalutationHandler = value => {
    setSelectedSalutation(value);
  };

  const fatherSalutationHandler = () => {
    console.log('FATHER SALUTATION');
  };

  return (
    <>
      <Provider>
        <ScrollView>
          <View style={styles.bgWrapper}>
            <Image style={styles.bg} source={bg_6} />
          </View>
          <View style={styles.body}>
            <View style={styles.layoutBg}></View>
            <View style={styles.content}>
              <Text style={styles.title}>Asianet Cable TV Subscriber</Text>
              <Text style={styles.description}>
                Loren ipsun dolor sit anet, consectetur
              </Text>
              {/* Form details */}
              <View style={styles.detailsWrapper}>
                {/* Cable TV Subscriber Code */}
                <View style={styles.inputWrapper}>
                  <Input
                    label="Cable TV Subscriber Code"
                    placeholder={'Cable TV Subscriber Code'}
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
                {/* STB MAC */}
                <View style={styles.inputWrapper}>
                  <Input
                    label="STB MAC"
                    placeholder={'STB MAC'}
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
                {/* PAN Card Number */}
                <View style={styles.inputWrapper}>
                  <Input
                    label="PAN Card Number"
                    placeholder={'PAN Card Number'}
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
                  <AccentButtonTwo title={'Proceed'} onPress={setPage} />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        {/* DOB Date picker modal */}
        <Portal>
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
                console.log('day' + JSON.stringify(day)), hideModal();
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
        </Portal>
      </Provider>
    </>
  );
};

export default CableIdentity;

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
    height: 470,
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
});
