import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {scaleSize} from 'utils/index';
import {colors} from 'react-native-elements';
import {Family, FontSize} from 'constants/Fonts';

const HeroAsianet = () => {
  return (
    <View style={styles.walletWrapper}>
      <Image
        resizeMode="contain"
        style={styles.walletImg}
        source={require('../../images/Home/hero.png')}
      />
      <Text style={styles.walletText}>Asianet</Text>
    </View>
  );
};

export default HeroAsianet;

const styles = StyleSheet.create({
  walletWrapper: {
    backgroundColor: '#D24B9B',
    paddingHorizontal: scaleSize(10),
    paddingVertical: scaleSize(7),
    borderRadius: 11,
    alignItems: 'center',
    // width: '100%',
  },
  walletImg: {
    width: scaleSize(24),
    height: scaleSize(24),
  },
  walletText: {
    color: colors.white,
    fontFamily: Family.regular,
    fontSize: FontSize.smallVariant,
    marginTop: scaleSize(0),
  },
});
