import { useNavigation, useRoute } from '@react-navigation/native'
import Colors from 'constants/Colors'
import {Family, FontSize} from 'constants/Fonts';
import {Rounded, Spacing} from 'constants/Layout';
import RechargeListJson from 'data/NotificationList/RechargeListJson'
import React from 'react';
import {KeyboardAwareScrollView, ScrollView} from 'react-native';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  Pressable,
  SafeAreaView,
} from 'react-native';
import FastImage from 'react-native-fast-image'
import { useDispatch } from 'react-redux'
import {_Row, _Text} from 'styles/index';
import {scaleSize, WINDOW_WIDTH} from 'utils/index';
import Screens from 'navigators/index'
import {SettingInput} from 'components/Card/Settings';
import BillReceiptCard from 'components/Card/Bill/BillReceipt';

const ReceiptView = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();

  // const navigateToHome = async () => {
  //   await navigation.replace(Screens.POST_AUTH_STACK)
  // }
  // const navigateBack = () => {
  //   navigation.goBack();
  // }
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.wrapper}>
          {/* <StatusBar backgroundColor={Colors.cancelBtn} barStyle="light-content" /> */}

          <View style={{flexDirection: 'column'}}>
            <FastImage
              source={require('../../../images/Receipt/card.png')}
              resizeMode={FastImage.resizeMode.center}
              style={styles.icon}
            />
            <Text style={styles.text}>Success</Text>

            <FastImage
              source={require('../../../images/Receipt/circle.png')}
              resizeMode={FastImage.resizeMode.center}
              style={styles.icon1}
            />

            <View style={{ alignSelf: 'center', flexDirection: 'column' }}>
              <BillReceiptCard />
            </View>
           
            <View>
              <Pressable style={styles.buttonContainerStyle}>
                <Text style={styles.buttonText}>Share Receipt</Text>
              </Pressable>
            </View>

            <View>
              <Pressable style={styles.buttonContainerStyle2}>
                <Text style={styles.buttonText}>Home</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ReceiptView

const styles = StyleSheet.create({
  bodyView: {
    // flex: 1,
    // paddingStart: Spacing.large,
    // paddingEnd: Spacing.large,
  },
  wrapper: {
    flex: 1,
    backgroundColor: Colors.cancelBtn,
  },
  icon: {
    alignSelf: 'center',
    width: scaleSize(150),
    height: scaleSize(150),
  },
  icon1: {
    alignSelf: 'center',
    width: scaleSize(150),
    height: scaleSize(150),
  },
  text: {
    ..._Text(FontSize.largeVariant, Family.semibold, Colors.white),
    textAlign: 'center',
    marginBottom: -60,
  },
  inputRow: {
    marginBottom: Spacing.regular,
    marginTop: Spacing.xlargeXVariant3,
    alignSelf: 'center',
  },

  buttonContainerStyle: {
    borderRadius: Rounded.xs,
    backgroundColor: Colors.pinkVarient,
    height: scaleSize(47),
    width: '90%',
    margin: 20,
  },
  buttonText: {
    fontFamily: Family.bold,
    fontSize: FontSize.medium,
    color: Colors.white,
    textAlign: 'center',
    marginTop: scaleSize(10),
  },
  buttonContainerStyle2: {
    borderRadius: Rounded.xs,
    borderWidth: 0.5,
    height: scaleSize(45),
    width: '90%',
    margin: 20,
    borderColor: Colors.white,
    marginTop:-10
  },
})
