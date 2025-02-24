import Colors from 'constants/Colors';
import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import {FontSize, Family} from 'constants/Fonts';
import Screens from 'navigators/index';
import {StyleSheet} from 'react-native';
import {scaleSize} from 'utils/index';

const LoginView = ({navigation}) => {
  let welcomtext = 'Welcome To \nAsianet Fibernet';
  return (
    <View style={styles.mainContainer}>
      <StatusBar hidden={true} />
      <View style={{flex: 2}}>
        <Image
          source={require('../../../images/Auth/banner.png')}
          style={styles.logo}
          resizeMode={'cover'}
        />
      </View>
      <View style={{flex: 0.7}} />

      <View style={styles.secondContainer}>
        <Image
          resizeMode="contain"
          style={styles.imageStyle}
          source={require('../../../images/Auth/centerImage.png')}
        />
      </View>
      <View style={{flex: 0.8}} />
      <View style={{flex: 3.5, paddingHorizontal: 30}}>
        <Text style={styles.headText}>{welcomtext}</Text>
        <Text style={styles.subText}>
          Enter your Asianet account number to login
        </Text>
        <View style={{flex: 0.3}} />
        <TouchableOpacity
          onPress={() => navigation.replace(Screens.SIGNIN)}
          style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <View style={{flex: 0.25}} />
        <View style={styles.bottomContainer}>
          <View
            style={{
              flex: 0.1,
              height: 1,
              backgroundColor: Colors.white,
              opacity: 0.3,
            }}
          />
          <View>
            <Text style={styles.OrStyle}>Or</Text>
          </View>
          <View
            style={{
              flex: 0.1,
              height: 1,
              backgroundColor: Colors.white,
              opacity: 0.3,
            }}
          />
        </View>
        <View style={{flex: 0.2}} />
        <TouchableOpacity onPress={() => navigation.navigate(Screens.ENQUIRY)}>
          <Text style={styles.bottomText}>New Connection & Enquiry</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const {height} = Dimensions.get('screen');
const weight_logo = height * 0.556;
const {width} = Dimensions.get('window');

const ratio = 882 / 1233;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {flex: 1, backgroundColor: Colors.darkBackground},
  secondContainer: {flex: 2, justifyContent: 'center', alignItems: 'center'},
  logo: {
    width: weight_logo,
    height: width * ratio,
    marginTop: -60,
    marginLeft: -50,
    marginRight: -500,
    flex: 600,
  },
  OrStyle: {width: 30, textAlign: 'center', color: Colors.white},
  bottomText: {
    fontFamily: Family.semibold,
    fontSize: FontSize.regularVariant,
    color: Colors.white,
    textAlign: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: FontSize.mediumVariant,
    fontFamily: Family.semibold,
    color: Colors.mainBackground,
  },
  imageStyle: {height: scaleSize(310), width: scaleSize(310)},
  headText: {
    fontSize: FontSize.largeVariant,
    color: Colors.white,
    fontFamily: Family.robotoBold,
  },
  subText: {
    fontFamily: Family.regular,
    fontSize: FontSize.regularVariant,
    color: Colors.white,
    marginTop: 10,
  },
  buttonStyle: {
    width: '100%',
    height: scaleSize(45),
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
});

export default LoginView;
