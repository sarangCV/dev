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

const FeasibilityCard = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() =>
        navigation.navigate(Screens.FEASIBILITY_INFO, {mobileVerified: true})
      }>
      {/* Card top section */}
      <View style={styles.innerWrapperTop}>
        <View style={styles.detailsWrapper}>
          <View style={styles.profileImageWrapper}>
            <Image style={styles.profileImage} source={userImage} />
          </View>
          <View style={styles.userDetailWrapper}>
            <View style={styles.userNameWrapper}>
              <Text style={styles.userText}>Feasibility 1</Text>
              {/* <Image source={online} style={styles.userOnlineIcon} /> */}
            </View>
            <Text style={styles.userSubText}>3243534523533</Text>
          </View>
        </View>
        {/* <View style={styles.actionWrapper}>
          <View style={styles.threeDotsWrapper}>
            <Image style={styles.threeDots} source={threeDots} />
          </View>
          <TouchableOpacity style={styles.flashAction}>
            <Text style={styles.flashText}>FLASH+</Text>
          </TouchableOpacity>
        </View> */}
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

export default FeasibilityCard;
