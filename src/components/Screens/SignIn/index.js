import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ImageBackground, StatusBar, View} from 'react-native';
import Colors from 'constants/Colors';
import {Dimensions, Image} from 'react-native';
import {scaleSize} from 'utils/';
import {
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Spacing} from 'constants/Layout';
import {_Button, _Container, _Text} from 'styles/index';
import {Family, FontSize, FontSizeModerate} from 'constants/Fonts';
import Input, {LoginInput} from 'components/Input';
import Screens from 'navigators/index';
import {authSelector, clearState, loginUser} from 'features/Auth/AuthSlice';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {LoaderOverlay} from 'components/Overlays';

const SignInView = ({navigation}) => {
  const [username, setUsername] = useState('admin');
  const [usernameError, setUsernameError] = useState('');
  const [password, setPassword] = useState('admin@123');
  const [passwordError, setPasswordError] = useState('');

  const dispatch = useDispatch();

  const {fetching, loginSuccess, error, errorMessage} =
    useSelector(authSelector);

  let headingText = 'Sign In to \n Asianet broadband';

  useEffect(() => {
    if (loginSuccess) {
      navigation.replace(Screens.POST_AUTH_STACK);
    }
  }, [loginSuccess]);

  // On sign in
  const onSigninPress = () => {
    dispatch(clearState());
    dispatch(loginUser({username, password}));
  };

  const onForgotPasswordPress = () => {
    navigation.replace(Screens.FORGOTPSWD);
  };

  const onChangeValue = (type, text) => {
    dispatch(clearState());
    switch (type) {
      case 'userName':
        setUsername(text);
        break;
      case 'password':
        setPassword(text);
        break;
    }
  };

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        style={{flex: 1}}
        start={{x: 0.5, y: 0.5}}
        end={{x: 0.9, y: 0.01}}
        colors={['#360E52', '#D60782']}>
        <StatusBar
          backgroundColor={Colors.darkBackground}
          barStyle="light-content"
        />
        <LoaderOverlay visible={fetching} />
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
          <View>
            <Text
              style={[
                styles.title,
                {
                  textAlign: 'center',
                },
              ]}>
              {headingText}
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

              <View style={{...styles.inputRow}}>
                <LoginInput
                  placeholder={'Password'}
                  labelColor={Colors.inputDefault}
                  doAction={text => onChangeValue('password', text)}
                  value={password}
                  multiline={false}
                  error={passwordError}
                  readonly={false}
                  icon={require('../../../images/Auth/password.png')}
                />
              </View>
            </View>
            <View style={{marginTop: scaleSize(10)}} />

            {/* <View style={{marginTop: scaleSize(15)}} /> */}

            {error && (
              <View style={styles.errorView}>
                <Text
                  style={{
                    color: Colors.errorText,
                    fontSize: FontSize.smallVariant,
                  }}>
                  {errorMessage}
                </Text>
              </View>
            )}
            <TouchableOpacity
              onPress={() => onSigninPress('lco')}
              style={[styles.button]}>
              <Text style={[styles.textstyle]}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onSigninPress('admin')}>
              <Text style={styles.forgetPasswordText}>Sign in as admin</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onForgotPasswordPress()}>
              <Text style={styles.forgetPasswordText}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
export default SignInView;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.34;
const wheight_logo = height * 0.435;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.darkBackground,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'red',
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
    backgroundColor: Colors.button,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scaleSize(25),
    marginLeft: scaleSize(25),
    borderRadius: 10,
  },
  errorView: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'green',
    marginBottom: scaleSize(10),
  },
  textstyle: {
    fontSize: FontSize.regularVariantPlus,
    fontFamily: Family.bold,
    color: Colors.white,
  },
  forgetPasswordText: {
    color: Colors.darkVarientText,
    fontSize: FontSize.smallVariant,
    alignSelf: 'center',
    marginEnd: scaleSize(25),
    fontFamily: Family.popinsRegular,
    paddingTop: scaleSize(15),
  },
  bottomTextStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scaleSize(12),
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
    marginTop: scaleSize(5),
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
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: FontSizeModerate.mediumVariant,
    fontFamily: Family.robotoBold,
    color: Colors.darkGrey,
    marginTop: scaleSize(20),
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },

  icon: {
    // marginTop: scaleSize(180),
    height: scaleSize(118),
    width: scaleSize(118),
    marginBottom: scaleSize(48),
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
