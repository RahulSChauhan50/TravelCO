import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
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
class Trains extends Component {
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
            icon="train"
            size={moderateScale(40)}
            color="#2176E3"
            style={{backgroundColor: '#dee2e6'}}
          />
          <Appbar.Content
            title="IRCTC Trains"
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
                  width: '90%',
                  height: 30,
                  borderRadius: 30,
                  flexDirection: 'row',
                  backgroundColor: '#DDEBF7',
                  justifyContent: 'space-between',
                  alignSelf: 'center',
                }}>
                <TouchableRipple
                  onPress={() => this.setState({ButtonToggle: 'bookTrain'})}
                  style={{
                    alignItems: 'center',
                    backgroundColor:
                      this.state.ButtonToggle === 'bookTrain'
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
                        this.state.ButtonToggle === 'bookTrain'
                          ? 'white'
                          : '#2176E3',
                    }}>
                    Book Train
                  </Text>
                </TouchableRipple>
                <TouchableRipple
                  onPress={() => this.setState({ButtonToggle: 'PNRStatus'})}
                  style={{
                    alignItems: 'center',
                    backgroundColor:
                      this.state.ButtonToggle === 'PNRStatus'
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
                        this.state.ButtonToggle === 'PNRStatus'
                          ? 'white'
                          : '#2176E3',
                    }}>
                    PNRStatus
                  </Text>
                </TouchableRipple>
                <TouchableRipple
                  onPress={() => this.setState({ButtonToggle: 'trainStatus'})}
                  style={{
                    alignItems: 'center',
                    backgroundColor:
                      this.state.ButtonToggle === 'trainStatus'
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
                        this.state.ButtonToggle === 'trainStatus'
                          ? 'white'
                          : '#2176E3',
                    }}>
                    Train Status
                  </Text>
                </TouchableRipple>
              </View>
              <View
                style={{
                  marginVertical: 20,
                }}>
                <Text>From</Text>
                <Text
                  style={{
                    fontSize: moderateScale(18),
                    color: 'black',
                    fontWeight: '500',
                  }}>
                  Select Station
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
                <Text>To</Text>
                <Text
                  style={{
                    fontSize: moderateScale(18),
                    color: 'black',
                    fontWeight: '500',
                  }}>
                  Select Station
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
                  marginVertical: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text>Date</Text>
                  <Text
                    style={{
                      fontSize: moderateScale(18),
                      color: 'black',
                      fontWeight: '500',
                    }}>
                    07 Dec' 21
                  </Text>
                  <Text>Today, Tuesday</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: scale(180),
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <View
                      style={{
                        backgroundColor: '#e2e2e2',
                        padding: 10,
                        alignItems: 'center',
                        borderBottomColor: 'green',
                        borderBottomWidth: 1,
                      }}>
                      <Text style={{fontSize: moderateScale(10)}}>Today</Text>
                    </View>
                    <Text style={{color: 'green', fontSize: moderateScale(10)}}>
                      Tatkal open
                    </Text>
                  </View>
                  <View>
                    <View
                      style={{
                        backgroundColor: '#e2e2e2',
                        padding: 10,
                        alignItems: 'center',
                        borderBottomColor: 'green',
                        borderBottomWidth: 1,
                      }}>
                      <Text style={{fontSize: moderateScale(10)}}>
                        Tomorrow
                      </Text>
                    </View>
                    <Text style={{color: 'green', fontSize: moderateScale(10)}}>
                      Tatkal open
                    </Text>
                  </View>
                  <View>
                    <View
                      style={{
                        backgroundColor: '#e2e2e2',
                        padding: 10,
                        alignItems: 'center',
                      }}>
                      <Text style={{fontSize: moderateScale(10)}}>
                        Day After
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <TouchableRipple
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
              </TouchableRipple>
            </Card>
          </View>
          <View style={{marginHorizontal: '2%'}}>
            <Text style={{fontWeight: '700', fontSize: moderateScale(20)}}>
              Train Information Services
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}>
              <Card
                style={{
                  width: scale(150),
                  height: 50,
                  backgroundColor: 'white',
                  borderRadius: 5,
                  elevation: 5,
                  justifyContent: 'flex-start',
                  paddingStart: 5,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    flex: 1,
                  }}>
                  <MaterialCommunityIcons
                    name="information"
                    size={moderateScale(30)}
                  />
                  <Text style={{fontWeight: '700', color: '#2176E3'}}>
                    Check PNR
                  </Text>
                </View>
              </Card>
              <Card
                style={{
                  width: scale(150),
                  height: 50,
                  backgroundColor: 'white',
                  borderRadius: 5,
                  elevation: 5,
                  justifyContent: 'flex-start',
                  paddingStart: 5,
                }}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                  <MaterialCommunityIcons
                    name="information"
                    size={moderateScale(30)}
                  />
                  <Text
                    style={{
                      fontWeight: '700',
                      color: '#2176E3',
                    }}>
                    Check train {'\n'} running status
                  </Text>
                </View>
              </Card>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}>
              <Card
                style={{
                  width: scale(150),
                  height: 50,
                  backgroundColor: 'white',
                  borderRadius: 5,
                  elevation: 5,
                  justifyContent: 'flex-start',
                  paddingStart: 5,
                }}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                  <MaterialCommunityIcons
                    name="information"
                    size={moderateScale(30)}
                  />
                  <Text style={{fontWeight: '700', color: '#2176E3'}}>
                    Plateform Locator
                  </Text>
                </View>
              </Card>
              <Card
                style={{
                  width: scale(150),
                  height: 50,
                  backgroundColor: 'white',
                  borderRadius: 5,
                  elevation: 5,
                  justifyContent: 'flex-start',
                  paddingStart: 5,
                }}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                  <MaterialCommunityIcons
                    name="information"
                    size={moderateScale(30)}
                  />
                  <Text
                    style={{
                      fontWeight: '700',
                      color: '#2176E3',
                    }}>
                    Train Schedule
                  </Text>
                </View>
              </Card>
            </View>
          </View>
          <View style={{marginHorizontal: '2%', marginTop: 20}}>
            <Text style={{fontWeight: '700', fontSize: moderateScale(20)}}>
              IRCTC Settings
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}>
              <Card
                style={{
                  width: scale(150),
                  height: 50,
                  backgroundColor: 'white',
                  borderRadius: 5,
                  elevation: 5,
                  justifyContent: 'flex-start',
                  paddingStart: 5,
                }}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                  <MaterialCommunityIcons name="cog" size={moderateScale(30)} />
                  <Text style={{fontWeight: '700', color: '#2176E3'}}>
                    Forgot {'\n'} IRCTC ID
                  </Text>
                </View>
              </Card>
              <Card
                style={{
                  width: scale(150),
                  height: 50,
                  backgroundColor: 'white',
                  borderRadius: 5,
                  elevation: 5,
                  justifyContent: 'flex-start',
                  paddingStart: 5,
                }}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                  <MaterialCommunityIcons name="cog" size={moderateScale(30)} />
                  <Text
                    style={{
                      fontWeight: '700',
                      color: '#2176E3',
                    }}>
                    Add IRCTC ID
                  </Text>
                </View>
              </Card>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}>
              <Card
                style={{
                  width: scale(150),
                  height: 50,
                  backgroundColor: 'white',
                  borderRadius: 5,
                  elevation: 5,
                  justifyContent: 'flex-start',
                  paddingStart: 5,
                }}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                  <MaterialCommunityIcons name="cog" size={moderateScale(30)} />
                  <Text style={{fontWeight: '700', color: '#2176E3'}}>
                    Create {'\n'} IRCTC ID
                  </Text>
                </View>
              </Card>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: '2%',
              marginVertical: 10,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Announcements
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
                  }}>
                  <Image
                    source={{uri: item.img}}
                    style={{
                      width: '100%',
                      height: 70,
                      borderRadius: 5,
                      marginEnd: 10,
                    }}
                  />
                  <View style={{padding: 10}}>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                      }}>
                      Get Confirmed Train Ticket Or 3X Refund
                    </Text>
                    <Text>Limited Period</Text>
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

export default Trains;
