import React from "react";
import { TabNavigator } from "react-navigation";
import { Image, StyleSheet } from "react-native";

import Home from "../views/Home";
import Profile from "../views/Profile";
import Notifications from "../views/Notifications";
import Configuration from "../views/Configuration";

export const Tab = TabNavigator({
    vetmap: {
      screen: Home,
    },
    perfil: {
        screen: Profile,
    },
    notificaciones: {
        screen: Notifications,
    },
    configuración: {
        screen: Configuration,
    }
  }, {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'vetmap') {
            iconName = require('../assets/map.png');
          } else if( routeName === 'perfil' ){
            iconName = require('../assets/fill.png');
          } else if( routeName === 'notificaciones' ){
            iconName = require('../assets/noti.png');
          } else if( routeName === 'configuración' ){
            iconName = require('../assets/settings.png');
          }
  
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Image
          source={iconName}
          style={[styles.icon, { tintColor: tintColor }]}
        />;
        },
      }),
    tabBarOptions: {
      activeTintColor: '#ff8537',
      activeBackgroundColor: "#5500cf",
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: '#5500cf',
      labelStyle: {
        fontSize: 12,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 3,
        paddingTop: 5,
      },
      tabStyle: {
        height: 72,
      }
    }
  });

  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });