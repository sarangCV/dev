import { useNavigation, useRoute } from '@react-navigation/native'
import Colors from 'constants/Colors'
import {Family, FontSize} from 'constants/Fonts';
import {Rounded, Spacing} from 'constants/Layout';
import RechargeListJson from 'data/NotificationList/RechargeListJson'
import React, {useState} from 'react';
import {ScrollView, StatusBar} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  Pressable,
} from 'react-native';
import FastImage from 'react-native-fast-image'
import { useDispatch } from 'react-redux'
import {_Button, _Row, _Text} from 'styles/index';
import {scaleSize, WINDOW_WIDTH} from 'utils/index';
import Input from 'components/Input';

import Screens from 'navigators/index'
import Button from 'components/Button';
import ButtonTypes from 'constants/ButtonTypes';
import ButtonSizes from 'constants/ButtonSizes';
import { TouchableOpacity } from 'react-native'
import EnquiryPopUp from 'components/Modal/EnquiryPopup'
import { ImageBackground } from 'react-native';

const ProfileEditSaveView = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const [fullName, setFullName] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  // const hideLogoutModal = () => {
  //   setModalVisible(false)
  // }


  const navigateBack = () => {
    navigation.goBack()
  }

  // const doSubmit = () => {
  //   setModalVisible(true);
  //   setTimeout(() => {
  //     setModalVisible(false);
  //     navigation.navigate(Screens.ENQUIRY);
  //   }, 2000);
  // }

  const onChangeValue = (type, text) => {
    switch (type) {
      case 'fullName':
        setFullName(text)
        break
      case 'phoneNumber':
        setPhoneNumber(text)
        break
      case 'email':
        setEmail(text)
        break
      case 'address':
        setAddress(text)
        break
    }
  }
  return (
    <View
      style={[
        styles.wrapper,
        isModalVisible ? {backgroundColor: 'rgba(0,0,0,0.5)'} : '',
      ]}>
      <StatusBar backgroundColor={Colors.cancelBtn} barStyle="light-content" />
      <View style={styles.header}>
        <Pressable onPress={() => navigateBack()}>
          <FastImage
            source={require('../../../images/back.png')}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.icon}
          />
        </Pressable>
        <Text style={styles.headerText}>Profile</Text>
        <Pressable onPress={() => navigation.navigate(Screens.NOTIFICATION)}>
          <FastImage
            source={require('../../../images/Home/notification_2.png')}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.icon}
          />
        </Pressable>
      </View>
      {/* <EnquiryPopUp
        isVisible={isModalVisible}
        doAction={() => hideLogoutModal()}
      /> */}
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        style={styles.bodyView}>
        <View style={styles.contentStyle}>
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'column', marginLeft: scaleSize(20)}}>
              <View
                style={{
                  alignItems: 'center',
                  marginBottom: 10,
                  marginTop: 20,
                }}>
                <ImageBackground
                  resizeMode="contain"
                  source={require('../../../images/Home/circle.png')}
                  style={styles.imgbgContainer}>
                  <View>
                    <Text style={styles.userTextStyle}>L</Text>
                  </View>
                </ImageBackground>
              </View>

              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <Text style={styles.headerTextStyle}>Lisa Vianio</Text>
                <Text style={styles.headerSubTextStyle}>@Lisa</Text>
              </View>
            </View>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputRow}>
              <Input
                label="Full Name"
                placeholder={'Full Name'}
                labelColor={'#1F2C37'}
                doAction={text => onChangeValue('fullName', text)}
                value={fullName}
                multiline={false}
                error={fullNameError}
                readonly={false}
              />
            </View>

            <View style={styles.inputRow}>
              <Input
                label="Email"
                placeholder={'Email'}
                labelColor={'#1F2C37'}
                doAction={text => onChangeValue('email', text)}
                value={email}
                multiline={false}
                error={emailError}
                readonly={false}
              />
            </View>

            <View style={styles.inputRow}>
              <Input
                label="Phone Number"
                placeholder={'Phone Number'}
                labelColor={'#1F2C37'}
                doAction={text => onChangeValue('phoneNumber', text)}
                value={phoneNumber}
                multiline={false}
                error={phoneNumberError}
                readonly={false}
              />
            </View>

            

            <View style={styles.inputRow}>
              <Input
                label="Address"
                placeholder={'Address'}
                labelColor={'#1F2C37'}
                doAction={text => onChangeValue('address', text)}
                value={address}
                multiline={true}
                error={addressError}
                readonly={false}
              />
            </View>

            <View style={{...styles.inputRow, paddingVertical: Spacing.medium}}>
              <Pressable
                style={styles.buttonContainerStyle}>
                <Text style={styles.buttonText}>Save Changes</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default ProfileEditSaveView

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'column',
  },
  bodyView: {
    flex: 1,
    // paddingStart: Spacing.large,
    // paddingEnd: Spacing.large,
  },

  contentStyle: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'column',
  },
  image: {
    alignSelf: 'center',
    width: 350,
    height: 350,
  },

  header: {
    flexDirection: 'row',
    padding: Spacing.largeVariant2,
    backgroundColor: Colors.cancelBtn,
    ..._Row,
    alignItems: 'center',
    width: WINDOW_WIDTH,
  },
  icon: {
    alignSelf: 'flex-start',
    width: scaleSize(25),
    height: scaleSize(25),
    flex: 1,
  },
  headerText: {
    ..._Text(FontSize.medium, Family.bold, Colors.white),
    paddingHorizontal: Spacing.small,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    marginLeft: 90,
  },
  formContainer: {
    marginEnd: Spacing.large,
    marginStart: Spacing.large,
  },
  inputRow: {
    marginBottom: Spacing.regular,
  },
  labelText: {
    ..._Text(FontSize.regular, Family.regular, Colors.textDark),
    paddingBottom: Spacing.xs,
  },
  buttonContainerStyle: {
    borderRadius: Rounded.smallVariant,
    backgroundColor: Colors.pinkVarient,
    height: '30%',
  },
  buttonText: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: Family.bold,
    fontSize: FontSize.regularVariantPlus,
    color: Colors.white,
    marginTop: 15,
  },
  imgbgContainer: {
    width: WINDOW_WIDTH * 0.25,
    height: WINDOW_WIDTH * 0.25,
    alignItems: 'center',
  },

  userTextStyle: {
    fontSize: FontSize.largeVariant12,
    fontFamily: Family.semibold,
    color: Colors.white,
    textAlign: 'center',
    marginTop: 25,
  },
  headerTextStyle: {
    fontFamily: Family.robotoMedium,
    fontSize: FontSize.mediumVariant,
    color: Colors.homeBackground,
    textAlign: 'center',
  },
  headerSubTextStyle: {
    fontFamily: Family.semibold,
    fontSize: FontSize.regularVariant,
    color: Colors.drawerTextGrey,
    textAlign: 'center',
  },
})
