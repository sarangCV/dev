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
import center from '../../../images/subscribers/center.png';
import date from '../../../images/subscribers/date.png';
import online from '../../../images/subscribers/online.png';
import bg_2 from 'images/subscribers/create/bg_2.png';

import Screens from '../../../navigators';
import {useNavigation} from '@react-navigation/native';
import {OtpInput} from 'react-native-otp-entry';
import AccentButtonTwo from 'components/Button/AccentButtonTwo';
import {_Text, commonStyles} from 'styles/index';

const LcoEnquiryCard = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() =>
        navigation.navigate(Screens.LCO_ENQUIRY_INFO, {mobileVerified: true})
      }>
      {/* Card top section */}
      <View style={{...styles.innerWrapperTop, flexDirection: 'column'}}>
        <View style={styles.detailsWrapper}>
          <View style={styles.profileImageWrapper}>
            <Image style={styles.profileImage} source={userImage} />
          </View>
          <View style={styles.userDetailWrapper}>
            <View style={styles.userNameWrapper}>
              <Text style={styles.userText}>{item.name}</Text>
              <Image source={online} style={styles.userOnlineIcon} />
            </View>
            <Text style={styles.userSubText}>3243534523533</Text>
          </View>
        </View>
        <View style={enquiryStyle.enquiryDetailsWrapper}>
          <View style={{...enquiryStyle.section}}>
            <View style={[commonStyles.row_top, commonStyles.marg_bt_10]}>
              <Text style={enquiryStyle.label}>Name</Text>
              <Text style={enquiryStyle.value}>Amal Rose</Text>
            </View>
            <View style={commonStyles.row_top}>
              <Text style={enquiryStyle.label}>Pin Code</Text>
              <Text style={enquiryStyle.value}> 670631</Text>
            </View>
          </View>
          <View style={{...enquiryStyle.section, paddingRight: scaleSize(20)}}>
            <View style={{...commonStyles.row_top}}>
              <Text style={enquiryStyle.label}>Email</Text>
              <Text style={enquiryStyle.value}>{item.email}</Text>
            </View>
          </View>
        </View>
      </View>
      {/* Card bottom section */}
      <View style={{...styles.innerWrapperBottom}}>
        <View style={styles.expirydateWrapper}>
          <Image source={date} style={styles.date} />
          <Text style={styles.expiryDateLabel}>Registered Date -Time</Text>
          <Text style={styles.expiryDate}> 11-10-2022 11:11:19</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const enquiryStyle = StyleSheet.create({
  enquiryDetailsWrapper: {
    flexDirection: 'row',
    paddingTop: scaleSize(15),
    flex: 1,
  },
  section: {
    flex: 1,
  },
  label: {
    ..._Text(FontSize.smallVariant, Family.regular, Colors.userText),
    // flex: 1,
  },
  value: {
    ..._Text(FontSize.smallVariant, Family.semibold, Colors.userText),
    marginLeft: scaleSize(3),
    // flex: 1.6,
  },
});

export default LcoEnquiryCard;
