import Colors from 'constants/Colors';
import { Family, FontSize } from 'constants/Fonts'
import React from 'react';
import { useState } from 'react'
import {
  View,
  Modal,
  Alert,
  Text,
  Pressable,
  WINDOW_HEIGHT,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { scaleSize } from 'utils/'
import { _Button, _Container, _Text } from 'styles/index'
import Button from 'Components/Button';
import { Rounded } from 'constants/Layout'
import ButtonTypes from 'constants/ButtonTypes'
import ButtonSizes from 'constants/ButtonSizes'

const LogoutPopUp = ({isVisible, doAction, doActionLogout}) => {
  return (
    <>
      <Modal
        transparent={true}
        visible={isVisible}
        onRequestClose={doAction}
        animationType="fade"
        statusBarTranslucent>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              resizeMode="contain"
              style={styles.logoutImageStyle}
              source={require('../../images/Logout/logout.png')}
            />
            <Text style={styles.modalTextHead}>Log Out</Text>
            <View style={{flexDirection: 'row',marginBottom:30}}>
              <Text style={styles.modalText}>Are you sure want to </Text>
              <Text style={styles.modalTextDark}>LOG OUT</Text>
            </View>

            <TouchableOpacity
              style={styles.buttonContainerStyle}
              onPress={doActionLogout}>
              <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                ...styles.buttonContainerStyle,
                marginTop: 8,
                backgroundColor: Colors.cancelBtn,
              }}
              onPress={doAction}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  )
}

export default LogoutPopUp;

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    bottom: 0,
    right: 0,
    left: 0,
    position: 'absolute',
  },
  modalView: {
    flexDirection: 'column',
    margin: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 55,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingLeft:20,
    paddingRight:30
  },

  signBtn: {
    ..._Button(20),
    backgroundColor: Colors.buttonBg,
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: scaleSize(25),
    // marginLeft: scaleSize(25),
    borderRadius: 10,
  },
  LogOutTextStyle: {
    textAlign: 'center',
    fontFamily: Family.semibold,
    fontSize: FontSize.smallVariant,
    color: Colors.white,
  },
  modalTextHead: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: Family.bold,
    fontSize: FontSize.largeVariantPlus,
    color: Colors.black,
  },
  modalText: {
    marginTop: 3,
    textAlign: 'center',
    fontFamily: Family.regular,
    fontSize: FontSize.smallVariant,
    color: Colors.black,
  },
  modalTextDark: {
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: Family.bold,
    fontSize: FontSize.regularVariantPlus,
    color: Colors.black,
  },
  buttonContainerStyle: {
    borderRadius: Rounded.regular,
    width: scaleSize(280),
    height: scaleSize(45),
    backgroundColor: Colors.pinkVarient,
  },
  buttonText: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: Family.semibold,
    fontSize: FontSize.smallVariantPlus,
    color: Colors.white,
    marginTop: 15,
  },
  logoutImageStyle: {
    width: scaleSize(280),
    height: scaleSize(280),
    top: -180,
    position: 'absolute',
  },
})
