import React from 'react';
import Home from './screens/Home';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case 'Qty/Price': {
              iconName = focused ? 'tree' : 'tree-outline';
              break;
            }
            case 'Orders': {
              iconName = focused
                ? 'order-bool-descending-variant'
                : 'order-bool-descending-variant';
              break;
            }
            case 'Report': {
              iconName = focused ? 'note-text' : 'note-text-outline';
              break;
            }
            case 'Settlement': {
              iconName = focused ? 'credit-card' : 'credit-card-outline';
              break;
            }
            default: {
              iconName = focused ? 'beaker' : 'beaker';
              break;
            }
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={30} color={'black'} />;
        },
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        //options={{headerShown: false}}
      />
      <Tab.Screen
        name="Orders"
        component={Home}
        // options={{headerShown: false}}
      />
      <Tab.Screen
        name="Report"
        component={Home}
        //options={{headerShown: false}}
      />
      <Tab.Screen
        name="Settlement"
        component={Home}
        // options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tab: {
    borderTopLeftRadius: 15,
    borderTopStartRadius: 15,
    backgroundColor: 'white',
  },
});
export default App;
