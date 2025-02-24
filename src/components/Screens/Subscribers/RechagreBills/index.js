import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import {StatusBar} from 'react-native';
import Header from 'components/Header';
import Colors from 'constants/Colors';
import {scaleSize} from 'utils/index';
import RecommendedListJson from 'data/RecommendedListJson';
import RechargeBillCard from 'components/Card/Subscriber/RechargeBill';

const RechargeBillsView = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.statusBar} barStyle="light-content" />
      {/* Header section */}
      <Header title={'Recharge Bills'} />
      <View style={styles.section}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={RecommendedListJson}
          keyExtractor={item => item.pending_id}
          renderItem={({item, index}) => <RechargeBillCard />}
        />
      </View>
    </View>
  );
};

export default RechargeBillsView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  section: {
    paddingTop: scaleSize(20),
    // marginBottom: scaleSize(30),
    paddingHorizontal: scaleSize(20),
    paddingBottom: scaleSize(80),
  },
});
