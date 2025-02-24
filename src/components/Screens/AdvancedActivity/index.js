import {useNavigation, useRoute} from '@react-navigation/native';
import Colors from 'constants/Colors';
import {Family, FontSize} from 'constants/Fonts';
import {Spacing} from 'constants/Layout';
import RechargeListJson from 'data/NotificationList/RechargeListJson';
import React from 'react';
import {ScrollView, StatusBar} from 'react-native';
import {
  StyleSheet,
  KeyboardAwareScrollView,
  FlatList,
  View,
  Text,
  Pressable,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';
import {_Row, _Text} from 'styles/index';
import {scaleSize, WINDOW_WIDTH} from 'utils/index';
import Screens from 'navigators/index';
import GridViewItems from 'data/GridviewItem';
import MenuCard from 'components/AdvancedPolicy/index.js';
import {exitAlert} from 'utils/AndroidBackHandler.js';
import {useState} from 'react';

const AdvancedActivityView = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const [gridViewItems, setGridViewItems] = useState(GridViewItems);

  const navigateBack = () => {
    navigation.goBack();
  };

  const goToDetails = item => {
    switch (item.key) {
      case 'Recharge':
        return navigation.navigate(Screens.ADVANCEDRECHARGE);
      case 'Credit and data':
        return;
      case 'Bill payment':
        return;
      case 'Donation':
        return;
      case 'Reload':
        return;
      default:
        return;
    }
  };

  return (
    <View style={styles.wrapper}>
      <StatusBar backgroundColor={Colors.cancelBtn} barStyle="light-content" />
      <View style={styles.header}>
        <Pressable onPress={() => navigateBack()}>
          <FastImage
            source={require('../../../images/back.png')}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.icon}
          />
        </Pressable>
        <Text style={styles.headerText}>Advanced Activity</Text>
        <Pressable onPress={() => navigation.navigate(Screens.NOTIFICATION)}>
          <FastImage
            source={require('../../../images/Home/notification_2.png')}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.icon}
          />
        </Pressable>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <View style={styles.section}>
            <FlatList
              data={GridViewItems}
              keyExtractor={item => item.key}
              numColumns={2}
              renderItem={({item, index}) => (
                <MenuCard item={item} goToDetails={() => goToDetails(item)} />
              )}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AdvancedActivityView;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.white,
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
    marginLeft: 50,
  },
  wrapperContent: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'column',
    margin: scaleSize(25),
  },
  section: {
    padding: 5,
  },
});
