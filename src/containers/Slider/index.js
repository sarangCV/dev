import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Text} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Family, FontSize, FontSizeModerate} from 'constants/Fonts';
import {StyleSheet, StatusBar, View, Image} from 'react-native';
import Colors from 'constants/Colors';
import Screens from 'navigators/index';

const IntroSlider = ({navigation}) => {
  const auth = useSelector(state => state.auth);

  const slides = [
    {
      key: 1,
      title: 'Manage Your Account',
      text: 'Track and Control your Internet data.\n Plan your internet needs as per your budget.',
      image: require('../../images/IntroSlider/introSlider1.png'),
      backgroundColor: '#ffff',
    },
    {
      key: 2,
      title: 'Pay Your Bills & Recharge',
      text: 'Pay your bills or recharge your account with\n our easy payment options.',
      image: require('../../images/IntroSlider/introSlider2.png'),
      backgroundColor: '#febe29',
    },
    {
      key: 3,
      title: 'Delighted to Help',
      text: '24/7 Customer service and support',
      image: require('../../images/IntroSlider/introSlider3.png'),
      backgroundColor: '#22bcb5',
    },
  ];

  const renderNextButton = () => {
    return (
      <Text
        style={{
          fontFamily: Family.bold,
          fontSize: FontSizeModerate.smallVariantPlus,
          color: Colors.darkText,
          marginTop: '85%',
        }}>
        Next
      </Text>
    );
  };

  const renderDoneButton = () => {
    return (
      <Text
        style={{
          fontFamily: Family.bold,
          fontSize: FontSizeModerate.smallVariantPlus,
          color: Colors.darkText,
          marginTop: '85%',
        }}>
        Done
      </Text>
    );
  };

  const renderSkipButton = () => {
    return (
      <Text
        style={{
          fontFamily: Family.bold,
          fontSize: FontSizeModerate.smallVariantPlus,
          color: Colors.lightText,
          marginTop: '85%',
        }}>
        Skip
      </Text>
    );
  };

  const onDone = () => {
    console.log('********Done***********');
    navigation.replace(Screens.LOGIN);
  };

  const onSkip = () => {
    navigation.replace(Screens.LOGIN);
  };

  const renderItem = ({item}) => {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}></View>
        <View style={{flex: 4.5, justifyContent: 'center'}}>
          <Image
            source={item.image}
            resizeMode="contain"
            style={{
              alignSelf: 'center',
              height: '80%',
              width: '80%',
            }}
          />
        </View>
        <View style={{flex: 2}}>
          <View
            style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{height: 25}} />
            <Text
              style={{
                fontFamily: Family.bold,
                fontSize: FontSizeModerate.largeVariant12,
                color: Colors.darkText,
              }}>
              {item.title}
            </Text>
            <View style={{height: 25}} />
            <Text
              style={{
                fontFamily: Family.semibold,
                fontSize: FontSizeModerate.smallVariantPlus,
                color: Colors.darkText,
                textAlign: 'center',
              }}>
              {item.text}
            </Text>
          </View>
        </View>
        <View style={{flex: 2}}></View>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: Colors.white, flex: 1}}>
      <StatusBar hidden />
      <AppIntroSlider
        data={slides}
        renderItem={renderItem}
        onDone={onDone}
        showSkipButton={true}
        onSkip={onSkip}
        showNextButton={true}
        showDoneButton={true}
        renderNextButton={renderNextButton}
        renderSkipButton={renderSkipButton}
        renderDoneButton={renderDoneButton}
        onSlideChange={slides.keys}
        activeDotStyle={{
          width: '5%',
          backgroundColor: Colors.darkText,
          marginBottom: '50%',
          height: '50%',
        }}
        dotStyle={{backgroundColor: '#bababa', marginBottom: '50%'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IntroSlider;
