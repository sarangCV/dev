import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ImageBackground, StatusBar, View } from 'react-native'
import Colors from 'constants/Colors'
import { Dimensions, Image } from 'react-native'
import { scaleSize } from 'utils/'
import {
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native'
import { Spacing } from 'constants/Layout'
import { _Button, _Container, _Text } from 'styles/index'
import { Family, FontSize } from 'constants/Fonts'
import Input, { LoginInput } from 'components/Input'
import Screens from 'navigators/index'
import { authSelector, clearState, loginUser } from 'features/Auth/AuthSlice'

const ForgotPasswordView = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [usernameError, setUsernameError] = useState('');

  const dispatch = useDispatch()

  const onSendResetLink = async () => {
    console.log('********Send Reset link***********')
  }

  const onReturnToSignIn = async () => {
    navigation.replace(Screens.SIGNIN)
  }

  const SetInputValueBasedOnName = async (value, inputName) => {
    setLoginError(false)
    setLoginErrorMessage('')

    if (inputName == 'username') {
      setUsername(value)
    }
  }

  const [clientNameError, setClientNameError] = useState('')
  let headingText = 'Reset Password';
  let subHead =
    'If you forgot your password,well,then well email \n you instructions to reset your password ';

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar
          backgroundColor={Colors.darkBackground}
          barStyle="light-content"
        />
        <View style={styles.header}>
          <ImageBackground
            source={require('../../../images/Auth/topbanner.png')}
            style={styles.logo}
            resizeMode="cover">
            <Image
              source={require('../../../images/Auth/icon.png')}
              resizeMode="contain"
              style={styles.icon}
            />
          </ImageBackground>
        </View>

        <View
          style={[
            styles.footer,
            {
              backgroundColor: Colors.white,
            },
          ]}>
          <ImageBackground
            source={require('../../../images/Auth/bg.png')}
            resizeMode="cover"
            style={styles.image}>
            <Text
              style={[
                styles.title,
                {
                  textAlign: 'center',
                },
              ]}>
              {headingText}
            </Text>

            <Text
              style={[
                styles.subTitle,
                {
                  textAlign: 'center',
                },
              ]}>
              {subHead}
            </Text>

            <View style={{marginTop: scaleSize(40)}} />

 <View style={styles.formContainer}>
              <View style={styles.inputRow}>
              <LoginInput
                  placeholder={'User Name'}
                  labelColor={Colors.inputDefault}
                  doAction={text => onChangeValue('userName', text)}
                  value={username}
                  multiline={false}
                  error={usernameError}
                  readonly={false}
                  icon={require('../../../images/Auth/user.png')}
                />
              </View>
            </View>

            <TouchableOpacity
              onPress={() => onSendResetLink()}
              style={[styles.button]}>
              <Text style={[styles.textstyle]}>Send Reset Link</Text>
            </TouchableOpacity>

            <View style={styles.bottomTextStyle}>
              <View style={styles.dashBarStyle} />
              <Text style={styles.orTextStyle}>Or</Text>
              <View style={styles.dashBarStyle} />
            </View>
            <TouchableOpacity
              onPress={() => onReturnToSignIn()}>
              <Text style={[styles.connectionTextStyle]}>
                Return To Sign In
              </Text>
            </TouchableOpacity>
            
          </ImageBackground>
        </View>
      </View>
    </View>
  );
}
export default ForgotPasswordView

const { height } = Dimensions.get('screen')
const height_logo = height * 0.34;
const wheight_logo = height * 0.435;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackground,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plain: {
    ..._Container(10),
    flexDirection: 'row',
    marginRight: scaleSize(25),
    marginLeft: scaleSize(25),
    borderRadius: 5,
  },
  signInButtonParentView: {
    elevation: scaleSize(10),
    paddingHorizontal: Spacing.small,
    paddingTop: Spacing.large,
  },
  button: {
    width: '85%',
    height: scaleSize(45),
    backgroundColor: Colors.buttonBg,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scaleSize(25),
    marginLeft: scaleSize(25),
    borderRadius: 10,
  },
  errorView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textstyle: {
    fontSize: FontSize.regularVariantPlus,
    fontFamily: Family.bold,
    color: Colors.white,
  },
  forgetPasswordText: {
    color: Colors.darkVarientText,
    fontSize: FontSize.smallVariant,
    alignSelf: 'flex-end',
    marginEnd: scaleSize(25),
    fontFamily: Family.semibold,
  },
  bottomTextStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 42,
  },
  dashBarStyle: {
    flex: 0.1,
    height: 2,
    backgroundColor: Colors.black,
    opacity: 0.21,
  },
  orTextStyle: {
    marginLeft: scaleSize(6),
    marginRight: scaleSize(6),
    color: Colors.lightVarientText,
    fontFamily: Family.regular,
    fontSize: FontSize.regularVariant,
  },
  connectionTextStyle: {
    color: Colors.mediumVarientText,
    fontFamily: Family.semibold,
    fontSize: FontSize.regularVariant,
    textAlign: 'center',
    marginTop: 5,
  },
  footer: {
    flex: 1.3,
    backgroundColor: '#fffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexDirection: 'column',
  },
  logo: {
    width: wheight_logo,
    height: height_logo,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontFamily: Family.robotoBold,
    color: Colors.darkGrey,
    marginTop: scaleSize(35),
  },
  subTitle: {
    fontSize: 14,
    fontFamily: Family.semibold,
    color: Colors.darkGrey,
    marginTop: scaleSize(20),
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },

  icon: {
    marginTop: scaleSize(180),
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
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
});
