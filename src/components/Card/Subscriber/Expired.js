import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {scaleSize} from 'utils/index';
import Colors from 'constants/Colors';
import {Family, FontSize} from 'constants/Fonts';

import {subscriberStyles as styles} from 'styles';

// Importing images
import userImage from '../../../images/subscribers/user.png';
import threeDots from '../../../images/subscribers/three_dots.png';
import dateIcon from '../../../images/subscribers/date.png';
import {useNavigation} from '@react-navigation/native';
import Screens from 'navigators/index';

const ExpiredCard = ({data}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() =>
        navigation.navigate(Screens.SUBSCRIBERINFO, {
          mobileVerified: true,
          slug: data?.slug,
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
              <Text style={styles.userText}>{data?.name}</Text>
            </View>
            <Text style={styles.userSubText}>3243534523533</Text>
          </View>
        </View>
        <View style={styles.actionWrapper}>
          <View style={styles.threeDotsWrapper}>
            <Image style={styles.threeDots} source={threeDots} />
          </View>
          <TouchableOpacity style={styles.flashAction}>
            <Text style={styles.flashText}>FLASH+</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Card bottom section */}
      <View style={styles.innerWrapperBottom}>
        <View style={styles.expirydateWrapper}>
          <Image source={dateIcon} style={styles.date} />
          <Text style={styles.expiryDateLabel}>Expiry Date</Text>
          <Text style={styles.expiryDate}>11-10-2022</Text>
        </View>
        <TouchableOpacity style={styles.planStatus}>
          <Text style={styles.planStatusText}>Recharge Now</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ExpiredCard;
