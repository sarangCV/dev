import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
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
import TicketCard from 'components/Card/Tickets/TicketCard';
import {_Text} from 'styles/index';
import {useNavigation} from '@react-navigation/native';
import Screens from 'navigators/index';

const TicketsView = () => {
  const navigation = useNavigation();

  const fabHandler = () => {
    navigation.navigate(Screens.CREATE_TICKET);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.statusBar} barStyle="light-content" />
      {/* Header section */}
      <Header title={'Tickets'} />
      {/* Content */}
      <View style={styles.section}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={RecommendedListJson}
          keyExtractor={item => item.pending_id}
          renderItem={({item, index}) => <TicketCard />}
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

export default TicketsView;

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
  fabWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: scaleSize(65),
    width: scaleSize(65),
    backgroundColor: '#B45190',
    borderRadius: 999,
    position: 'absolute',
    bottom: scaleSize(100),
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
