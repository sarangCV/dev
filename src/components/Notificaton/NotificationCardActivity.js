import React from 'react';
import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import {Rounded, Spacing} from 'constants/Layout';
import {_Shadow} from 'styles';
import Colors from 'constants/Colors';
import {Family, FontSize} from 'constants/Fonts';
import {_Fill, _Text} from 'styles';
import {scaleSize, WINDOW_HEIGHT, WINDOW_WIDTH} from 'utils/index';
import FastImage from 'react-native-fast-image';
import { Image } from 'react-native';

const NotificationCardActivity = ({ item, time, itemIndex, doAction}) => {
  return (
    <View style={{ flexDirection: 'row'}} key={itemIndex}>
      <Image
        source={require('../../images/Notification/not_01.png')}
        style={styles.imageStyle}
      />
      <View style={styles.listContainer}>
        <Text style={styles.list}>{item.notification}</Text>
        <Text style={styles.subTitleTime}>4 hrs ago</Text>
      </View>
    </View>
  );
}

export default NotificationCardActivity;

const styles = StyleSheet.create({
  imageStyle: {
   
    width: scaleSize(40),
    height: scaleSize(40),
    
  },
  listContainer: {
    flexDirection: 'column',
    marginStart:15,
    width: '85%',
  },
  list: {
    fontSize: FontSize.regularVariant,
    fontFamily: Family.semibold,
    color: Colors.notListHead,
    alignSelf: 'flex-start',
  },
  subTitleTime: {
    fontSize: FontSize.xs,
    fontFamily: Family.semibold,
    color: Colors.darkVarientText,
    alignSelf: 'flex-start',
    marginTop:10
  },
})
