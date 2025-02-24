import {IconSize} from 'constants/Fonts';
import React from 'react';
import {View, Image} from 'react-native';

const TextInputLeftImageForLogin = props => {
  return (
    <View style={{paddingVertical: 23}}>
      <Image
        source={props.imagePath}
        style={{
          width: IconSize.mediumVariant,
          height: IconSize.mediumVariant,
        }}
      />
    </View>
  );
}

const TextInputLeftImageForForgotPasswordEmail = props => {
  return (
    <View style={{paddingVertical: 18, justifyContent: 'center'}}>
      <Image
        source={props.imagePath}
        style={{
          width: IconSize.mediumVariant,
          height: IconSize.mediumVariant,
        }}
      />
    </View>
  );
}

export {TextInputLeftImageForLogin, TextInputLeftImageForForgotPasswordEmail};
