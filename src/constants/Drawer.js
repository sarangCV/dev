import React from 'react';
import Colors from './Colors';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ImageBackground,
  Modal,
  Alert,
} from 'react-native';
import {Family, FontSize} from './Fonts';
import {Spacing} from './Layout';
import {scaleSize, WINDOW_HEIGHT, WINDOW_WIDTH} from 'utils/index';
import {DrawerInput} from 'components/Card/Drawer';
import HorizontalLine from 'components/Horizontal/HorizontalLine';
import {useState} from 'react';
import LogoutPopUp from 'components/Modal/LogoutPopUp';
import {set} from 'react-native-reanimated';
import Screens from 'navigators/index';
import {useNavigation} from '@react-navigation/native';
import {authSelector, logout} from 'features/Auth/AuthSlice';
import {useDispatch, useSelector} from 'react-redux';
import userType from 'utils/userType';

const EnviroDrawer = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  const hideLogoutModal = () => {
    setModalVisible(false);
    navigation.navigate(Screens.SIGNIN);
  };

  const showLogoutModal = () => {
    setModalVisible(true);
    console.log('fm', isModalVisible);
  };

  const logoutFun = () => {
    setModalVisible(false);
    // TODO: Calling logout reducer to clear usertoken
    dispatch(logout());
    navigation.replace(Screens.SIGNIN);
  };

  const RenderDrawables = () => {
    const navigation = useNavigation();
    const pageHomeNavClick = page => {
      navigation.navigate('Home', {
        screen: page,
      });
    };

    const navigationTo = title => {
      switch (title) {
        case 'Notifications':
          navigation.navigate(Screens.NOTIFICATION);
          break;
        case 'Settings':
          navigation.navigate(Screens.SETTINGS);
          break;
        case 'Account':
          navigation.navigate(Screens.PROFILE);
          break;
        case 'PrivacyPolicy':
          navigation.navigate(Screens.PRIVACYPOLICY);
          break;
        case 'Subscribers':
          navigation.navigate(Screens.SUBSCRIBER);
          break;
        case 'Lco':
          navigation.navigate(Screens.LCO);
          break;
        case 'LcoSelect':
          navigation.navigate(Screens.LCO_SELECT);
          break;
        case 'Feasibility':
          navigation.navigate(Screens.FEASIBILITY);
          break;
        case 'Tickets':
          navigation.navigate(Screens.TICKETS);
          break;
        case 'Enquiries':
          navigation.navigate(Screens.ENQUIRY);
          break;
        case 'CreateSubscriber':
          navigation.navigate(Screens.CREATE_SUBSCRIBER);
          break;
        case 'Session':
          navigation.navigate(Screens.FIBRE);
          break;
        case 'Plan':
          navigation.navigate(Screens.PLAN);
          break;
        case 'Bill':
          navigation.navigate(Screens.BILL);
          break;
        case 'Recharge':
          navigation.navigate(Screens.RECHARGE);
          break;
      }
    };
    // console.log('LOG FROM DRAWER----', userType() == 'lco');

    return (
      <View
        style={[
          styles.container,
          isModalVisible ? {backgroundColor: 'rgba(0,0,0,0.5)'} : '',
        ]}>
        <LogoutPopUp
          isVisible={isModalVisible}
          doAction={() => hideLogoutModal()}
          doActionLogout={() => logoutFun()}
        />
        {userType() == 'lco' ? (
          <>
            <DrawerInput
              image={require('../images/Home/Drawer/subscriber.png')}
              title="Subscribers"
              doAction={() => navigationTo('Subscribers')}
            />
            <HorizontalLine />

            <DrawerInput
              image={require('../images/Home/Drawer/create_subscriber.png')}
              title="Create Subscriber"
              doAction={() => navigationTo('CreateSubscriber')}
            />

            <HorizontalLine />
            <DrawerInput
              image={require('../images/Home/Drawer/plan.png')}
              title="Plan"
              doAction={() => navigationTo('Plan')}
            />

            <HorizontalLine />

            <DrawerInput
              image={require('../images/Home/Drawer/recharge.png')}
              title="Recharge"
              doAction={() => navigationTo('Recharge')}
            />

            <HorizontalLine />
            <DrawerInput
              image={require('../images/Home/Drawer/increase_wallet.png')}
              title="Increase Wallet"
              doAction={() => navigationTo('Bill')}
            />
            <HorizontalLine />
            <DrawerInput
              image={require('../images/Home/Drawer/tickets.png')}
              title="Tickets"
              doAction={() => navigationTo('Tickets')}
            />
            <HorizontalLine />
            <DrawerInput
              image={require('../images/Home/Drawer/enquires.png')}
              title="Enquiries"
              doAction={() => navigationTo('Enquiries')}
            />
          </>
        ) : (
          <>
            <DrawerInput
              image={require('../images/Home/Drawer/subscriber.png')}
              title="Subscribers"
              doAction={() => navigationTo('Subscribers')}
            />
            <HorizontalLine />
            <DrawerInput
              image={require('../images/Home/Drawer/recharge.png')}
              title="Create Subscriber"
              doAction={() => navigationTo('LcoSelect')}
            />
            <HorizontalLine />
            <DrawerInput
              image={require('../images/Home/Drawer/subscriber.png')}
              title="Area"
              doAction={() => navigationTo('Lco')}
            />
            <HorizontalLine />
            <DrawerInput
              image={require('../images/Home/Drawer/tickets.png')}
              title="Tickets"
              doAction={() => navigationTo('Tickets')}
            />
            <HorizontalLine />
            <DrawerInput
              image={require('../images/Home/Drawer/enquires.png')}
              title="Enquiries"
              doAction={() => navigationTo('Enquiries')}
            />
            <HorizontalLine />

            {/* <HorizontalLine /> */}

            {/* <DrawerInput
              image={require('../images/Home/Drawer/create_subscriber.png')}
              title="LCO"
              doAction={() => navigationTo('CreateSubscriber')}
            />
            <HorizontalLine />

            <DrawerInput
              image={require('../images/Home/Drawer/create_subscriber.png')}
              title="LCO"
              doAction={() => navigationTo('CreateSubscriber')}
            /> */}
          </>
        )}

        <HorizontalLine />
        <DrawerInput
          image={require('../images/Home/Drawer/notification.png')}
          title="Notifications"
          doAction={() => navigationTo('Notifications')}
        />
        <HorizontalLine />
        <DrawerInput
          image={require('../images/Home/Drawer/setting.png')}
          title="Settings"
          doAction={() => navigationTo('Settings')}
        />
        <HorizontalLine />
        <DrawerInput
          image={require('../images/Home/Drawer/privacy.png')}
          title="Privacy Policy"
          doAction={() => navigationTo('PrivacyPolicy')}
        />

        <HorizontalLine />
        <View style={{flex: 0.5}} />
        <TouchableOpacity onPress={() => navigation.navigate(Screens.HELP)}>
          <Text style={styles.subTextStyle}>Help & Support</Text>
        </TouchableOpacity>

        <View style={{flex: 0.5, marginTop: 10}} />
        <Text style={styles.subTextStyle}>About Asianet Broadband</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={[
          styles.drawerHeadercontainer,
          isModalVisible ? {backgroundColor: 'rgba(0,0,0,0.5)'} : '',
        ]}>
        <Pressable onPress={() => navigation.closeDrawer()}>
          <Image
            resizeMode="contain"
            style={{
              width: 10,
              height: 10,
              paddingHorizontal: 32,
              marginTop: scaleSize(5),
            }}
            source={require('../images/Home/crossIcon.png')}
          />
        </Pressable>
        <View style={{flex: 0.2}} />
        <View style={{flexDirection: 'row', marginLeft: scaleSize(20)}}>
          <View>
            <ImageBackground
              resizeMode="contain"
              source={require('../images/Home/Drawer/bg_name.png')}
              style={styles.imgbgContainer}>
              <View style={styles.viewTextStyle}>
                <Text style={styles.userTextStyle}>R</Text>
              </View>
            </ImageBackground>
          </View>

          <View
            style={{
              flexDirection: 'column',
              paddingHorizontal: Spacing.regular,
              justifyContent: 'center',
            }}>
            <Text style={styles.headerTextStyle}>Rajeswari</Text>
            <Text style={styles.headerSubTextStyle}>29114780009</Text>
          </View>
        </View>
        <View style={{flex: 0.2}} />
        <View
          style={{
            borderBottomColor: '#272727',
            borderBottomWidth: 0.3,
            marginLeft: 5,
            marginRight: 5,
            opacity: 0.2,
          }}
        />
      </View>
      <RenderDrawables />
      <View
        style={[
          styles.bottomDrawercontainer,
          isModalVisible ? {backgroundColor: 'rgba(0,0,0,0.5)'} : '',
        ]}>
        <View style={{flex: 0.3}} />
        <TouchableOpacity
          style={styles.navDrawer}
          onPress={() => showLogoutModal()}>
          <Image
            resizeMode="contain"
            style={styles.bottomimageStyle}
            source={require('../images/Home/logout.png')}
          />
          <Text style={styles.textStyle}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EnviroDrawer;
const styles = StyleSheet.create({
  headerTextStyle: {
    fontFamily: Family.robotoBold,
    fontSize: FontSize.regularVariant,
    color: Colors.homeBackground,
    textAlign: 'center',
  },
  headerSubTextStyle: {
    fontFamily: Family.robotoRegular,
    fontSize: FontSize.xs,
    color: Colors.drawerTextGrey,
  },
  container: {flex: 1.8},
  navDrawer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerHeadercontainer: {
    flex: 0.5,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  bottomDrawercontainer: {
    flex: 0.2,
  },
  imageStyle: {
    width: 20,
    height: 20,
  },
  imageItemStyle: {
    backgroundColor: 'green',
    width: 10,
    height: 10,
  },
  subTextStyle: {
    fontFamily: Family.regular,
    fontSize: FontSize.smallVariantPlus,
    color: Colors.homeBackground,
    paddingHorizontal: Spacing.large,
  },
  bottomimageStyle: {
    width: 18,
    height: 18,
  },
  textStyle: {
    width: '70%',
    alignItems: 'center',
    fontFamily: Family.regular,
    fontSize: FontSize.regularVariant,
    paddingLeft: 10,
    color: Colors.homeBackground,
  },
  imgbgContainer: {
    width: WINDOW_WIDTH * 0.157,
    height: WINDOW_WIDTH * 0.157,
  },
  userTextStyle: {
    fontSize: FontSize.largeVariant12,
    fontFamily: Family.semibold,
    color: Colors.white,
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 20,
  },
  viewTextStyle: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
