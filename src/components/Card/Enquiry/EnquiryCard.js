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
import dateIcon from '../../../images/subscribers/date.png';
import online from '../../../images/subscribers/online.png';
import bg_2 from 'images/Enquiry/enq.png';

import Screens from '../../../navigators';
import {useNavigation} from '@react-navigation/native';
import {OtpInput} from 'react-native-otp-entry';
import AccentButtonTwo from 'components/Button/AccentButtonTwo';

const EnquiryCard = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() =>
        navigation.navigate(Screens.ENQUIRY_INFO, {mobileVerified: false})
      }>
      {/* Card top section */}
      <View style={styles.innerWrapperTop}>
        <View style={styles.detailsWrapper}>
          <View style={styles.profileImageWrapper}>
            <Image style={styles.profileImage} source={bg_2} />
          </View>
          <View style={styles.userDetailWrapper}>
            <View style={styles.userNameWrapper}>
              <Text style={styles.userText}>Enquiry 1</Text>
            </View>
            <Text style={styles.userSubText}>ENQ745654</Text>
          </View>
        </View>
        <View style={styles.actionWrapper}>
          <View style={styles.threeDotsWrapper}>
            <Image style={styles.threeDots} source={threeDots} />
          </View>
          {/* <TouchableOpacity style={styles.flashAction}>
                <Text style={styles.flashText}>FLASH+</Text>
              </TouchableOpacity> */}
        </View>
      </View>
      {/* Middle */}
      <View style={{...styles.innerWrapperBottom, borderTopWidth: 0}}>
        <View style={styles.expirydateWrapper}>
          <Text style={styles.expiryDateLabel}>Name </Text>
          <Text style={{...styles.expiryDate}}>Amal Rose</Text>
        </View>
        <View style={styles.expirydateWrapper}>
          <Text style={styles.expiryDateLabel}>Center </Text>
          <Text style={styles.expiryDate}>Sreekandapuram</Text>
        </View>
      </View>
      <View
        style={{
          ...styles.innerWrapperBottom,
          borderTopWidth: 0,
          marginTop: scaleSize(-20),
        }}>
        <View style={styles.expirydateWrapper}>
          <Text style={styles.expiryDateLabel}>Pin Code </Text>
          <Text style={{...styles.expiryDate}}>670631</Text>
        </View>
        <View style={styles.expirydateWrapper}>
          <Text style={styles.expiryDateLabel}>Email </Text>
          <Text style={{...styles.expiryDate}}>amalrose@gmail.com</Text>
        </View>
      </View>
      <View
        style={{
          ...styles.innerWrapperBottom,
          borderTopWidth: 0,
          marginTop: scaleSize(-20),
        }}>
        <View style={styles.expirydateWrapper}>
          <Text style={styles.expiryDateLabel}>Status </Text>
          <Text style={{...styles.expiryDate, color: Colors.orange}}>
            Pending
          </Text>
        </View>
        <View style={styles.expirydateWrapper}>
          <Text style={styles.expiryDateLabel}>Phone </Text>
          <Text style={{...styles.expiryDate}}>8547519646</Text>
        </View>
      </View>
      {/* Card bottom section */}
      <View style={styles.innerWrapperBottom}>
        <View style={styles.expirydateWrapper}>
          <Image source={dateIcon} style={styles.date} />
          <Text style={styles.expiryDateLabel}>Registered Date -Time</Text>
          <Text style={styles.expiryDate}>11-10-2022 11:11:19</Text>
        </View>
        {/* <TouchableOpacity style={docStyle.planStatus}>
          <Text style={styles.planStatusText}>Resolve</Text>
        </TouchableOpacity> */}
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
});

export default EnquiryCard;
