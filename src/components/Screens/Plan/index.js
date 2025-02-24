import {useNavigation} from '@react-navigation/native';
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
} from 'react-native';
import {scaleSize, WINDOW_HEIGHT, WINDOW_WIDTH} from 'utils/index';
import Colors from 'constants/Colors';
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
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

const headingTitle = 'Hello, Lisa';
const headingText = 'Have a nice day';

const PlanView = ({navigation}) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.cancelBtn} barStyle="light-content" />

      {/* Header section */}
      <LinearGradient colors={['#58074D', '#CF077F']}>
        <View style={[styles.header]}>
          <Pressable onPress={() => navigateBack()}>
            <FastImage
              source={require('../../../images/back.png')}
              resizeMode={FastImage.resizeMode.contain}
              style={styles.icon}
            />
          </Pressable>
          <Text style={styles.headerText}>Plan</Text>
          <View style={styles.walletWrapper}>
            <AntDesign name="wallet" size={13} color={Colors.white} />

            <Text style={styles.walletText}>10.00</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.bodyContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          data={PlanListJson}
          renderItem={({item, index}) => (
            <PlanCard
              item={item}
              itemIndex={index}
              //   doAction={() => gotoDetailView(item)}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          //   ListFooterComponent={() => renderFooter()}
          //   onEndReachedThreshold={0}
          //   onEndReached={() => LoadMore()}
        />
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
  },
  listContainer: {
    marginTop: Spacing.small,
    marginBottom: Spacing.medium,
    marginLeft: Spacing.xsVariant2,
  },

  header: {
    paddingVertical: scaleSize(22),
    paddingHorizontal: Spacing.large,
    flexDirection: 'row',
    alignItems: 'center',
    width: WINDOW_WIDTH,
  },
  icon: {
    alignSelf: 'flex-start',
    width: scaleSize(25),
    height: scaleSize(25),
    flex: 1,
    // backgroundColor: 'red',
  },
  headerText: {
    ..._Text(FontSize.regularVariantPlus, Family.bold, Colors.white),
    // paddingRight: scaleSize(25),
    textAlign: 'center',
    flex: 1,
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
    color: '#9CA4AB',
    fontFamily: Family.robotoMedium,
    fontSize: FontSize.regular,
    marginBottom: 20,
    marginTop: 10,
  },
  walletWrapper: {
    paddingVertical: scaleSize(6),
    paddingHorizontal: scaleSize(6),
    backgroundColor: '#D24B9B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  walletText: {
    marginLeft: 5,
    fontFamily: Family.extrabold,
    fontSize: FontSize.xs,
    color: Colors.white,
  },
});

export default PlanView;
