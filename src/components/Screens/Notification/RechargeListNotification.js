import OfferCard from 'components/Card/Home/OfferCard'
import {Spacing} from 'constants/Layout';
import React from 'react'
import { FlatList } from 'react-native';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import ActivityListJson from 'data/NotificationList/NewActivityListJson';
import NotificationCard from 'components/Notificaton/NotificationCardActivity';
import NotificationCardRecharge from 'components/Notificaton/NotificationCardRecharge';
import RechargeListJson from 'data/NotificationList/RechargeListJson';

const RechargeListNotification = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        data={RechargeListJson}
        vertical={true}
        renderItem={({item, index}) => (
          <NotificationCardRecharge
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
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    marginTop: Spacing.small,
    marginBottom: Spacing.smallVariant,
   
  },
});

export default RechargeListNotification;
