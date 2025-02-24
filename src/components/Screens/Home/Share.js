import Colors from 'constants/Colors'
import {Family, FontSize} from 'constants/Fonts';
import {Rounded, Spacing} from 'constants/Layout';
import React from 'react'
import {View} from 'react-native';
import {Pressable} from 'react-native';
import {StyleSheet, Text, ImageBackground} from 'react-native';
import {scaleSize, WINDOW_HEIGHT, WINDOW_WIDTH} from 'utils/index';

const Share = ({navigation}) => {
  return (
    <Pressable style={{marginBottom: Spacing.largeVariant2}}>
      <View style={styles.ViewContainer}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.innerTextContainer}>
            <Text style={styles.textStyle}>Share with friends</Text>
            <Text style={styles.subtextStyle}>
              {
                'Help your friends fall in love with \n wifi through Asianet Fiber!'
              }
            </Text>
          </View>
          <View style={styles.innerImageContainer}>
            <ImageBackground
              source={require('../../../images/Home/Menu/share.png')}
              resizeMode="contain"
              style={styles.container1} 
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ViewContainer: {
    borderRadius: Rounded.regular,
    alignSelf: 'center',
    height: WINDOW_WIDTH * 0.3,
    width: WINDOW_WIDTH * 0.9,
    backgroundColor: Colors.lightredVarient,
  },
  innerTextContainer: {
    height: WINDOW_WIDTH * 0.4,
    width: WINDOW_WIDTH * 0.6,
    padding: Spacing.medium,
  },
  textStyle: {
    fontFamily: Family.robotoMedium,
    fontSize: FontSize.regularVariantPlus,
    color: Colors.black,
  },
  subtextStyle: {
    fontFamily: Family.medium,
    fontSize: 12.5,
    color: Colors.lightGreyTextColor,
    marginTop: 10,
  },

  innerImageContainer: {
    height: WINDOW_WIDTH * 0.3,
    width: WINDOW_WIDTH * 0.3,
    position: 'relative',
    alignContent: 'flex-end',
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  container1: {
    height: WINDOW_WIDTH * 0.35,
    width: WINDOW_WIDTH * 0.4,
    position: 'relative',
    alignContent: 'flex-end',
    alignSelf: 'flex-end',
  },
});

export default Share;
