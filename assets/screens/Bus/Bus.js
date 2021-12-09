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
const travel = [
  {name: 'AC', iName: 'crosshairs'},
  {name: 'Non-AC', iName: 'crosshairs-off'},
  {name: 'Sleeper', iName: 'bed'},
  {name: 'Seater', iName: 'seat-recline-extra'},
];
const safe = [{id: 0}, {id: 1}, {id: 2}, {id: 3}, {id: 4}];
class Bus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ButtonToggle: 'bookTrain',
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
            icon="bus"
            size={moderateScale(40)}
            color="#2176E3"
            style={{backgroundColor: '#dee2e6'}}
          />
          <Appbar.Content
            title="Buses"
            titleStyle={{fontSize: moderateScale(25)}}
          />
        </Appbar>
        <ScrollView>
          <View style={{height: 490}}>
            <View
              style={{
                height: 70,
                width: '100%',
                backgroundColor: '#2176E3',
              }}
            />
            <Card
              style={{
                height: 420,
                width: '96%',
                alignSelf: 'center',
                elevation: 10,
                padding: 10,
                position: 'absolute',
                marginTop: 20,
              }}>
              <View
                style={{
                  height: 50,
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderBottomWidth: 0.2,
                  borderBottomColor: 'greyS',
                  paddingTop: 10,
                  paddingHorizontal: 5,
                }}>
                <View
                  style={{
                    height: 25,
                    width: 45,
                    borderColor: '#F73203',
                    borderWidth: 1,
                    justifyContent: 'center',
                    borderRadius: 2,
                  }}>
                  <Text
                    style={{
                      color: '#F73203',
                      alignSelf: 'center',
                    }}>
                    New
                  </Text>
                </View>
                <Text
                  style={{
                    color: 'blue',
                    fontSize: moderateScale(14),
                    fontWeight: '400',
                  }}>
                  Hire Buses & Tempo Traveller for group tr...
                </Text>
                <MaterialCommunityIcons name="greater-than" size={20} />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  paddingHorizontal: 10,
                }}>
                <View
                  style={{
                    marginVertical: 20,
                  }}>
                  <Text
                    style={{fontSize: moderateScale(14), fontWeight: '400'}}>
                    From
                  </Text>
                  <Text
                    style={{
                      fontSize: moderateScale(18),
                      color: 'black',
                      fontWeight: '500',
                    }}>
                    Enter City
                  </Text>
                </View>
                <Avatar.Icon
                  icon="arrow-left-right-bold"
                  color="white"
                  size={35}
                  style={{
                    alignSelf: 'flex-end',
                    backgroundColor: 'grey',
                    alignSelf: 'center',
                  }}
                />
                <View
                  style={{
                    marginVertical: 20,
                  }}>
                  <Text
                    style={{fontSize: moderateScale(14), fontWeight: '400'}}>
                    To
                  </Text>
                  <Text
                    style={{
                      fontSize: moderateScale(18),
                      color: 'black',
                      fontWeight: '500',
                    }}>
                    Enter City
                  </Text>
                </View>
              </View>

              <View
                style={{
                  borderWidth: 0.3,
                  borderColor: 'grey',

                  width: '100%',
                }}
              />
              <View
                style={{
                  marginVertical: 20,
                }}>
                <Text
                  style={{
                    fontSize: moderateScale(14),
                    fontWeight: '400',
                    marginLeft: 10,
                  }}>
                  Depart
                </Text>
                <Text
                  style={{
                    fontSize: moderateScale(18),
                    color: 'black',
                    fontWeight: '500',
                    marginVertical: 5,
                    marginLeft: 10,
                  }}>
                  Select Train
                </Text>
                <Text
                  style={{
                    fontSize: moderateScale(14),
                    fontWeight: '400',
                    marginLeft: 10,
                  }}>
                  Today, Thu
                </Text>
              </View>
              <View style={{borderWidth: 0.3, borderColor: 'grey'}} />
              <View
                style={{
                  marginVertical: 10,
                }}>
                <Text
                  style={{
                    fontSize: moderateScale(15),
                    fontWeight: '400',
                    marginLeft: 10,
                    marginBottom: 20,
                    color: 'black',
                  }}>
                  Travel Preference
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  {travel.map((item, index) => (
                    <View key={index} style={{alignItems: 'center'}}>
                      <MaterialCommunityIcons name={item.iName} size={30} />
                      <Text
                        style={{
                          fontSize: moderateScale(15),
                          fontWeight: '400',
                          marginTop: 10,
                        }}>
                        {item.name}
                      </Text>
                    </View>
                  ))}
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
              marginHorizontal: '2%',
              backgroundColor: 'white',
              borderRadius: 10,
              paddingVertical: 10,
              marginTop: -10,
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: moderateScale(18),
                color: 'black',
                marginBottom: 15,
                marginLeft: 10,
              }}>
              Safe Travel
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
          <View
            style={{
              marginTop: 10,
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
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Bus;
