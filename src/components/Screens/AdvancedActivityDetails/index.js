import {useNavigation, useRoute} from '@react-navigation/native';
import Colors from 'constants/Colors';
import { Family, FontSize } from 'constants/Fonts'
import { Spacing } from 'constants/Layout'
import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native'
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';
import { _Row, _Text } from 'styles/index'
import { scaleSize, WINDOW_WIDTH } from 'utils/index'
import Screens from 'navigators/index';
import { FlatList } from 'react-native';
import RechargeItem from 'data/AdvancedRechargeItem';
import RechargeCard from 'components/AdvancedActivityDetails/Recharge';

const RechargeListView = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const route = useRoute()
  const [rechargeItem, setRechargeItem] = useState(RechargeItem)

  const navigateBack = () => {
    navigation.goBack()
  }

  const renderFooter = () => {
    return null
  }

  // const LoadMore = () => {
  //   if (rechargeListData.data.length >= 8) {
  //     setPageNumber(pageNumber + 1)
  //   }
  // }


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
        <Text style={styles.headerText}>Advanced Recharge</Text>
        <Pressable onPress={() => navigation.navigate(Screens.NOTIFICATION)}>
          <FastImage
            source={require('../../../images/Home/notification_2.png')}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.icon}
          />
        </Pressable>
      </View>
       <View style={{marginBottom:80}}>
       <FlatList
          contentContainerStyle={styles.listContainer}
          data={RechargeItem}
          renderItem={({ item, index }) => (
            <RechargeCard
              item={item}
              itemIndex={index}
              //doAction={() => gotoRechargeDetailView(item)}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          ListFooterComponent={() => renderFooter()}
          onEndReachedThreshold={0}
          // onEndReached={() => LoadMore()}
        />
       </View>
    </View>
  )
}

export default RechargeListView;

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
    ..._Text(FontSize.medium, Family.bold, Colors.white),
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
});
