import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {ProgressBar, Colors, Appbar, Avatar, Card} from 'react-native-paper';
import FIcon from 'react-native-vector-icons/Ionicons';
import Mat from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale, scale} from 'react-native-size-matters';
import {TouchableOpacity} from 'react-native-gesture-handler';
const offer = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvMnPhxiHD42Q7XTcM3H-HPtN7_9cVZwFDQ&usqp=CAU',
    status: 'In review',
    id: '01',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Active',
    id: '02',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5H4kG05ZRQ9ZevjoRMZr-YnJwoxd9WMQs3g&usqp=CAU',
    status: 'Pending',
    id: '03',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Ongoing',
    id: '06',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Ongoing',
    id: '06',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Ongoing',
    id: '06',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Ongoing',
    id: '06',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Ongoing',
    id: '06',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Ongoing',
    id: '06',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Ongoing',
    id: '06',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Ongoing',
    id: '06',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Ongoing',
    id: '06',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Ongoing',
    id: '06',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Ongoing',
    id: '06',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Ongoing',
    id: '06',
  },
];
class Meals extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Appbar style={{backgroundColor: '#2176E3', elevation: 0}}>
          <Appbar.Action
            icon="arrow-left"
            onPress={() => this.props.navigation.goBack()}
          />
          <TextInput
            placeholder="Enter your city"
            placeholderTextColor={'white'}
            style={{
              flex: 1,
              borderBottomWidth: 0.5,
              borderBottomColor: 'white',
              color: 'white',
              fontSize: moderateScale(20),
            }}
          />
        </Appbar>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card style={{width: '100%', padding: 10, elevation: 5}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Avatar.Icon
                icon="near-me"
                color="#2176E3"
                size={moderateScale(35)}
                style={{
                  backgroundColor: 'white',
                  borderWidth: 1,
                  borderColor: '#2176E3',
                }}
              />
              <Text
                style={{
                  fontSize: moderateScale(17),
                  color: '#2176E3',
                  marginStart: 20,
                }}>
                Current Location
              </Text>
            </View>
          </Card>
          <Text style={{marginStart: '2%', marginVertical: 10}}>
            POPULAR CITIES
          </Text>
          {offer.map((val, ind) => (
            <View
              key={ind}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingStart: '2%',
                backgroundColor: 'white',
              }}>
              <MaterialCommunityIcons
                name="earth"
                size={moderateScale(35)}
                color="#2176E3"
              />
              <View
                style={{
                  borderBottomWidth: 2,
                  borderBottomColor: '#dbdbdb',
                  flexDirection: 'row',
                  width: '90%',
                  padding: 15,
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontWeight: '700',
                    fontSize: moderateScale(17),
                    color: 'black',
                  }}>
                  Goa
                </Text>
                <Text
                  style={{
                    fontSize: moderateScale(17),
                  }}>
                  304 Activities
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Meals;
