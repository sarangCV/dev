import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import CompletedScreen from 'components/Screens/Bill/BillCompletedScreen'
import PendingScreen from 'components/Screens/Bill/BillPendingScreen'
import {scaleSize} from 'utils/index';
import { Family } from './Fonts'

const Tab = createMaterialTopTabNavigator();

const MyTabs = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#1F2C37',
        tabBarInactiveTintColor: '#AFAFAF',
        width: scaleSize(30),
        tabBarStyle: {
          backgroundColor: '#fff',
        },
        tabBarItemStyle: { width: 'auto'},
        tabBarLabelStyle: {
          textAlign: 'left',
          fontSize: 13,
          fontFamily: Family.robotoBold,
          textTransform: 'none',
        },
        tabBarIndicatorStyle: {
          borderBottomColor: '#5B4493',
          borderBottomWidth: 4,
        },
      }}>
      <Tab.Screen name="Pending" component={PendingScreen} />
      <Tab.Screen name="Completed" component={CompletedScreen} />
    </Tab.Navigator>
  );
}
export default MyTabs;
