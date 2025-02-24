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

const PlanCard = ({item, itemIndex, doAction}) => {
  let colors = ['#755F6C', '#523F90', '#8C9397'];
  return (
    <Pressable style={styles.container} onPress={doAction} key={itemIndex}>
      <View
        borderRadius={12}
        style={{
          ...styles.bgContainer,
          backgroundColor: colors[itemIndex % colors.length],
        }}>
        <View
          style={{
            backgroundColor: 'white',
            height: 40,
            width: 20,
            alignSelf: 'center',
            borderTopRightRadius: 40,
            borderBottomRightRadius: 40,
            position: 'absolute',
            top: 35,
            left: 0,
            right: 0,
            zIndex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />

        <View
          style={{
            backgroundColor: 'white',
            height: 40,
            width: 20,
            alignSelf: 'center',
            borderTopLeftRadius: 40,
            borderBottomLeftRadius: 40,
            alignContent: 'flex-end',
            position: 'absolute',
            top: 35,
            left: scaleSize(320),
            right: 0,
            zIndex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />

        <View
          style={{
            flex: 5,
            marginLeft: scaleSize(30),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              padding: 0,
            }}>
            <Text style={{...styles.title}}>{item.data_pack_value}</Text>
            <Text style={styles.title}>% OFF</Text>
          </View>

          <View style={{...styles.bgContainer1}}>
            <Text style={{...styles.datapack}}>{item.data_pack}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: -20,
              width: '100%',
            }}>
            <Text style={styles.subTitle}>{'Valid between'}</Text>
            <Text style={styles.subTitle}>{item.valid_start_date}</Text>
            <Text style={styles.subTitle}>{'and'}</Text>
            <Text style={styles.subTitle}>{item.valid_end_date}</Text>
          </View>
        </View>

        <View
          style={{
            flex: 3,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <FastImage
            source={item.image}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.icon}
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  bgContainer: {
    borderRadius: Rounded.small,
    width: WINDOW_WIDTH * 0.9,
    height: WINDOW_WIDTH * 0.28,
    flexDirection: 'row',
    // alignContent: 'flex-end',
  },
  bgContainer1: {
    alignSelf: 'flex-start',
    borderRadius: Rounded.xs,
    paddingVertical: 5,
    paddingHorizontal: 25,
    backgroundColor: Colors.white,
    // marginBottom: -20,
    marginVertical: scaleSize(6),
  },
  container: {
    borderRadius: Rounded.regular,
    marginHorizontal: Spacing.xsVariant,
    width: WINDOW_WIDTH * 0.9,
    height: WINDOW_WIDTH * 0.28,
    marginBottom: 15,
  },

  innerContainer: {
    width: WINDOW_WIDTH * 0.5,
    height: WINDOW_WIDTH * 0.28,
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    marginTop: 35,
  },
  imageStyle: {
    alignSelf: 'flex-end',
    height: WINDOW_HEIGHT * 0.18,
    width: WINDOW_WIDTH * 0.7,
  },
  header: {
    alignSelf: 'flex-start',
    ..._Fill,
  },
  title: {
    fontSize: FontSize.largeVariantPlus,
    fontFamily: Family.popinsRegular,
    color: Colors.white,
    marginTop: 10,
    alignSelf: 'center',
  },
  subTitle: {
    fontSize: FontSize.xs,
    fontFamily: Family.popinsRegular,
    color: Colors.white,
    alignSelf: 'flex-start',
    paddingLeft: scaleSize(5),
  },
  datapack: {
    fontSize: FontSize.small,
    fontFamily: Family.robotoBold,
    color: '#FE9C8F',
    alignSelf: 'flex-start',
    // paddingLeft: scaleSize(15),
    justifyContent: 'center',
    marginTop: 2,
  },
  icon: {
    alignSelf: 'flex-end',
    marginRight: scaleSize(30),
    width: scaleSize(80),
    height: scaleSize(80),
    borderRadius: 10,
  },
});

export default PlanCard;
