import React from 'react';
import PropTypes from 'prop-types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

const TabIcon = (name: string) => {
  const Icon: React.FC<{ color: string; size: number; focused: boolean }> = ({
    color,
    size,
    focused,
  }) => {
    return (
      <Ionicons name={name} size={size} color={focused ? '#8257e5' : color} />
    );
  };

  Icon.propTypes = {
    color: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    focused: PropTypes.bool.isRequired,
  };

  return Icon;
};

const StudyTabs: React.FC = () => {
  return (
    <>
      <Navigator
        tabBarOptions={{
          style: {
            elevation: 0,
            shadowOpacity: 0,
            height: 64,
          },
          tabStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          },
          iconStyle: {
            flex: 0,
            width: 20,
            height: 20,
          },
          labelStyle: {
            fontFamily: 'Archivo_700Bold',
            fontSize: 13,
            marginLeft: 16,
          },
          inactiveBackgroundColor: '#fafafc',
          activeBackgroundColor: '#ebebf5',
          inactiveTintColor: '#c1bccc',
          activeTintColor: '#32264d',
        }}
      >
        <Screen
          name="TeacherList"
          component={TeacherList}
          options={{
            tabBarLabel: 'Proffies',
            tabBarIcon: TabIcon('ios-easel'),
          }}
        />
        <Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarLabel: 'Favoritos',
            tabBarIcon: TabIcon('ios-heart'),
          }}
        />
      </Navigator>
    </>
  );
};

export default StudyTabs;
