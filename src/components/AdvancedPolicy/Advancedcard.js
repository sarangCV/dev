import Colors from 'constants/Colors';
import {Family, FontSize, IconSize} from 'constants/Fonts';
import {Rounded, Spacing} from 'constants/Layout';
import React, {useState, useNavigation} from 'react';
import {Image, StyleSheet, Text, View, Pressable} from 'react-native';
import {_Fill, _Text, _Shadow} from 'styles/';
import {gridWidth, scaleSize} from 'utils/';

const MenuCard = ({title, menuImage, goToDetails}) => {
  const [viewWidth, setViewWidth] = useState(0);
  return (
    <Pressable onPress={goToDetails}>
      <View style={styles.card}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.subCardView}>
            <View style={styles.groupImageText}>
              <Image source={menuImage} style={styles.cardImage} />
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.title}>{title}</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  title: {
    ..._Text(FontSize.regularVariant, Family.medium, Colors.black),
    marginTop: Spacing.xsVariant2,
  },

  cardImage: {
    width: IconSize.xxlargeVarriant,
    height: IconSize.xxlargeVarriant,
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
    width: gridWidth,
    height: 160,
    padding: 20,
    ..._Shadow,
    borderRadius: Rounded.smallVariant,
    margin: 10,
    justifyContent: 'center',
    backgroundColor: Colors.white,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',
  },
  mainCardView: {
    padding: Spacing.small,
    ..._Shadow,
    borderRadius: Rounded.smallVariant,
    marginBottom: Spacing.small,
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
});

export default MenuCard;
