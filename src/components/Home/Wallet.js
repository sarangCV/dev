import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {scaleSize} from 'utils/index';
import {colors} from 'react-native-elements';
import {Family, FontSize} from 'constants/Fonts';

const Wallet = () => {
  return (
    <View style={styles.walletWrapper}>
      <Image
        resizeMode="contain"
        style={styles.walletImg}
        source={require('../../images/Home/wallet.png')}
      />
      <Text style={styles.walletText}>10.00</Text>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  walletWrapper: {
    backgroundColor: '#D24B9B',
    paddingHorizontal: scaleSize(10),
    paddingVertical: scaleSize(5),
    borderRadius: 11,
    alignItems: 'center',
    // width: '100%',
  },
  walletImg: {
    width: scaleSize(26),
    height: scaleSize(24),
  },
  walletText: {
    color: colors.white,
    fontFamily: Family.bold,
    fontSize: FontSize.regularVariantPlus,
    marginTop: scaleSize(0),
  },
});
