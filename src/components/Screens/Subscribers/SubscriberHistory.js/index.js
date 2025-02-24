import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StatusBar} from 'react-native';
import Header from 'components/Header';
import Colors from 'constants/Colors';
import NewActivityListNotification from 'components/Screens/Notification/NewActivityListNotification';
import RechargeListNotification from 'components/Screens/Notification/RechargeListNotification';
import OfferListNotification from 'components/Screens/Notification/OfferListNotification';

import {Family, FontSize} from 'constants/Fonts';
import {_Text} from 'styles/index';
import {scaleSize} from 'utils/index';

const SubscriberHistoryView = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.statusBar} barStyle="light-content" />
      {/* Header section */}
      <Header title={'History'} wallet={true} />
      {/* Content */}
      <View style={styles.wrapperContent}>
        <Text style={styles.offerTextStyle}>New activity</Text>
        <NewActivityListNotification />
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
          }}>
          <Text style={styles.offerTextStyle}>Recharge</Text>
          <View style={styles.seeAllTextStyleView}>
            <Text style={styles.seeAllTextStyle}>See all</Text>
          </View>
        </View>
        <RechargeListNotification />
      </View>
    </View>
  );
};

export default SubscriberHistoryView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  offerTextStyle: {
    ..._Text(FontSize.regularVariant, Family.poppinsMedium, Colors.notListHead),
  },
  wrapperContent: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'column',
    margin: scaleSize(25),
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
