import Colors from 'constants/Colors';
import CompletedListJson from 'data/BillCompletedJson';
import RecommendedListJson from 'data/RecommendedListJson';
import Screens from 'navigators/index';
import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {scaleSize} from 'utils/index';
// import LiveCard from 'components/Card/Subscriber/live';
import LiveCard from '../../../components/Card/Subscriber/Live';
import {useSelector} from 'react-redux';
import {subscriberSelector} from 'features/Subscribers/SubscriberSlice';

const LiveSubscribers = ({navigation}) => {
  // From subscriber reducer
  const {subscriberListData} = useSelector(subscriberSelector);

  return (
    <View>
      <View style={styles.section}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={subscriberListData?.live_subscribers}
          keyExtractor={item => item.pending_id}
          renderItem={({item, index}) => <LiveCard data={item} />}
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

export default LiveSubscribers;
