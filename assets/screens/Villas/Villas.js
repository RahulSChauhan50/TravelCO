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
import {Icon} from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
const data = [{id: 1}, {id: 2}];
const data2 = [
  {
    iname: 'qrcode-scan',
    header: 'Local ID Accepted',
    disc: 'Carry your identity card and enjoy a hastle free stay',
  },
  {
    iname: 'file-lock',
    header: 'Local ID Accepted',
    disc: 'Carry your identity card and enjoy a hastle free stay',
  },
  {
    iname: 'safe-square',
    header: 'Local ID Accepted',
    disc: 'Carry your identity card and enjoy a hastle free stay',
  },
];
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
    city: 'Hydrabad',
    dist: '8 KM form',
    off1: 'Free cancelation',
    off2: 'Good breakfast, Good place ',
    mainp: '2999',
    actualp: '510',
    room: 'for 1 room per night',
  },
];
const offer2 = [
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

export default class Villas extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Appbar style={{backgroundColor: '#2274E0', elevation: 0}}>
          <Appbar.Action
            icon="arrow-left"
            onPress={() => this.props.navigation.goBack()}
          />
          <Avatar.Icon
            icon="home"
            size={moderateScale(30)}
            color="#2274E0"
            style={{backgroundColor: '#dee2e6'}}
          />
          <Appbar.Content
            title="Villas & Appartments"
            titleStyle={{fontSize: moderateScale(18)}}
          />
        </Appbar>
        <ScrollView style={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
          <View
            style={{
              height: verticalScale(230),
              marginLeft: '3%',
              width: '97%',
              alignSelf: 'center',
              backgroundColor: 'white',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              marginTop: 20,
            }}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: moderateScale(18),
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
                      paddingTop: 15,
                    }}>
                    <View
                      style={{
                        backgroundColor: '#F5DDD9',
                        height: 20,
                        width: 100,
                        justifyContent: 'center',
                        flexDirection: 'row',
                        borderRadius: 5,
                      }}>
                      <MaterialCommunityIcons
                        size={15}
                        color="#F72D60"
                        name={'home'}
                        style={{alignSelf: 'center', marginRight: 3}}
                      />
                      <Text
                        style={{
                          color: '#F72D60',
                          fontSize: moderateScale(11),
                          alignSelf: 'center',
                          marginRight: 3,
                          fontWeight: '500',
                        }}>
                        Villas & Apts
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
          <Text
            style={{
              fontWeight: '500',
              fontSize: moderateScale(18),
              color: 'black',
              marginLeft: 15,
              marginTop: 15,
            }}>
            Choose a home-like Stay in Delhi
          </Text>
          <Text
            style={{
              fontSize: moderateScale(13),
              color: 'black',
              marginLeft: 15,
              marginTop: 2,
            }}>
            Based on recent searches
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '100%',
              marginTop: 15,
            }}>
            {offer.map((item, index) => (
              <Card
                style={{
                  width: '46%',
                  height: verticalScale(350),
                  borderRadius: 5,
                  marginHorizontal: '2%',
                  elevation: 5,
                  marginBottom: 10,
                }}
                key={index}>
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

                <View style={{justifyContent: 'space-between', padding: 10}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <MaterialCommunityIcons
                      name="star"
                      size={15}
                      color="#F72D60"
                    />
                    <MaterialCommunityIcons
                      name="star"
                      size={15}
                      color="#F72D60"
                    />
                    <MaterialCommunityIcons
                      name="star"
                      size={15}
                      color="#F72D60"
                    />
                    <Text
                      style={{color: '#F72D60', fontSize: 12, marginLeft: 3}}>
                      Homestay
                    </Text>
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
                      //justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        backgroundColor: '#20db4c',
                        borderRadius: 3,
                        paddingHorizontal: 7,
                        paddingVertical: 2,
                        width: 50,
                        marginTop: verticalScale(5),
                      }}>
                      <Text
                        style={{
                          fontWeight: '500',
                          color: 'white',
                        }}>
                        3.9/5
                      </Text>
                    </View>
                    <Text style={{textAlignVertical: 'center', marginLeft: 5}}>
                      61 Ratings
                    </Text>
                  </View>

                  <View>
                    <Text>from</Text>
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
              </Card>
            ))}
          </View>
          <View
            style={{
              marginHorizontal: '2%',
              backgroundColor: 'white',
              alignItems: 'center',
              borderRadius: 10,
              height: 50,
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: moderateScale(18),
                color: 'blue',
                marginRight: 5,
              }}>
              View More Like This
            </Text>
            <MaterialCommunityIcons
              size={20}
              color={'blue'}
              name="greater-than"
            />
          </View>
          <Text
            style={{
              fontWeight: '500',
              fontSize: moderateScale(18),
              color: 'black',
              marginLeft: 15,
              marginTop: 15,
            }}>
            Happening Hostels
          </Text>
          <Text
            style={{
              fontSize: moderateScale(13),
              color: 'black',
              marginLeft: 15,
              marginTop: 2,
            }}>
            Based on recent searches
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '100%',
              marginTop: 15,
            }}>
            {offer.map((item, index) => (
              <Card
                style={{
                  width: '46%',
                  height: verticalScale(350),
                  borderRadius: 5,
                  marginHorizontal: '2%',
                  elevation: 5,
                  marginBottom: 10,
                }}
                key={index}>
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

                <View style={{justifyContent: 'space-between', padding: 10}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <MaterialCommunityIcons
                      name="star"
                      size={15}
                      color="#F72D60"
                    />
                    <MaterialCommunityIcons
                      name="star"
                      size={15}
                      color="#F72D60"
                    />
                    <MaterialCommunityIcons
                      name="star"
                      size={15}
                      color="#F72D60"
                    />
                    <Text
                      style={{color: '#F72D60', fontSize: 12, marginLeft: 3}}>
                      Homestay
                    </Text>
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
                      //justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        backgroundColor: '#20db4c',
                        borderRadius: 3,
                        paddingHorizontal: 7,
                        paddingVertical: 2,
                        width: 50,
                        marginTop: verticalScale(5),
                      }}>
                      <Text
                        style={{
                          fontWeight: '500',
                          color: 'white',
                        }}>
                        3.9/5
                      </Text>
                    </View>
                    <Text style={{textAlignVertical: 'center', marginLeft: 5}}>
                      61 Ratings
                    </Text>
                  </View>

                  <View>
                    <Text>from</Text>
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
              </Card>
            ))}
          </View>
          <View
            style={{
              marginHorizontal: '2%',
              backgroundColor: 'white',
              alignItems: 'center',
              borderRadius: 10,
              height: 50,
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: moderateScale(18),
                color: 'blue',
                marginRight: 5,
              }}>
              View More Like This
            </Text>
            <MaterialCommunityIcons
              size={20}
              color={'blue'}
              name="greater-than"
            />
          </View>
          <View style={{marginTop: 20, width: '100%'}}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: moderateScale(18),
                color: 'black',
                marginLeft: 15,
              }}>
              Trending Properties in India
            </Text>
            <Text
              style={{
                fontSize: moderateScale(13),
                color: 'black',
                marginLeft: 15,
                marginTop: 2,
                marginBottom: 10,
              }}>
              Based on recent searches
            </Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={offer2}
              renderItem={({item, index, separators}) => (
                <Card
                  style={{
                    width: scale(130),
                    height: verticalScale(350),
                    borderRadius: 5,
                    marginHorizontal: 5,
                    elevation: 5,
                    marginBottom: 10,
                  }}>
                  <Image
                    resizeMode="cover"
                    source={{uri: item.img}}
                    style={{
                      height: verticalScale(100),
                      width: '90%',
                      borderRadius: 5,
                      marginTop: 10,
                      alignSelf: 'center',
                    }}
                  />

                  <View style={{justifyContent: 'space-between', padding: 10}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <MaterialCommunityIcons
                        name="star"
                        size={15}
                        color="#F72D60"
                      />
                      <MaterialCommunityIcons
                        name="star"
                        size={15}
                        color="#F72D60"
                      />
                      <MaterialCommunityIcons
                        name="star"
                        size={15}
                        color="#F72D60"
                      />
                      <Text
                        style={{color: '#F72D60', fontSize: 12, marginLeft: 3}}>
                        Homestay
                      </Text>
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
                        //justifyContent: 'center',
                      }}>
                      <View
                        style={{
                          backgroundColor: '#20db4c',
                          borderRadius: 3,
                          paddingHorizontal: 7,
                          paddingVertical: 2,
                          width: 50,
                          marginTop: verticalScale(5),
                        }}>
                        <Text
                          style={{
                            fontWeight: '500',
                            color: 'white',
                          }}>
                          3.9/5
                        </Text>
                      </View>
                      <Text
                        style={{textAlignVertical: 'center', marginLeft: 5}}>
                        61 Ratings
                      </Text>
                    </View>

                    <View>
                      <Text>from</Text>
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
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderTopWidth: 0.2,
                      borderTopColor: 'grey',
                      paddingTop: 5,
                      //justifyContent: 'center',
                    }}>
                    <View style={{marginLeft: 30}}>
                      <Text>More in</Text>
                      <Text
                        style={{
                          color: 'blue',
                          fontSize: moderateScale(15),
                          fontWeight: '500',
                        }}>
                        {item.city}
                      </Text>
                    </View>
                    <MaterialCommunityIcons
                      size={20}
                      color={'blue'}
                      name="greater-than"
                      style={{marginRight: 10}}
                    />
                  </View>
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
