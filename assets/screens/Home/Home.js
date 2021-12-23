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
  TouchableOpacity,
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
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Profile')}>
            <Avatar.Icon
              icon="account-circle-outline"
              size={30}
              color="grey"
              style={{backgroundColor: '#dee2e6', marginStart: 10}}
            />
          </TouchableOpacity>
          <Appbar.Content
            title="Welcome Guest"
            titleStyle={{fontSize: 15}}
            onPress={() => this.props.navigation.navigate('Profile')}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Wallet')}>
            <Appbar.Action icon="wallet-outline" color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Notifications')}>
            <Appbar.Action icon="bell-outline" color="white" />
          </TouchableOpacity>
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
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                flex: 1,
                alignItems: 'center',
                padding: 10,
              }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Hotels')}
                rippleColor="#dbd9d9">
                <View style={{alignItems: 'center'}}>
                  <Avatar.Icon
                    icon="office-building"
                    size={moderateScale(39)}
                    color="#2176E3"
                    style={{backgroundColor: '#e3f0f9'}}
                  />
                  <Text style={{fontSize: moderateScale(12)}}>Hotels</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Flights')}
                rippleColor="#dbd9d9">
                <View style={{alignItems: 'center'}}>
                  <Avatar.Icon
                    icon="airplane"
                    size={moderateScale(39)}
                    color="#2176E3"
                    style={{backgroundColor: '#e3f0f9'}}
                  />
                  <Text style={{fontSize: moderateScale(12)}}>Flights</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Trains', {
                    toggleOption: 'bookTrain',
                  })
                }
                rippleColor="#dbd9d9">
                <View style={{alignItems: 'center'}}>
                  <Avatar.Icon
                    icon="train"
                    size={moderateScale(39)}
                    color="#2176E3"
                    style={{backgroundColor: '#e3f0f9'}}
                  />
                  <Text style={{fontSize: moderateScale(12)}}>Trains</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Bus')}
                rippleColor="#dbd9d9">
                <View style={{alignItems: 'center'}}>
                  <Avatar.Icon
                    icon="bus-double-decker"
                    size={moderateScale(39)}
                    color="#2176E3"
                    style={{backgroundColor: '#e3f0f9'}}
                  />
                  <Text style={{fontSize: moderateScale(12)}}>Bus</Text>
                </View>
              </TouchableOpacity>
            </View>
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
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                flex: 1,
                alignItems: 'center',
                padding: 10,
                marginVertical: 5,
              }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Cab')}
                rippleColor="#dbd9d9">
                <View style={{alignItems: 'center'}}>
                  <Avatar.Icon
                    icon="car"
                    size={moderateScale(39)}
                    color="#2176E3"
                    style={{backgroundColor: '#e3f0f9'}}
                  />
                  <Text
                    style={{textAlign: 'center', fontSize: moderateScale(12)}}>
                    Cabs
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Meals')}
                rippleColor="#dbd9d9">
                <View style={{alignItems: 'center'}}>
                  <Avatar.Icon
                    icon="food"
                    size={moderateScale(39)}
                    color="#2176E3"
                    style={{backgroundColor: '#e3f0f9'}}
                  />
                  <Text
                    style={{textAlign: 'center', fontSize: moderateScale(12)}}>
                    Cloud Kitchen
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('TripMoney')}
                rippleColor="#dbd9d9">
                <View style={{alignItems: 'center'}}>
                  <Avatar.Icon
                    icon="cash-usd"
                    size={moderateScale(39)}
                    color="#2176E3"
                    style={{backgroundColor: '#e3f0f9'}}
                  />
                  <Text
                    style={{textAlign: 'center', fontSize: moderateScale(12)}}>
                    TripMoney
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems: 'center'}}>
                <Avatar.Icon
                  icon="home-map-marker"
                  size={moderateScale(39)}
                  color="#2176E3"
                  style={{backgroundColor: '#e3f0f9'}}
                />
                <Text
                  style={{textAlign: 'center', fontSize: moderateScale(12)}}>
                  Tourism
                </Text>
              </TouchableOpacity>
            </View>
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
              style={{marginLeft: 5}}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: 'black',
                marginLeft: scale(5),
              }}>
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
          <View style={{height: 280}}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              colors={['#fcbfbf', '#fcbfbf', '#ffffff']}
              style={{
                height: 200,
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
            <View style={{position: 'absolute', marginTop: '18%'}}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={offer}
                renderItem={({item, index, separators}) => (
                  <Card
                    style={{
                      width: 250,
                      height: 200,
                      borderRadius: 10,
                      marginHorizontal: 10,
                      elevation: 5,
                      marginBottom: 10,
                    }}>
                    <Image
                      resizeMode="cover"
                      source={{uri: item.img}}
                      style={{
                        height: 100,
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
                        <Text
                          style={{
                            fontWeight: 'bold',
                            fontSize: moderateScale(12),
                          }}>
                          The Daanish Residency
                        </Text>
                        <View
                          style={{
                            flexDirection: 'row',
                          }}>
                          <MaterialCommunityIcons
                            name="star"
                            size={moderateScale(15)}
                            color="#F7B401"
                          />
                          <MaterialCommunityIcons
                            name="star"
                            size={moderateScale(15)}
                            color="#F7B401"
                          />
                          <MaterialCommunityIcons
                            name="star"
                            size={moderateScale(15)}
                            color="#F7B401"
                          />
                          <Text style={{fontSize: moderateScale(10)}}>
                            Hotel
                          </Text>
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
                          <Text style={{fontSize: moderateScale(10)}}>
                            Delhi {'|'} 8 KM from Delhi
                          </Text>
                        </View>
                        <View
                          style={{
                            backgroundColor: '#20db4c',
                            borderRadius: 3,
                            paddingHorizontal: 7,
                            paddingVertical: 2,
                            marginLeft: scale(40),
                          }}>
                          <Text
                            style={{
                              fontWeight: '500',
                              color: 'white',
                              fontSize: moderateScale(10),
                            }}>
                            3.9/5
                          </Text>
                        </View>
                      </View>
                      <Text style={{fontSize: moderateScale(10)}}>
                        Free cancellation{' '}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <View>
                          <Text style={{fontSize: moderateScale(10)}}>
                            81% OFF
                          </Text>
                        </View>
                        <View>
                          <Text
                            style={{
                              textDecorationLine: 'line-through',
                              fontSize: moderateScale(10),
                            }}>
                            Rs2,999
                          </Text>
                          <Text
                            style={{
                              fontWeight: 'bold',
                              fontSize: moderateScale(10),
                            }}>
                            Rs.556
                          </Text>
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
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: 'black',
                marginLeft: 5,
              }}>
              What's new?
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
                    height: 100,
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
            <MaterialCommunityIcons
              name="alarm"
              size={30}
              color="#2176E3"
              style={{marginLeft: 5}}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: 'black',
                marginLeft: 5,
              }}>
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
                    marginBottom: 50,
                    height: 100,
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
