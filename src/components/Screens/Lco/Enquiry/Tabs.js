import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CompletedScreen from 'components/Screens/Bill/BillCompletedScreen';
import PendingScreen from 'components/Screens/Bill/BillPendingScreen';
import ComboScreen from 'components/Screens/BottomTabs/Recharge/ComboScreen';
import OfferScreen from 'components/Screens/BottomTabs/Recharge/OffersScreen';
import RecommendedScreen from 'components/Screens/BottomTabs/Recharge/RecommendedScreen';
import UnlimittedScreen from 'components/Screens/BottomTabs/Recharge/UnlimitedScreen';
import {Image} from 'react-native';
import {scaleSize} from 'utils/index';
import LiveSubscribers from 'components/Screens/Subscribers/LiveSubscribers';
import ActiveSubscribers from 'components/Screens/Subscribers/ActiveSubscribers';
import ExpiredSubscribers from 'components/Screens/Subscribers/ExpiredSubscribers';
import {Family, FontSize} from 'constants/Fonts';
import PendingEnquiry from './PendingEnquiry';

const Tab = createMaterialTopTabNavigator();

const LcoEnquiryTab = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#1F2C37',
        tabBarInactiveTintColor: '#AFAFAF',
        width: scaleSize(30),

        tabBarStyle: {
          // backgroundColor: 'red',
          height: scaleSize(60),
          elevation: 15,
          paddingLeft: scaleSize(23),
          // justifyContent: 'center',
        },
        tabBarItemStyle: {
          width: 'auto',
          top: scaleSize(10),
          // backgroundColor: 'red',
        },

        tabBarLabelStyle: {
          textAlign: 'left',
          fontSize: FontSize.smallVariantPlus,
          fontFamily: Family.robotoBold,
          textTransform: 'none',
        },
        tabBarIndicatorStyle: {
          borderBottomColor: '#5B4493',
          borderBottomWidth: 3,
          marginLeft: scaleSize(23),

          // width: 64,
        },
      }}>
      <Tab.Screen name="Pending" component={PendingEnquiry} />
      <Tab.Screen name="Follow Up" component={PendingEnquiry} />
    </Tab.Navigator>
  );
};
export default LcoEnquiryTab;
