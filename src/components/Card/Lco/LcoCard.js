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
import online from '../../../images/subscribers/online.png';
import bg_2 from 'images/subscribers/create/bg_2.png';

import Screens from '../../../navigators';
import {useNavigation} from '@react-navigation/native';
import {OtpInput} from 'react-native-otp-entry';
import AccentButtonTwo from 'components/Button/AccentButtonTwo';

const LcoCard = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() =>
        navigation.navigate(Screens.LCO_INFO, {
          mobileVerified: true,
          slug: item?.slug,
        })
      }>
      {/* Card top section */}
      <View style={styles.innerWrapperTop}>
        <View style={styles.detailsWrapper}>
          <View style={styles.profileImageWrapper}>
            <Image style={styles.profileImage} source={userImage} />
          </View>
          <View style={styles.userDetailWrapper}>
            <View style={styles.userNameWrapper}>
              <Text style={styles.userText}>{item?.name}</Text>
              <Image source={online} style={styles.userOnlineIcon} />
            </View>
            <Text style={styles.userSubText}>{item?.username}</Text>
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
      <View
        style={{...styles.innerWrapperBottom, justifyContent: 'flex-start'}}>
        <View style={{...styles.expirydateWrapper, marginRight: scaleSize(10)}}>
          <Text style={styles.expiryDateLabel}>State</Text>
          <Text style={styles.expiryDate}>{item?.state_name}</Text>
        </View>
        <View style={styles.expirydateWrapper}>
          <Image source={center} style={styles.date} />
          <Text style={styles.expiryDateLabel}>Center</Text>
          <Text style={styles.expiryDate}>{item?.center_name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LcoCard;
