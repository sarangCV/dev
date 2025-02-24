import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {_Text} from 'styles/index';
import {Family, FontSize} from 'constants/Fonts';
// Importing assets
import bg_3 from 'images/subscribers/create/bg_3.png';
import Colors from 'constants/Colors';
import {scaleSize} from 'utils/index';
import AccentButtonOne from 'components/Button/AccentButtonOne';
import {useDispatch} from 'react-redux';
// import {addUserData} from 'features/Subscriber/SubscriberSlice';

const SubscriberType = ({setPage}) => {
  const dispatch = useDispatch();

  // TODO: Setting subscriber type to the state
  const actionHandler = type => {
    // dispatch(addUserData({subscriberType: type}));
    setPage();
  };

  return (
    <>
      <View style={styles.bgWrapper}>
        <Image style={styles.bg} source={bg_3} />
      </View>
      <View style={styles.textWrapper}>
        <View style={styles.layoutBg}></View>
        <View style={styles.content}>
          <Text style={styles.title}>Subscriber Type</Text>
          <Text style={styles.description}>
            Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod
            tenpor incidunt ut labore et dolore nagna aliqua.{' '}
          </Text>
        </View>
        <View
          style={{
            // backgroundColor: 'red',
            position: 'absolute',
            // width: scaleSize(280),
            bottom: 30,
          }}>
          <AccentButtonOne
            title={'Enterprise Subscriber'}
            onPress={() => actionHandler('enterprise')}
          />
          <AccentButtonOne
            title={'Asianet Cable TV Subscriber'}
            onPress={() => actionHandler('cable_tv')}
          />
        </View>
      </View>
    </>
  );
};

export default SubscriberType;

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
