import Colors from 'constants/Colors';
import {Family, FontSize} from 'constants/Fonts';
import {Spacing} from 'constants/Layout';
import CategoryListJson from 'data/CategoryListJson';
import React from 'react';
import {FlatList, Image, View} from 'react-native';
import {StyleSheet, KeyboardAvoidingView, Platform, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {scaleSize, WINDOW_WIDTH} from 'utils/index';
import {_Text} from 'styles/index';
import Screens from '../../../navigators';

const CategoryList = ({navigation, data}) => {
  let image;
  var count;
  let navigateTo;

  // console.log('log from catrgory===', data?.live_sub_count);
  const test = data?.live_sub_count;
  const myNumber = 0;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={CategoryListJson}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        numColumns={4}
        renderItem={({item, index}) => {
          switch (item.name) {
            case 'Live Subscriber':
              count = data?.live_sub_count;
              image = require('../../../images/Home/Menu/more2.png');
              navigateTo = null;
              break;
            case 'Active Subscriber':
              count = data?.active_sub_count;
              image = require('../../../images/Home/Menu/more2.png');
              navigateTo = null;
              break;
            case 'Open Ticket':
              count = data?.open_tickets_count;
              image = require('../../../images/Home/Menu/more2.png');
              navigateTo = null;
              break;
            case 'Pending Reviews':
              count = data?.pending_review_count;
              image = require('../../../images/Home/Menu/more2.png');
              navigateTo = null;
              break;
            case 'Expiring Subscription':
              count = data?.expiring_this_month_count;
              image = require('../../../images/Home/Menu/more2.png');
              navigateTo = () =>
                navigation.navigate(Screens.EXPIRING_SUBSCRIPTION);
              break;
            case 'Pending Enquiries':
              count = data?.expiring_this_month_count;
              image = require('../../../images/Home/Menu/more2.png');
              navigateTo = null;
              break;
            case 'More':
              image = require('../../../images/Home/Menu/more.png');
              count = null;
              navigateTo = null;
              break;
          }

          let titleColor = item.category_id % 2 ? '#42A8C3' : '#FFAC84';

          return (
            <TouchableOpacity
              style={[
                styles.categoryItemWrapper,
                {
                  marginLeft:
                    item.category_id == 1 || item.category_id == 5
                      ? 0
                      : scaleSize(13),
                  marginBottom: item.category_id >= 5 ? 0 : scaleSize(10),
                },
              ]}
              onPress={navigateTo}>
              <Text
                style={{
                  ...styles.categoryCount,
                  color: titleColor,
                }}>
                {count}
                {/* {test} */}
              </Text>
              <Image
                resizeMode="contain"
                style={styles.imageStyle}
                source={image}
              />
              <Text
                style={{
                  ..._Text(FontSize.small, Family.regular, Colors.cancelBtn),
                  textAlign: 'center',
                  alignItems: 'center',
                  color: '#515151',
                  marginTop: 5,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        //   ListFooterComponent={() => renderFooter()}
        //   onEndReachedThreshold={0}
        //   onEndReached={() => LoadMore()}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  listContainer: {
    paddingVertical: scaleSize(15),
    paddingHorizontal: scaleSize(15),
  },
  categoryItemWrapper: {
    position: 'relative',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    width: WINDOW_WIDTH / 5.7,
    // backgroundColor: 'red',
  },
  imageStyle: {
    width: scaleSize(48),
    height: scaleSize(48),
  },
  categoryCount: {
    position: 'absolute',
    top: 12,
    zIndex: 999,
    ..._Text(FontSize.regular, Family.bold, Colors.cancelBtn),
    // fontFamily: Family.bold,
    // fontSize: FontSize.regular,
  },
});

export default CategoryList;
