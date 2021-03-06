import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/EvilIcons';
import PeopleList from './PeopleList';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: '#80cbc4',
        showLabel: false,
        showIcon: true,
        style: {
          backgroundColor: '#26a69a'
        }
      }} screenOptions={ ({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName, iconColor;
          switch (route.name) {
            case 'People':
              iconName = 'user';
              break;
            case 'Company':
              iconName = 'archive';
              break;
            case 'Add':
              iconName = 'plus';
              break;
            default:
              break;
          }
          return (<Icon name={iconName} size={50} color={color} />);
        }
      })}>
          <Tab.Screen name="Add" component={AddPerson} />
          <Tab.Screen name="People" component={PeopleList} />
          <Tab.Screen name="Company" component={CompanyList} />
    </Tab.Navigator>
    );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};