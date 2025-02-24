import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';
import {StyleSheet, Text, ImageBackground} from 'react-native';
import FastImage from 'react-native-fast-image';
import Colors from 'constants/Colors';
import {Family, FontSize} from 'constants/Fonts';
import {Rounded, Spacing} from 'constants/Layout';
import Screens from 'navigators/index';

import {scaleSize, WINDOW_HEIGHT, WINDOW_WIDTH} from 'utils/index';

const ProfileEdit_Share = () => {
  const navigation = useNavigation();

  console.log('NAVIGATION::', navigation);
  return (
    <Pressable style={{marginBottom: Spacing.largeVariant2}}>
      <View style={styles.ViewContainer}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.innerImageContainer}>
            <ImageBackground
              source={require('../images/profile/share_frame.png')}
              resizeMode="contain"
              style={styles.container1}
            />
          </View>
          <View style={styles.innerTextContainer}>
            <Text style={styles.textStyle}>Refer a Friend</Text>
            <Text style={styles.subtextStyle}>
              {'Lorem ipsum dolor sit amet, '}
            </Text>
          </View>
          <Pressable onPress={() => navigation.navigate(Screens.NOTIFICATION)}>
            <FastImage
              source={require('../images/profile/share.png')}
              resizeMode={FastImage.resizeMode.contain}
              style={styles.icon}
            />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ViewContainer: {
    borderRadius: Rounded.regular,
    alignSelf: 'center',
    height: WINDOW_WIDTH * 0.25,
    width: WINDOW_WIDTH * 0.9,
    backgroundColor: '#FAFAFA',
    marginTop: 70,
  },
  innerTextContainer: {
    height: WINDOW_WIDTH * 0.4,
    width: WINDOW_WIDTH * 0.6,
    padding: Spacing.medium,
    flex: 1,
  },
  textStyle: {
    fontFamily: Family.robotoMedium,
    fontSize: FontSize.regularVariantPlus,
    color: Colors.black,
  },
  subtextStyle: {
    fontFamily: Family.regular,
    fontSize: FontSize.regularVariant,
    color: Colors.lightGreyTextColor,
    marginTop: 10,
  },

  innerImageContainer: {
    height: '10%',
    position: 'relative',
    alignContent: 'flex-end',
    alignSelf: 'flex-end',
    marginBottom: Spacing.ExtralargeVariantPlus,
    flex: 0.5,
    marginStart: 10,
  },
  container1: {
    height: WINDOW_WIDTH * 0.35,
    width: WINDOW_WIDTH * 0.4,
    position: 'relative',
    alignContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  icon: {
    justifyContent: 'center',
    width: scaleSize(25),
    height: scaleSize(25),
    marginTop: 30,
    marginEnd: 10,
  },
});

export default ProfileEdit_Share;
