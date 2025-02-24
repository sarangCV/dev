import Colors from 'constants/Colors';
import RecommendedListJson from 'data/RecommendedListJson';
import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {scaleSize} from 'utils/index';
// import ActiveCard from 'components/Card/Subscriber/active';
import ActiveCard from '../../../components/Card/Subscriber/Active';
import {useSelector} from 'react-redux';
import {subscriberSelector} from 'features/Subscribers/SubscriberSlice';

const ActiveSubscribers = ({navigation}) => {
  // From subscriber reducer
  const {subscriberListData} = useSelector(subscriberSelector);

  return (
    <View>
      <View style={styles.section}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={subscriberListData.active_subscribers}
          keyExtractor={item => item.pending_id}
          renderItem={({item, index}) => (
            <ActiveCard
              data={item}
              // goToDetails={() => goToDetails(item)}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  section: {
    paddingTop: scaleSize(20),
    // marginBottom: scaleSize(30),
    paddingHorizontal: scaleSize(20),
    backgroundColor: Colors.white,
  },
});

export default ActiveSubscribers;
