import React from 'react';
import {
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Rounded, Spacing} from 'constants/Layout';
import {_Shadow} from 'styles';
import Colors from 'constants/Colors';
import {Family, FontSize} from 'constants/Fonts';
import {_Fill, _Text} from 'styles';
import {scaleSize, WINDOW_HEIGHT, WINDOW_WIDTH} from 'utils/index';
import FastImage from 'react-native-fast-image';
import DashedLine from 'react-native-dashed-line';

const BillReceiptCard = ({item, itemIndex, doAction}) => {
  return (
    <Pressable style={styles.container} onPress={doAction} key={itemIndex}>
      <View
        borderRadius={12}
        style={{
          ...styles.bgContainer,
          backgroundColor: '#F4F4F4',
        }}>
        <View style={styles.bg}>
          <View style={{ ...styles.curve, top: 60 }} />

          <View style={{ ...styles.curve1, top: 60 }} />

          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.text}>
              'Hagya Sofia Festival :2022 Dana Point 24-26'
            </Text>

            <View style={{paddingStart: '4%', paddingEnd: '4%'}}>
              <DashedLine
                dashLength={10}
                dashThickness={2}
                dashGap={5}
                dashColor="#DEDEDE"
              />
            </View>

            <View
              style={{flexDirection: 'row', marginBottom: -20, marginTop: -20}}>
              <View style={{ flexDirection: 'column', flex: 1 }}>
                <Text style={styles.text1}>Date</Text>
                <Text style={styles.text2}>May 19,2022</Text>
              </View>
              <View style={{ flexDirection: 'column', flex: 1 }}>
                <Text style={styles.text1}>Time</Text>
                <Text style={styles.text2}>10:00 Pm</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', marginBottom: 10}}>
              <View style={{ flexDirection: 'column', flex: 1 }}>
                <Text style={styles.text1}>Venue</Text>
                <Text style={styles.text2}>Mosque </Text>
              </View>
              <View style={{ flexDirection: 'column', flex: 1 }}>
                <Text style={styles.text1}>Seat</Text>
                <Text style={styles.text2}>12</Text>
              </View>
            </View>

            <View style={{paddingStart: '4%', paddingEnd: '4%'}}>
              <DashedLine
                dashLength={10}
                dashThickness={2}
                dashGap={5}
                dashColor="#DEDEDE"
              />
            </View>

            <FastImage
              source={require('../../../images/Receipt/qr.png')}
              resizeMode={FastImage.resizeMode.contain}
              style={styles.icon1}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bgContainer: {
    width: WINDOW_WIDTH * 0.9,
    height: scaleSize(310),
    borderRadius: Rounded.smallVariant,
    marginBottom: 15,
  },
  bg: {
    borderRadius: Rounded.smallVariant,
    width: WINDOW_WIDTH * 0.9,
    height: scaleSize(310),
    alignContent: 'flex-end',
    flexDirection: 'column',
  },
  curve: {
    backgroundColor: '#5A4493',
    height: 20,
    width: 20,
    alignSelf: 'center',
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderTopLeftRadius: 40,
    position: 'absolute',
    top: 100,
    left: scaleSize(-10),
    right: 0,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  curve1: {
    backgroundColor: '#5A4493',
    height: 20,
    width: 20,
    alignSelf: 'center',
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderTopLeftRadius: 40,
    alignContent: 'flex-end',
    position: 'absolute',
    top: 35,
    left: scaleSize(328),
    right: 0,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ..._Text(FontSize.regular, Family.poppinsMedium, Colors.black),
    margin: 15,
    marginStart: 40,
    marginTop: 30,
  },
  text1: {
    ..._Text(FontSize.smallVariant, Family.poppinsMedium, Colors.text),
    marginStart: 40,
    marginTop: 30,
  },
  text2: {
    ..._Text(FontSize.small, Family.poppinsMedium, Colors.black),
    marginStart: 40,
  },
  icon1: {
    alignSelf: 'center',
    width: scaleSize(300),
    height: scaleSize(200),
    marginTop:-40
  },
});

export default BillReceiptCard;
