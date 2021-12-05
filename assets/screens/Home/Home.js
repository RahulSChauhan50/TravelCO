import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  ImageBackground,
  FlatList,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import {Card, Appbar, Avatar, ProgressBar} from 'react-native-paper';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const windowWidth = Dimensions.get('window').width;
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
class Home extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor="#2176E3" />
        <Appbar style={{backgroundColor: '#2176E3', elevation: 0}}>
          <Avatar.Icon
            icon="account-circle-outline"
            size={30}
            color="grey"
            style={{backgroundColor: '#dee2e6', marginStart: 10}}
          />
          <Appbar.Content title="Welcome Guest" titleStyle={{fontSize: 15}} />
          <Appbar.Action icon="wallet-outline" />
          <Appbar.Action icon="bell-outline" />
        </Appbar>
        <View style={{height: '14%'}}>
          <View style={{height: '50%', backgroundColor: '#2176E3'}} />
          <Card
            style={{
              backgroundColor: 'white',
              marginHorizontal: '2%',
              borderRadius: 10,
              height: '100%',
              position: 'absolute',
              width: '96%',
              elevation: 10,
            }}>
            <Card.Content
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{alignItems: 'center'}}>
                <Avatar.Icon
                  icon="office-building"
                  size={50}
                  color="#2176E3"
                  style={{backgroundColor: '#e3f0f9'}}
                />
                <Text>Hotels</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Avatar.Icon
                  icon="airplane"
                  size={50}
                  color="#2176E3"
                  style={{backgroundColor: '#e3f0f9'}}
                />
                <Text>Flights</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Avatar.Icon
                  icon="train"
                  size={50}
                  color="#2176E3"
                  style={{backgroundColor: '#e3f0f9'}}
                />
                <Text>Trains</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Avatar.Icon
                  icon="bus-double-decker"
                  size={50}
                  color="#2176E3"
                  style={{backgroundColor: '#e3f0f9'}}
                />
                <Text>Bus</Text>
              </View>
            </Card.Content>
          </Card>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card
            style={{
              backgroundColor: 'white',
              marginHorizontal: '2%',
              width: '96%',
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              marginTop: -5,
            }}>
            <Card.Content
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 5,
              }}>
              <View style={{alignItems: 'center'}}>
                <Avatar.Icon
                  icon="home-heart"
                  size={50}
                  color="#2176E3"
                  style={{backgroundColor: '#e3f0f9'}}
                />
                <Text style={{textAlign: 'center'}}>Couple{'\n'} Hotels</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Avatar.Icon
                  icon="car"
                  size={50}
                  color="#2176E3"
                  style={{backgroundColor: '#e3f0f9'}}
                />
                <Text style={{textAlign: 'center'}}>Airport {'\n'}Cabs</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Avatar.Icon
                  icon="ticket-confirmation-outline"
                  size={50}
                  color="#2176E3"
                  style={{backgroundColor: '#e3f0f9'}}
                />
                <Text style={{textAlign: 'center'}}>
                  Train PNR {'\n'}Status
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Avatar.Icon
                  icon="car-hatchback"
                  size={50}
                  color="#2176E3"
                  style={{backgroundColor: '#e3f0f9'}}
                />
                <Text style={{textAlign: 'center'}}>Outstation {'\n'}Cabs</Text>
              </View>
            </Card.Content>
            <Card.Content
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 5,
              }}>
              <View style={{alignItems: 'center'}}>
                <Avatar.Icon
                  icon="home-city"
                  size={50}
                  color="#2176E3"
                  style={{backgroundColor: '#e3f0f9'}}
                />
                <Text style={{textAlign: 'center'}}>
                  Villas &{'\n'} Homestays
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Avatar.Icon
                  icon="food"
                  size={50}
                  color="#2176E3"
                  style={{backgroundColor: '#e3f0f9'}}
                />
                <Text style={{textAlign: 'center'}}>Airport{'\n'} meals</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Avatar.Icon
                  icon="timetable"
                  size={50}
                  color="#2176E3"
                  style={{backgroundColor: '#e3f0f9'}}
                />
                <Text style={{textAlign: 'center'}}>
                  Train Running{'\n'} Status
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Avatar.Icon
                  icon="home-map-marker"
                  size={50}
                  color="#2176E3"
                  style={{backgroundColor: '#e3f0f9'}}
                />
                <Text style={{textAlign: 'center'}}>Nearby{'\n'} Getways</Text>
              </View>
            </Card.Content>
          </Card>
          <View
            style={{
              marginHorizontal: '2%',
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <MaterialCommunityIcons
              name="ticket-percent-outline"
              size={30}
              color="#2176E3"
            />
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Offers For You
            </Text>
          </View>
          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={offer}
              renderItem={({item, index, separators}) => (
                <Card
                  style={{
                    marginHorizontal: 10,
                    padding: 10,
                    borderRadius: 10,
                    elevation: 5,
                    marginBottom: 10,
                  }}>
                  <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <Image
                      source={{uri: item.img}}
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: 5,
                        marginEnd: 10,
                      }}
                    />
                    <View>
                      <Text>Domestic Flights</Text>
                      <Text style={{fontWeight: 'bold', color: 'black'}}>
                        FLAT 25% OFF* on select{'\n'} routes
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: '#2176E3',
                    }}>
                    Copy & Book: STEALDEAL
                  </Text>
                </Card>
              )}
              keyExtractor={(item, ind) => ind}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Home;
