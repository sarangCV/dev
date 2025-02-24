import React, {useState} from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import {Rounded, Spacing} from 'constants/Layout';
import {_Shadow} from 'styles';
import {useNavigation} from '@react-navigation/native';
import Colors from 'constants/Colors';
import {Family, FontSize, IconSize} from 'constants/Fonts';
import {_Fill, _Text, commonStyles} from 'styles';
import Button from 'components/Button';
import ButtonTypes from 'constants/ButtonTypes';
import ButtonSizes from 'constants/ButtonSizes';
import {scaleSize} from 'utils/';
import HorizontalLine from 'components/Horizontal/HorizontalLine';
import FastImage from 'react-native-fast-image';

const RechargeCard = ({item, itemIndex, doAction}) => {
  const navigation = useNavigation();

  const setIcon = () => {
    switch (item.status) {
      case item.status:
        if (item.status === 'Activate') {
          return item.icon;
        } else if (item.status === 'Expired') {
          return item.greyIcon;
        }
      default:
        return;
    }
  };

  const setColor = () => {
    switch (item.status) {
      case item.status:
        if (item.status === 'Activate') {
          return Colors.pinkVarient;
        } else if (item.status === 'Expired') {
          return Colors.lightVarientGreyBg;
        }
      default:
        return;
    }
  };

  const setTextColor = () => {
    switch (item.status) {
      case item.status:
        if (item.status === 'Activate') {
          return Colors.white;
        } else if (item.status === 'Expired') {
          return Colors.textColorDark;
        }
      default:
        return;
    }
  };

  return (
    <View>
      <Pressable style={styles.container} onPress={doAction}>
        <View style={styles.rootView}>
          <View style={styles.monthContainer}>
            <Text style={styles.month}>{item.month}</Text>
            <View style={{flex: 7}}></View>
          </View>

          <View
            style={{
              ...commonStyles.row,
              alignItems: 'center',
            }}>
            <View style={styles.header}>
              <View style={{flex: 1}}>
                <FastImage
                  source={setIcon()}
                  resizeMode={FastImage.resizeMode.contain}
                  style={styles.icon}
                />
              </View>
              <View
                style={{
                  flex: 3.7,
                  justifyContent: 'center',
                }}>
                <Text style={styles.title}>{item.data}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 5,
                    // backgroundColor: 'red',
                    flex: 1,
                  }}>
                  <Text style={styles.subtitle}>{item.fup}</Text>
                  <Text style={styles.subtitle}>{item.days}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1.3,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{...styles.value}}>{'\u20B9'}</Text>
                <Text style={{...styles.value}}>{item.value}</Text>
              </View>
              <View
                style={{
                  flex: 2,
                  justifyContent: 'center',
                }}>
                <Button
                  type={ButtonTypes.STATUS}
                  size={ButtonSizes.SMALL}
                  textStyle={{
                    color: setTextColor(),
                    fontFamily: Family.regular,
                    fontSize: 10,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    alignItem: 'center',
                  }}
                  containerStyle={{
                    maxWidth: scaleSize(75),
                    height: scaleSize(25),
                    backgroundColor: setColor(),
                  }}
                  status={item.status}>
                  {item.status}
                </Button>
              </View>
            </View>

            {/* <View style={styles.header}>
              <FastImage
                source={setIcon()}
                resizeMode={FastImage.resizeMode.contain}
                style={styles.icon}
              />
              <Text style={styles.title}>{item.data}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 2.5,
                  marginStart: 30,
                  marginTop: 10,
                }}>
                <Text style={{...styles.value}}>{'\u20B9'}</Text>
                <Text style={{...styles.value}}>{item.value}</Text>
              </View>
            </View>

            <Button
              type={ButtonTypes.STATUS}
              size={ButtonSizes.SMALL}
              textStyle={{
                color: setTextColor(),
                fontFamily: Family.regular,
                fontSize: 10,
                justifyContent: 'center',
                alignSelf: 'center',
                alignItem: 'center',
              }}
              containerStyle={{
                maxWidth: scaleSize(90),
                height: scaleSize(25),
                backgroundColor: setColor(),
              }}
              status={item.status}>
              {item.status}
            </Button> */}
          </View>

          {/* <View style={{...styles.childText, marginTop: -10}}>
            <View style={{...styles.columnView, flex: 1, marginStart: 25}}>
              <Text style={styles.subtitle}>{item.fup}</Text>
            </View>
            <View style={{...styles.columnView, flex: 2}}>
              <Text style={styles.subtitle}>{item.days}</Text>
            </View>
          </View> */}
        </View>
      </Pressable>
      <HorizontalLine />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ..._Shadow,
    backgroundColor: 'Colors.white',
    padding: 5,
  },
  header: {flexDirection: 'row', marginTop: 10},
  monthContainer: {
    // backgroundColor: 'red',
    width: '100%',
    // alignItems: 'flex-start',
    flexDirection: 'row',
  },
  month: {
    ..._Text(
      FontSize.smallVariantPlus,
      Family.robotoBold,
      Colors.labelTextColor,
    ),
    flex: 1,
    textAlign: 'center',
  },

  title: {
    ..._Text(FontSize.regular, Family.robotoMedium, Colors.settingColor),
    marginStart: 15,
  },
  value: {
    ..._Text(FontSize.medium, Family.robotoBold, Colors.settingColor),
  },
  firstTitle: {
    ..._Text(FontSize.small, Family.regular, Colors.textplaceHolder),
  },
  subtitle: {
    ..._Text(FontSize.xs, Family.semibold, Colors.labelTextColor),
    marginStart: 15,
  },
  statusText: {
    color: Colors.primary,
    fontSize: FontSize.xs,
  },
  rootView: {
    padding: Spacing.small,
    flex: 1,
  },
  childText: {
    ...commonStyles.row,
    alignSelf: 'flex-start',
    marginStart: 40,
  },
  columnView: {
    ...commonStyles.column,
    flex: 1,
  },
  icon: {
    alignSelf: 'flex-start',
    width: scaleSize(45),
    height: scaleSize(45),
    flex: 2.5,
  },
});

export default RechargeCard;
