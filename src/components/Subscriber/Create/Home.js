import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {_Text} from 'styles/index';
import {Family, FontSize} from 'constants/Fonts';
// Importing assets
import bg from 'images/subscribers/create/bg_1.png';
import Colors from 'constants/Colors';
import {scaleSize} from 'utils/index';

const Home = ({setPage}) => {
  return (
    <>
      <View style={styles.bgWrapper}>
        <Image style={styles.bg} source={bg} />
      </View>
      <View style={styles.textWrapper}>
        <View style={styles.layoutBg}></View>
        <View style={styles.content}>
          <Text style={styles.title}>Create A New Subscriber !!</Text>
          <Text style={styles.description}>
            Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod
            tenpor incidunt ut labore et dolore nagna aliqua.{' '}
          </Text>
        </View>
        <TouchableOpacity style={styles.buttonWrapper} onPress={setPage}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  bgWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    width: scaleSize(270),
    height: scaleSize(270),
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
    height: 550,
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
    paddingHorizontal: scaleSize(130),
    alignSelf: 'center',
    borderRadius: scaleSize(10),
    // marginLeft: scaleSize(185),
  },
  buttonText: {
    ..._Text(FontSize.regularVariant, Family.bold, Colors.white),
  },
});
