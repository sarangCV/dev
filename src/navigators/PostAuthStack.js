import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import EnviroDrawer from 'constants/Drawer';
import HomeScreen from 'containers/Home';
import {createContext} from 'react';

const NavigationContext = createContext();

const PostAuthStack = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <EnviroDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '',
          headerLeft: () => <HeaderNavIcon />,
          // headerBackground: () => (<Header title="Home" />),
          // headerRight: () => (<HeaderNotificationIcon  {...ownProps} />),}}
        }}
      />
    </Drawer.Navigator>
  );
};

export default PostAuthStack;
export const NavigationConsumer = NavigationContext.Consumer;

const HeaderNavIcon = () => {
  return (
    <NavigationConsumer>
      {navValues => {
        if (navValues) {
          const {drawerNavigation} = navValues;
          return (
            <TouchableOpacity
              style={{paddingLeft: 15, marginTop: 5}}
              onPress={() => drawerNavigation.toggleDrawer()}>
              {/* <Icon name="menu" size={30} color="#000" /> */}
              <Image
                style={styles.navigationStyle}
                source={require('../images/Home/drawer.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          );
        } else {
          return null;
        }
      }}
    </NavigationConsumer>
  );
};
