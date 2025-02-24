import {ToastAndroid, BackHandler, Alert} from 'react-native';
import {isIOS} from 'utils/';

/**
 * Add event listener to detect the back button press in android
 * @param {*} callback - callback function to manage the back press in android
 */
const handleAndroidBackButton = callback => {
  BackHandler.addEventListener('hardwareBackPress', () => {
    callback();
    return true;
  })
}
/**
 * Removes the event listener in order not to add a new one
 * every time the view component re-mounts
 */
const removeAndroidBackButtonHandler = () => {
  BackHandler.removeEventListener('hardwareBackPress', () => {});
}

let counter = 0;

const exitAlert = () => {
  if (counter === 0) {
    if (isIOS) {
      Alert.alert('Press back again to exit the app');
    } else {
      ToastAndroid.show('Press back again to exit the app', ToastAndroid.SHORT);
    }

    counter++;
    setTimeout(() => {
      counter = 0;
    }, 3000);
  } else {
    BackHandler.exitApp();
  }
};

export {handleAndroidBackButton, removeAndroidBackButtonHandler, exitAlert};
