import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import Colors from 'constants/Colors';
import {Family, FontSize} from 'constants/Fonts';
import {useNavigation} from '@react-navigation/native';
import Screens from 'navigators/index';
import {View} from 'react-native';
import {Text} from 'react-native';
import HorizontalLine from 'components/Horizontal/HorizontalLine';
import ToggleSwitch from 'toggle-switch-react-native';

const SettingInput = () => {
  const navigation = useNavigation();
  const isOnDefaultToggleSwitch = true;
  const isOnLargeToggleSwitch = false;
  const isOnBlueToggleSwitch = false;

  onToggle = isOn => {
    console.log('Changed to ' + isOn);
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.headerStyle}>Payments & Bank</Text>

      <View style={{flexDirection: 'column', marginTop: 20}}>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <TouchableOpacity style={styles.navDrawer}>
            <Image
              resizeMode="contain"
              style={styles.imageStyle}
              source={require('../../../images/Settings/payment_icon.png')}
            />
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.textStyle}>Payment settings</Text>
              <Text style={styles.subTextStyle}>
                use a preferred payment method
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <HorizontalLine />
      </View>

      <View style={{flexDirection: 'column'}}>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <TouchableOpacity style={styles.navDrawer}>
            <Image
              resizeMode="contain"
              style={styles.imageStyle}
              source={require('../../../images/Settings/autopay.png')}
            />
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.textStyle}>Auto-pay</Text>
              <Text style={styles.subTextStyle}>
                automatically pay your bills on time
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <HorizontalLine />
      </View>

      <Text style={styles.headerStyle}>App</Text>

      <View style={{flexDirection: 'column', marginTop: 20}}>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <TouchableOpacity style={styles.navDrawer}>
            <Image
              resizeMode="contain"
              style={styles.imageStyle}
              source={require('../../../images/Settings/notification_black.png')}
            />
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.textStyle}>Push notifications</Text>
              <Text style={styles.subTextStyle}>manage app notifications</Text>
            </View>
          </TouchableOpacity>
        </View>
        <HorizontalLine />
      </View>

      <View style={{flexDirection: 'column'}}>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <TouchableOpacity style={styles.navDrawer}>
            <Image
              resizeMode="contain"
              style={styles.imageStyle}
              source={require('../../../images/Settings/enable_beta.png')}
            />
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.textStyle}>Enable Beta</Text>
              <Text style={styles.subTextStyle}>manage app notifications</Text>
            </View>
          </TouchableOpacity>
          <ToggleSwitch size="small" disabled isOn={true} />
        </View>
        <HorizontalLine />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.white,
    flexDirection: 'column',
    margin: 20,
  },
  headerStyle: {
    fontSize: FontSize.regularVariant,
    fontFamily: Family.robotoMedium,
    Colors: Colors.notListHead,
  },
  navDrawer: {flex: 2, flexDirection: 'row', marginLeft: 20},
  imageStyle: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  textStyle: {
    alignItems: 'center',
    fontFamily: Family.regular,
    fontSize: FontSize.regularVariantPlus,
    paddingLeft: 20,
    color: Colors.settingColor,
  },
  subTextStyle: {
    alignItems: 'center',
    fontFamily: Family.regular,
    fontSize: FontSize.smallVariant,
    paddingLeft: 20,
    color: '#8F9094',
  },
  imageItemStyle: {
    marginTop: 3,
    width: 10,
    height: 10,
  },
});
export {SettingInput};
