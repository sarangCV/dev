import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import {Family, FontSize} from 'constants/Fonts';
import Colors from 'constants/Colors';
import {_Row, _Text} from 'styles/index';
import {scaleSize, WINDOW_WIDTH} from 'utils/index';
import {Spacing} from 'constants/Layout';
import {useNavigation} from '@react-navigation/native';

const Header = ({title, icon, navigateTo}) => {
  const navigation = useNavigation();

  const menuItem = () => {
    switch (icon) {
      case 'Wallet':
        return '../../images/Home/wallet.png';
      case 'Search':
        return '../../images/search/png';
      default:
        return;
    }
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  console.log('LOG FROM HEADER::', menuItem());
  return (
    <View style={styles.headerWrapper}>
      <LinearGradient colors={['#58074D', '#CF077F']} style={{flex: 1}}>
        <View style={styles.header}>
          <Pressable onPress={() => navigateBack()}>
            <FastImage
              source={require('../../images/back.png')}
              resizeMode={FastImage.resizeMode.contain}
              style={styles.icon}
            />
          </Pressable>
          <Text style={styles.headerText}>{title}</Text>
          {icon ? (
            <View style={styles.walletWrapper}>
              <Image
                resizeMode="contain"
                style={styles.walletImg}
                source={require('../../images/Home/wallet.png')}
              />
              <Text style={styles.walletText}>10.00</Text>
            </View>
          ) : null}
        </View>
      </LinearGradient>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerWrapper: {
    height: scaleSize(70),
  },
  header: {
    paddingVertical: scaleSize(22),
    paddingHorizontal: Spacing.large,
    // backgroundColor: Colors.cancelBtn,
    ..._Row,
    alignItems: 'center',
    justifyContent: 'center',
    width: WINDOW_WIDTH,
    height: '100%',
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
  walletWrapper: {
    paddingVertical: scaleSize(6),
    paddingHorizontal: scaleSize(6),
    backgroundColor: '#D24B9B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  walletText: {
    marginLeft: 5,
    fontFamily: Family.extrabold,
    fontSize: FontSize.xs,
    color: Colors.white,
  },
  walletImg: {
    width: scaleSize(16),
    height: scaleSize(16),
  },
});
