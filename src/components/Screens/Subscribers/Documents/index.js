import {StyleSheet, Text, View, StatusBar, Image, FlatList} from 'react-native';
import React from 'react';
import Colors from 'constants/Colors';
import Header from 'components/Header';
import {scaleSize} from 'utils/index';
import {Family, FontSize, FontSizeModerate} from 'constants/Fonts';
import HorizontalLine from 'components/Horizontal/HorizontalLine';
import NoResult from 'images/NoResult/no_result.png';
import RechargeBillCard from 'components/Card/Subscriber/RechargeBill';
import RecommendedListJson from 'data/RecommendedListJson';
import DocumentCard from 'components/Card/Subscriber/DocumentCard';

const DocumentsView = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.statusBar} barStyle="light-content" />
      {/* Header section */}
      <Header title={'Documents'} />
      {/* Content */}
      <View style={styles.section}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={RecommendedListJson}
          keyExtractor={item => item.pending_id}
          renderItem={({item, index}) => <DocumentCard />}
        />
      </View>
    </View>
  );
};

export default DocumentsView;

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
