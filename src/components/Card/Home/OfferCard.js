import React from 'react';
import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import {Rounded, Spacing} from 'constants/Layout';
import {_Shadow} from 'styles';
import Colors from 'constants/Colors';
import {Family, FontSize} from 'constants/Fonts';
import {_Fill, _Text} from 'styles';
import {scaleSize, WINDOW_HEIGHT, WINDOW_WIDTH} from 'utils/index';

const OfferCard = ({item, itemIndex, doAction}) => {
  return (
    <Pressable style={styles.container} onPress={doAction} key={itemIndex}>
      <ImageBackground
        source={item.image}
        resizeMode="contain"
        borderRadius={12}
        style={styles.imgbgContainer}>
        <View>
          <View style={styles.innerContainer}>
            <Text numberOfLines={2} style={styles.title}>
              {item.name}
            </Text>
            <View style={{marginTop: scaleSize(8)}} />
            <Text numberOfLines={1} style={styles.subTitle}>
              {item.period}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  imgbgContainer: {
    borderRadius: Rounded.regular,
    width: WINDOW_WIDTH * 0.8,
    height: WINDOW_WIDTH * 0.4,
    backgroundColor: Colors.greyDarkVarient,
    alignContent: 'flex-end',
  },
  container: {
    borderRadius: Rounded.regular,
    marginHorizontal: Spacing.xsVariant,
    width: WINDOW_WIDTH * 0.8,
    height: WINDOW_WIDTH * 0.4,
  },

  innerContainer: {
    width: WINDOW_WIDTH * 0.5,
    height: WINDOW_WIDTH * 0.4,
    backgroundColor: Colors.blueVarient,
    borderTopEndRadius: Rounded.xxlarge,
    borderBottomRightRadius: Rounded.xxlarge,
    borderTopLeftRadius: Rounded.smallVariant1,
    borderBottomStartRadius: Rounded.smallVariant1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
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
    fontSize: FontSize.medium,
    fontFamily: Family.dmsansBold,
    color: Colors.white,
    paddingLeft: scaleSize(10),
    alignSelf: 'flex-start',
  },
  subTitle: {
    fontSize: FontSize.xs,
    fontFamily: 'DM Sans',
    color: Colors.white,
    alignSelf: 'flex-start',
    paddingLeft: scaleSize(10),
  },
  clientText: {
    ..._Text(FontSize.smallVariant, Family.medium, Colors.textDark),
  },
  firstTitle: {
    ..._Text(FontSize.tiny, Family.medium, Colors.textplaceHolder),
  },
  subtitle: {
    ..._Text(FontSize.xs, Family.bold, Colors.textGreen),
  },
  rootView: {
    padding: Spacing.small,
  },
});

export default OfferCard;
