import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CompletedScreen from 'components/Screens/Bill/BillCompletedScreen';
import PendingScreen from 'components/Screens/Bill/BillPendingScreen';
import ComboScreen from 'components/Screens/BottomTabs/Recharge/ComboScreen';
import OfferScreen from 'components/Screens/BottomTabs/Recharge/OffersScreen';
import RecommendedScreen from 'components/Screens/BottomTabs/Recharge/RecommendedScreen';
import UnlimittedScreen from 'components/Screens/BottomTabs/Recharge/UnlimitedScreen';
import {scaleSize} from 'utils/index';
import {Family} from './Fonts';

const Tab = createMaterialTopTabNavigator();

const RechargeTabs = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#1F2C37',
        tabBarInactiveTintColor: '#AFAFAF',
        width: scaleSize(30),

        tabBarStyle: {
          backgroundColor: '#fff',
          height: 70,
          elevation: 15,
        },
        tabBarItemStyle: {width: 'auto', top: 15},
        tabBarLabelStyle: {
          textAlign: 'left',
          fontSize: 14,
          fontFamily: Family.robotoBold,
          textTransform: 'none',
        },
        tabBarIndicatorStyle: {
          borderBottomColor: '#5B4493',
          borderBottomWidth: 4,
        },
      }}>
      <Tab.Screen name="Recommended" component={RecommendedScreen} />
      <Tab.Screen name="Unlimited" component={UnlimittedScreen} />
      <Tab.Screen name="Combo" component={ComboScreen} />
      <Tab.Screen name="Others" component={OfferScreen} />
    </Tab.Navigator>
  );
};
export default RechargeTabs;
