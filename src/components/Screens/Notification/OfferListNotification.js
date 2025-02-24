import {Spacing} from 'constants/Layout';
import React from 'react'
import { FlatList } from 'react-native';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import NotificationCardOffers from 'components/Notificaton/NotificationCardOffers';
import OfferListJson from 'data/NotificationList/OffersListJson';


const OfferListNotification = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        data={OfferListJson}
        vertical={true}
        renderItem={({item, index}) => (
          <NotificationCardOffers
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

export default OfferListNotification;
