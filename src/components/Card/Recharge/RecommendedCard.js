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

const RecommendedCard = ({item, itemIndex, doAction}) => {
  return (
    <Pressable style={styles.container} onPress={doAction} key={itemIndex}>
      <View
        borderRadius={12}
        style={{
          ...styles.bgContainer,
          backgroundColor: '#EFF1F6',
        }}>
        <View style={styles.bg}>
          <View style={{flex: 1.5}}>
            <Text style={styles.text}>{item.data_plan}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text}>{item.data}</Text>
              <Text style={styles.text1}>GB Data</Text>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: '#D4D0E0',
                marginStart: 20,
                justifyContent: 'center',
                marginBottom: 20,
                marginTop: 15,
                paddingVertical: 5,
                borderRadius: 5,
                marginEnd: 35,
              }}>
              <Text style={styles.text2}>{item.data_speed}</Text>
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <View
              style={{
                flex: 2,
                backgroundColor: '#3F3D3D',
                borderTopRightRadius: Rounded.medium,
              }}>
              <Text style={styles.value}>{item.data_value}</Text>
              <Text style={styles.value1}>{item.data_usage}</Text>
            </View>
            <View style={{flex: 0.01, backgroundColor: Colors.lightGrey}} />

            <View
              style={{
                flex: 0.7,
                backgroundColor: '#3F3D3D',
                borderBottomRightRadius: Rounded.medium,
              }}>
              <Text style={styles.liftetimeText}>LifeTime</Text>
              <ImageBackground
                source={require('../../../images/edge.png')}
                imageStyle={{borderRadius: Rounded.medium}}
                style={styles.edge}>
                <Text style={styles.text3}>{item.data_off}</Text>
              </ImageBackground>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  bgContainer: {
    width: WINDOW_WIDTH * 0.89,
    height: scaleSize(150),
    borderRadius: Rounded.medium,
    marginBottom: 15,
    alignSelf: 'center',
  },
  bg: {
    borderRadius: Rounded.medium,
    width: WINDOW_WIDTH * 0.89,
    height: scaleSize(150),
    alignContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  curve: {
    backgroundColor: 'white',
    height: 20,
    width: 10,
    alignSelf: 'center',
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  curve1: {
    backgroundColor: 'white',
    height: 20,
    width: 10,
    alignSelf: 'center',
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    alignContent: 'flex-end',
    position: 'absolute',
    top: 35,
    left: scaleSize(327),
    right: 0,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ..._Text(FontSize.medium, Family.bold, Colors.textColorDark),
    marginStart: 20,
    marginTop: 20,
  },
  text1: {
    ..._Text(FontSize.smallVariantPlus, Family.semibold, Colors.purple),
    marginStart: 10,
    marginTop: 25,
  },
  text2: {
    ..._Text(FontSize.smallVariant, Family.bold, Colors.white),
    textAlign: 'center',
    // marginTop: 2,
  },
  text3: {
    ..._Text(FontSize.small, Family.robotoBold, Colors.white),
    textAlign: 'center',
    marginLeft: scaleSize(33),
    top: scaleSize(47),
    position: 'absolute',
  },
  value: {
    ..._Text(FontSize.largeVariant12, Family.robotoBold, Colors.white),
    textAlign: 'center',
    marginTop: 10,
  },
  value1: {
    ..._Text(FontSize.regularVariant, Family.regular, Colors.white),
    textAlign: 'center',
    marginTop: 10,
  },
  liftetimeText: {
    ..._Text(FontSize.regularVariant, Family.bold, Colors.white),
    textAlign: 'center',
    marginTop: 10,
    marginEnd: scaleSize(27),
  },

  buttonContainerStyle: {
    borderRadius: Rounded.xs,
    backgroundColor: Colors.pinkVarient,
    height: '33%',
    width: '35%',
  },
  buttonText: {
    fontFamily: Family.regular,
    fontSize: FontSize.smallVariantPlus,
    color: Colors.white,
    textAlign: 'center',
    marginTop: scaleSize(6),
  },
  edge: {
    width: scaleSize(70),
    height: scaleSize(70),
    marginLeft: scaleSize(64),
    top: scaleSize(-31),
    position: 'absolute',
    borderRadius: 6,
  },
});

export default RecommendedCard;
