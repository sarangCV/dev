import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {_Text} from 'styles/index';
import {Family, FontSize} from 'constants/Fonts';
// Importing assets
import bg from 'images/subscribers/verification/success.png';
import Colors from 'constants/Colors';
import {scaleSize} from 'utils/index';
import {useNavigation} from '@react-navigation/native';
import Screens from 'navigators/index';

const Success = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(Screens.SUBSCRIBERINFO, {mobileVerified: true});
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.bgWrapper}>
        <Image style={styles.bg} source={bg} />
      </View>
      <View style={styles.textWrapper}>
        <View style={styles.layoutBg}></View>
        <View style={styles.content}>
          <Text style={styles.title}>Successfully Verified !</Text>
          <Text style={styles.description}>
            Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod
            tenpor incidunt ut labore et dolore nagna aliqua.{' '}
          </Text>
        </View>
        {/* <TouchableOpacity style={styles.buttonWrapper} onPress={() => {}}>
          <Text style={styles.buttonText}>Generate Receipt</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  bgWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    width: scaleSize(300),
    height: scaleSize(276),
    resizeMode: 'contain',
  },
  textWrapper: {
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
    borderRadius: scaleSize(550),
    height: 590,
    width: 550,
    overflow: 'hidden',
    marginLeft: scaleSize(-180),
    marginTop: scaleSize(50),
    // alignItems: 'flex-end',
  },
  content: {
    position: 'absolute',
    top: scaleSize(200),
    left: 20,
    // marginLeft: 185,
    // backgroundColor: 'red',
    width: scaleSize(250),
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
  buttonWrapper: {
    position: 'absolute',
    bottom: scaleSize(15),
    backgroundColor: Colors.cancelBtn,
    paddingVertical: scaleSize(10),
    paddingHorizontal: scaleSize(100),
    alignSelf: 'center',
    borderRadius: scaleSize(10),
    // marginLeft: scaleSize(185),
  },
  buttonText: {
    ..._Text(FontSize.regularVariant, Family.bold, Colors.white),
  },
});
