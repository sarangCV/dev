import {useNavigation, useRoute} from '@react-navigation/native';
import Colors from 'constants/Colors';
import {Family, FontSize} from 'constants/Fonts';
import {Rounded, Spacing} from 'constants/Layout';
import RechargeListJson from 'data/NotificationList/RechargeListJson';
import React, {useState} from 'react';
import {ScrollView, StatusBar} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  Pressable,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';
import {_Button, _Row, _Text} from 'styles/index';
import {isIOS, scaleSize, WINDOW_WIDTH} from 'utils/index';
import Input from 'components/Input';

import Screens from 'navigators/index';
import Button from 'components/Button';
import ButtonTypes from 'constants/ButtonTypes';
import ButtonSizes from 'constants/ButtonSizes';
import {TouchableOpacity} from 'react-native';

import {FlatList} from 'react-native';
import PopularCategoryList from 'data/PopularCategoryList';
import SRCard from 'components/Card/Help';
import SRCardListJson from 'data/SRCardListJson';
import DropdownPicker from 'components/Input/DropdownPicker';
import CategoryTypes from 'data/CategoryType';
import DropDownPicker from 'react-native-dropdown-picker';
import {ImageBackground} from 'react-native';
import HorizontalLine from 'components/Horizontal/HorizontalLine';
import {SafeAreaView} from 'react-native';
import Share from '../Home/Share';
import ProfileEdit_Share from 'components/ProfileEdiitShare';

const ProfileEditView = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();

  const [categoryTypeOpen, setCategoryTypeOpen] = useState(false);
  const [categoryType, setCategoryType] = useState('');
  const [categoryTypes, setCategoryTypes] = useState(CategoryTypes);
  const [categoryTypeError, setCategoryTypeError] = useState('');
  const [details, setDetails] = useState('');
  const [detailsError, setDetailsError] = useState('');

  const navigateBack = () => {
    navigation.goBack();
  };

  const doItemChange = (type, item) => {
    setCategoryType(item);
  };

  const onChangeValue = (type, text) => {
    switch (type) {
      case 'Details':
        setDetails(text);
        break;
    }
  };
  return (
    <View style={[styles.wrapper]}>
      <StatusBar backgroundColor={Colors.cancelBtn} barStyle="light-content" />
      <View style={styles.header}>
        <Pressable onPress={() => navigateBack()}>
          <FastImage
            source={require('../../../images/back.png')}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.icon}
          />
        </Pressable>
        <Text style={styles.headerText}>Profile</Text>
        <Pressable onPress={() => navigation.navigate(Screens.NOTIFICATION)}>
          <FastImage
            source={require('../../../images/Home/notification_2.png')}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.icon}
          />
        </Pressable>
      </View>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{marginBottom: 60}}>
          <View style={styles.contentStyle}>
            <View style={{flexDirection: 'column'}}>
              <View
                style={{flexDirection: 'column', marginLeft: scaleSize(20)}}>
                <View
                  style={{
                    alignItems: 'center',
                    marginBottom: 10,
                    marginTop: 20,
                  }}>
                  <ImageBackground
                    resizeMode="contain"
                    source={require('../../../images/Home/circle.png')}
                    style={styles.imgbgContainer}>
                    <View>
                      <Text style={styles.userTextStyle}>L</Text>
                    </View>
                  </ImageBackground>
                </View>

                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}>
                  <Text style={styles.headerTextStyle}>Lisa Vianio</Text>
                  <Text style={styles.headerSubTextStyle}>@Lisa</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.formContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{...styles.text1, flex: 2}}>Email</Text>
              <Pressable
                onPress={() => navigation.navigate(Screens.PROFILE_EDIT_SAVE)}>
                <FastImage
                  source={require('../../../images/profile/edit.png')}
                  resizeMode={FastImage.resizeMode.contain}
                  style={styles.icon}
                />
              </Pressable>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate(Screens.PROFILE_EDIT)}>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text style={styles.text2}>lisaviano777@gmail.com</Text>
                <TouchableOpacity style={styles.buttonContainerStyle}>
                  <Text style={styles.buttonText}>Verify</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

            <HorizontalLine />
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.text1}>Phone Number</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate(Screens.PROFILE_EDIT)}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.text2}>9787675456</Text>
                  <TouchableOpacity style={styles.buttonContainerStyle}>
                    <Text style={styles.buttonText}>Verify</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>

            <HorizontalLine />

            <View style={{flexDirection: 'column'}}>
              <Text style={styles.text1}>Address</Text>
              <TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{...styles.text2, flex: 3.5}}>
                    711 Leavenworth Apt. # 47 Kannur, CA 94109
                  </Text>
                  <View style={{flex: 2}} />
                </View>
              </TouchableOpacity>
            </View>
            <HorizontalLine />

            <View style={{flexDirection: 'column'}}>
              <Text style={styles.text1}>State</Text>
              <TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.text2}>Kerala</Text>
                </View>
              </TouchableOpacity>
            </View>
            <HorizontalLine />

            <ProfileEdit_Share />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ProfileEditView;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'column',
  },

  contentStyle: {
    flexDirection: 'column',
    padding: 10,
  },
  image: {
    alignSelf: 'center',
    width: 350,
    height: 350,
  },

  header: {
    flexDirection: 'row',
    padding: Spacing.largeVariant2,
    backgroundColor: Colors.cancelBtn,
    ..._Row,
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
    marginLeft: 90,
  },

  labelText: {
    ..._Text(FontSize.xs, Family.robotoMedium, Colors.labelTextColor),
    paddingBottom: Spacing.xs,
  },

  inputRow: {
    marginBottom: Spacing.small,
    marginTop: 20,
    padding: 10,
  },

  imgbgContainer: {
    width: WINDOW_WIDTH * 0.25,
    height: WINDOW_WIDTH * 0.25,
    alignItems: 'center',
  },

  userTextStyle: {
    fontSize: FontSize.largeVariant12,
    fontFamily: Family.semibold,
    color: Colors.white,
    textAlign: 'center',
    marginTop: 25,
  },
  headerTextStyle: {
    fontFamily: Family.robotoMedium,
    fontSize: FontSize.mediumVariant,
    color: Colors.homeBackground,
    textAlign: 'center',
  },
  headerSubTextStyle: {
    fontFamily: Family.semibold,
    fontSize: FontSize.regularVariantPlus,
    color: Colors.drawerTextGrey,
    textAlign: 'center',
  },

  formContainer: {
    flexDirection: 'column',
    marginTop: 40,
    margin: 25,
  },
  text1: {
    color: '#9CA4AB',
    fontFamily: Family.robotoMedium,
    fontSize: FontSize.regularVariant,
    marginBottom: 10,
    marginTop: 10,
    marginStart: 10,
  },
  buttonContainerStyle: {
    borderRadius: Rounded.small,
    width: scaleSize(42),
    height: scaleSize(25),
    backgroundColor: '#9CA4AB',
    flex: 0.4,
    marginEnd: 25,
  },
  buttonText: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: Family.regular,
    fontSize: FontSize.small,
    color: Colors.white,
    marginTop: 5,
  },
  text2: {
    color: '#1F2C37',
    fontFamily: Family.regular,
    fontSize: FontSize.regularVariantPlus,
    marginBottom: 10,
    marginStart: 15,
    flex: 2,
  },
});
