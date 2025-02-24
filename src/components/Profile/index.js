import React, { useState } from 'react'
import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native'
import { Rounded, Spacing } from 'constants/Layout'
import { _Shadow } from 'styles'
import Colors from 'constants/Colors'
import { Family, FontSize } from 'constants/Fonts'
import { _Fill, _Text } from 'styles'
import { scaleSize, WINDOW_HEIGHT, WINDOW_WIDTH } from 'utils/index'
import FastImage from 'react-native-fast-image'
import HorizontalLine from 'components/Horizontal/HorizontalLine'
import { TouchableOpacity } from 'react-native'
import Screens from 'navigators/index'
import LogoutPopUp from 'components/Modal/LogoutPopUp'

const Profile = ({navigation}) => {
  
  return (
    <View style={{ flexDirection: 'column' }}>
      <View style={{ flexDirection: 'column', marginLeft: scaleSize(20) }}>
        <View style={{ alignItems: 'center', marginBottom: 10, marginTop: 20 }}>
          <ImageBackground
            resizeMode="contain"
            source={require('../../images/Home/circle.png')}
            style={styles.imgbgContainer}>
            <View>
              <Text style={styles.userTextStyle}>L</Text>
            </View>
          </ImageBackground>
        </View>

        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <Text style={styles.headerTextStyle}>Lisa Vianio</Text>
          <Text style={styles.headerSubTextStyle}>@Lisa</Text>
        </View>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.text1}>Personal Info</Text>
        <TouchableOpacity onPress={() => navigation.navigate(Screens.PROFILE_EDIT)}>
          <View style={{ flexDirection: 'row' }}>
            <FastImage
              source={require('../../images/profile/profile.png')}
              resizeMode={FastImage.resizeMode.contain}
              style={styles.icon}
            />
            <Text style={styles.text2}>Your Profile</Text>
          </View>
        </TouchableOpacity>

        <HorizontalLine />
        <TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <FastImage
              source={require('../../images/profile/transaction.png')}
              resizeMode={FastImage.resizeMode.contain}
              style={styles.icon}
            />
            <Text style={styles.text2}>History Transaction</Text>
          </View>
        </TouchableOpacity>
        <HorizontalLine />

        <Text style={styles.text1}>Security</Text>

        <TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <FastImage
              source={require('../../images/profile/changepswd.png')}
              resizeMode={FastImage.resizeMode.contain}
              style={styles.icon}
            />
            <Text style={styles.text2}>Change Password</Text>
          </View>
        </TouchableOpacity>
        <HorizontalLine />

        <TouchableOpacity>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <FastImage
              source={require('../../images/profile/forgot.png')}
              resizeMode={FastImage.resizeMode.contain}
              style={styles.icon}
            />
            <Text style={styles.text2}>Forgot Password</Text>
          </View>
        </TouchableOpacity>
        <HorizontalLine />

        <Text style={styles.text1}>General</Text>

        <TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <FastImage
              source={require('../../images/profile/noti.png')}
              resizeMode={FastImage.resizeMode.contain}
              style={styles.icon}
            />
            <Text style={styles.text2}>Notification</Text>
          </View>
        </TouchableOpacity>
        <HorizontalLine />

        <TouchableOpacity>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <FastImage
              source={require('../../images/profile/language.png')}
              resizeMode={FastImage.resizeMode.contain}
              style={styles.icon}
            />
            <Text style={styles.text2}>Language</Text>
          </View>
        </TouchableOpacity>
        <HorizontalLine />

        <TouchableOpacity>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <FastImage
              source={require('../../images/profile/help.png')}
              resizeMode={FastImage.resizeMode.contain}
              style={styles.icon}
            />
            <Text style={styles.text2}>Help and Support</Text>
          </View>
        </TouchableOpacity>
        <HorizontalLine />
      </View>
    </View>
  )
}

export default Profile
const styles = StyleSheet.create({
  imgbgContainer: {
    width: WINDOW_WIDTH * 0.25,
    height: WINDOW_WIDTH * 0.25,
    alignItems: 'center',
  },

  userTextStyle: {
    fontSize: FontSize.largeVariant12,
    fontFamily: Family.semibold,
    color: Colors.white,
    textAlign: 'center',
    marginTop: 25,
  },
  headerTextStyle: {
    fontFamily: Family.robotoMedium,
    fontSize: FontSize.mediumVariant,
    color: Colors.homeBackground,
    textAlign: 'center',
  },
  headerSubTextStyle: {
    fontFamily: Family.semibold,
    fontSize: FontSize.regularVariant,
    color: Colors.drawerTextGrey,
    textAlign: 'center',
  },
  formContainer: {
    flexDirection: 'column',
    marginTop: 40,
    margin: 25,
  },
  text1: {
    color: '#9CA4AB',
    fontFamily: Family.robotoMedium,
    fontSize: FontSize.regularVariant,
    marginBottom: 20,
    marginTop: 10,
  },
  icon: {
    alignSelf: 'flex-start',
    width: scaleSize(23),
    height: scaleSize(23),
    marginStart: 15,
  },
  text2: {
    color: '#1F2C37',
    fontFamily: Family.regular,
    fontSize: FontSize.regularVariantPlus,
    marginBottom: 10,
    marginStart: 15,
  },
})
