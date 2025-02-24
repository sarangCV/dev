import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  StatusBar,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import Colors from 'constants/Colors';
import Header from 'components/Header';
import {scaleSize} from 'utils/index';

// Importing images
import userImage from 'images/subscribers/user.png';
import online from 'images/subscribers/online.png';
import enquiry from 'images/lco/enquiry.png';
import plan_details from 'images/lco/plan_details.png';
import ticket from 'images/lco/ticket.png';
import receipt from 'images/lco/receipt.png';
import date from 'images/subscribers/date.png';

import {useNavigation, useRoute} from '@react-navigation/native';
import Screens from 'navigators/index';
import {_Text, commonStyles} from 'styles/index';
import {Family, FontSize} from 'constants/Fonts';
import DropdownPicker from 'components/Input/DropdownPicker';
import Input from 'components/Input';
import AccentButtonTwo from 'components/Button/AccentButtonTwo';

const FeasibilityInfoView = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [centerOpen, setCenterOpen] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();

  const {mobileVerified} = route.params;

  const country = [
    {name: 'India', slug: 'india'},
    {name: 'China', slug: 'china'},
  ];

  // On change value of drop down
  const dropDownChange = (type, item) => {
    console.log(type, item);
    setSelectedCountry(item);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.statusBar} barStyle="light-content" />
      {/* Header section */}
      <Header title={'Feasibility'} wallet={true} />
      {/* Content */}
      <ScrollView
        style={styles.infoWrapper}
        contentContainerStyle={{
          paddingBottom: scaleSize(50),
        }}>
        {/* <View
            style={{
              backgroundColor: '#F4F6F9',
              marginBottom: 10,
              borderRadius: scaleSize(10),
            }}
            onPress={() =>
              navigation.navigate(Screens.LCO_ENQUIRY_INFO, {
                mobileVerified: true,
              })
            }> */}
        {/* Card top section */}
        {/* <View
              style={{...styles.innerWrapperTop, flexDirection: 'column'}}></View> */}
        {/* Card bottom section */}
        {/* <View style={{...styles.innerWrapperBottom}}>
              <View style={styles.expirydateWrapper}>
                <Image source={date} style={styles.date} />
                <Text style={styles.expiryDateLabel}>Registered Date -Time</Text>
                <Text style={styles.expiryDate}> 11-10-2022 11:11:19</Text>
              </View>
            </View> */}
        {/* </View> */}

        <View
          style={{
            backgroundColor: '#F4F6F9',
            marginBottom: 10,
            borderRadius: scaleSize(10),
          }}>
          {/* Card top section */}
          <View style={styles.innerWrapperTop}>
            <View style={styles.detailsWrapper}>
              <View style={styles.profileImageWrapper}>
                <Image style={styles.profileImage} source={userImage} />
              </View>
              <View style={styles.userDetailWrapper}>
                <View style={styles.userNameWrapper}>
                  <Text style={styles.userText}>Feasibility 1</Text>
                  {/* <Image source={online} style={styles.userOnlineIcon} /> */}
                </View>
                <Text style={styles.userSubText}>3243534523533</Text>
              </View>
            </View>
          </View>
          <View style={{...styles.innerWrapperBottom}}>
            <View style={{...styles.section}}>
              <View style={[commonStyles.row_top, commonStyles.marg_bt_10]}>
                <Text style={styles.label}>Name</Text>
                <Text style={styles.value}>Amal Rose</Text>
              </View>
              <View style={commonStyles.row_top}>
                <Text style={styles.label}>Pin Code</Text>
                <Text style={styles.value}> 670631</Text>
              </View>
            </View>
            <View
              style={{
                ...styles.section,
                paddingRight: scaleSize(10),
                flex: 1.3,
              }}>
              <View style={{...commonStyles.row_top}}>
                <Text style={styles.label}>Email</Text>
                <Text style={styles.value}>amalrose@gmail.com</Text>
              </View>
            </View>
          </View>
        </View>
        {/* More info */}
        <View
          style={{
            backgroundColor: '#F4F6F9',
            marginBottom: 10,
            borderRadius: scaleSize(10),
          }}>
          {/* Card top section */}
          <View style={styles.innerWrapperTop}>
            <View style={{...styles.section, flex: 1.5}}>
              <View style={[commonStyles.row_top, commonStyles.marg_bt_10]}>
                <Text style={styles.label}>State</Text>
                <Text style={styles.value}>Kerala</Text>
              </View>
              <View style={commonStyles.row_top}>
                <Text style={styles.label}>Center</Text>
                <Text style={styles.value}> Sreekandapuram</Text>
              </View>
              <View style={{...commonStyles.row_top, marginRight: 10}}>
                <Text style={styles.label}>Address</Text>
                <Text style={styles.value}>Sreekandapuram,Kannur,Kerala</Text>
              </View>
            </View>
            <View
              style={{
                ...styles.section,
                paddingLeft: scaleSize(10),
                // paddingRight: 20,
              }}>
              <View style={{...commonStyles.row_top}}>
                <Text style={styles.label}>District</Text>
                <Text style={styles.value}>Kannur</Text>
              </View>
              <View style={commonStyles.row_top}>
                <Text style={styles.label}>Pincode</Text>
                <Text style={styles.value}>670631</Text>
              </View>
            </View>
          </View>

          <View style={{...styles.innerWrapperBottom}}>
            <View style={styles.expirydateWrapper}>
              <Text style={styles.expiryDateLabel}>Registered Date -Time</Text>
              <Text style={styles.expiryDate}> 11-10-2022 11:11:19</Text>
            </View>
          </View>
        </View>
        {/* description */}
        <View
          style={{
            backgroundColor: '#F4F6F9',
            marginBottom: 10,
            borderRadius: scaleSize(10),
            padding: scaleSize(15),
          }}>
          <Text style={styles.queries}>Queries</Text>
          <Text style={styles.queriesDscription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare
            quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien,
            consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam
            est, amet aliquet ut vivamus. Odio vulputate est id tincidunt
            fames.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
            ornare quam vel facilisis feugiat amet sagittis arcu, tortor.
            Sapien, consequat ultrices{' '}
          </Text>
        </View>
        {/* Status */}
        <View>
          <Text style={styles.dobLabel}>Change Status</Text>

          <DropdownPicker
            schema={{
              label: 'name',
              value: 'slug',
            }}
            isOpen={centerOpen}
            disabled={false}
            value={selectedCountry}
            defaultValue={selectedCountry}
            items={country}
            // setItems={setCountryList}
            setOpen={setCenterOpen}
            setValue={setSelectedCountry}
            type="enquiryType"
            placeHolder="Not Feasible"
            dropDownMaxHeight={1000}
            // error={''}
            direction="TOP"
            showIcon={true}
            changeItem={dropDownChange}
            // dropDownItemSelected={(value, type = 'district') =>
            //   dropDownItemSelected(value, type)
            // }
            // onPress={(value, type = 'district') =>
            //   dropDownPressed(type)
            // }
          />
        </View>
        {/* Remarks */}
        <View style={{marginTop: scaleSize(10)}}>
          <View style={styles.inputWrapper}>
            <Input
              label="Remarks"
              placeholder={''}
              labelColor={Colors.label2}
              // doAction={text => onChangeValue('pincode', text)}
              //   value={''}
              multiline={true}
              error={''}
              readonly={false}
              bgColor={'#fff'}
              height={65}
              style={{textAlignVertical: 'top'}}
            />
          </View>
        </View>
        <View style={styles.actionWrapper}>
          <AccentButtonTwo title={'Update'} />
        </View>
      </ScrollView>
    </View>
  );
};

export default FeasibilityInfoView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  infoWrapper: {
    paddingTop: scaleSize(15),
    paddingHorizontal: scaleSize(20),
    flex: 1,
  },

  innerWrapperTop: {
    flexDirection: 'row',
    paddingTop: scaleSize(16),
    paddingBottom: scaleSize(14),
    paddingHorizontal: scaleSize(16),
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
  enquiryDetailsWrapper: {
    flexDirection: 'row',
    paddingTop: scaleSize(15),
    flex: 1,
  },
  section: {
    flex: 1,
  },
  label: {
    ..._Text(FontSize.smallVariant, Family.regular, Colors.userText),
    // flex: 1,
    // backgroundColor: 'red',
  },
  value: {
    ..._Text(FontSize.smallVariant, Family.semibold, Colors.userText),
    marginLeft: scaleSize(3),
    flex: 1.4,
  },
  innerWrapperBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: scaleSize(14),
    paddingHorizontal: scaleSize(12),
    borderTopWidth: 1,
    borderTopColor: '#DCDCDC',
    borderStyle: 'dashed',
    // backgroundColor: 'red',
  },
  expirydateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
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
  queries: {
    ..._Text(FontSize.regularVariantPlus, Family.semibold, Colors.userText),
    marginBottom: scaleSize(10),
  },
  queriesDscription: {
    ..._Text(FontSize.smallVariant, Family.regular, Colors.userText),
  },
  dobLabel: {
    ..._Text(FontSize.smallVariant, Family.regular, Colors.label2),
    marginBottom: scaleSize(5),
  },
  actionWrapper: {
    marginTop: scaleSize(50),
  },
});
