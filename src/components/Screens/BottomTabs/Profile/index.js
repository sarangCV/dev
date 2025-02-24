import { useNavigation } from '@react-navigation/native'
import Colors from 'constants/Colors';
import { Family, FontSize } from 'constants/Fonts'
import { Rounded, Spacing } from 'constants/Layout'
import React from 'react';

import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  Pressable,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { scaleSize, WINDOW_HEIGHT, WINDOW_WIDTH } from 'utils/index'
import Screens from 'navigators/index';
import FastImage from 'react-native-fast-image'
import {_Text} from 'styles/index';
import SegmentedRoundDisplay from 'react-native-segmented-round-display'
import HorizontalLine from 'components/Horizontal/HorizontalLine'
import { Directions } from 'react-native-gesture-handler'
import Profile from 'components/Profile';
import { useState } from 'react'
import LogoutPopUp from 'components/Modal/LogoutPopUp'
const headingTitle = 'Hello, Lisa'
const headingText = 'Have a nice day'

const ProfileView = ({navigation}) => {
  const [visible, setVisible] = useState(false);
 // const navigation = useNavigation()
  let num = 12.19;

  const [isModalVisible, setModalVisible] = useState(false);

  const hideLogoutModal = () => {
    setModalVisible(false);
  }

  const logoutFun = () => {
    setModalVisible(false);
    navigation.navigate(Screens.SIGNIN);
  }

  const showLogoutModal = () => {
    setModalVisible(true);
    console.log('fm', isModalVisible);
  }
  return (
    <View
      style={[
        styles.container,
        isModalVisible ? {backgroundColor: 'rgba(0,0,0,0.5)'} : '',
      ]}>
      <LogoutPopUp
        isVisible={isModalVisible}
        doAction={() => hideLogoutModal()}
        doActionLogout={() => logoutFun()}
      />
      <StatusBar backgroundColor={Colors.cancelBtn} barStyle="light-content" />

      <View style={styles.header}>
        <Pressable onPress={() => navigation.openDrawer()}>
          <FastImage
            source={require('../../../../images/Home/drawer.png')}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.icon}
          />
        </Pressable>
        <Text style={styles.headerText}>Profile</Text>
        <Pressable onPress={() => navigation.navigate(Screens.NOTIFICATION)}>
          <FastImage
            source={require('../../../../images/Home/notification_2.png')}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.icon}
          />
        </Pressable>
      </View>

      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{marginBottom: 160}}>
          <View style={styles.bodyContainer}>
            <Profile navigation={navigation}/>

            <TouchableOpacity onPress={() => showLogoutModal()}>
              <View style={{ flexDirection: 'row',marginTop:-20,marginBottom:20 }}>
                <Text style={{ ...styles.text1, color: 'red', marginStart: 30 }}>
                  Logout
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  bodyContainer: {
    //backgroundColor: Colors.black,
    flexDirection: 'column',
  },

  header: {
    flexDirection: 'row',
    padding: Spacing.largeVariant2,
    backgroundColor: Colors.cancelBtn,
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
    ..._Text(FontSize.regularVariantPlus, Family.bold, Colors.white),
    paddingHorizontal: Spacing.small,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    marginLeft: 100,
  },
  logo: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT * 0.3,
  },
  topBarStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: scaleSize(10),
    paddingHorizontal: Spacing.medium,
  },
  headerStyle: {
    color: Colors.white,
    fontFamily: Family.robotoMedium,
    alignSelf: 'center',
    fontSize: FontSize.largeVariant12,
  },
  headingTitleStyle: {
    color: Colors.white,
    fontFamily: Family.bold,
    fontSize: FontSize.largeVariant,
    paddingHorizontal: 18,
  },
  headingTextStyle: {
    color: Colors.white,
    fontFamily: Family.regular,
    fontSize: FontSize.regular,
    paddingHorizontal: 18,
  },
  text1: {
    color: '#9CA4AB',
    fontFamily: Family.robotoMedium,
    fontSize: FontSize.regular,
    marginBottom: 20,
    marginTop: 10,
  },
})

export default ProfileView;
