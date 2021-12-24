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

class MyTrips extends Component {
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
            title="My Trips"
            titleStyle={{fontSize: moderateScale(20)}}
          />
          <MaterialCommunityIcons name="refresh" size={30} color={'white'} />
        </Appbar>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flexGrow: 1, backgroundColor: '#D1E5FE'}}>
          <View
            style={{
              flex: 1,
              width: '100%',
              backgroundColor: '#D1E5FE',
              paddingTop: 50,
            }}>
            <View
              style={{
                marginTop: 30,
                alignSelf: 'center',
                justifyContent: 'center',
                marginBottom: 20,
                width: '100%',
                height: 200,
                flex: 1,
              }}>
              <Image
                source={require('../../images/forest.png')}
                style={{
                  height: 200,
                  width: 200,
                  alignSelf: 'center',
                  marginRight: 20,
                }}
                resizeMode={'cover'}
              />
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: moderateScale(18),
                  color: 'black',
                  alignSelf: 'center',
                }}>
                You have no upcoming
              </Text>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: moderateScale(12),
                  color: 'black',
                  alignSelf: 'center',
                  marginTop: 5,
                }}>
                Here are some amazing offers to kickstart your trip planning
              </Text>
              <View
                style={{
                  marginVertical: 25,
                  width: '30%',
                  alignSelf: 'center',
                  height: 3,
                  backgroundColor: '#C3D8EE',
                }}
              />
            </View>
            <View
              style={{
                marginTop: 50,
                height: 270,
                borderRadius: 5,
                padding: 2,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: moderateScale(18),
                    color: 'black',
                    marginLeft: 10,
                  }}>
                  Offer for your first trip
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
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
                  position: 'absolute',
                  marginTop: 60,
                  marginLeft: 10,
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
                        backgroundColor: 'white',
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
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default MyTrips;
