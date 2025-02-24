import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StatusBar} from 'react-native';
import Colors from 'constants/Colors';
import Header from 'components/Header';
import {scaleSize} from 'utils/index';
import {Family, FontSize, FontSizeModerate} from 'constants/Fonts';
import HorizontalLine from 'components/Horizontal/HorizontalLine';

const SubscriberUsageInfoView = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.statusBar} barStyle="light-content" />
      {/* Header section */}
      <Header title={'Usage'} wallet={true} />
      {/* Content */}
      <View style={styles.usageWrapper}>
        <View style={styles.boxStyle}>
          <View style={styles.innerbox}>
            <View style={{flexDirection: 'column'}}>
              <View style={{flexDirection: 'row', marginStart: 10}}>
                <Text style={styles.text1}>Current Usage</Text>
                <Text style={styles.text2}>0.0 GB</Text>
              </View>
            </View>
          </View>
          <HorizontalLine marginStyle={5} />

          <View style={styles.innerbox}>
            <View style={{flexDirection: 'column'}}>
              <View style={{flexDirection: 'row', marginStart: 10}}>
                <Text style={styles.text1}>Data Balance</Text>
                <Text style={styles.text2}>0.1 GB</Text>
              </View>
            </View>
          </View>
          <HorizontalLine marginStyle={5} />

          <View style={styles.innerbox}>
            <View style={{flexDirection: 'column'}}>
              <View style={{flexDirection: 'row', marginStart: 10}}>
                <Text style={styles.text1}>Active Booster</Text>
                <Text style={styles.text2}>Inactive</Text>
              </View>
            </View>
          </View>
          <HorizontalLine marginStyle={5} />

          <View style={styles.innerbox}>
            <View style={{flexDirection: 'column'}}>
              <View style={{flexDirection: 'row', marginStart: 10}}>
                <Text style={styles.text1}>Data Limit</Text>
                <Text style={styles.text2}>0.1 GB</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SubscriberUsageInfoView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  usageWrapper: {
    paddingTop: scaleSize(43),
    // marginBottom: scaleSize(30),
    paddingHorizontal: scaleSize(43),
    flex: 1,
    // backgroundColor: 'green',
  },
  boxStyle: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#EAE9F0',
    borderRadius: 15,
    backgroundColor: '#FCFCFD',
    flexDirection: 'column',
    paddingVertical: scaleSize(8),
  },
  innerbox: {
    flexDirection: 'column',
    padding: scaleSize(9),
    // backgroundColor: 'red',
  },
  text1: {
    color: '#433E5B',
    fontFamily: Family.semibold,
    fontSize: FontSizeModerate.regularVariant,
    flex: 4,
    marginBottom: scaleSize(10),
  },

  text2: {
    color: '#2C2646',
    fontFamily: Family.bold,
    fontSize: FontSizeModerate.regularVariant,
    flex: 2.5,
    // marginBottom: 10,
  },
});
