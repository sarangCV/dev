import PopularCard from 'components/Card/Home/PopularCard'
import {Spacing} from 'constants/Layout';
import PopularCategoryList from 'data/PopularCategoryList'
import React from 'react'
import {FlatList} from 'react-native';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';

const PopularList = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        data={PopularCategoryList}
        horizontal={true}
        renderItem={({item, index}) => (
          <PopularCard
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
    marginTop: Spacing.smallVariant,
    marginBottom: Spacing.smallVariant,
    marginStart: Spacing.xsVariant2
  },
});

export default PopularList;
