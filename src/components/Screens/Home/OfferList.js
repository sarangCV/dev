import OfferCard from 'components/Card/Home/OfferCard';
import {Spacing} from 'constants/Layout';
import OfferListJson from 'data/OfferListJson';
import React from 'react';
import {FlatList} from 'react-native';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';

const OfferList = ({navigation, data}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        data={OfferListJson}
        horizontal={true}
        renderItem={({item, index}) => (
          <OfferCard
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
    flex: 1,
  },
  listContainer: {
    marginTop: Spacing.small,
    marginBottom: Spacing.smallVariant,
    marginLeft: Spacing.xsVariant2,
  },
});

export default OfferList;
