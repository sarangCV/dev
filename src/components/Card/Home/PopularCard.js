import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {Rounded, Spacing} from 'constants/Layout';
import {_Shadow} from 'styles';
import Colors from 'constants/Colors';
import {Family, FontSize} from 'constants/Fonts';
import {_Fill, _Text} from 'styles';
import {scaleSize, WINDOW_HEIGHT, WINDOW_WIDTH} from 'utils/index';
import LinearGradient from 'react-native-linear-gradient';

const PopularCard = ({item, itemIndex, doAction}) => {
  return (
    <Pressable style={styles.container} onPress={doAction} key={itemIndex}>
      <ImageBackground
        source={item.image}
        resizeMode="contain"
        borderRadius={12}
        style={styles.imgbgContainer}>
        <LinearGradient
          style={styles.imgbgContainer}
          start={{x: 0, y: 0}}
          end={{ x: 1, y: 1}}
          colors={['rgba(166, 231, 207, 0.0001)', '#272727']}>
          <View>
            <View style={styles.innerTextContainer}>
              <Text numberOfLines={2} style={styles.title}>
                {item.name}
              </Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  imgbgContainer: {
    borderRadius: Rounded.regular,
    width: WINDOW_WIDTH * 0.7,
    height: WINDOW_WIDTH * 0.4,
    alignContent: 'flex-end',
  },
  container: {
    borderRadius: Rounded.regular,
    marginHorizontal: Spacing.xsVariant,
    width: WINDOW_WIDTH * 0.7,
    height: WINDOW_WIDTH * 0.4,
  },

  innerTextContainer: {
    height: WINDOW_WIDTH * 0.4,
    width: WINDOW_WIDTH * 0.7,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    position: 'absolute', //Here is the trick
    textAlignVertical: 'bottom',
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: FontSize.regular,
    fontFamily: Family.montserratMedium,
    color: Colors.white,
    marginBottom: scaleSize(10),
    alignSelf: 'center',
  },

  textStyle: {
    fontFamily: Family.montserratSemiBold,
    fontSize: FontSize.regularVariantPlus,
    color: Colors.white,
    alignSelf: 'center',
    paddingBottom: 10,
  },
});

export default PopularCard;
