import {useNavigation, useRoute} from '@react-navigation/native';
import Colors from 'constants/Colors';
import { Family, FontSize } from 'constants/Fonts'
import { Rounded, Spacing } from 'constants/Layout'
import RechargeListJson from 'data/NotificationList/RechargeListJson';
import React, { useState } from 'react'
import { ScrollView, StatusBar } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  Pressable,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import { useDispatch } from 'react-redux'
import { _Button, _Row, _Text } from 'styles/index'
import { scaleSize, WINDOW_WIDTH } from 'utils/index'
import Input from 'components/Input'

import Screens from 'navigators/index'
import Button from 'components/Button'
import ButtonTypes from 'constants/ButtonTypes'
import ButtonSizes from 'constants/ButtonSizes'
import { TouchableOpacity } from 'react-native'
import EnquiryPopUp from 'components/Modal/EnquiryPopup'

import PendingScreen from './BillPendingScreen';
import MyTabs from 'constants/TopTabNavigator';

const BillView = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  }
  return (
    <View style={[styles.wrapper]}>
      <StatusBar backgroundColor={Colors.cancelBtn} barStyle="light-content" />
      <View style={styles.header}>
        <Pressable onPress={() => navigateBack()}>
          <FastImage
            source={require('../../../images/back.png')}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.icon}
          />
        </Pressable>
        <Text style={styles.headerText}>Bill</Text>
        <Pressable onPress={() => navigation.navigate(Screens.NOTIFICATION)}>
          <FastImage
            source={require('../../../images/Home/notification_2.png')}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.icon}
          />
        </Pressable>
      </View>

      <View style={[styles.wrapper]}>
        <MyTabs navigation={navigation}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'column',
  },
  bodyView: {
    flex: 1,
    // paddingStart: Spacing.large,
    // paddingEnd: Spacing.large,
  },

  contentStyle: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'column',
  },
  image: {
    alignSelf: 'center',
    width: 350,
    height: 350,
  },

  header: {
    flexDirection: 'row',
    padding: Spacing.largeVariant2,
    backgroundColor: Colors.cancelBtn,
    ..._Row,
    alignItems: 'center',
    width: WINDOW_WIDTH,
  },
  icon: {
    alignSelf: 'flex-start',
    width: scaleSize(25),
    height: scaleSize(25),
    flex: 1,
  },
  headerText: {
    ..._Text(FontSize.medium, Family.bold, Colors.white),
    paddingHorizontal: Spacing.small,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    marginLeft: 90,
  },
});
export default BillView
