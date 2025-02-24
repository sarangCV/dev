import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StatusBar} from 'react-native';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  Pressable,
  Image,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Colors from 'constants/Colors';
import {Family, FontSize} from 'constants/Fonts';
import {Spacing} from 'constants/Layout';
import {_Row, _Text} from 'styles/index';
import {scaleSize, WINDOW_WIDTH} from 'utils/index';
import Header from 'components/Header';

const ExpiringSubscriptionView = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();

  let image = require('../../../images/Home/Menu/more2.png');

  const navigateBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.wrapper}>
      <StatusBar backgroundColor={'#58074D'} barStyle="light-content" />
      {/* Header section */}
      <Header title={'Expiring Subscription'} wallet={true} />

      {/* Wrapper content */}
      <View style={styles.wrapperContent}>
        <View style={styles.categoryListWrapper}>
          <TouchableOpacity style={[styles.categoryItemWrapper]}>
            <Text
              style={{
                ...styles.categoryCount,
              }}>
              02
            </Text>
            <Image
              resizeMode="contain"
              style={styles.imageStyle}
              source={image}
            />
            <Text style={styles.expiryLabel}>Today</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.categoryItemWrapper]}>
            <Text
              style={{
                ...styles.categoryCount,
              }}>
              01
            </Text>
            <Image
              resizeMode="contain"
              style={styles.imageStyle}
              source={image}
            />
            <Text style={styles.expiryLabel}>This Week</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.categoryItemWrapper]}>
            <Text
              style={{
                ...styles.categoryCount,
              }}>
              01
            </Text>
            <Image
              resizeMode="contain"
              style={styles.imageStyle}
              source={image}
            />
            <Text style={styles.expiryLabel}>This Month</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ExpiringSubscriptionView;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  header: {
    paddingVertical: scaleSize(22),
    paddingHorizontal: Spacing.large,
    // backgroundColor: Colors.cancelBtn,
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
    // paddingHorizontal: Spacing.small,
    paddingRight: scaleSize(25),
    textAlign: 'center',
    flex: 1,
    // marginLeft: 60,
  },
  wrapperContent: {
    padding: scaleSize(16),
    flex: 1,
  },
  categoryListWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100%',
    maxHeight: 150,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 15,
    elevation: 2,
  },

  categoryItemWrapper: {
    position: 'relative',
    marginBottom: scaleSize(12),
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    width: WINDOW_WIDTH * 0.18,
  },
  categoryCount: {
    position: 'absolute',
    top: 12,
    zIndex: 999,
    fontFamily: Family.bold,
    fontSize: FontSize.mediumVariant,
    color: '#42A8C3',
  },
  imageStyle: {
    width: scaleSize(48),
    height: scaleSize(48),
  },
  expiryLabel: {
    fontFamily: Family.regular,
    fontSize: FontSize.smallVariant,
    textAlign: 'center',
    alignItems: 'center',
    color: '#515151',
    marginTop: scaleSize(6),
  },
});
