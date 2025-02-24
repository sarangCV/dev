import Colors from 'constants/Colors';
import CompletedListJson from 'data/BillCompletedJson';
import RecommendedListJson from 'data/RecommendedListJson';
import Screens from 'navigators/index';
import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {scaleSize} from 'utils/index';
// import LiveCard from 'components/Card/Subscriber/live';
import LcoEnquiryCard from 'components/Card/Lco/LcoEnquiryCard';
import {feasibilitySelector} from 'features/Feasibilty/FeasibilitySlice';
import {useSelector} from 'react-redux';

const PendingEnquiry = ({navigation}) => {
  const {
    fetching,
    feasibilityListSuccess,
    feasibilityListData,
    feasibilityListError,
    feasibilityListErrorMessage,
  } = useSelector(feasibilitySelector);
  // console.log('FROM ==============', feasibilityListData);

  return (
    <View>
      <View style={styles.section}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={feasibilityListData}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => <LcoEnquiryCard item={item} />}
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

export default PendingEnquiry;
