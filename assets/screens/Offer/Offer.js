import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {
  TextInput,
  Avatar,
  Card,
  Appbar,
  ToggleButton,
  TouchableRipple,
  Checkbox,
} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';

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
];
const safe = [{id: 0}, {id: 1}, {id: 2}, {id: 3}, {id: 4}];

class Offer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ButtonToggle: 'Outstation',
    };
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Appbar style={{backgroundColor: '#2176E3', elevation: 0}}>
          <Appbar.Action
            icon="arrow-left"
            onPress={() => this.props.navigation.goBack()}
          />

          <Appbar.Content
            title="My Offers"
            titleStyle={{fontSize: moderateScale(18)}}
          />
        </Appbar>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flexGrow: 1, backgroundColor: '#DDEBF7'}}>
          {offer.map((item, index) => (
            <View
              key={index}
              style={{
                marginHorizontal: '2%',
                height: 165,
                borderRadius: 10,
                backgroundColor: 'white',
                elevation: 10,

                marginVertical: 10,
              }}>
              <View
                style={{
                  elevation: 10,
                  height: 110,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Image
                  resizeMode="cover"
                  source={{
                    uri: item.img,
                  }}
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 5,
                    margin: 10,
                  }}
                />
                <View style={{maxWidth: '60%', alignSelf: 'center'}}>
                  <Text style={{marginBottom: 5}}>Domestic Flights</Text>
                  <Text
                    style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
                    Flat 12% OFF On your First Domestic Flight Booking
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                      alignItems: 'center',
                    }}>
                    <MaterialCommunityIcons
                      name="alarm"
                      size={15}
                      color={'red'}
                    />
                    <Text style={{color: 'red', marginLeft: 10}}>
                      Limited period offer
                    </Text>
                  </View>
                </View>
                <MaterialCommunityIcons
                  name="greater-than"
                  size={20}
                  color={'black'}
                  style={{alignSelf: 'center', marginRight: 10}}
                />
              </View>
              <View
                style={{
                  borderStyle: 'dashed',
                  borderWidth: 0.2,
                  marginVertical: 10,
                  borderColor: 'grey',
                }}></View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: 'blue',
                    marginRight: 10,
                  }}>
                  Copy & Book: WELCOME
                </Text>
                <Icon name="copy-outline" size={15} color={'#009AF7'} />
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Offer;
