import {useState, useEffect} from 'react';
import {
  Dimensions,
  PixelRatio,
  Platform,
  ToastAndroid,
  Alert,
  StatusBar,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const HEADER_EXPANDED_HEIGHT = 120;
const HEADER_COLLAPSED_HEIGHT = 100;

const HEADER_EXPANDED_HEIGHT_ONB = 200;
const HEADER_COLLAPSED_HEIGHT_ONB = 100;

const horizontalScale = size => (WINDOW_WIDTH / guidelineBaseWidth) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

const scaleSize = size => (WINDOW_WIDTH / guidelineBaseWidth) * size;
const scaleFont = size => size * PixelRatio.getFontScale();
const gridWidth = (WINDOW_WIDTH - 40) / 2;
const gridWidth1 = WINDOW_WIDTH / 2 + 50;
const gridWidth2 = (WINDOW_WIDTH - 30) / 2;

const isAndroid = Platform.OS === 'android';
const isIOS = Platform.OS === 'ios';
const networkErrorMessage = 'Not connected to internet, Please try later!';

let currentNetwork;

const getPercentage = (input, total) => (input / total) * 100;

const showToast = msg => {
  // if (isAndroid) {
  //   ToastAndroid.show(msg, ToastAndroid.SHORT)
  // } else {
  Alert.alert(msg);
  // }
};

const getFileNameFromUri = uri => {
  return uri.split('\\').pop().split('/').pop();
};

const getNotchHight = () => {
  let notchHeight = 0;
  console.log('OS,' + Platform.OS);
  if (Platform.OS === 'ios') {
    if (StatusBar.currentHeight === 20) {
      notchHeight = 25;
    } else {
      notchHeight = StatusBar.currentHeight + 34;
    }
  } else if (Platform.OS === 'android') {
    if (StatusBar.currentHeight > 25) {
      notchHeight = 10;
    } else {
      notchHeight = StatusBar.currentHeight;
    }
  }
  return notchHeight;
};

const networkCheck = () => {
  let status = '';
  NetInfo.addEventListener(networkState => {
    status = networkState.isConnected;
  });
  return status;
};

export {
  scaleSize,
  scaleFont,
  isAndroid,
  isIOS,
  WINDOW_WIDTH,
  WINDOW_HEIGHT,
  getPercentage,
  showToast,
  gridWidth,
  HEADER_EXPANDED_HEIGHT,
  HEADER_COLLAPSED_HEIGHT,
  gridWidth1,
  gridWidth2,
  HEADER_EXPANDED_HEIGHT_ONB,
  HEADER_COLLAPSED_HEIGHT_ONB,
  getFileNameFromUri,
  getNotchHight,
  networkCheck,
  networkErrorMessage,
  moderateScale,
};
