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
import bg_2 from 'images/subscribers/bill.png';

import Screens from '../../../navigators';
import {useNavigation} from '@react-navigation/native';
import {OtpInput} from 'react-native-otp-entry';
import AccentButtonTwo from 'components/Button/AccentButtonTwo';
import {_Text} from 'styles/index';

const TicketCard = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() =>
        navigation.navigate(Screens.TICKET_INFO, {mobileVerified: false})
      }>
      {/* Card top section */}
      <View style={styles.innerWrapperTop}>
        <View style={styles.detailsWrapper}>
          <View style={styles.profileImageWrapper}>
            <Image style={styles.profileImage} source={bg_2} />
          </View>
          <View style={styles.userDetailWrapper}>
            <View style={styles.userNameWrapper}>
              <Text style={styles.userText}>Ticket 1</Text>
            </View>
            <Text style={styles.userSubText}>TKT/2022-23/KL/000009</Text>
          </View>
        </View>
        <View style={styles.actionWrapper}>
          {/* <View style={styles.threeDotsWrapper}>
            <Image style={styles.threeDots} source={threeDots} />
          </View> */}
          {/* <TouchableOpacity style={styles.flashAction}>
                <Text style={styles.flashText}>FLASH+</Text>
              </TouchableOpacity> */}
          <Text style={docStyle.statusText}>Pending</Text>
        </View>
      </View>
      {/* Middle */}
      <View style={{...styles.innerWrapperBottom, borderTopWidth: 0}}>
        <View style={styles.expirydateWrapper}>
          <Text style={styles.expiryDateLabel}>Ticket Type </Text>
          <Text style={{...styles.expiryDate}}>Subscriber</Text>
        </View>
        <View style={styles.expirydateWrapper}>
          <Text style={styles.expiryDateLabel}>Complaint </Text>
          <Text style={styles.expiryDate}>Plan Degradation</Text>
        </View>
      </View>
      <View
        style={{
          ...styles.innerWrapperBottom,
          borderTopWidth: 0,
          marginTop: scaleSize(-20),
        }}>
        <View style={styles.expirydateWrapper}>
          <Text style={styles.expiryDateLabel}>Priority </Text>
          <Text style={{...styles.expiryDate, color: Colors.green_2}}>Low</Text>
        </View>
        <View style={styles.expirydateWrapper}>
          <Text style={styles.expiryDateLabel}>Complaint Type </Text>
          <Text style={{...styles.expiryDate}}>Ticket</Text>
        </View>
      </View>
      {/* Card bottom section */}
      <View style={styles.innerWrapperBottom}>
        <View style={styles.expirydateWrapper}>
          <Image source={dateIcon} style={styles.date} />
          <Text style={styles.expiryDateLabel}>Created</Text>
          <Text style={styles.expiryDate}>11-10-2022</Text>
        </View>
        <View style={styles.expirydateWrapper}>
          <Image source={dateIcon} style={styles.date} />
          <Text style={styles.expiryDateLabel}>Closed</Text>
          <Text style={styles.expiryDate}>11-10-2022</Text>
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
  statusText: {
    ..._Text(FontSize.smallVariantPlus, Family.semibold, Colors.orange),
    marginTop: scaleSize(10),
  },
});

export default TicketCard;
