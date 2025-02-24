import {useNavigation, useRoute} from '@react-navigation/native';
import Colors from 'constants/Colors';
import {Family, FontSize} from 'constants/Fonts';
import {Spacing} from 'constants/Layout';
import RechargeListJson from 'data/NotificationList/RechargeListJson';
import React from 'react';
import {StatusBar} from 'react-native';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  Pressable,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

import {useDispatch} from 'react-redux';
import {_Row, _Text} from 'styles/index';
import {scaleSize, WINDOW_WIDTH} from 'utils/index';
import NewActivityListNotification from './NewActivityListNotification';
import OfferListNotification from './OfferListNotification';
import RechargeListNotification from './RechargeListNotification';
import Screens from 'navigators/index';
import Header from 'components/Header';

const NotificationView = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();

  const navigateBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.wrapper}>
      <StatusBar backgroundColor={Colors.statusBar} barStyle="light-content" />
      {/* Header section */}
      <Header title={'Notification'} icon={'Wallet'} />
      <View style={styles.wrapperContent}>
        <Text style={styles.offerTextStyle}>New activity</Text>
        <NewActivityListNotification />
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Text style={styles.offerTextStyle}>Recharge</Text>
          <View style={styles.seeAllTextStyleView}>
            <Text style={styles.seeAllTextStyle}>See all</Text>
          </View>
        </View>
        <RechargeListNotification />
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Text style={styles.offerTextStyle}>Offers</Text>
          <View style={styles.seeAllTextStyleView}>
            <Text style={styles.seeAllTextStyle}>See all</Text>
          </View>
        </View>
        <OfferListNotification />
      </View>
    </View>
  );
};

export default NotificationView;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    paddingVertical: scaleSize(22),
    paddingHorizontal: Spacing.large,
    // backgroundColor: Colors.cancelBtn,
    ..._Row,
    alignItems: 'center',
    width: WINDOW_WIDTH,
  },
  icon: {
    alignSelf: 'flex-start',
    width: scaleSize(25),
    height: scaleSize(25),
    flex: 1,
  },
  headerText: {
    ..._Text(FontSize.regularVariantPlus, Family.bold, Colors.white),
    paddingRight: scaleSize(25),
    textAlign: 'center',
    flex: 1,
  },
  wrapperContent: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'column',
    margin: scaleSize(25),
  },
  listHeading: {
    ..._Text(
      FontSize.regularVariantPlus,
      Family.robotoMedium,
      Colors.notListHead,
    ),
  },
  offerTextStyle: {
    ..._Text(FontSize.regularVariant, Family.poppinsMedium, Colors.notListHead),
  },
  seeAllTextStyle: {
    color: '#62636A',
    fontFamily: Family.robotoRegular,
    fontSize: FontSize.smallVariantPlus,
  },
  seeAllTextStyleView: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex: 1,
    marginRight: 15,
  },
});
