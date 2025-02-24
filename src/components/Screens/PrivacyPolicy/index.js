import { useNavigation, useRoute } from '@react-navigation/native'
import Colors from 'constants/Colors'
import {Family, FontSize} from 'constants/Fonts';
import {Spacing} from 'constants/Layout';
import RechargeListJson from 'data/NotificationList/RechargeListJson'
import React from 'react';
import {ScrollView, StatusBar} from 'react-native';
import {
  StyleSheet,
  KeyboardAwareScrollView,
  Platform,
  View,
  Text,
  Pressable,
} from 'react-native';
import FastImage from 'react-native-fast-image'
import { useDispatch } from 'react-redux'
import {_Row, _Text} from 'styles/index';
import {scaleSize, WINDOW_WIDTH} from 'utils/index';
import Screens from 'navigators/index'
import PrivacyPolicyCard from 'components/PrivacyPolicy';

const PrivacyPolicyView = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();

  const navigateToHome = async () => {
    await navigation.replace(Screens.POST_AUTH_STACK)
  }
  const navigateBack = () => {
    navigation.goBack();
  }
  return (
    <View style={styles.wrapper}>
      <StatusBar backgroundColor={Colors.cancelBtn} barStyle="light-content" />
      <View style={styles.header}>
        <Pressable onPress={() => navigateBack()}>
          <FastImage
            source={require('../../../images/back.png')}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.icon}
          />
        </Pressable>
        <Text style={styles.headerText}>Privacy Policy</Text>
        <Pressable onPress={() => navigation.navigate(Screens.NOTIFICATION)}>
          <FastImage
            source={require('../../../images/Home/notification_2.png')}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.icon}
          />
        </Pressable>
      </View>
      <View>
        <ScrollView>
          <PrivacyPolicyCard />
        </ScrollView>
      </View>
    </View>
  );
}

export default PrivacyPolicyView;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: 'row',
    padding: Spacing.largeVariant2,
    backgroundColor: Colors.cancelBtn,
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
    ..._Text(FontSize.medium, Family.bold, Colors.white),
    paddingHorizontal: Spacing.small,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    marginLeft: 60,
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
    ..._Text(
      FontSize.regularVariantPlus,
      Family.robotoBold,
      Colors.notListHead,
    ),
  },
  seeAllTextStyle: {
    color: '#62636A',
    fontFamily: Family.regular,
    fontSize: FontSize.regular,
  },
  seeAllTextStyleView: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex: 1,
    marginRight: 15,
  },
})
