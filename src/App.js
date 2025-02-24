import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import NetInfo from '@react-native-community/netinfo';
import {useDispatch} from 'react-redux';

import {store, persistor} from 'store';
import ApplicationNavigator from 'navigators/ApplicationNavigator';

const AppWrapper = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </SafeAreaProvider>
  );
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      console.log(`net isConnected: ${state.isConnected}`);
      console.log(`net isReachable: ${state.isInternetReachable}`);
      const offline = !(state.isConnected /*&& state.isInternetReachable*/);
    });
    return () => removeNetInfoSubscription();
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApplicationNavigator />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default AppWrapper;
