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
  KeyboardAwareScrollView,
} from 'react-native';
import {scaleSize, WINDOW_HEIGHT, WINDOW_WIDTH} from 'utils/index';
import Screens from 'navigators/index';
import FastImage from 'react-native-fast-image';
import {_Text} from 'styles/index';
import SegmentedRoundDisplay from 'react-native-segmented-round-display';
import HorizontalLine from 'components/Horizontal/HorizontalLine';
const headingTitle = 'Hello, Lisa';
const headingText = 'Have a nice day';

const FiberView = () => {
  const navigation = useNavigation();
  let num = 12.19;

  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({item}) => <Item title={item.title} />;

  const examples = [
    {
      displayValue: true,
      formatValue: value => `R$ ${value.toFixed(2)}`,
      segments: [
        {
          total: 80,
          filled: 80,
        },
        {
          total: 30,
          filled: 30,
        },
        {
          total: 100,
          filled: 40,
        },
      ],
    },
    ,
  ];
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <StatusBar
          backgroundColor={Colors.cancelBtn}
          barStyle="light-content"
        />

        <View style={styles.header}>
          <Pressable onPress={() => navigation.openDrawer()}>
            <FastImage
              source={require('../../../../images/Home/drawer.png')}
              resizeMode={FastImage.resizeMode.contain}
              style={styles.icon}
            />
          </Pressable>
          <Text style={styles.headerText}>My Fibernet</Text>
          <Pressable onPress={() => navigation.navigate(Screens.NOTIFICATION)}>
            <FastImage
              source={require('../../../../images/Home/notification_2.png')}
              resizeMode={FastImage.resizeMode.contain}
              style={styles.icon}
            />
          </Pressable>
        </View>

        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={{marginBottom: 200}}>
            <View style={styles.bodyCOntainer}>
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    alignItems: 'center',
                    marginTop: 20,
                  }}>
                  {examples.map((example, i) => (
                    <SegmentedRoundDisplay key={i} {...example} />
                  ))}

                  <View style={{position: 'absolute', top: 0, marginTop: 80}}>
                    <Text
                      style={{
                        fontFamily: Family.semibold,
                        color: '#908BA6',
                        fontSize: 14,
                        // marginStart: 35,
                        textAlign: 'center',
                      }}>
                      Used
                    </Text>

                    <Text
                      style={{
                        fontFamily: Family.robotoBold,
                        color: '#2C2646',
                        fontSize: 33,
                        marginTop: 10,
                      }}>
                      12.9 GB
                    </Text>

                    <Text
                      style={{
                        fontFamily: Family.semibold,
                        color: '#3299DD',
                        fontSize: 14,
                        // marginStart: 10,
                        textAlign: 'center',
                      }}>
                      15 days left
                    </Text>

                    <Text
                      style={{
                        fontFamily: Family.regular,
                        color: '#908BA6',
                        fontSize: 14,
                        // marginStart: 15,
                        textAlign: 'center',
                      }}>
                      AUg 2022
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.boxStyle}>
              <View style={styles.innerbox}>
                <View style={{flexDirection: 'column'}}>
                  <View style={{flexDirection: 'row', marginStart: 10}}>
                    <Text style={styles.text1}>Current Session</Text>
                    <Text style={styles.text2}>2.39GB</Text>
                  </View>
                  <View style={{flexDirection: 'row', marginStart: 10}}>
                    <Text style={styles.text3}>21-Aug 08:49 AM</Text>
                    <Text style={styles.text4}>50 Mb/ Sec</Text>
                  </View>
                </View>
              </View>
              <HorizontalLine />

              <View style={styles.innerbox}>
                <View style={{flexDirection: 'column'}}>
                  <View style={{flexDirection: 'row', marginStart: 10}}>
                    <Text style={styles.text1}>Service Type</Text>
                    <Text style={styles.text2}>Data</Text>
                  </View>
                  <View style={{flexDirection: 'row', marginStart: 10}}>
                    <Text style={styles.text3}>FUP50MG-Data 1</Text>
                    <Text style={styles.text4}>Active</Text>
                  </View>
                </View>
              </View>
              <HorizontalLine />

              <View style={styles.innerbox}>
                <View style={{flexDirection: 'column'}}>
                  <View style={{flexDirection: 'row', marginStart: 10}}>
                    <Text style={styles.text1}>Expiry Date</Text>
                    <Text style={styles.text2}>31 Aug 2022</Text>
                  </View>
                  <View style={{flexDirection: 'row', marginStart: 10}}>
                    <Text style={styles.text3}>Current Plan</Text>
                    <Text style={styles.text4}>Active</Text>
                  </View>
                </View>
              </View>
              <HorizontalLine />

              <View style={styles.innerbox}>
                <View style={{flexDirection: 'column'}}>
                  <View style={{flexDirection: 'row', marginStart: 10}}>
                    <Text style={styles.text1}>Data available</Text>
                    <Text style={styles.text2}>100 GB</Text>
                  </View>
                  <View style={{flexDirection: 'row', marginStart: 10}}>
                    <Text style={styles.text3}>FUP50MG-Data 1</Text>
                    <Text style={styles.text4}>Active</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={{flexDirection: 'column', marginTop: 20}}>
              <Text style={styles.text5}>Avoid network interruption.</Text>

              <View style={{marginBottom: 70}}>
                <Pressable
                  onPress={() => navigation.navigate(Screens.RECHARGE)}
                  style={styles.buttonContainerStyle}>
                  <Text style={styles.buttonText}>Recharge Now</Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  innerContainer: {
    flex: 0.65,
  },

  bodyCOntainer: {
    flex: 1,
    // backgroundColor: Colors.white,
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
  },
  headerText: {
    ..._Text(FontSize.regularVariantPlus, Family.bold, Colors.white),
    paddingHorizontal: Spacing.small,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    marginLeft: 60,
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

  boxStyle: {
    width: '80%',
    // maxHeight: '80%',
    borderWidth: 2,
    borderColor: '#EAE9F0',
    borderRadius: 15,
    backgroundColor: '#FCFCFD',
    // height: '55%',
    marginStart: 20,
    marginRight: 20,
    flexDirection: 'column',
    alignSelf: 'center',
    marginTop: -20,
    paddingVertical: 10,
  },
  innerbox: {
    flexDirection: 'column',
    padding: 10,
    // backgroundColor: 'red',
  },
  text1: {
    color: '#433E5B',
    fontFamily: Family.semibold,
    fontSize: FontSize.regularVariantPlus,
    flex: 4,
    marginBottom: 10,
  },

  text2: {
    color: '#2C2646',
    fontFamily: Family.bold,
    fontSize: FontSize.regularVariantPlus,
    flex: 2.5,
    marginBottom: 10,
  },
  text3: {
    color: '#F88736',
    fontFamily: Family.dmsansRegular,
    fontSize: FontSize.smallVariantPlus,
    flex: 4,
  },
  text4: {
    color: '#31B447',
    fontFamily: Family.dmsansRegular,
    fontSize: FontSize.regularVariant,
    flex: 2.5,
  },
  text5: {
    color: '#E70889',
    fontFamily: Family.semibold,
    fontSize: FontSize.smallVariant,
    alignSelf: 'center',
  },
  buttonContainerStyle: {
    borderRadius: Rounded.smallVariant,
    backgroundColor: Colors.disablebtn,
    height: '30%',
    width: '30%',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 15,
  },
  buttonText: {
    alignItems: 'center',
    fontFamily: Family.regular,
    fontSize: FontSize.smallVariant,
    color: Colors.white,
  },
});

export default FiberView;
