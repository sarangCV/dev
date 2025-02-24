import React, {useEffect} from 'react';

import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  Pressable,
  FlatList,
  Image,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {scaleSize} from 'utils/index';
import Colors from 'constants/Colors';
import {_Text} from 'styles/index';
import SubscribersTab from 'constants/SubscribersTopTabNavigator';
import Header from 'components/Header';
import {useState} from 'react';
// Importing assets
import {Family, FontSize} from 'constants/Fonts';
import Home from 'components/Subscriber/Create/Home';
import ChooseType from 'components/Subscriber/Create/ChooseType';
import SubscriberType from 'components/Subscriber/Create/SubscriberType';
import SubscriberImage from 'components/Subscriber/Create/SubscriberImageCapture';
import SubscriberImageCapture from 'components/Subscriber/Create/SubscriberImageCapture';
import SubscriberImageUpload from 'components/Subscriber/Create/SubscriberIdentity';
import SubscriberIdentity from 'components/Subscriber/Create/SubscriberIdentity';
import CableIdentity from 'components/Subscriber/Create/CableIdentity';
import VerifyPhone from 'components/Subscriber/Create/VerifyPhone';
import {useDispatch, useSelector} from 'react-redux';
import EnterpriseIdentity from 'components/Subscriber/Create/EnterpriseIdentity';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import AgentDetails from 'components/Subscriber/Create/AgentDetails';
import Address from 'components/Subscriber/Create/Address';
import CustomerAvailability from 'components/Subscriber/Create/CustomerAvailability';
import KycUpload from 'components/Subscriber/Create/KycUpload';
import ChoosePlan from 'components/Subscriber/Create/ChoosePlan';
import UploadConfirm from 'components/Subscriber/Create/UploadConfirm';
import Success from 'components/Subscriber/Create/Success';
import Activate from 'components/Subscriber/Create/Activate';
import {
  clearSubscriberInputState,
  getSubscriberCreateData,
  subscriberSelector,
} from 'features/Subscribers/SubscriberSlice';
import {authSelector} from 'features/Auth/AuthSlice';
import Catv from 'components/Subscriber/Create/CATV';

const CreateSubscriberScreen = ({navigation}) => {
  const [page, setPage] = useState(1);

  const route = useRoute();
  const dispatch = useDispatch();

  // Auth reducer
  const {accessToken} = useSelector(authSelector);

  // Importing subscriberData state values from reducer
  const {subscriberCreateData} = useSelector(subscriberSelector);

  const {lcoSlug, navId} = route.params;

  const pagination = [...Array(9).keys()];

  //TODO: To work custom backhandler only in a single screen
  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', () => {
        if (page == 1) {
          navigateBack();
          dispatch(clearSubscriberInputState());
          // BackHandler.removeEventListener('hardwareBackPress');
        } else {
          setPage(prev => prev - 1);
          return true; // Prevent the default back press behavior
        }
      });

      return () => {
        BackHandler.removeEventListener('hardwareBackPress');
      };
    }, [page]),
  );

  useEffect(() => {
    if (navId) {
      setPage(navId);
    }
  }, [navId]);

  useEffect(() => {
    dispatch(getSubscriberCreateData({tokenId: accessToken, slug: lcoSlug}));
  }, []);

  const navigateBack = () => {
    navigation.goBack();
  };

  const pageHandler = () => {
    console.log('PRESSED');
    setPage(prev => prev + 1);
  };

  // const setImageHandler = data => {
  //   SetUserData(prev => ({...prev, userImage: data}));
  //   setPage(prev => prev + 1);
  // };

  const renderPage = () => {
    switch (page) {
      case 1:
        return <Home setPage={pageHandler} />;
      case 2:
        return <ChooseType setPage={pageHandler} />;

      // case 3:
      //   return <SubscriberType setPage={pageHandler} />;
      // case 4:
      //   return <VerifyPhone setPage={pageHandler} />;
      // case 4:
      //   return (
      //     <SubscriberImageCapture
      //       setPage={pageHandler}
      //       // setImage={setImageHandler}
      //     />
      //   );
      case 3:
        return <ChoosePlan setPage={pageHandler} data={subscriberCreateData} />;
      // case 5:
      //   return connectionType == 'individual' ? (
      //     <CableIdentity
      //       setPage={pageHandler}
      //       // setImage={setImageHandler}
      //     />
      //   ) : (
      //     <EnterpriseIdentity
      //       setPage={pageHandler}
      //       // setImage={setImageHandler}
      //     />
      //   );
      case 4:
        return (
          <SubscriberIdentity
            setPage={pageHandler}
            // setImage={setImageHandler}
          />
        );
      case 5:
        return (
          <AgentDetails
            setPage={pageHandler}
            data={subscriberCreateData && subscriberCreateData}
          />
        );
      case 6:
        return <Address setPage={pageHandler} />;
      case 7:
        return (
          <CustomerAvailability
            setPage={pageHandler}
            data={subscriberCreateData}
          />
        );
      case 8:
        return <KycUpload setPage={pageHandler} data={subscriberCreateData} />;
      case 9:
        return (
          <Catv
            setPage={pageHandler}
            data={subscriberCreateData && subscriberCreateData}
          />
        );
      case 10:
        return (
          <UploadConfirm
            setPage={pageHandler}
            lcoSlug={lcoSlug}
            data={subscriberCreateData}
          />
        );
      case 11:
        return <Success setPage={pageHandler} />;
      case 12:
        return <Activate setPage={pageHandler} />;
    }
  };

  console.log('LOG FROM CREATE SUBSCRIBER', lcoSlug);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.statusBar} barStyle="light-content" />

      {/* Header section */}
      <Header title={'Create Subscriber'} wallet={true} />

      <View style={styles.content}>
        <View style={styles.pagination}>
          {page > 1 &&
            page < 10 &&
            pagination.map((item, index) => (
              <View
                style={{
                  ...styles.pageDot,
                  borderColor: index + 2 <= page ? null : Colors.border1,
                  backgroundColor:
                    index + 2 <= page ? Colors.cancelBtn : Colors.white,
                }}
              />
            ))}
        </View>
        {renderPage()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    flex: 1,
  },
  pagination: {
    // backgroundColor: 'red',
    // marginTop: scaleSize(12),
    paddingHorizontal: scaleSize(10),
    paddingVertical: scaleSize(12),
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  pageDot: {
    height: scaleSize(12),
    width: scaleSize(12),
    borderRadius: 50,
    borderWidth: 1,
    marginRight: 5,
  },
});

export default CreateSubscriberScreen;
