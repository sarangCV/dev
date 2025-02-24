import {navigate} from '@react-navigation/routers/lib/typescript/src/CommonActions';
import React, {useEffect} from 'react';
import {StatusBar, View, Image} from 'react-native';
import Colors from 'constants/Colors';
import {useSelector} from 'react-redux';
import {authSelector, authSlice} from 'features/Auth/AuthSlice';
import Screens from 'navigators/index';

const SplashView = props => {
  const {navigation} = props;

  // Auth reducer
  const {accessToken} = useSelector(authSelector);
  useEffect(() => {
    setTimeout(() => {
      accessToken !== ''
        ? navigation.replace(Screens.POST_AUTH_STACK)
        : navigation.replace(Screens.INTROSLIDER);
      // navigation.replace(Screens.LOGIN)
    }, 1000);
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.mainBackground,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={require('../../../images/splash/icon.png')}
        // style={{flex: 1}}
        resizeMode="contain"
      />
      <StatusBar hidden />
    </View>
  );
};

export default SplashView;
