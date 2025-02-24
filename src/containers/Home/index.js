import React, {createContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Main';
import BottomTabBar from 'constants/BottomTabBar';
import Screens from 'navigators/index';
import Fibernet from 'containers/BottomTabBar/Fibre';
import Recharge from 'containers/BottomTabBar/Recharge';
import Subscribers from 'containers/subscribers';

// const Tab = createBottomTabNavigator();
const NavigationContext = createContext();

const HomeScreen = ({navigation}) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      tabBar={props => <BottomTabBar {...props} />}
      backBehavior="initialRoute"
      screenOptions={{
        lazy: false,
        swipeEnabled: false,
        headerShown: false,
      }}>
      <Tab.Screen
        name={Screens.DASHBOARD}
        component={Home}
        options={{
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name={Screens.SUBSCRIBER}
        component={Subscribers}
        options={{
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name={Screens.RECHARGE}
        component={Recharge}
        options={{
          unmountOnBlur: true,
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name={Screens.TICKETS}
        component={Recharge}
        options={{
          unmountOnBlur: true,
        }}
      />
      {/* <Tab.Screen
        name={Screens.PROFILE}
        component={Profile}
        options={{
          unmountOnBlur: true,
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default HomeScreen;
