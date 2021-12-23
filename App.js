import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {List, Provider as PaperProvider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from './assets/Redux/store';

import Home from './assets/screens/Home/Home';
import Profile from './assets/screens/Profile/Profile';
import Hotels from './assets/screens/Hotel/Hotels';
import Flights from './assets/screens/Flights/Flights';
import Trains from './assets/screens/Trains/Trains';
import Bus from './assets/screens/Bus/Bus';
import Cabs from './assets/screens/Cabs/Cabs';
import Meals from './assets/screens/Meals/Meals';
import MyTrips from './assets/screens/MyTrip/MyTrips';
import Offer from './assets/screens/Offer/Offer';
import SearchBar from './assets/screens/Searchbar/SearchBar';
import Notification from './assets/screens/Notification/Notification';
import Wallet from './assets/screens/Wallet/Wallet';
import Login from './assets/screens/Login/Login';
import Tourism from './assets/screens/Tourism/Tourism';
import Book from './assets/screens/Trains/Book';
import CheckPNR from './assets/screens/Trains/CheckPNR';
import TripMoney from './assets/screens/TripMoney/TripMoney';
import OttContent from './assets/screens/OttContent/OttContent';
import TrainList from './assets/screens/List/List';
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
            case 'Trip Money': {
              iconName = focused ? 'cash-usd' : 'cash-usd-outline';
              break;
            }
            case 'Offers': {
              iconName = focused ? 'ticket-percent' : 'ticket-percent-outline';
              break;
            }
            case 'OttContent': {
              iconName = focused ? 'movie-open' : 'movie-open-outline';
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
      <Tab.Screen name="OttContent" component={OttContent} />
      <Tab.Screen name="My Trips" component={MyTrips} />
      <Tab.Screen name="Offers" component={Offer} />
    </Tab.Navigator>
  );
}

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <PaperProvider>
        <StatusBar backgroundColor="#2176E3" />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Book">
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
              name="Trains"
              component={Trains}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Bus"
              component={Bus}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Cab"
              component={Cabs}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SearchBar"
              component={SearchBar}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Notifications"
              component={Notification}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Wallet"
              component={Wallet}
              options={{headerShown: false}}
            />

          <Stack.Screen
            name="Meals"
            component={Meals}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Tourism"
            component={Tourism}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Book"
            component={Book}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PNR"
            component={CheckPNR}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TripMoney"
            component={TripMoney}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="List"
            component={TrainList}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
