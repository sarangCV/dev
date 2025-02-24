import Colors from 'constants/Colors';
import {Family, FontSize} from 'constants/Fonts';
import React from 'react';
import {useState} from 'react';
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
import {scaleSize} from 'utils/';
import {_Button, _Container, _Text} from 'styles/index';
import Button from 'Components/Button';
import {Rounded, Spacing} from 'constants/Layout';
import ButtonTypes from 'constants/ButtonTypes';
import ButtonSizes from 'constants/ButtonSizes';
import FastImage from 'react-native-fast-image';

const EnquiryPopUp = ({isVisible, doAction}) => {
  return (
    <>
      <Modal
        transparent={true}
        visible={isVisible}
        onRequestClose={doAction}
        animationType="fade"
        statusBarTranslucent>
        <View style={styles.modalViewParent}>
          <View style={styles.modalViewContainer}>
            <View style={{alignItems: 'center'}}>
              <FastImage
                source={require('../../images/Enquiry/success.png')}
                resizeMode={FastImage.resizeMode.contain}
                style={styles.icon}
              />
              <Text style={styles.textHeading}>Thank you for your enquiry</Text>
              <Text style={styles.textHeadingSub}>
                Our team will contact you soon.
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default EnquiryPopUp;

const styles = StyleSheet.create({
  modalViewParent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalViewContainer: {
    marginStart: Spacing.xlarge,
    marginEnd: Spacing.xlarge,
    borderRadius: Rounded.medium,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: Spacing.xxlarge2,
  },
  textHeading: {
    ..._Text(FontSize.medium, Family.semibold, '#000000'),
    textAlign: 'center',
    paddingVertical: Spacing.small,
  },
  icon: {
    width: scaleSize(130),
    height: scaleSize(130),
  },
  textHeadingSub: {
    ..._Text(FontSize.small, Family.robotoRegular, '#878787'),
    textAlign: 'center',
    paddingVertical: Spacing.small,
  },
});
