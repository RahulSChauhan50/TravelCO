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
import {
  Card,
  Appbar,
  Avatar,
  ProgressBar,
  TouchableRipple,
} from 'react-native-paper';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

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
          <TouchableRipple
            onPress={() => this.props.navigation.navigate('Profile')}>
            <Avatar.Icon
              icon="account-circle-outline"
              size={30}
              color="grey"
              style={{backgroundColor: '#dee2e6', marginStart: 10}}
            />
          </TouchableRipple>
          <Appbar.Content
            title="Welcome Guest"
            titleStyle={{fontSize: 15}}
            onPress={() => this.props.navigation.navigate('Profile')}
          />
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
              <TouchableRipple
                onPress={() => this.props.navigation.navigate('Hotels')}
                rippleColor="#dbd9d9">
                <View style={{alignItems: 'center'}}>
                  <Avatar.Icon
                    icon="office-building"
                    size={50}
                    color="#2176E3"
                    style={{backgroundColor: '#e3f0f9'}}
                  />
                  <Text>Hotels</Text>
                </View>
              </TouchableRipple>
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
          <View style={{height: verticalScale(280)}}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              colors={['#fcbfbf', '#fcbfbf', '#ffffff']}
              style={{
                height: verticalScale(200),
                marginHorizontal: '2%',
                borderRadius: 10,
                padding: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text
                    style={{
                      fontWeight: '600',
                      fontSize: moderateScale(20),
                      color: 'black',
                    }}>
                    Daiy Steal Deals
                  </Text>
                  <Text style={{fontSize: moderateScale(12), color: 'black'}}>
                    Lowest ever prices on top-rated hotels
                  </Text>
                </View>
                <MaterialCommunityIcons
                  name={'greater-than'}
                  color={'black'}
                  size={25}
                  style={{position: 'absolute', right: 10}}
                />
              </View>
            </LinearGradient>
            <View style={{position: 'absolute', marginTop: verticalScale(60)}}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={offer}
                renderItem={({item, index, separators}) => (
                  <Card
                    style={{
                      width: scale(250),
                      height: verticalScale(200),
                      borderRadius: 10,
                      marginHorizontal: 10,
                      elevation: 5,
                      marginBottom: 10,
                    }}>
                    <Image
                      resizeMode="cover"
                      source={{uri: item.img}}
                      style={{
                        height: verticalScale(100),
                        width: '100%',
                        borderRadius: 10,
                      }}
                    />
                    <View
                      style={{justifyContent: 'space-between', padding: 10}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text style={{fontWeight: 'bold'}}>
                          The Daanish Residency
                        </Text>
                        <View
                          style={{
                            flexDirection: 'row',
                          }}>
                          <MaterialCommunityIcons
                            name="star"
                            size={20}
                            color="#F7B401"
                          />
                          <MaterialCommunityIcons
                            name="star"
                            size={20}
                            color="#F7B401"
                          />
                          <MaterialCommunityIcons
                            name="star"
                            size={20}
                            color="#F7B401"
                          />
                          <Text>Hotel</Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                          }}>
                          <MaterialCommunityIcons name="map-marker" size={20} />
                          <Text>Delhi {'|'} 8 KM from Delhi</Text>
                        </View>
                        <View
                          style={{
                            backgroundColor: '#20db4c',
                            borderRadius: 3,
                            paddingHorizontal: 7,
                            paddingVertical: 2,
                            marginLeft: 70,
                          }}>
                          <Text style={{fontWeight: '500', color: 'white'}}>
                            3.9/5
                          </Text>
                        </View>
                      </View>
                      <Text>Free cancellation </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <View>
                          <Text>81% OFF</Text>
                        </View>
                        <View>
                          <Text style={{textDecorationLine: 'line-through'}}>
                            Rs2,999
                          </Text>
                          <Text style={{fontWeight: 'bold'}}>Rs.556</Text>
                        </View>
                      </View>
                    </View>
                  </Card>
                )}
                keyExtractor={(item, ind) => ind}
              />
            </View>
          </View>
          <View
            style={{
              marginHorizontal: '2%',
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>What's new?</Text>
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
                    borderRadius: 10,
                    elevation: 5,
                    marginBottom: 10,
                    height: verticalScale(100),
                    width: scale(200),
                  }}>
                  <Image
                    source={{uri: item.img}}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 5,
                    }}
                  />
                </Card>
              )}
              keyExtractor={(item, ind) => ind}
            />
          </View>
          <View
            style={{
              marginHorizontal: '2%',
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <MaterialCommunityIcons name="alarm" size={30} color="#2176E3" />
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Top Daily Steal Deals
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
                    borderRadius: 10,
                    elevation: 5,
                    marginBottom: 10,
                    height: verticalScale(100),
                    width: scale(200),
                  }}>
                  <Image
                    source={{uri: item.img}}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 5,
                    }}
                  />
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
