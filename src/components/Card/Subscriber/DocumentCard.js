import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import {scaleSize} from 'utils/index';
import Colors from 'constants/Colors';
import {Family, FontSize} from 'constants/Fonts';

import {subscriberStyles as styles} from 'styles';
import {verificationStyle as verifyStyles} from 'styles';

// Importing images
import userImage from '../../../images/subscribers/user.png';
import threeDots from '../../../images/subscribers/three_dots.png';
import msg from 'images/subscribers/msg.png';
import file from 'images/subscribers/file.png';

import online from '../../../images/subscribers/online.png';
import bg_2 from 'images/subscribers/bill.png';

import Screens from '../../../navigators';
import {useNavigation} from '@react-navigation/native';
import {OtpInput} from 'react-native-otp-entry';
import AccentButtonTwo from 'components/Button/AccentButtonTwo';

const DocumentCard = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() =>
        navigation.navigate(Screens.SUBSCRIBERINFO, {mobileVerified: false})
      }>
      {/* Card top section */}
      <View style={styles.innerWrapperTop}>
        <View style={styles.detailsWrapper}>
          <View style={styles.profileImageWrapper}>
            <Image style={styles.profileImage} source={bg_2} />
          </View>
          <View style={styles.userDetailWrapper}>
            <View
              style={{...styles.userNameWrapper, paddingRight: scaleSize(20)}}>
              <Text style={styles.userText}>
                Whatsapp_Image_2023-09-05_8.46.31_AM.jpeg
              </Text>
              {/* <Image source={online} style={styles.userOnlineIcon} /> */}
            </View>
            <Text style={styles.userSubText}>3243534523533</Text>
          </View>
        </View>
        <View style={styles.actionWrapper}>
          {/* <View style={styles.threeDotsWrapper}>
            <Image style={styles.threeDots} source={threeDots} />
          </View> */}
          {/* <TouchableOpacity style={styles.flashAction}>
            <Text style={styles.flashText}>FLASH+</Text>
          </TouchableOpacity> */}
        </View>
      </View>
      {/* Middle */}
      <View
        style={{
          ...styles.innerWrapperBottom,
          borderTopWidth: 0,
          flexDirection: 'column',
        }}>
        <View style={styles.expirydateWrapper}>
          <Text style={styles.expiryDateLabel}>Document Number: </Text>
          <Text style={{...styles.expiryDate, color: Colors.green_2}}>N/A</Text>
        </View>
        <View style={styles.expirydateWrapper}>
          <Text style={styles.expiryDateLabel}>Document Type : </Text>
          <Text style={styles.expiryDate}>CAF</Text>
        </View>
      </View>
      {/* Card bottom section */}
      <View style={styles.innerWrapperBottom}>
        <View style={styles.expirydateWrapper}>
          <Image source={msg} style={docStyle.fileIcon} />
          <Image source={file} style={docStyle.fileIcon} />
        </View>
        <TouchableOpacity style={docStyle.planStatus}>
          <Text style={styles.planStatusText}>Download</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const docStyle = StyleSheet.create({
  planStatus: {
    backgroundColor: Colors.green_2,
    borderRadius: scaleSize(12),
    // alignSelf: 'flex-start',
    paddingHorizontal: scaleSize(15),
    paddingVertical: scaleSize(5),
  },
  fileIcon: {
    width: scaleSize(24),
    height: scaleSize(24),
    resizeMode: 'contain',
    marginRight: scaleSize(10),
  },
});

export default DocumentCard;
