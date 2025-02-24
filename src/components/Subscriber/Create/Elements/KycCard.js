import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import uploaded from 'images/subscribers/create/uploaded.png';
import Colors from 'constants/Colors';
import {scaleSize} from 'utils/index';
import {_Text} from 'styles/index';
import {Family, FontSize} from 'constants/Fonts';

const KycCard = ({data, onPress}) => {
  // console.log('LOG FROM KYC CARD', data);
  return (
    <TouchableOpacity
      disabled={data.uploaded}
      style={{
        ...styles.cardWrapper,
        borderColor: data.uploaded ? Colors.green_2 : Colors.border2,
      }}
      onPress={() => onPress(data.id)}>
      <Image style={styles.img} source={data.img} />
      <Text style={styles.title}>{data.title}</Text>
      {data.uploaded && (
        <Image source={uploaded} style={styles.uploadedIdicator} />
      )}
    </TouchableOpacity>
  );
};

export default KycCard;

const styles = StyleSheet.create({
  cardWrapper: {
    borderWidth: 1,
    // paddingHorizontal: scaleSize(20),
    width: scaleSize(100),
    paddingTop: scaleSize(15),
    paddingBottom: scaleSize(10),
    borderRadius: scaleSize(15),
    backgroundColor: Colors.white,
    alignSelf: 'flex-start',
    marginLeft: scaleSize(5),
    marginBottom: scaleSize(10),
    alignItems: 'center',
  },
  img: {
    width: scaleSize(44),
    height: scaleSize(44),
    resizeMode: 'contain',
  },
  title: {
    ..._Text(FontSize.small, Family.semibold, Colors.subText),
    marginTop: scaleSize(8),
  },
  uploadedIdicator: {
    width: scaleSize(12),
    height: scaleSize(12),
    resizeMode: 'contain',
    position: 'absolute',
    top: scaleSize(5),
    right: scaleSize(3),
  },
});
