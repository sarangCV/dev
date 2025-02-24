import {useNavigation} from '@react-navigation/native';
import Colors from 'constants/Colors';
import {Family, FontSize} from 'constants/Fonts';
import {Rounded, Spacing} from 'constants/Layout';
import React from 'react';

import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  Pressable,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import {scaleSize, WINDOW_HEIGHT, WINDOW_WIDTH} from 'utils/index';
import Screens from 'navigators/index';
import FastImage from 'react-native-fast-image';
import {_Text} from 'styles/index';
import SegmentedRoundDisplay from 'react-native-segmented-round-display';
import HorizontalLine from 'components/Horizontal/HorizontalLine';
import {Directions} from 'react-native-gesture-handler';
import Profile from 'components/Profile';
import {useState} from 'react';
import LogoutPopUp from 'components/Modal/LogoutPopUp';
import OfferCard from 'components/Card/Home/OfferCard';
import OfferListJson from 'data/OfferListJson';
import {KeyboardAvoidingView} from 'react-native';
import {Platform} from 'react-native';
import PlanListJson from 'data/PlanListJson';
import PlanCard from 'components/Card/Plan/PlanCard';
import RechargeTabs from 'constants/TopTabNavigatorRecharge';
import SearchInput from 'components/Input/SearchInput';
import {Button} from 'react-native-paper';
const headingTitle = 'Hello, Lisa';
const headingText = 'Have a nice day';

const RechargeView = ({navigation}) => {
  const [searchInputVisible, setSearchInputVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const navigateBack = () => {
    navigation.goBack();
  };
  const hideSearchInput = () => {
    setSearchInputVisible(false);
    console.log('sss');
  };

  const goToSearchInput = () => {
    setSearchInputVisible(true);
  };

  const doSearch = () => {
    setSearchText(searchText);
  };

  const onChangeText = text => {
    setSearchText(text);
    //setPageNumber(1)
  };

  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={Colors.cancelBtn} barStyle="light-content" />

      <View style={styles.header}>
        <Pressable onPress={() => navigateBack()}>
          <FastImage
            source={require('../../../../images/back.png')}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.icon}
          />
        </Pressable>
        {searchInputVisible === false ? (
          <>
            <Text style={styles.headerText}>Recharge</Text>
            <Pressable onPress={() => goToSearchInput()}>
              <FastImage
                source={require('../../../../images/search.png')}
                resizeMode={FastImage.resizeMode.contain}
                style={styles.icon}
              />
            </Pressable>
          </>
        ) : (
          <SearchInput
            doActionClose={() => hideSearchInput()}
            onChangeText={onChangeText}
            doAction={() => {
              doSearch();
            }}
          />
        )}
      </View>

      <View style={[styles.container]}>
        {/* /********set condition */}
        <View
          style={{
            height: '30%',
            backgroundColor: Colors.white,
            justifyContent: 'center',
          }}>
          <Pressable style={{backgroundColor: Colors.white}}>
            <View
              borderRadius={5}
              style={{
                ...styles.bgContainer,
                backgroundColor: '#5A4493',
              }}>
              <ImageBackground
                source={require('../../../../images/bg.png')}
                style={styles.imgContainer}>
                <View
                  style={{
                    flex: 1.5,
                    flexDirection: 'column',
                  }}>
                  <Text style={styles.text1}>Advance Recharge </Text>
                  <Text style={styles.text2}>FUP20M2000G</Text>
                  <View
                    style={{
                      backgroundColor: '#D4D0E0',
                      margin: scaleSize(46),
                      borderRadius: 15,
                    }}>
                    <Text style={styles.text3}>{'2000 GB Data'}</Text>
                  </View>
                </View>
                <View style={{flex: 1, flexDirection: 'column'}}>
                  <Text style={styles.text1}>1-month plan</Text>
                  <Text style={styles.text2}>₹ 500</Text>
                  <Text style={styles.text4}>Atur Paket</Text>

                  <View
                    style={{
                      ...styles.inputRow,
                      paddingVertical: Spacing.medium,
                    }}>
                    <Pressable style={styles.buttonContainerStyle}>
                      <Text style={styles.buttonText}>Activate</Text>
                    </Pressable>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </Pressable>
        </View>
        {/* /********set condition */}

        <View style={{height: '70%', backgroundColor: Colors.white}}>
          <RechargeTabs navigation={navigation} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  bgContainer: {
    borderRadius: Rounded.small,
    width: WINDOW_WIDTH * 0.95,
    height: WINDOW_WIDTH * 0.4,
    alignSelf: 'center',
    // margin: 10,
    // marginBottom: 20,
  },
  imgContainer: {
    width: WINDOW_WIDTH * 0.95,
    height: WINDOW_WIDTH * 0.47,
    flexDirection: 'row',
  },

  header: {
    flexDirection: 'row',
    padding: Spacing.largeVariant2,
    backgroundColor: Colors.cancelBtn,
    alignItems: 'center',
    width: WINDOW_WIDTH,
  },
  icon: {
    alignSelf: 'flex-start',
    width: scaleSize(25),
    height: scaleSize(25),
    flex: 1,
    marginEnd: 10,
  },
  headerText: {
    ..._Text(FontSize.regularVariantPlus, Family.bold, Colors.white),
    paddingHorizontal: Spacing.small,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    marginLeft: 80,
  },
  logo: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT * 0.3,
  },
  topBarStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: scaleSize(10),
    paddingHorizontal: Spacing.medium,
  },
  headerStyle: {
    color: Colors.white,
    fontFamily: Family.robotoMedium,
    alignSelf: 'center',
    fontSize: FontSize.largeVariant12,
  },
  headingTitleStyle: {
    color: Colors.white,
    fontFamily: Family.bold,
    fontSize: FontSize.largeVariant,
    paddingHorizontal: 18,
  },
  headingTextStyle: {
    color: Colors.white,
    fontFamily: Family.regular,
    fontSize: FontSize.regular,
    paddingHorizontal: 18,
  },
  text1: {
    color: Colors.white,
    fontFamily: Family.regular,
    fontSize: FontSize.smallVariant,
    marginBottom: 5,
    marginTop: 20,
    marginStart: scaleSize(45),
    alignContent: 'flex-start',
  },
  text2: {
    color: Colors.white,
    fontFamily: Family.bold,
    fontSize: FontSize.large,
    textAlign: 'center',
    marginBottom: -30,
    marginStart: 20,
  },
  text3: {
    ..._Text(FontSize.smallVariantPlus, Family.bold, Colors.black),
    textAlign: 'center',
    marginTop: 3,
    marginBottom: 3,
  },
  text4: {
    ..._Text(FontSize.smallVariantPlus, Family.bold, Colors.white),
    textAlign: 'center',
    marginTop: scaleSize(45),
  },
  inputRow: {
    marginBottom: Spacing.xlargeVariant,
    marginStart: Spacing.mediumLarge1,
    marginEnd: Spacing.largeVariant2,
  },
  labelText: {
    ..._Text(FontSize.regular, Family.regular, Colors.textDark),
    // paddingBottom: Spacing.xs,
  },
  buttonContainerStyle: {
    borderRadius: Rounded.xs,
    backgroundColor: Colors.pinkVarient,
    height: '50%',
    marginStart: Spacing.xs,
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: Family.bold,
    fontSize: FontSize.smallVariantPlus,
    color: Colors.white,
    marginTop: 4,
  },
});

export default RechargeView;
