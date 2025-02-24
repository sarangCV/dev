import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ListItem} from '@rneui/themed';

import Colors from 'constants/Colors';
import Header from 'components/Header';
import {
  gridWidth,
  gridWidth2,
  moderateScale,
  scaleSize,
  WINDOW_WIDTH,
} from 'utils/index';
import {Family, FontSize, FontSizeModerate} from 'constants/Fonts';
// Importing images
import userImage from 'images/subscribers/user.png';
import threeDots from 'images/subscribers/three_dots.png';
import dateIcon from 'images/subscribers/date.png';
import online from 'images/subscribers/online.png';
import enquiry from 'images/lco/enquiry.png';
import plan_details from 'images/lco/plan_details.png';
import ticket from 'images/lco/ticket.png';
import receipt from 'images/lco/receipt.png';
import hwDetails from 'images/subscribers/hw_details.png';

import bg_2 from 'images/subscribers/create/bg_2.png';

import {Rounded, Spacing} from 'constants/Layout';
import {useNavigation, useRoute} from '@react-navigation/native';
import {OtpInput} from 'react-native-otp-entry';
import AccentButtonTwo from 'components/Button/AccentButtonTwo';
import Screens from 'navigators/index';
import {ScrollView} from 'react-native';
import {KeyboardAvoidingView} from 'react-native';
import {verificationStyle as verifyStyles} from 'styles';

const LcoInfoView = () => {
  const [expanded, setExpanded] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();

  const {mobileVerified, slug} = route.params;

  const subInfoData = [
    {
      id: 1,
      title: 'Feasibility',
      image: enquiry,
      navigateTo: () =>
        navigation.navigate(Screens.LCO_FEASIBILITY, {lcoSlug: slug}),
    },
    {
      id: 2,
      title: 'Plan Details',
      image: plan_details,
      navigateTo: () => navigation.navigate(Screens.RECHARGE_BILLS),
    },
    {
      id: 3,
      title: 'Ticket',
      image: ticket,
      navigateTo: () => navigation.navigate(Screens.OTHER_BILLS),
    },
    {
      id: 4,
      title: 'Receipt',
      image: receipt,
      navigateTo: () => navigation.navigate(Screens.CREATE_RECEIPT),
    },
  ];

  const renderSubInfo = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.infoSingleWrapper}
        onPress={item.navigateTo}>
        <Image style={styles.infoIco} source={item.image} />
        <Text style={styles.infoText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.statusBar} barStyle="light-content" />
      {/* Header section */}
      <Header title={'Lco Info'} wallet={true} />
      {/* Content */}
      {mobileVerified ? (
        <View style={styles.infoWrapper}>
          {/* More info section */}
          <View style={styles.moreInfoWrapper}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={subInfoData}
              renderItem={renderSubInfo}
              numColumns={2}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              // TODO: Header component of Flatlist
              ListHeaderComponent={
                <>
                  {/* Subscriber info top section */}
                  <View style={styles.innerWrapperTop}>
                    <View style={styles.detailsWrapper}>
                      <View style={styles.profileImageWrapper}>
                        <Image style={styles.profileImage} source={userImage} />
                      </View>
                      <View style={styles.userDetailWrapper}>
                        <View style={styles.userNameWrapper}>
                          <Text style={styles.userText}>Ranjith M</Text>
                          <Image
                            source={online}
                            style={styles.userOnlineIcon}
                          />
                        </View>
                        <Text style={styles.userSubText}>3243534523533</Text>
                      </View>
                    </View>
                    <View style={styles.actionWrapper}>
                      <View style={styles.threeDotsWrapper}>
                        <Image style={styles.threeDots} source={threeDots} />
                      </View>
                      <TouchableOpacity style={styles.activeWrapper}>
                        <Text style={styles.activeText}>Active</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  {/* Current plan section */}
                  <View style={styles.currentPlanWrapper}>
                    <View style={styles.currentPlanTopWrapper}>
                      <View style={styles.topWrapperHalf}>
                        <Text style={styles.currentPlanText}>Current Plan</Text>
                        <View style={styles.expirydateWrapper}>
                          <Image source={dateIcon} style={styles.date} />
                          <Text style={styles.expiryDateLabel}>
                            Expiry Date
                          </Text>
                          <Text style={styles.expiryDate}>11-10-2022</Text>
                        </View>
                      </View>
                      <View style={styles.topWrapperHalf}>
                        <View style={styles.currentPlanActionWrapper}>
                          <View style={styles.currentPlanthreeDotsWrapper}>
                            <Image
                              style={styles.threeDots}
                              source={threeDots}
                            />
                          </View>
                          <TouchableOpacity style={styles.flashAction}>
                            <Text style={styles.flashText}>FLASH+</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                    <View style={styles.currentPlanBottomWrapper}>
                      <View style={styles.bottomTextWrapper}>
                        <Text
                          style={
                            styles.bottomTextSub
                          }>{`${'\u20B9'} Renewal Fee`}</Text>
                        <Text style={styles.bottomTextRate}>2377.00</Text>
                      </View>
                      <View style={styles.bottomActionWrapper}>
                        <View style={styles.bottomActionLeft}>
                          <TouchableOpacity style={styles.bottomAction}>
                            <Text style={styles.bottomActionText}>
                              Change Plan
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.bottomAction}>
                            <Text style={styles.bottomActionText}>
                              Recharge Now
                            </Text>
                          </TouchableOpacity>
                        </View>
                        <View style={styles.bottomActionRight}>
                          <ListItem.Accordion
                            style={{
                              // backgroundColor: '#F4F6F9',
                              // height: 0,
                              position: 'absolute',
                              right: scaleSize(-17),
                              bottom: scaleSize(-10),
                            }}
                            containerStyle={{
                              height: 50,
                              backgroundColor: '#F4F6F9',
                              alignItems: 'flex-end',
                              borderRadius: scaleSize(10),
                            }}
                            content={null}
                            isExpanded={expanded}
                            onPress={() => {
                              setExpanded(!expanded);
                            }}
                          />
                        </View>
                      </View>
                    </View>
                  </View>

                  {/* Accordion content section */}
                  <ListItem.Accordion
                    style={{height: 0}}
                    isExpanded={expanded}
                    noIcon>
                    <View style={styles.accordionContentWrapper}>
                      <View style={styles.accordionContentRow}>
                        <Text style={styles.accordionLabel}>
                          Primary Email :
                        </Text>
                        <Text style={styles.accordionText}>
                          ransmexmy@gmail.com
                        </Text>
                      </View>
                      <View style={styles.accordionContentRow}>
                        <Text style={styles.accordionLabel}>Mobile :</Text>
                        <Text style={styles.accordionText}>8848457643</Text>
                      </View>
                      <View style={styles.accordionContentRow}>
                        <Text style={styles.accordionLabel}>
                          Installation Address :
                        </Text>
                        <Text style={styles.accordionText}>
                          aslkdfnn adfvnmk;l
                        </Text>
                      </View>
                      <View style={styles.accordionContentRow}>
                        <Text style={styles.accordionLabel}>
                          Installation Address Pincode :
                        </Text>
                        <Text style={styles.accordionText}>679322</Text>
                      </View>
                      <View style={styles.accordionContentRow}>
                        <Text style={styles.accordionLabel}>
                          Installation Address Pincode :
                        </Text>
                        <Text style={styles.accordionText}>
                          aslkdfnn adfvnmk;l
                        </Text>
                      </View>
                      <View style={styles.accordionContentRow}>
                        <Text style={styles.accordionLabel}>
                          Billing Address Pincode :
                        </Text>
                        <Text style={styles.accordionText}>679322</Text>
                      </View>
                      <View style={styles.accordionContentRow}>
                        <Text style={styles.accordionLabel}>Net ID :</Text>
                        <Text style={styles.accordionText}>
                          3209007000500003
                        </Text>
                      </View>
                      <TouchableOpacity style={styles.accordionContentButton}>
                        <Text style={styles.accordionContentButtonText}>
                          Deactivate
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </ListItem.Accordion>
                </>
              }
              // TODO: Footer component of Flatlist
              ListFooterComponent={
                <View style={styles.buttonWrapper}>
                  <Pressable
                    style={styles.submitButton}
                    onPress={() =>
                      navigation.navigate(Screens.SUBSCRIBERUSAGE)
                    }>
                    <Text style={styles.buttonText}>View Usage</Text>
                  </Pressable>
                </View>
              }
            />
          </View>
        </View>
      ) : (
        <ScrollView>
          <KeyboardAvoidingView behavior="position">
            {/* <ScrollView> */}
            <View style={verifyStyles.bgWrapper}>
              <Image style={verifyStyles.bg} source={bg_2} />
            </View>
            <View style={verifyStyles.body}>
              <View style={verifyStyles.layoutBg}></View>
              <View style={verifyStyles.content}>
                <View style={verifyStyles.titleWrapper}>
                  <Text style={verifyStyles.title}>Verify Phone Number</Text>
                  <Text style={verifyStyles.description}>
                    Loren ipsun dolor sit anet, consectetur adipisci elit, sed
                    eiusnod tenpor incidunt ut labore et dolore nagna aliqua.{' '}
                  </Text>
                </View>

                <View style={verifyStyles.inputWrapper}>
                  <View>
                    <OtpInput
                      numberOfDigits={6}
                      focusColor={Colors.button}
                      focusStickBlinkingDuration={500}
                      onTextChange={text => console.log(text)}
                      onFilled={text => console.log(`OTP is ${text}`)}
                      theme={{
                        containerStyle: {marginTop: scaleSize(5)},
                        inputsContainerStyle: verifyStyles.inputsContainer,
                        pinCodeContainerStyle: {
                          height: 45,
                          width: scaleSize(40),
                          borderRadius: 8,
                        },
                      }}
                    />
                    <View style={verifyStyles.resendWrapper}>
                      <Text style={verifyStyles.resendLabel}>
                        Didn’t receive code?
                      </Text>
                      <TouchableOpacity>
                        <Text style={verifyStyles.resendText}>Resend</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    marginTop: scaleSize(50),
                  }}>
                  <AccentButtonTwo
                    title={'Verify'}
                    onPress={() =>
                      navigation.navigate(
                        Screens.SUBSCRIBER_VERIFICATION_SUCCESS,
                      )
                    }
                  />
                </View>
              </View>
            </View>
            {/* </ScrollView> */}
          </KeyboardAvoidingView>
        </ScrollView>
      )}
    </View>
  );
};

export default LcoInfoView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  infoWrapper: {
    paddingTop: scaleSize(15),
    // marginBottom: scaleSize(30),
    paddingHorizontal: scaleSize(20),
    flex: 1,
  },
  innerWrapperTop: {
    flexDirection: 'row',
    backgroundColor: '#F4F6F9',
    borderRadius: scaleSize(10),
    paddingTop: scaleSize(16),
    paddingBottom: scaleSize(14),
    paddingHorizontal: scaleSize(16),
    marginBottom: 10,
  },
  detailsWrapper: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    flex: 3,
  },
  profileImageWrapper: {
    marginRight: scaleSize(15),
  },
  profileImage: {height: scaleSize(50), width: scaleSize(50)},
  userDetailWrapper: {
    justifyContent: 'center',
  },
  userNameWrapper: {
    flexDirection: 'row',
    marginBottom: scaleSize(5),
    alignItems: 'center',
  },
  userText: {
    fontFamily: Family.semibold,
    fontSize: FontSize.regular,
    color: Colors.userText,
    marginRight: scaleSize(3),
  },
  userSubText: {
    color: Colors.userSubText,
    fontFamily: Family.semibold,
    fontSize: FontSize.xs,
  },
  userOnlineIcon: {
    height: scaleSize(6),
    width: scaleSize(6),
  },
  actionWrapper: {
    flex: 1,
    // backgroundColor: 'green',
    alignItems: 'flex-end',
  },
  threeDots: {
    height: scaleSize(16),
    width: scaleSize(16),
  },
  activeWrapper: {
    paddingHorizontal: scaleSize(12),
    paddingVertical: scaleSize(3),
    marginTop: scaleSize(14),
    backgroundColor: '#31B447',
    borderRadius: 14,
  },
  activeText: {
    fontFamily: Family.semibold,
    fontSize: FontSize.small,
    color: Colors.white,
  },
  currentPlanWrapper: {
    borderRadius: scaleSize(10),
    paddingBottom: scaleSize(10),
  },
  currentPlanTopWrapper: {
    flexDirection: 'row',
    paddingHorizontal: scaleSize(16),
    paddingTop: scaleSize(8),
    paddingBottom: scaleSize(23),
    backgroundColor: '#F4F6F9',
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderTopRightRadius: scaleSize(10),
    borderTopLeftRadius: scaleSize(10),
  },
  topWrapperHalf: {
    flex: 1,
  },
  currentPlanText: {
    paddingTop: scaleSize(10),
    fontFamily: Family.semibold,
    fontSize: FontSize.regular,
    color: Colors.userText,
  },

  expirydateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scaleSize(4),
  },
  expiryDateLabel: {
    fontFamily: Family.regular,
    fontSize: FontSize.small,
    color: Colors.userText,
    paddingRight: scaleSize(2),
  },
  expiryDate: {
    fontFamily: Family.semibold,
    fontSize: FontSize.xs,
    color: Colors.userText,
  },
  date: {
    height: scaleSize(14),
    width: scaleSize(14),
    marginRight: scaleSize(4),
  },
  currentPlanActionWrapper: {alignItems: 'flex-end'},
  currentPlanthreeDotsWrapper: {},
  flashAction: {
    paddingVertical: scaleSize(3),
    paddingHorizontal: scaleSize(6),
    backgroundColor: Colors.white,
    borderRadius: 5,
    marginTop: scaleSize(15),
  },
  flashText: {
    fontFamily: Family.regular,
    fontSize: FontSize.smallVariant,
    color: Colors.userText,
  },

  currentPlanBottomWrapper: {
    paddingHorizontal: scaleSize(16),
    backgroundColor: '#F4F6F9',
    borderBottomColor: '#DCDCDC',
    borderBottomRightRadius: scaleSize(10),
    borderBottomLeftRadius: scaleSize(10),
  },
  bottomTextWrapper: {
    paddingTop: scaleSize(16),
    paddingBottom: scaleSize(20),
    flexDirection: 'row',
  },
  bottomTextSub: {
    fontFamily: Family.regular,
    fontSize: FontSize.small,
    color: Colors.userText,
  },
  bottomTextRate: {
    color: Colors.userText,
    fontFamily: Family.bold,
    fontSize: FontSize.small,
    marginLeft: scaleSize(5),
  },
  bottomActionWrapper: {
    flexDirection: 'row',
    paddingBottom: scaleSize(10),
  },
  bottomActionLeft: {
    flex: 2,
    flexDirection: 'row',
  },
  bottomActionRight: {
    flex: 1,
    position: 'relative',
  },
  bottomAction: {
    paddingVertical: scaleSize(3),
    paddingHorizontal: scaleSize(6),
    backgroundColor: Colors.white,
    borderRadius: 5,
    marginRight: scaleSize(10),
  },
  bottomActionText: {
    color: Colors.cancelBtn,
    fontFamily: Family.bold,
    fontSize: FontSize.small,
  },
  moreInfoWrapper: {
    flex: 1,
  },
  infoSingleWrapper: {
    width: WINDOW_WIDTH * 0.43,
    paddingVertical: scaleSize(24),
    alignItems: 'center',
    justifyContent: 'center',
    // height: 100,
    // marginRight: 2,
    borderWidth: 1,
    borderRadius: 16,
    marginBottom: scaleSize(12),
    borderColor: '#E3E9ED',
  },

  infoIco: {
    height: 48,
    width: 48,
  },
  infoText: {
    color: '#1F2C37',
    paddingTop: scaleSize(11),
    fontSize: FontSizeModerate.smallVariantPlus,
    fontFamily: Family.semibold,
  },

  // TODO: Button style
  buttonWrapper: {
    // marginBottom: Spacing.regular,
    backgroundColor: '#2A2F82',
    borderRadius: Rounded.smallVariant,
    marginTop: scaleSize(25),
  },
  submitButton: {
    paddingVertical: scaleSize(12),
    color: Colors.white,
    fontFamily: Family.bold,
    fontSize: FontSizeModerate.regularVariant,
    // height: '30%',
  },
  buttonText: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: Family.bold,
    fontSize: FontSize.regular,
    color: Colors.white,
  },

  // TODO: Accordion
  accordionContentWrapper: {
    backgroundColor: '#F4F6F9',
    paddingHorizontal: scaleSize(14),
    paddingVertical: scaleSize(17),
    marginBottom: scaleSize(10),
    borderRadius: scaleSize(10),
  },
  accordionContentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: scaleSize(13),
  },
  accordionLabel: {
    fontFamily: Family.regular,
    fontSize: moderateScale(12),
    color: Colors.userText,
  },
  accordionText: {
    fontFamily: Family.semibold,
    fontSize: moderateScale(12),
    color: Colors.userText,
  },
  accordionContentButton: {
    paddingVertical: scaleSize(3),
    paddingHorizontal: scaleSize(12),
    backgroundColor: '#F43030',
    borderRadius: scaleSize(5),
    alignSelf: 'flex-end',
    marginTop: scaleSize(19),
  },
  accordionContentButtonText: {
    fontFamily: Family.semibold,
    fontSize: FontSizeModerate.xs,
    color: Colors.white,
  },
});
