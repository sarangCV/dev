import LcoCard from 'components/Card/Lco/LcoCard';
import Colors from 'constants/Colors';
import RecommendedListJson from 'data/RecommendedListJson';
import Screens from 'navigators/index';
import React, {useEffect} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import {areaList, areaSelector} from 'features/Area/AreaSlice';
import {authSelector} from 'features/Auth/AuthSlice';
import {LoaderOverlay} from 'components/Overlays';

const LcoList = ({navigation}) => {
  const dispatch = useDispatch();

  // Auth reducer
  const {accessToken} = useSelector(authSelector);

  const {
    fetching,
    areaListSuccess,
    areaListData,
    areaListError,
    areaListErrorMessage,
  } = useSelector(areaSelector);

  useEffect(() => {
    dispatch(areaList({tokenId: accessToken}));
  }, []);

  return (
    <View>
      <View style={styles.section}>
        <View style={styles.filterWrapper}>
          <Text>Search</Text>
          <TouchableOpacity>
            <Image source={searchIcon} style={styles.search} />
          </TouchableOpacity>
        </View>
        <LoaderOverlay visible={fetching} />
        <FlatList
          contentContainerStyle={{paddingBottom: scaleSize(150)}}
          showsVerticalScrollIndicator={false}
          data={areaListData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => <LcoCard item={item} />}
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
});

export default LcoList;
