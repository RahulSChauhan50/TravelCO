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
const safe = [{id: 0}, {id: 1}, {id: 2}, {id: 3}, {id: 4}];

class Cabs extends Component {
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
          <Avatar.Icon
            icon="car"
            size={moderateScale(40)}
            color="#2176E3"
            style={{backgroundColor: '#dee2e6'}}
          />
          <Appbar.Content
            title="Cabs"
            titleStyle={{fontSize: moderateScale(23)}}
          />
        </Appbar>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{height: 420}}>
            <View
              style={{
                height: 50,
                width: '100%',
                backgroundColor: '#2176E3',
              }}
            />
            <Card
              style={{
                height: 420,
                borderRadius: 10,
                width: '96%',
                alignSelf: 'center',
                elevation: 10,
                padding: 20,
                position: 'absolute',
              }}>
              <View
                style={{
                  width: '100%',
                  height: 35,
                  borderRadius: 30,
                  flexDirection: 'row',
                  backgroundColor: '#DDEBF7',
                  justifyContent: 'space-between',
                  alignSelf: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => this.setState({ButtonToggle: 'Outstation'})}
                  style={{
                    alignItems: 'center',
                    backgroundColor:
                      this.state.ButtonToggle === 'Outstation'
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
                        this.state.ButtonToggle === 'Outstation'
                          ? 'white'
                          : 'grey',
                      fontSize: moderateScale(15),
                      fontWeight: '500',
                    }}>
                    Outstation
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.setState({ButtonToggle: 'Airport Cab'})}
                  style={{
                    alignItems: 'center',
                    backgroundColor:
                      this.state.ButtonToggle === 'Airport Cab'
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
                        this.state.ButtonToggle === 'Airport Cab'
                          ? 'white'
                          : 'grey',
                      fontSize: moderateScale(15),
                      fontWeight: '500',
                    }}>
                    Airport Cab
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.setState({ButtonToggle: 'Self Drive'})}
                  style={{
                    alignItems: 'center',
                    backgroundColor:
                      this.state.ButtonToggle === 'Self Drive'
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
                        this.state.ButtonToggle === 'Self Drive'
                          ? 'white'
                          : 'grey',
                      fontSize: moderateScale(15),
                      fontWeight: '500',
                    }}>
                    Self Drive
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  marginVertical: 20,
                }}>
                <Text>From (Airport or Pickup address)</Text>
                <Text
                  style={{
                    fontSize: moderateScale(17),
                    color: 'black',
                    fontWeight: '500',
                  }}>
                  Enter pickup location
                </Text>
              </View>
              <View style={{borderWidth: 0.3, borderColor: 'grey'}} />
              <Avatar.Icon
                icon="arrow-up-down-bold"
                color="white"
                size={35}
                style={{
                  alignSelf: 'flex-end',
                  marginVertical: -15,
                  backgroundColor: 'grey',
                }}
              />
              <View
                style={{
                  marginVertical: 20,
                }}>
                <Text>To (Airport or Pickup address)</Text>
                <Text
                  style={{
                    fontSize: moderateScale(17),
                    color: 'black',
                    fontWeight: '500',
                  }}>
                  Enter drop location
                </Text>
              </View>
              <View style={{borderWidth: 0.3, borderColor: 'grey'}} />
              <View
                style={{
                  marginVertical: 20,
                }}>
                <Text>I know my train (Optional)</Text>
                <Text
                  style={{
                    fontSize: moderateScale(18),
                    color: 'black',
                    fontWeight: '500',
                  }}>
                  Select Train
                </Text>
              </View>
              <View style={{borderWidth: 0.3, borderColor: 'grey'}} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text>Pickup Date</Text>
                  <Text
                    style={{
                      fontSize: moderateScale(17),
                      color: 'black',
                      fontWeight: '500',

                      marginTop: 5,
                    }}>
                    10 DEC 2021
                  </Text>
                  <Text
                    style={{
                      fontSize: moderateScale(13),
                      color: 'black',
                      marginTop: 5,
                    }}>
                    Fri
                  </Text>
                </View>
                <View
                  style={{
                    height: '80%',
                    width: 1,
                    backgroundColor: '#909090',
                    alignSelf: 'center',
                  }}></View>
                <View>
                  <Text style={{}}>Pickup Time</Text>
                  <Text
                    style={{
                      fontSize: moderateScale(18),
                      color: 'black',
                      fontWeight: '500',
                      //marginLeft: 90,
                      marginTop: 5,
                    }}>
                    10:00 AM
                  </Text>
                </View>
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

          <View
            style={{
              marginTop: 20,
              height: 270,
              borderRadius: 5,
              padding: 10,
            }}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: moderateScale(18),
                color: 'black',
              }}>
              Bus Offers
            </Text>
            <View
              style={{
                position: 'absolute',
                marginTop: 60,
              }}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={offer}
                renderItem={({item, index, separators}) => (
                  <Card
                    style={{
                      width: 250,
                      height: 190,
                      borderRadius: 5,
                      marginHorizontal: 10,
                      elevation: 5,
                      marginBottom: 10,
                    }}>
                    <Image
                      resizeMode="cover"
                      source={{uri: item.img}}
                      style={{
                        height: 110,
                        width: '100%',
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                        alignSelf: 'center',
                      }}
                    />
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: '600',
                        fontSize: moderateScale(12),
                        marginHorizontal: 5,
                        marginTop: 10,
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
          <View
            style={{
              width: '95%',
              backgroundColor: 'white',
              alignSelf: 'center',
              height: 80,
              marginTop: 15,
              borderRadius: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <MaterialCommunityIcons
              name="chat"
              size={40}
              color={'blue'}
              style={{alignSelf: 'center', marginLeft: 10}}
            />
            <View
              style={{
                alignSelf: 'center',
                maxWidth: '70%',
              }}>
              <Text
                style={{
                  fontSize: moderateScale(14),
                  fontWeight: '500',
                  color: 'black',
                }}>
                Frequently Asked Questions
              </Text>
              <Text
                style={{
                  fontSize: moderateScale(12),
                  color: 'grey',
                }}>
                Most common user concern and answers
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginRight: 10,
              }}>
              <Text
                style={{
                  textAlignVertical: 'center',
                  marginRight: 5,
                  color: 'blue',
                }}>
                View All
              </Text>
              <MaterialCommunityIcons
                name={'greater-than'}
                size={20}
                color={'blue'}
                style={{
                  alignSelf: 'center',
                }}
              />
            </View>
          </View>

          <View
            style={{
              marginHorizontal: '2%',
              backgroundColor: 'white',
              borderRadius: 10,
              paddingVertical: 10,
              marginVertical: 20,
              paddingBottom: 20,
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: moderateScale(18),
                color: 'black',
                marginLeft: 10,
              }}>
              #SafetyFeed from our partner drivers
            </Text>
            <Text style={{marginBottom: 15, marginLeft: 10}}>
              Thousands of travellers are travelling safe everyday
            </Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={offer}
              renderItem={({item, index, separators}) => (
                <View style={{height: 120, width: 80, marginHorizontal: 5}}>
                  <Image
                    source={{uri: item.img}}
                    style={{
                      height: 120,
                      width: '100%',
                      alignSelf: 'center',
                    }}
                    resizeMode={'cover'}
                  />
                  <View
                    style={{
                      backgroundColor: '#5E5E5E',
                      opacity: 0.7,
                      width: '100%',
                      marginTop: -40,
                      height: 40,
                    }}>
                    <Text style={{color: 'white'}}>#SafePractices</Text>
                  </View>
                </View>
              )}
              keyExtractor={(item, ind) => ind}
            />
          </View>
          <View
            style={{
              marginHorizontal: '2%',
              backgroundColor: 'white',
              borderRadius: 10,
              paddingVertical: 10,
              marginVertical: 20,
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: moderateScale(18),
                color: 'black',
                marginBottom: 15,
                marginLeft: 10,
              }}>
              #SafeTravel
            </Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={safe}
              renderItem={({item, index, separators}) => (
                <View
                  style={{
                    height: 120,
                    width: 350,
                    borderRadius: 10,
                    borderWidth: 1,
                    marginHorizontal: 5,
                    flexDirection: 'row',
                    borderColor: '#93F393',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{maxWidth: '70%', marginLeft: 10}}>
                    <Text
                      style={{
                        fontWeight: '700',
                        fontSize: moderateScale(17),
                        color: 'black',
                        marginVertical: 10,
                      }}>
                      Introducing goSafe Buses
                    </Text>
                    <Text
                      style={{maxWidth: '70%', fontSize: moderateScale(13)}}>
                      Sanitized environment Trained staff Safe practice
                    </Text>
                  </View>
                  <Image
                    source={require('../../images/safe.png')}
                    style={{
                      height: 60,
                      width: 60,
                      alignSelf: 'center',
                      marginRight: 20,
                    }}
                    resizeMode={'cover'}
                  />
                </View>
              )}
              keyExtractor={(item, ind) => ind}
            />
            <Text
              style={{
                color: 'blue',
                marginLeft: 10,
                marginTop: 10,
                fontSize: moderateScale(14),
                fontWeight: '500',
              }}>
              Know More
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Cabs;
