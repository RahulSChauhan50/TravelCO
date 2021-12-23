import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TextInput,
} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {
  Avatar,
  Card,
  Appbar,
  ToggleButton,
  TouchableRipple,
  Checkbox,
} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import Carousel from 'react-native-snap-carousel';

const horizontalMargin = 10;
const slideWidth = 280;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;

const itemHeight = 200;
const offer = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvMnPhxiHD42Q7XTcM3H-HPtN7_9cVZwFDQ&usqp=CAU',
    status: 'In review',
    id: '01',
    txt: 'How to view PNR Status',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Active',
    id: '02',
    txt: 'How to use Voice',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5H4kG05ZRQ9ZevjoRMZr-YnJwoxd9WMQs3g&usqp=CAU',
    status: 'Pending',
    id: '03',
    txt: 'How to Book in 10+',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Ongoing',
    id: '06',
    txt: 'How to Enjoy 24*7',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Ongoing',
    id: '06',
    txt: 'Seat Assistance',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Ongoing',
    id: '06',
    txt: 'Instant Refund',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Ongoing',
    id: '06',
    txt: 'PNR Confirmation',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvMnPhxiHD42Q7XTcM3H-HPtN7_9cVZwFDQ&usqp=CAU',
    status: 'In review',
    id: '01',
    txt: 'How to view PNR Status',
  },
];
class ByTrain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
      train: '',
    };
  }

  _renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Card
          style={{
            width: 300,
            height: 200,
            marginHorizontal: 5,
            elevation: 10,
            marginBottom: 10,
          }}>
          <Image
            resizeMode="cover"
            source={{uri: item.img}}
            style={{
              height: 200,
              width: '100%',
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
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{flexGrow: 1, backgroundColor: 'white'}}>
          <View
            style={{
              backgroundColor: 'white',
              paddingHorizontal: 10,
              elevation: 10,
            }}>
            <TextInput
              placeholder="Search Train Name or Number"
              backgroundColor={'white'}
              onChangeText={text => this.setState({train: text})}
              value={this.state.train}
              style={{
                flex: 1,
                color: 'grey',
                fontSize: moderateScale(15),
              }}
            />
          </View>
          <View
            style={{
              marginVertical: 10,
              elevation: 10,
              backgroundColor: 'white',
              paddingVertical: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: moderateScale(33),
                  fontWeight: 'bold',
                  color: 'black',
                  marginHorizontal: 10,
                }}>
                23
              </Text>
              <View>
                <Text
                  style={{
                    fontSize: moderateScale(15),
                    fontWeight: '400',
                    color: 'black',
                  }}>
                  December
                </Text>
                <Text
                  style={{
                    fontSize: moderateScale(16),
                    fontWeight: '400',
                  }}>
                  Thursday
                </Text>
              </View>
              <MaterialCommunityIcons
                name="calendar-month"
                size={25}
                style={{marginLeft: '5%'}}
              />
              <View
                style={{
                  borderRadius: 5,
                  borderColor: 'grey',
                  borderWidth: 0.5,
                  padding: 5,
                  elevation: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: 5,
                  backgroundColor: 'white',
                }}>
                <Text
                  style={{
                    fontSize: moderateScale(13),
                    fontWeight: '400',
                    color: 'black',
                  }}>
                  23 Dec
                </Text>
                <Text
                  style={{
                    fontSize: moderateScale(13),
                    fontWeight: '400',
                    color: 'black',
                  }}>
                  Today
                </Text>
              </View>
              <View
                style={{
                  borderRadius: 5,
                  borderColor: 'grey',
                  borderWidth: 0.5,
                  padding: 5,
                  elevation: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: 5,
                  backgroundColor: 'white',
                }}>
                <Text
                  style={{
                    fontSize: moderateScale(13),
                    fontWeight: '400',
                    color: 'black',
                  }}>
                  24 Dec
                </Text>
                <Text
                  style={{
                    fontSize: moderateScale(13),
                    fontWeight: '400',
                    color: 'black',
                  }}>
                  Fri
                </Text>
              </View>
              <View
                style={{
                  borderRadius: 5,
                  borderColor: 'grey',
                  borderWidth: 0.5,
                  padding: 5,
                  elevation: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: 5,
                  backgroundColor: 'white',
                }}>
                <Text
                  style={{
                    fontSize: moderateScale(13),
                    fontWeight: '400',
                    color: 'black',
                  }}>
                  25 Dec
                </Text>
                <Text
                  style={{
                    fontSize: moderateScale(13),
                    fontWeight: '400',
                    color: 'black',
                  }}>
                  Sat
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#47AFF1',
              borderRadius: 5,
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 15,
              marginVertical: 10,
              elevation: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: moderateScale(17),
              }}>
              Check Availability
            </Text>
          </TouchableOpacity>
          <Carousel
            data={offer}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            autoplay={true}
            autoplayInterval={3000}
            firstItem={1}
          />
          <Carousel
            data={offer}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            autoplay={true}
            autoplayInterval={3000}
            firstItem={1}
          />
          <Text
            style={{
              color: 'black',
              fontSize: moderateScale(17),
              margin: 10,
              fontWeight: '700',
            }}>
            Train Bookings: Explore These Features
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '100%',
              marginVertical: 15,
              justifyContent: 'center',
            }}>
            {offer.map((item, index) => (
              <Card
                key={index}
                style={{
                  width: '47%',
                  height: 200,
                  elevation: 10,
                }}>
                <Image
                  resizeMode="cover"
                  source={{uri: item.img}}
                  style={{
                    height: 200,
                    width: '100%',
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
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  slide: {
    width: itemWidth,
    height: itemHeight,
    paddingHorizontal: horizontalMargin,
    marginLeft: -15,
    marginVertical: 20,
  },
  slideInnerContainer: {
    width: slideWidth,
    flex: 1,
    // other styles for the inner container
  },
});
export default ByTrain;
