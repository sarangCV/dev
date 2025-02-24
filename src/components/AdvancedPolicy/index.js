import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, Pressable} from 'react-native';
import Colors from 'constants/Colors';
import {Family, FontSize, IconSize} from 'constants/Fonts';
import {Rounded, Spacing} from 'constants/Layout';
import {_Fill, _Text, _Shadow} from 'styles/';
import {gridWidth, gridWidth2} from 'utils/';

const MenuCard = ({item, goToDetails}) => {
  const setMenuIcon = () => {
    switch (item.key) {
      case 'Recharge':
        return item.uri;
      case 'Credit and data':
        return item.uri;
      case 'Bill payment':
        return item.uri;
      case 'Donation':
        return item.uri;
      case 'Reload':
        return item.uri;
      default:
        return;
    }
  };

  return (
    <Pressable onPress={goToDetails}>
      <View style={styles.card}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.subCardView}>
            <View style={styles.groupImageText}>
              <Image source={setMenuIcon()} style={styles.cardImage} />
              <Text style={styles.title}>{item.key}</Text>
              <Text style={styles.subtitle}>{item.subText}</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  title: {
    ..._Text(FontSize.regularVariantPlus, Family.semibold, Colors.settingColor),
    marginTop: Spacing.xsVariant2,
  },
  subtitle: {
    ..._Text(FontSize.small, Family.medium, Colors.subText),
    marginTop: Spacing.xs,
  },
  cardImage: {
    width: IconSize.xlargeplus,
    height: IconSize.xlargeplus,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  groupImageText: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  card: {
    width: gridWidth2,
    height: 160,
    padding: 20,
    ..._Shadow,
    borderRadius: Rounded.smallVariant,
    margin: 5,
    justifyContent: 'center',
    backgroundColor: Colors.white,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',
  },
  subCardView: {
    width: gridWidth,
    borderRadius: 5,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greyTitle: {
    ..._Text(FontSize.regularVariant, Family.medium, Colors.bgSign),
    marginTop: Spacing.xsVariant2,
  },
});

export default MenuCard;
