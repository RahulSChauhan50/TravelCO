import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider as PaperProvider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './assets/screens/Home/Home';
import Profile from './assets/screens/Profile/Profile';
import Hotels from './assets/screens/Hotel/Hotels';
import Flights from './assets/screens/Flights/Flights';
import Couples from './assets/screens/Couple/Couples';
import Villas from './assets/screens/Villas/Villas';
import Trains from './assets/screens/Trains/Trains';
import Bus from './assets/screens/Bus/Bus';
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
            case 'Home': {
              iconName = focused ? 'home' : 'home-outline';
              break;
            }
            case 'Orders': {
              iconName = focused
                ? 'order-bool-descending-variant'
                : 'order-bool-descending-variant';
              break;
            }
            case 'My Trips': {
              iconName = focused ? 'bag-personal' : 'bag-personal-outline';
              break;
            }
            case 'Offers': {
              iconName = focused ? 'ticket-percent' : 'ticket-percent-outline';
              break;
            }
            case 'Trip Money': {
              iconName = focused ? 'cash-usd' : 'cash-usd-outline';
              break;
            }
            default: {
              iconName = focused ? 'beaker' : 'beaker';
              break;
            }
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Orders" component={Profile} />
      <Tab.Screen name="My Trips" component={Hotels} />
      <Tab.Screen name="Offers" component={Couples} />
      <Tab.Screen name="Trip Money" component={Villas} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Hotels"
            component={Hotels}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Flights"
            component={Flights}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Couples"
            component={Couples}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Trains"
            component={Trains}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Villas"
            component={Villas}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Bus"
            component={Bus}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
