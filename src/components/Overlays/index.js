import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import {Overlay, Button} from 'react-native-elements';

import {scaleSize} from 'utils/index';

export const LoaderOverlay = props => {
  const {visible} = props;
  return (
    <View>
      <Overlay
        statusBarTranslucent
        visible={visible}
        overlayStyle={Styles.loaderOverlayStyle}
        backdropStyle={Styles.loaderBackdropStyle}>
        <ActivityIndicator size="large" color="white" />
      </Overlay>
    </View>
  );
};
const Styles = StyleSheet.create({
  loaderOverlayStyle: {
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.5,
    borderRadius: scaleSize(5),
  },
  loaderBackdropStyle: {
    backgroundColor: 'transparent',
  },
});
