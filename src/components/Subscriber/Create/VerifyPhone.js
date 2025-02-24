import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {_Text} from 'styles/index';
import {Family, FontSize} from 'constants/Fonts';
// Importing assets
import bg_6 from 'images/subscribers/create/bg_6.png';
import Colors from 'constants/Colors';
import {scaleSize} from 'utils/index';
import AccentButtonOne from 'components/Button/AccentButtonOne';
import {useDispatch} from 'react-redux';
import Input from 'components/Input';
import {OtpInput} from 'react-native-otp-entry';
import AccentButtonTwo from 'components/Button/AccentButtonTwo';

const VerifyPhone = ({setPage}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [status, setStatus] = useState('');

  const dispatch = useDispatch();

  // TODO: Setting subscriber type to the state
  const actionHandler = type => {
    if (type == 'send_otp') setStatus('otp_sent');
    else {
      setPage();
    }
  };

  console.log('STATUS---', status);
  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position">
        {/* <ScrollView> */}
        <View style={styles.bgWrapper}>
          <Image style={styles.bg} source={bg_6} />
        </View>
        <View style={styles.body}>
          <View style={styles.layoutBg}></View>
          <View style={styles.content}>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>Verify Phone Number</Text>
              <Text style={styles.description}>
                Loren ipsun dolor sit anet, consectetur adipisci elit, sed
                eiusnod tenpor incidunt ut labore et dolore nagna aliqua.{' '}
              </Text>
            </View>

            <View style={styles.inputWrapper}>
              {status !== 'otp_sent' ? (
                <View style={styles.mobileInputWrapper}>
                  <Text
                    style={{
                      ..._Text(
                        FontSize.smallVariantPlus,
                        Family.semibold,
                        Colors.placeholderColor,
                      ),
                      // flex: 1,
                    }}>
                    +91
                  </Text>
                  <View style={{flex: 1}}>
                    <Input
                      // label="Name"
                      placeholder={'0000000000'}
                      labelColor={Colors.label2}
                      doAction={text => setPhoneNumber(text)}
                      value={phoneNumber}
                      multiline={false}
                      error={''}
                      readonly={false}
                      asterik
                      bgColor={'#fff'}
                      height={45}
                      noBorderWidth
                      keyboardType={'phone-pad'}
                      // paddingHorizontal={10}
                    />
                  </View>
                </View>
              ) : (
                <View>
                  <OtpInput
                    numberOfDigits={6}
                    focusColor={Colors.button}
                    focusStickBlinkingDuration={500}
                    onTextChange={text => console.log(text)}
                    onFilled={text => console.log(`OTP is ${text}`)}
                    theme={{
                      containerStyle: {marginTop: scaleSize(5)},
                      inputsContainerStyle: styles.inputsContainer,
                      pinCodeContainerStyle: {
                        height: 45,
                        width: scaleSize(40),
                        borderRadius: 8,
                      },
                    }}
                  />
                  <View style={styles.resendWrapper}>
                    <Text style={styles.resendLabel}>Didn’t receive code?</Text>
                    <TouchableOpacity>
                      <Text style={styles.resendText}>Resend</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
            <View
              style={{
                marginTop:
                  status !== 'otp_sent' ? scaleSize(50) : scaleSize(25),
              }}>
              <AccentButtonTwo
                title={status == 'otp_sent' ? 'Verify' : 'Send'}
                onPress={() =>
                  status == 'otp_sent'
                    ? actionHandler('verify_otp')
                    : actionHandler('send_otp')
                }
              />
            </View>
          </View>
        </View>
        {/* </ScrollView> */}
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default VerifyPhone;

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
    height: 350,
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
  titleWrapper: {
    paddingRight: scaleSize(65),
    marginBottom: scaleSize(10),
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
  inputWrapper: {marginTop: scaleSize(10)},
  mobileInputWrapper: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: scaleSize(5),
    alignItems: 'center',
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    paddingHorizontal: scaleSize(10),
  },

  resendWrapper: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    justifyContent: 'center',
    marginTop: scaleSize(20),
  },
  resendLabel: {
    ..._Text(FontSize.smallVariant, Family.regular, Colors.label3),
  },
  resendText: {
    ..._Text(FontSize.smallVariant, Family.regular, Colors.text_3),
    marginLeft: scaleSize(3),
  },
});
