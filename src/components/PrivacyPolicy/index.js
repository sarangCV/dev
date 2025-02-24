import React from 'react';
import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import {Rounded, Spacing} from 'constants/Layout';
import {_Shadow} from 'styles';
import Colors from 'constants/Colors';
import {Family, FontSize} from 'constants/Fonts';
import {_Fill, _Text} from 'styles';
import {scaleSize, WINDOW_HEIGHT, WINDOW_WIDTH} from 'utils/index';
import FastImage from 'react-native-fast-image';
import {Image} from 'react-native';

const PrivacyPolicyCard = () => {
  let desc =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.';
  return (
    <View style={{flexDirection: 'row', margin: 20, marginBottom: 150}}>
      <View style={styles.listContainer}>
        <Text style={styles.head}>1.Terms</Text>
        <Text style={styles.desc}>
          {desc}
          {'\n'}
          {'\n'}
          {desc}
        </Text>
        <Text style={styles.head}>1.Changes to the Service and/or Terms:</Text>
        <Text style={styles.desc}>
          {desc}
          {'\n'}
          {'\n'}
          {desc}
          {desc}
          {'\n'}
          {'\n'}
          {desc}
          {desc}
          {'\n'}
          {'\n'}
          {desc}
          {desc}
        </Text>
      </View>
    </View>
  );
};

export default PrivacyPolicyCard;

const styles = StyleSheet.create({
  imageStyle: {
    width: scaleSize(40),
    height: scaleSize(40),
  },
  listContainer: {
    flexDirection: 'column',
    marginStart: 15,
  },
  head: {
    fontSize: FontSize.medium,
    fontFamily: Family.robotoBold,
    color: '#1F2C37',
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  desc: {
    fontSize: FontSize.small,
    fontFamily: Family.regular,
    color: '#717171',
    alignSelf: 'flex-start',
    marginTop: 10,
  },
});
