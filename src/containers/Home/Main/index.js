import {useNavigation} from '@react-navigation/native';
import {TextStyle} from 'components/Input';
import CategoryList from 'components/Screens/Home/CategoryList';
import OfferList from 'components/Screens/Home/OfferList';
import PopularList from 'components/Screens/Home/PopularList';
import Share from 'components/Screens/Home/Share';
import Colors from 'constants/Colors';
import {Family, FontSize, FontSizeModerate} from 'constants/Fonts';
import {BannerImage} from 'constants/Images';
import {Spacing} from 'constants/Layout';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import CircularProgress from 'react-native-circular-progress-indicator';
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  Modal,
  Alert,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {scaleSize, showToast, WINDOW_HEIGHT, WINDOW_WIDTH} from 'utils/index';
import {colors} from 'react-native-elements';
import Screens from 'navigators/index';
import LinearGradient from 'react-native-linear-gradient';
import userType from 'utils/userType';
import Wallet from 'components/Home/Wallet';
import HeroAsianet from 'components/Home/HeroAsianet';
import {useDispatch, useSelector} from 'react-redux';
import {clearState, dashBoard, homeSelector} from 'features/Home/HomeSlice';
import {LoaderOverlay} from 'components/Overlays';
import {authSelector, logout} from 'features/Auth/AuthSlice';
const headingTitle = 'Hello, Rajeswari';
const headingText = 'Have a nice day';

const Home = () => {
  const navigation = useNavigation();
  let num = 12.19;

  const dispatch = useDispatch();

  // Auth reducer
  const {accessToken} = useSelector(authSelector);

  // Home reducer
  const {fetching, success, homeData, error, errorMessage} =
    useSelector(homeSelector);

  useEffect(() => {
    dispatch(dashBoard({tokenId: accessToken}));
  }, []);

  // On error
  useEffect(() => {
    if (error) {
      dispatch(clearState());
      if (
        errorMessage === 'Invalid token.' ||
        errorMessage === 'Auth Token Missing'
      ) {
        showToast('Session expired. Please login again');
        dispatch(logout());
        navigation.replace(Screens.SIGNIN);
      } else {
        showToast(errorMessage);
      }
    }
  }, [error]);

  console.log('FROM HOME----', fetching);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.statusBar} barStyle="light-content" />
      <LoaderOverlay visible={fetching} />
      {/* Title area */}
      <View style={styles.innerContainer}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#400844', '#E70889']}>
          <ImageBackground
            source={BannerImage}
            style={styles.logo}
            resizeMode={'cover'}>
            {/* Top bar */}
            <View style={styles.topBarStyle}>
              <Pressable onPress={() => navigation.openDrawer()}>
                <Image
                  resizeMode="contain"
                  style={styles.drawerStyle}
                  source={require('../../../images/Home/drawer.png')}
                />
              </Pressable>
              <Text style={styles.headerStyle}>Asianet Fiber</Text>
              <Pressable
                onPress={() => navigation.navigate(Screens.NOTIFICATION)}>
                <Image
                  resizeMode="contain"
                  style={styles.notificationStyle}
                  source={require('../../../images/Home/notification.png')}
                />
              </Pressable>
            </View>
            <View style={{flex: 0.4}} />
            {/* Welcome title */}
            <View style={styles.headingWrapper}>
              <View style={styles.welcomeTextWrapper}>
                <Text style={styles.headingTitleStyle}>{headingTitle}</Text>
                <Text style={styles.headingTextStyle}>{headingText}</Text>
                <View
                  style={{
                    backgroundColor: '#D24B9B',
                    paddingHorizontal: 6,
                    paddingVertical: 8,
                    alignSelf: 'flex-start',
                    borderRadius: 5,
                  }}>
                  <Text style={styles.subHeading}>JAGAD GURU</Text>
                </View>
              </View>
              {userType() == 'lco' ? <Wallet /> : <HeroAsianet />}
              {/* <HomeWallet /> */}
            </View>
          </ImageBackground>
        </LinearGradient>
      </View>
      {/* Category list */}
      <View style={styles.categoryListWrapper}>
        <CategoryList navigation={navigation} data={homeData} />
      </View>

      <View style={{marginTop: scaleSize(10)}} />
      <ScrollView style={{flex: 1}}>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Text style={styles.offerTextStyle}>Offers</Text>
          <View style={styles.seeAllTextStyleView}>
            <Text style={styles.seeAllTextStyle}>See all</Text>
          </View>
        </View>
        {/* Offers */}
        <OfferList data={homeData?.offers} />

        <View style={{flexDirection: 'row', marginBottom: 5, marginTop: 5}}>
          <Text style={styles.offerTextStyle}>Popular Categories</Text>
          <View style={styles.seeAllTextStyleView}>
            <Text style={styles.seeAllTextStyle}>See all</Text>
          </View>
        </View>
        {/* Popular category */}
        <PopularList />

        <View style={{flexDirection: 'column'}}>
          <Text
            style={{
              ...styles.offerTextStyle,
              marginBottom: 15,
              marginTop: 10,
            }}>
            Share
          </Text>

          <Share />
        </View>

        <View style={{marginBottom: scaleSize(80)}} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.white,
  },
  innerContainer: {
    flex: 0.65,
  },
  logo: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT * 0.33,
  },
  topBarStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: scaleSize(10),
    paddingHorizontal: Spacing.medium,
  },
  headingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scaleSize(20),
    marginBottom: scaleSize(30),
  },
  headerStyle: {
    color: Colors.white,
    fontFamily: Family.robotoBold,
    alignSelf: 'center',
    fontSize: FontSize.medium,
  },
  headingTitleStyle: {
    color: Colors.white,
    fontFamily: Family.bold,
    fontSize: FontSizeModerate.large,
    // paddingHorizontal: 18,
  },
  subHeading: {
    color: Colors.white,
    fontFamily: Family.bold,
    fontSize: FontSizeModerate.tiny,
  },
  headingTextStyle: {
    color: Colors.white,
    fontFamily: Family.regular,
    fontSize: FontSizeModerate.smallVariantPlus,
    marginTop: scaleSize(5),
    marginBottom: scaleSize(10),
  },

  categoryListWrapper: {
    marginTop: scaleSize(20),
    width: '90%',
    flexDirection: 'row',
    // height: '100%',
    // maxHeight: WINDOW_HEIGHT * 0.325,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 15,
    elevation: 2,
  },
  offerTextStyle: {
    color: Colors.offerGrey,
    fontFamily: Family.robotoMedium,
    fontSize: FontSize.mediumVariant,
    marginLeft: scaleSize(20),
  },
  seeAllTextStyle: {
    color: '#AEB1C1',
    fontFamily: Family.regular,
    fontSize: FontSize.regularVariantPlus,
  },
  seeAllTextStyleView: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex: 1,
    marginRight: 15,
  },
  innercontainer: {
    width: 200,
    height: 200,
    borderWidth: 20,
    borderRadius: 100,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstProgressLayer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scaleSize(5),
  },
  drawerStyle: {
    width: scaleSize(25),
    height: scaleSize(25),
  },
  notificationStyle: {
    width: scaleSize(40),
    height: scaleSize(40),
  },
});

export default Home;
