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
class Flights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ButtonToggle: 'oneWay',
      nonStop: false,
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
          <Avatar.Icon
            icon="airplane"
            size={moderateScale(40)}
            color="#2176E3"
            style={{backgroundColor: '#dee2e6'}}
          />
          <Appbar.Content
            title="Flights"
            titleStyle={{fontSize: moderateScale(25)}}
          />
        </Appbar>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{height: 460}}>
            <View
              style={{
                height: 70,
                width: '100%',
                backgroundColor: '#2176E3',
              }}
            />
            <Card
              style={{
                height: 390,
                width: '96%',
                alignSelf: 'center',
                elevation: 10,
                padding: 10,
                position: 'absolute',
                marginTop: 20,
                backgroundColor: 'white',
              }}>
              <View
                style={{
                  width: '90%',
                  height: 30,
                  borderRadius: 30,
                  flexDirection: 'row',
                  backgroundColor: '#DDEBF7',
                  justifyContent: 'space-between',
                  alignSelf: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => this.setState({ButtonToggle: 'oneWay'})}
                  style={{
                    alignItems: 'center',
                    backgroundColor:
                      this.state.ButtonToggle === 'oneWay'
                        ? '#2176E3'
                        : 'transparent',
                    borderRadius: 30,
                    width: '33%',
                  }}>
                  <Text
                    style={{
                      textAlignVertical: 'center',
                      flex: 1,
                      color:
                        this.state.ButtonToggle === 'oneWay'
                          ? 'white'
                          : '#2176E3',
                    }}>
                    One-Way
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.setState({ButtonToggle: 'roundTrip'})}
                  style={{
                    alignItems: 'center',
                    backgroundColor:
                      this.state.ButtonToggle === 'roundTrip'
                        ? '#2176E3'
                        : 'transparent',
                    borderRadius: 30,
                    width: '33%',
                  }}>
                  <Text
                    style={{
                      textAlignVertical: 'center',
                      flex: 1,
                      color:
                        this.state.ButtonToggle === 'roundTrip'
                          ? 'white'
                          : '#2176E3',
                    }}>
                    Round Trip
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.setState({ButtonToggle: 'multiCity'})}
                  style={{
                    alignItems: 'center',
                    backgroundColor:
                      this.state.ButtonToggle === 'multiCity'
                        ? '#2176E3'
                        : 'transparent',
                    borderRadius: 30,
                    width: '33%',
                  }}>
                  <Text
                    style={{
                      textAlignVertical: 'center',
                      flex: 1,
                      color:
                        this.state.ButtonToggle === 'multiCity'
                          ? 'white'
                          : '#2176E3',
                    }}>
                    Multi-City
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 20,
                }}>
                <View>
                  <Text style={{color: 'grey'}}>From</Text>
                  <Text
                    style={{
                      fontSize: moderateScale(18),
                      color: 'black',
                      fontWeight: '500',
                    }}>
                    DEL
                  </Text>
                  <Text style={{color: 'grey'}}>Delhi</Text>
                </View>
                <Avatar.Icon
                  icon="arrow-left-right-bold"
                  color="white"
                  size={35}
                  style={{
                    backgroundColor: 'grey',
                  }}
                />
                <View>
                  <Text style={{color: 'grey'}}>Destination</Text>
                  <Text
                    style={{
                      fontSize: moderateScale(18),
                      color: 'black',
                      fontWeight: '500',
                    }}>
                    BOM
                  </Text>
                  <Text style={{color: 'grey'}}>Mumbai</Text>
                </View>
              </View>
              <View style={{borderWidth: 0.3, borderColor: 'grey'}} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 20,
                }}>
                <View>
                  <Text style={{color: 'grey'}}>Depart</Text>
                  <Text
                    style={{
                      fontSize: moderateScale(18),
                      color: 'black',
                      fontWeight: '500',
                    }}>
                    07 Dec' 21
                  </Text>
                  <Text style={{color: 'grey'}}>Today, Tuesday</Text>
                </View>
                <View>
                  <Text style={{color: 'grey'}}>Return</Text>
                  <Text
                    style={{
                      fontSize: moderateScale(18),
                      color: 'black',
                      fontWeight: '500',
                    }}>
                    Select date
                  </Text>
                  <Text style={{color: 'grey'}}>book return</Text>
                </View>
              </View>
              <View style={{borderWidth: 0.3, borderColor: 'grey'}} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 20,
                }}>
                <View>
                  <Text style={{color: 'grey'}}>Travellers</Text>
                  <Text
                    style={{
                      fontSize: moderateScale(18),
                      color: 'black',
                      fontWeight: '500',
                    }}>
                    1 Adult
                  </Text>
                </View>
                <View>
                  <Text style={{color: 'grey'}}>Class</Text>
                  <Text
                    style={{
                      fontSize: moderateScale(18),
                      color: 'black',
                      fontWeight: '500',
                    }}>
                    Economy
                  </Text>
                </View>
              </View>
              <View style={{borderWidth: 0.3, borderColor: 'grey'}} />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Checkbox
                  uncheckedColor="grey"
                  color="green"
                  status={this.state.nonStop ? 'checked' : 'unchecked'}
                  onPress={() => {
                    this.setState({nonStop: !this.state.nonStop});
                  }}
                />
                <Text style={{color: 'grey'}}>Non-Stop Only</Text>
              </View>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: scale(130),
                  borderRadius: 20,
                  backgroundColor: '#F73203',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    fontSize: moderateScale(17),
                    fontWeight: '500',
                    color: 'white',
                    flex: 1,
                  }}>
                  SEARCH
                </Text>
              </TouchableOpacity>
            </Card>
          </View>
          <View style={{height: 250}}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              colors={['#fcbfbf', '#fcbfbf', '#ffffff']}
              style={{
                padding: 10,
              }}>
              <View>
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
                            <MaterialCommunityIcons
                              name="map-marker"
                              size={20}
                            />
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
            </LinearGradient>
          </View>
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
                    backgroundColor: 'white',
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
                      <Text style={{color: 'grey'}}>Domestic Flights</Text>
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

export default Flights;
