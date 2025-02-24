import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import Colors from 'constants/Colors';
import {Family, FontSize} from 'constants/Fonts';
import {useNavigation} from '@react-navigation/native';
import Screens from 'navigators/index';

const DrawerInput = props => {
  const {image, title, type, doAction} = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.navDrawer} onPress={doAction}>
      <Image resizeMode="contain" style={styles.imageStyle} source={image} />
      <Text style={styles.textStyle}>{title}</Text>
      {type === 'logout' ? null : (
        <Image
          resizeMode="contain"
          style={styles.imageItemStyle}
          source={require('../../../images/Home/next.png')}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  navDrawer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    alignItems: 'center',
  },
  imageStyle: {
    width: 18,
    height: 18,
    marginTop: 5,
  },
  textStyle: {
    width: '70%',
    alignItems: 'center',
    fontFamily: Family.regular,
    fontSize: FontSize.smallVariantPlus,
    paddingLeft: 20,
    color: Colors.homeBackground,
  },
  imageItemStyle: {
    marginTop: 0,
    width: 10,
    height: 10,
  },
});
export {DrawerInput};
