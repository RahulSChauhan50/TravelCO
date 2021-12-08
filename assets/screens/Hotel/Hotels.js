import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  Dimensions,
  FlatList,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
const windowWidth = Dimensions.get('window').width;
import {TextInput, Avatar, Card, Appbar} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import FIcon from 'react-native-vector-icons/FontAwesome5';
const data = [{id: 1}, {id: 2}];

const offer = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvMnPhxiHD42Q7XTcM3H-HPtN7_9cVZwFDQ&usqp=CAU',
    city: 'Delhi',
    dist: '8 KM form',
    off1: 'Free cancelation',
    off2: 'Good breakfast, Good place,',
    mainp: '2999',
    actualp: '510',
    room: 'for 1 room per night',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    city: 'Jaipur',
    dist: '8 KM form',
    off1: 'Free cancelation',
    off2: 'Good breakfast, Good place',
    mainp: '2999',
    actualp: '510',
    room: 'for 1 room per night',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5H4kG05ZRQ9ZevjoRMZr-YnJwoxd9WMQs3g&usqp=CAU',
    city: 'Chennai',
    dist: '8 KM form',
    off1: 'Free cancelation',
    off2: 'Good breakfast, Good place',
    mainp: '2999',
    actualp: '510',
    room: 'for 1 room per night',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    city: 'Delhi',
    dist: '8 KM form',
    off1: 'Free cancelation',
    off2: 'Good breakfast, Good place',
    mainp: '2999',
    actualp: '510',
    room: 'for 1 room per night',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    city: 'Mumbai',
    dist: '8 KM form',
    off1: 'Free cancelation',
    off2: 'Good breakfast, Good place, Good ',
    mainp: '2999',
    actualp: '510',
    room: 'for 1 room per night',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    city: 'Kolkata',
    dist: '8 KM form',
    off1: 'Free cancelation',
    off2: 'Good breakfast, Good place ',
    mainp: '2999',
    actualp: '510',
    room: 'for 1 room per night',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    city: 'Hydrabad',
    dist: '8 KM form',
    off1: 'Free cancelation',
    off2: 'Good breakfast, Good place ',
    mainp: '2999',
    actualp: '510',
    room: 'for 1 room per night',
  },
];
export default class Hotels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      india: false,
      international: true,
      city: 'Delhi',
    };
  }
  setIndia = () => {
    this.setState({
      india: true,
      international: false,
    });
    //console.log(this.state.india, this.state.international);
  };
  setInternational = () => {
    this.setState({
      india: false,
      international: true,
    });
    // console.log(this.state.india, this.state.international);
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Appbar style={{backgroundColor: '#2176E3', elevation: 0}}>
          <Appbar.Action
            icon="arrow-left"
            onPress={() => this.props.navigation.goBack()}
          />
          <Avatar.Icon
            icon="office-building"
            size={moderateScale(30)}
            color="#2176E3"
            style={{backgroundColor: '#dee2e6'}}
          />
          <Appbar.Content
            title="Hotels"
            titleStyle={{fontSize: moderateScale(20)}}
          />
        </Appbar>
        <ScrollView style={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
          <View style={styles.mainContainer}>
            <View style={styles.topContainer}></View>
            <View style={styles.travelContainer}>
              <View
                style={{
                  height: moderateScale(30),
                  width: '80%',
                  borderRadius: 20,
                  backgroundColor: '#DDEBF7',
                  alignSelf: 'center',
                  marginTop: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  style={{
                    height: '100%',
                    width: scale(130),
                    borderRadius: 20,
                    backgroundColor:
                      this.state.india == true ? '#2274E0' : '#DDEBF7',
                    //  justifyContent: 'flex-start',
                  }}
                  onPress={() => this.setIndia()}>
                  <View>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: moderateScale(15),
                        fontWeight: '500',
                        color: 'white',
                        marginTop: 3,
                      }}>
                      India
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: '100%',
                    width: scale(130),
                    borderRadius: 20,
                    backgroundColor:
                      this.state.india == false ? '#2274E0' : '#DDEBF7',
                  }}
                  onPress={() => this.setInternational()}>
                  <View>
                    <Text
                      style={{
                        textAlign: 'center',
                        marginTop: 3,
                        fontSize: moderateScale(15),
                        fontWeight: '500',
                        color: 'white',
                      }}>
                      International
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  fontSize: moderateScale(14),
                  color: 'black',
                  marginLeft: scale(15),
                  marginTop: scale(10),
                }}>
                Area, Landmark or Hotel
              </Text>
              <Text
                style={{
                  fontSize: moderateScale(18),
                  color: 'black',
                  fontWeight: '500',
                  marginLeft: scale(15),
                  marginTop: scale(10),
                }}>
                Delhi
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  borderTopWidth: 0.2,
                  borderColor: 'grey',
                  marginTop: 10,
                  height: verticalScale(70),
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: moderateScale(18),
                      color: 'black',
                      fontWeight: '500',
                      marginLeft: scale(15),
                      marginTop: scale(10),
                    }}>
                    10 DEC - 11 DEC
                  </Text>
                  <Text
                    style={{
                      fontSize: moderateScale(14),
                      color: 'black',
                      marginLeft: scale(15),
                      // marginTop: scale(10),
                    }}>
                    1 Night
                  </Text>
                </View>
                <View
                  style={{
                    height: '80%',
                    width: 1,
                    backgroundColor: '#909090',
                    alignSelf: 'center',
                    marginLeft: scale(30),
                  }}></View>
                <View>
                  <Text
                    style={{
                      fontSize: moderateScale(18),
                      color: 'black',
                      fontWeight: '500',
                      marginLeft: scale(90),
                      marginTop: scale(10),
                    }}>
                    1 Room
                  </Text>
                  <Text
                    style={{
                      fontSize: moderateScale(14),
                      color: 'black',
                      marginLeft: scale(15),
                      marginLeft: scale(95),
                    }}>
                    2 Adults
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  height: verticalScale(35),
                  width: scale(130),
                  borderRadius: 20,
                  backgroundColor: '#F73203',
                  alignSelf: 'center',
                }}>
                <View>
                  <Text
                    style={{
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      fontSize: moderateScale(17),
                      fontWeight: '500',
                      color: 'white',
                      flex:1
                    }}>
                    Search
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: verticalScale(230),
                width: '95%',
                alignSelf: 'center',
                backgroundColor: 'white',
                borderRadius: 10,
                marginBottom: 30,
              }}>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: moderateScale(20),
                  color: 'black',
                  margin: 15,
                }}>
                Recent searches
              </Text>
              <View style={{flexDirection: 'row'}}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={data}
                  renderItem={({item, index, separators}) => (
                    <View
                      style={{
                        height: 150,
                        width: 150,
                        elevation: 5,
                        borderWidth: 1,
                        borderColor: 'grey',
                        borderRadius: 10,
                        marginHorizontal: 15,
                        backgroundColor: 'white',
                        padding: 10,
                      }}>
                      <View
                        style={{
                          backgroundColor: 'green',
                          height: 30,
                          width: 50,
                          justifyContent: 'space-between',
                          flexDirection: 'row',
                          borderRadius: 5,
                        }}>
                        <MaterialCommunityIcons
                          size={20}
                          color="white"
                          name={'office-building'}
                          style={{alignSelf: 'center', marginLeft: 3}}
                        />
                        <Text
                          style={{
                            color: 'white',
                            fontSize: moderateScale(13),
                            alignSelf: 'center',
                            marginRight: 3,
                            fontWeight: '500',
                          }}>
                          City
                        </Text>
                      </View>
                      <MaterialCommunityIcons
                        size={20}
                        color="blue"
                        name={'greater-than'}
                        style={{position: 'absolute', right: 10, top: 15}}
                      />
                      <Text
                        style={{
                          fontSize: moderateScale(15),
                          fontWeight: '500',
                          color: 'black',
                          marginTop: 5,
                        }}>
                        Delhi
                      </Text>
                      <Text
                        style={{
                          fontSize: moderateScale(13),
                          color: 'black',
                          position: 'absolute',
                          bottom: 25,
                          left: 15,
                        }}>
                        2 Adults
                      </Text>
                      <Text
                        style={{
                          fontSize: moderateScale(13),
                          color: 'black',
                          position: 'absolute',
                          bottom: 5,
                          left: 15,
                        }}>
                        Dec 14 - Dec 15
                      </Text>
                    </View>
                  )}
                  keyExtractor={(item, ind) => ind}
                />
              </View>
            </View>
            <View style={{height: verticalScale(430)}}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                colors={['#fcbfbf', '#fcbfbf', '#ffffff']}
                style={{
                  height: verticalScale(350),
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
              <View
                style={{position: 'absolute', marginTop: verticalScale(60)}}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={offer}
                  renderItem={({item, index, separators}) => (
                    <Card
                      style={{
                        width: scale(200),
                        height: verticalScale(350),
                        borderRadius: 5,
                        marginHorizontal: 10,
                        elevation: 5,
                        marginBottom: 10,
                      }}>
                      <Image
                        resizeMode="cover"
                        source={{uri: item.img}}
                        style={{
                          height: verticalScale(130),
                          width: '90%',
                          borderRadius: 5,
                          marginTop: 10,
                          alignSelf: 'center',
                        }}
                      />

                      <View
                        style={{justifyContent: 'space-between', padding: 10}}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
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
                        <Text
                          style={{
                            fontWeight: 'bold',
                            fontSize: moderateScale(15),
                            color: 'black',
                          }}>
                          The Daanish Residency
                        </Text>
                        <Text style={{}}>{item.city}</Text>
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
                              color={'black'}
                            />
                            <Text style={{color: 'green'}}>
                              Delhi {'|'} 8 KM from {item.city}
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                          }}>
                          <MatIcon name="done" size={20} color={'gold'} />
                          <Text style={{color: 'black'}}>{item.off1}</Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            width: '100%',
                            marginRight: 20,
                          }}>
                          <MatIcon name="done" size={20} color={'gold'} />
                          <Text style={{color: 'black'}}>{item.off2}</Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}>
                          <View>
                            <Text
                              style={{
                                textDecorationLine: 'line-through',
                                color: 'purple',
                              }}>
                              Rs2,999
                            </Text>
                            <Text
                              style={{
                                fontWeight: '600',
                                color: '#F73203',
                                fontSize: moderateScale(15),
                              }}>
                              Rs.556
                            </Text>
                            <Text
                              style={{
                                color: 'black',
                                marginTop: 5,
                              }}>
                              {item.room}
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
                height: verticalScale(430),
                backgroundColor: 'white',
                marginHorizontal: '2%',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
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
                    Discover Gateways near you
                  </Text>
                  <Text style={{fontSize: moderateScale(12), color: 'black'}}>
                    Amazing deals for a perfect weekend
                  </Text>
                </View>
                <MaterialCommunityIcons
                  name={'greater-than'}
                  color={'black'}
                  size={25}
                  style={{position: 'absolute', right: 10}}
                />
              </View>
              <View
                style={{position: 'absolute', marginTop: verticalScale(60)}}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={offer}
                  renderItem={({item, index, separators}) => (
                    <Card
                      style={{
                        width: scale(200),
                        height: verticalScale(350),
                        borderRadius: 5,
                        marginHorizontal: 10,
                        elevation: 5,
                        marginBottom: 10,
                      }}>
                      <Image
                        resizeMode="cover"
                        source={{uri: item.img}}
                        style={{
                          height: verticalScale(130),
                          width: '90%',
                          borderRadius: 5,
                          marginTop: 10,
                          alignSelf: 'center',
                        }}
                      />

                      <View
                        style={{justifyContent: 'space-between', padding: 10}}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
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
                        <Text
                          style={{
                            fontWeight: 'bold',
                            fontSize: moderateScale(15),
                            color: 'black',
                          }}>
                          The Daanish Residency
                        </Text>
                        <Text style={{}}>{item.city}</Text>
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
                              color={'black'}
                            />
                            <Text style={{color: 'green'}}>
                              Delhi {'|'} 8 KM from {item.city}
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                          }}>
                          <MatIcon name="done" size={20} color={'gold'} />
                          <Text style={{color: 'black'}}>{item.off1}</Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            width: '100%',
                            marginRight: 20,
                          }}>
                          <MatIcon name="done" size={20} color={'gold'} />
                          <Text style={{color: 'black'}}>{item.off2}</Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}>
                          <View>
                            <Text
                              style={{
                                textDecorationLine: 'line-through',
                                color: 'purple',
                              }}>
                              Rs2,999
                            </Text>
                            <Text
                              style={{
                                fontWeight: '600',
                                color: '#F73203',
                                fontSize: moderateScale(15),
                              }}>
                              Rs.556
                            </Text>
                            <Text
                              style={{
                                color: 'black',
                                marginTop: 5,
                              }}>
                              {item.room}
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
                height: verticalScale(300),
                backgroundColor: 'white',
                marginHorizontal: '2%',
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
                padding: 10,
              }}>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: moderateScale(20),
                  color: 'black',
                }}>
                Trending Gateways for you
              </Text>
              <View
                style={{
                  position: 'absolute',
                  marginTop: verticalScale(60),
                }}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={offer}
                  renderItem={({item, index, separators}) => (
                    <Card
                      style={{
                        width: scale(120),
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
                          height: verticalScale(200),
                          width: '100%',
                          borderRadius: 5,
                          alignSelf: 'center',
                        }}
                      />
                      <Text
                        style={{
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: moderateScale(18),
                          alignSelf: 'center',
                          marginTop: -50,
                        }}>
                        {item.city}
                      </Text>
                    </Card>
                  )}
                  keyExtractor={(item, ind) => ind}
                />
              </View>
            </View>
            <View
              style={{
                marginTop: 10,
                height: verticalScale(250),
                borderRadius: 5,
                padding: 10,
              }}>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: moderateScale(20),
                  color: 'black',
                }}>
                Todays Offer
              </Text>
              <View
                style={{
                  position: 'absolute',
                  marginTop: verticalScale(60),
                }}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={offer}
                  renderItem={({item, index, separators}) => (
                    <Card
                      style={{
                        width: scale(200),
                        height: verticalScale(170),
                        borderRadius: 5,
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
                          borderRadius: 5,
                          alignSelf: 'center',
                        }}
                      />
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: '600',
                          fontSize: moderateScale(12),
                          marginHorizontal: 5,
                          marginTop: 5,
                        }}>
                        Get Up To 15% OFF on Domestic Hotels Booking
                      </Text>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: moderateScale(12),
                          marginHorizontal: 5,
                          marginTop: 10,
                        }}>
                        Offer validity 11th Dec'21
                      </Text>
                    </Card>
                  )}
                  keyExtractor={(item, ind) => ind}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#DDEBF7',
  },
  topContainer: {
    backgroundColor: '#2274E0',
    height: 50,
    width: '100%',
  },
  travelContainer: {
    backgroundColor: 'white',
    width: '95%',
    top: -verticalScale(40),
    height: moderateScale(220),
    alignSelf: 'center',
    // position: 'absolute',
    borderRadius: 5,
  },
});
