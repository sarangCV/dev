import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {CalendarList} from 'react-native-calendars';
import {Button, Modal, Portal, Provider} from 'react-native-paper';

import {_Text} from 'styles/index';
import {Family, FontSize} from 'constants/Fonts';
// Importing assets
import bg from 'images/subscribers/create/bg_13.png';
import upload from 'images/subscribers/create/upload_2.png';

import date from 'images/subscribers/create/date.png';

import Colors from 'constants/Colors';
import {WINDOW_HEIGHT, scaleSize} from 'utils/index';
import AccentButtonOne from 'components/Button/AccentButtonOne';
import Salutation from 'components/Subscriber/Create/Elements/Salutation';
import Input from 'components/Input';
import DropdownPicker from 'components/Input/DropdownPicker';
import AccentButtonTwo from 'components/Button/AccentButtonTwo';
import KycCard from './Elements/KycCard';
import kyc_1 from 'images/subscribers/create/rc_details.png';
import kyc_2 from 'images/subscribers/create/rc_image.png';
import kyc_3 from 'images/subscribers/create/rc_address.png';
import kyc_4 from 'images/subscribers/create/rc_plan.png';
import kyc_5 from 'images/subscribers/create/rc_details.png';
import kyc_6 from 'images/subscribers/create/rc_kyc.png';

import {pick} from 'react-native-document-picker';
import {
  clearSubscriberCreatedState,
  createSubscriber,
  subscriberSelector,
} from 'features/Subscribers/SubscriberSlice';
import {useNavigation} from '@react-navigation/native';
import Screens from 'navigators/index';
import {authSelector} from 'features/Auth/AuthSlice';
import {getFormEncodedData} from 'utils/APIUtils';
import {LoaderOverlay} from 'components/Overlays';

// import kyc_1 from 'images/subscribers/create/kyc_1.png';

const UploadConfirm = ({setPage, setImage, lcoSlug, data}) => {
  const [visible, setVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryListOpen, setCountryListOpen] = useState(false);
  const [selectedSalutation, setSelectedSalutation] = useState('');
  const [centerOpen, setCenterOpen] = useState(false);
  const [pickedFile, setPickedFile] = useState('');

  const dispatch = useDispatch();
  const {
    createSubscriberInput,
    subscriberCreateData,
    createSubscriberFetching,
    createSubscriberSuccess,
    createSubscriberResponse,
    createSubscriberError,
    createSubscriberErrorMessage,
  } = useSelector(subscriberSelector);

  // const {subscriberCreateData} = useSelector(subscriberSelector);

  const calendarRef = useRef();
  const navigation = useNavigation();

  // Auth reducer
  const {accessToken} = useSelector(authSelector);

  // KYC list
  const dataList = [
    {id: 1, title: 'Details', img: kyc_1},
    {id: 2, title: 'CATV', img: kyc_2},
    {id: 3, title: 'Address', img: kyc_3},
    {id: 4, title: 'Plan', img: kyc_4},
    {id: 5, title: 'Type', img: kyc_5},
    {id: 6, title: 'KYC', img: kyc_6},
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

  useEffect(() => {
    if (createSubscriberSuccess) {
      alert('Subscriber created!');
      dispatch(clearSubscriberCreatedState());
    }
  }, [createSubscriberSuccess]);

  // const containerStyle = {backgroundColor: 'white', padding: 2};
  const modalHandler = id => {
    // setVisible(true);
    console.log('ID--', id);
    const navTo = {
      1: () =>
        navigation.navigate(Screens.CREATE_SUBSCRIBER, {navId: 4, lcoSlug}),
      2: () =>
        navigation.navigate(Screens.CREATE_SUBSCRIBER, {navId: 9, lcoSlug}),
      3: () =>
        navigation.navigate(Screens.CREATE_SUBSCRIBER, {navId: 6, lcoSlug}),
      4: () =>
        navigation.navigate(Screens.CREATE_SUBSCRIBER, {navId: 3, lcoSlug}),
      5: () =>
        navigation.navigate(Screens.CREATE_SUBSCRIBER, {navId: 2, lcoSlug}),
      6: () =>
        navigation.navigate(Screens.CREATE_SUBSCRIBER, {navId: 8, lcoSlug}),
    };
    if (navTo[id]) {
      navTo[id]();
    }
  };
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

  const filePickerHandler = async () => {
    try {
      const [pickResult] = await pick();
      setPickedFile({uri: pickResult.uri, name: pickResult.name});
      // const [pickResult] = await pick({mode: 'import'}); // equivalent
      console.log('PICKED FILE IS -----', pickResult);
      // do something with the picked file
    } catch (err) {
      console.log(err);
      // see error handling
    }
  };

  // Submit data to create subscriber
  const handleSubmit = () => {
    // Taking deep copy to keep the original values intact
    const dupe = JSON.parse(JSON.stringify(createSubscriberInput));
    delete dupe.additional_docs;
    dupe['username'] = data?.username;
    dupe['lco_slug'] = lcoSlug;
    // Data to send with create subscriber api
    const formData = getFormEncodedData(dupe);
    if (createSubscriberInput.additional_docs) {
      for (const element of createSubscriberInput.additional_docs) {
        formData.append('additional_docs', element);
      }
    }

    console.log(
      'FILTERED INPUT DATA------------------------------------------------------------>',
      formData,
    );

    dispatch(
      createSubscriber({
        tokenId: accessToken,
        payload: formData,
      }),
    );
  };

  console.log(
    'FROM CONFIRM KYC----->>',
    // createSubscriberInput,
    lcoSlug,
    // subscriberCreateData?.username,
  );

  return (
    <>
      <Provider>
        <ScrollView>
          <LoaderOverlay visible={createSubscriberFetching} />
          <View style={styles.bgWrapper}>
            <Image style={styles.bg} source={bg} />
          </View>
          <View style={styles.body}>
            <View style={styles.layoutBg}></View>
            <View style={styles.content}>
              <Text style={styles.title}>Take a look back</Text>
              <Text style={styles.description}>
                Loren ipsun dolor sit anet, consectetur adipisci elit, sed
                eiusnod tenpor incidunt ut labore et dolore nagna aliqua.
              </Text>
              <View style={styles.kycActionWrapper}>
                <FlatList
                  data={dataList}
                  renderItem={({item}) => (
                    <KycCard data={item} onPress={modalHandler} />
                  )}
                  numColumns={3}
                  contentContainerStyle={
                    {
                      //   backgroundColor: 'red',
                      //   alignItems: 'center',
                    }
                  }
                />
              </View>
              <View style={styles.actionWrapper}>
                <AccentButtonTwo title={'Proceed'} onPress={handleSubmit} />
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
            <View style={styles.modalInnerWrapper}>
              <View style={styles.modalTitleWrapper}>
                <Text style={styles.modalTitle}>Upload Document</Text>
              </View>
              <View style={styles.modalBodyWrapper}>
                {/* Document Type */}
                <View style={styles.inputWrapper}>
                  <Text style={styles.dobLabel}>Document Type</Text>
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
                    placeHolder="Select"
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
                    label="Document Number"
                    placeholder={'Number'}
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
                <TouchableOpacity
                  style={styles.uploadButtonWrapper}
                  onPress={filePickerHandler}>
                  <Image style={styles.uploadIcon} source={upload} />
                  <Text style={styles.uploadText}>Upload</Text>
                </TouchableOpacity>
                {pickedFile && (
                  <Text style={styles.pickedFileNameText}>
                    {pickedFile.name}
                  </Text>
                )}

                <TouchableOpacity style={styles.modalSubmitButtonWrapper}>
                  <Text style={styles.modalSubmitButtonText}>Done</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </Portal>
      </Provider>
    </>
  );
};

export default UploadConfirm;

const styles = StyleSheet.create({
  bgWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    width: scaleSize(280),
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
    height: 480,
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
  kycActionWrapper: {
    marginTop: scaleSize(25),
  },
  actionWrapper: {
    marginTop: scaleSize(50),
  },
  // Modal
  modalInnerWrapper: {
    backgroundColor: 'white',
    marginHorizontal: scaleSize(20),
    borderRadius: scaleSize(12),
    overflow: 'hidden',
  },
  modalTitleWrapper: {
    backgroundColor: Colors.modalHeader,
    alignItems: 'center',
    paddingVertical: scaleSize(15),
  },
  modalTitle: {
    ..._Text(FontSize.regularVariantPlus, Family.semibold, Colors.userText),
  },
  dobLabel: {
    ..._Text(FontSize.smallVariant, Family.regular, Colors.label2),
    marginBottom: scaleSize(5),
  },
  modalBodyWrapper: {
    paddingHorizontal: scaleSize(35),
    paddingVertical: scaleSize(28),
  },
  inputWrapper: {marginBottom: scaleSize(10)},
  uploadButtonWrapper: {
    backgroundColor: Colors.bg_light,
    alignItems: 'center',
    paddingVertical: scaleSize(12),
    borderRadius: scaleSize(10),
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: Colors.border1,
    marginTop: scaleSize(10),
  },
  uploadIcon: {
    width: scaleSize(20),
    height: scaleSize(20),
    resizeMode: 'contain',
    marginBottom: scaleSize(3),
  },
  uploadText: {
    ..._Text(FontSize.smallVariant, Family.semibold, Colors.label2),
  },
  pickedFileNameText: {
    ..._Text(FontSize.small, Family.semibold, Colors.green),
    marginVertical: scaleSize(15),
  },
  modalSubmitButtonWrapper: {
    backgroundColor: Colors.cancelBtn,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scaleSize(15),
    paddingHorizontal: scaleSize(75),
    alignSelf: 'center',
    borderRadius: scaleSize(15),
  },
  modalSubmitButtonText: {
    ..._Text(FontSize.regular, Family.semibold, Colors.white),
  },
});
