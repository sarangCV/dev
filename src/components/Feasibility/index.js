import LcoCard from 'components/Card/Lco/LcoCard';
import Colors from 'constants/Colors';
import RecommendedListJson from 'data/RecommendedListJson';
import Screens from 'navigators/index';
import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {scaleSize} from 'utils/index';
import searchIcon from 'images/subscribers/search.png';
import FeasibilityCard from 'components/Card/Feasibility/FeasibilityCard';
import {_Text} from 'styles/index';
import {Family, FontSize} from 'constants/Fonts';
import {useNavigation} from '@react-navigation/native';

const Feasibility = () => {
  const navigation = useNavigation();

  const fabHandler = () => {
    navigation.navigate(Screens.CREATE_SUBSCRIBER);
  };
  return (
    <View>
      <View style={styles.section}>
        {/* <View style={styles.filterWrapper}>
          <Text>Search</Text>
          <TouchableOpacity>
            <Image source={searchIcon} style={styles.search} />
          </TouchableOpacity>
        </View> */}
        <FlatList
          showsVerticalScrollIndicator={false}
          data={RecommendedListJson}
          keyExtractor={item => item.pending_id}
          renderItem={({item, index}) => <FeasibilityCard item={item} />}
        />
        <TouchableOpacity style={styles.fabWrapper} onPress={fabHandler}>
          <Image
            source={require('images/subscribers/fab.png')}
            resizeMode="contain"
            style={styles.fabIco}
          />
          {/* <Text style={styles.fabTitle}>Subscriber</Text> */}
        </TouchableOpacity>
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
  filterWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: 'red',
    paddingBottom: scaleSize(15),
    borderBottomColor: 'rgba(0, 0, 0, 0.14)',
    borderBottomWidth: 1,
    marginBottom: scaleSize(20),
  },
  search: {
    width: scaleSize(24),
    height: scaleSize(24),
    resizeMode: 'contain',
    marginLeft: scaleSize(10),
  },
  fabWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: scaleSize(65),
    width: scaleSize(65),
    backgroundColor: '#B45190',
    borderRadius: 999,
    position: 'absolute',
    bottom: scaleSize(17),
    right: scaleSize(17),
    elevation: 8,
  },
  fabIco: {
    height: scaleSize(25),
    width: scaleSize(25),
  },
  fabTitle: {
    ..._Text(FontSize.smallVariant, Family.regular, Colors.userText),
  },
});

export default Feasibility;
