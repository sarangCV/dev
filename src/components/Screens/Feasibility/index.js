import React from 'react';

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
import {OtpInput} from 'react-native-otp-entry';
import AccentButtonTwo from 'components/Button/AccentButtonTwo';
import {Family, FontSize} from 'constants/Fonts';
import bg_6 from 'images/subscribers/create/bg_6.png';
import bg_2 from 'images/subscribers/create/bg_2.png';
import {useNavigation} from '@react-navigation/native';
import Screens from 'navigators/index';
import LcoList from 'components/Lco';
import Feasibility from 'components/Feasibility';

const FeasibilityView = () => {
  let mobileVerified = true;

  const navigation = useNavigation();
  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.statusBar} barStyle="light-content" />

      {/* Header section */}
      <Header title={'Feasibility'} wallet={true} />
      <View style={styles.bodyContainer}>
        <Feasibility />
        {/* <TouchableOpacity style={styles.searchWrapper}>
          <Image
            source={require('images/subscribers/search.png')}
            resizeMode="contain"
            style={styles.searchIco}
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

export default FeasibilityView;
