import React, {useEffect} from 'react';

import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  Pressable,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {scaleSize} from 'utils/index';
import Colors from 'constants/Colors';
import {_Text} from 'styles/index';
import SubscribersTab from 'constants/SubscribersTopTabNavigator';
import Header from 'components/Header';

import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  subscriberList,
  subscriberSelector,
} from 'features/Subscribers/SubscriberSlice';
import {authSelector} from 'features/Auth/AuthSlice';

const SubscribersView = () => {
  const dispatch = useDispatch();

  // Auth reducer
  const {accessToken} = useSelector(authSelector);

  // Subscriber reducer
  const {
    fetching,
    subscriberListSuccess,
    subscriberListData,
    subscriberListError,
    subscriberListErrorMessage,
  } = useSelector(subscriberSelector);

  useEffect(() => {
    dispatch(subscriberList({tokenId: accessToken}));
  }, []);

  console.log(
    'LOG FROM SUBSCRIBER LIST----',
    subscriberListData.live_subscribers,
  );

  let mobileVerified = true;

  const navigation = useNavigation();
  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.statusBar} barStyle="light-content" />

      {/* Header section */}
      <Header title={'Subscribers'} wallet={true} />
      <View style={styles.bodyContainer}>
        <SubscribersTab data={subscriberListData} />
        <TouchableOpacity style={styles.searchWrapper}>
          <Image
            source={require('images/subscribers/search.png')}
            resizeMode="contain"
            style={styles.searchIco}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.fabWrapper}>
          <Image
            source={require('images/subscribers/fab.png')}
            resizeMode="contain"
            style={styles.fabIco}
          />
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  bodyContainer: {
    flex: 1,
    position: 'relative',
  },
  searchWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: scaleSize(20),
    right: scaleSize(30),
  },
  searchIco: {
    height: scaleSize(20),
    width: scaleSize(20),
  },
  fabWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: scaleSize(65),
    width: scaleSize(65),
    backgroundColor: '#B45190',
    borderRadius: 999,
    position: 'absolute',
    bottom: scaleSize(17),
    right: scaleSize(17),
    elevation: 8,
  },
  fabIco: {
    height: scaleSize(25),
    width: scaleSize(25),
  },
});

export default SubscribersView;
