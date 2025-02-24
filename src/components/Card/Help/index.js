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
import FastImage from 'react-native-fast-image';

const SRCard = ({item, itemIndex, doAction}) => {
  return (
    <Pressable style={styles.container} onPress={doAction} key={itemIndex}>
      <View
        borderRadius={12}
        style={{...styles.imgbgContainer, backgroundColor: item.bgColor}}>
        <View>
          <View style={styles.innerTextContainer}>
            <Text numberOfLines={2} style={styles.title}>
              {item.name}
            </Text>
            <FastImage
              source={item.image}
              resizeMode={FastImage.resizeMode.contain}
              style={styles.icon}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  imgbgContainer: {
    borderRadius: Rounded.regular,
    width: WINDOW_WIDTH * 0.75,
    height: WINDOW_WIDTH * 0.3,
    alignContent: 'flex-end',
  },
  container: {
    borderRadius: Rounded.regular,
    marginHorizontal: Spacing.xs,
    width: WINDOW_WIDTH * 0.75,
    height: WINDOW_WIDTH * 0.3,
  },

  innerTextContainer: {
    height: WINDOW_WIDTH * 0.3,
    width: WINDOW_WIDTH * 0.75,
    justifyContent: 'center',
    alignItems: 'flex-start',
    position: 'absolute', //Here is the trick
    textAlignVertical: 'bottom',
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  title: {
    fontSize: FontSize.regularVariantPlus,
    fontFamily: Family.robotoMedium,
    color: Colors.white,
    marginBottom: scaleSize(10),
    marginStart: 15,
    alignSelf: 'center',
    flex: 2.5,
  },

  textStyle: {
    fontFamily: Family.montserratSemiBold,
    fontSize: FontSize.regularVariantPlus,
    color: Colors.white,
    alignSelf: 'center',
    paddingBottom: 10,
  },
  icon: {
    width: scaleSize(25),
    height: scaleSize(25),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default SRCard;
