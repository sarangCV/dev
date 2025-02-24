import {StyleSheet, Text, View, StatusBar, Image, FlatList} from 'react-native';
import React from 'react';
import Colors from 'constants/Colors';
import Header from 'components/Header';
import {scaleSize} from 'utils/index';
import {Family, FontSize, FontSizeModerate} from 'constants/Fonts';
import HorizontalLine from 'components/Horizontal/HorizontalLine';
import NoResult from 'images/NoResult/no_result.png';
import DocumentCard from 'components/Card/Subscriber/DocumentCard';
import OtherBillsCard from 'components/Card/Subscriber/OtherBillsCard';
import RecommendedListJson from 'data/RecommendedListJson';

const OtherBillsView = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.statusBar} barStyle="light-content" />
      {/* Header section */}
      <Header title={'Other Bills'} />
      {/* Content */}
      <View style={styles.section}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={RecommendedListJson}
          keyExtractor={item => item.pending_id}
          renderItem={({item, index}) => <OtherBillsCard />}
        />
      </View>
    </View>
  );
};

export default OtherBillsView;

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
