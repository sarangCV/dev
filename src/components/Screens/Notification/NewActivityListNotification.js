import OfferCard from 'components/Card/Home/OfferCard';
import {Spacing} from 'constants/Layout';
import React from 'react';
import {FlatList} from 'react-native';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import ActivityListJson from 'data/NotificationList/NewActivityListJson';
import NotificationCardActivity from 'components/Notificaton/NotificationCardActivity';

const NewActivityListNotification = ({item, time, itemIndex, doAction}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        data={ActivityListJson}
        vertical={true}
        renderItem={({item, index}) => (
          <NotificationCardActivity
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
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  listContainer: {
    marginTop: Spacing.small,
    marginBottom: Spacing.smallVariant,
  },
});

export default NewActivityListNotification;
