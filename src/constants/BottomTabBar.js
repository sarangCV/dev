import React, {useRef} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View, Text, TouchableOpacity, StyleSheet, Animated} from 'react-native';
import Colors from 'Constants/Colors';
import {Family, FontSize} from 'constants/Fonts';
import {scaleSize} from 'utils/';
import FastImage from 'react-native-fast-image';
import Screens from 'navigators/index';

function BottomTabBar({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const insets = useSafeAreaInsets();

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  const animation = useRef(new Animated.Value(0)).current;

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.navContainer}>
        <View style={styles.navBar}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            let iconImageFocused;
            let iconImage;

            switch (route.name) {
              case 'Dashboard':
                iconImageFocused = require('../images/Home/NavBar/dashboard.png');
                iconImage = require('../images/Home/NavBar/dashboard.png');
                break;
              case 'Subscribers':
                iconImageFocused = require('../images/Home/NavBar/subscribers.png');
                iconImage = require('../images/Home/NavBar/subscribers.png');
                break;
              case 'Recharge':
                iconImageFocused = require('../images/Home/NavBar/recharge.png');
                iconImage = require('../images/Home/NavBar/recharge.png');
                break;
              case 'Tickets':
                iconImageFocused = require('../images/Home/NavBar/tickets.png');
                iconImage = require('../images/Home/NavBar/tickets.png');
                break;
            }

            const isFocused = state.index === index;

            const onPress = async () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                if (route.name === 'Home') {
                  await navigation.replace(Screens.POST_AUTH_STACK);
                } else {
                  navigation.navigate(route.name);
                }
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.tabItem}
                key={'Nav-' + label}>
                {/* {label !== 'Home' && (
              <View
                style={[styles.dotView, isFocused && styles.dotViewActive]}
              />
            )} */}
                <FastImage
                  source={isFocused ? iconImageFocused : iconImage}
                  resizeMode={FastImage.resizeMode.contain}
                  style={styles.homeIcon}
                />
                <Text
                  numberOfLines={1}
                  style={[
                    styles.tabLabel,
                    {
                      color: isFocused ? Colors.navText : Colors.navText,
                    },
                  ]}>
                  {route.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.tabBoxBackground,
  },
  navContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 20,
    marginHorizontal: scaleSize(47),
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: Colors.tabBoxBackground,
    width: '100%',
    justifyContent: 'space-evenly',
    borderRadius: 30,
    height: scaleSize(70),
    elevation: 2,
  },
  iconBehave: {
    padding: 10,
  },

  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  dotView: {
    width: scaleSize(5),
    aspectRatio: 1,
    borderRadius: scaleSize(5),
    marginBottom: scaleSize(2),
    marginStart: scaleSize(10),
  },
  dotViewActive: {
    backgroundColor: Colors.textSkyBlue,
  },
  tabLabel: {
    fontFamily: Family.semibold,
    textAlign: 'center',
    fontSize: FontSize.tinyVariant,
    marginTop: 5,
  },
  icon: {
    width: scaleSize(20),
    height: scaleSize(20),
  },
  homeIcon: {
    width: scaleSize(18),
    height: scaleSize(18),
    alignSelf: 'center',
  },
});

export default BottomTabBar;
