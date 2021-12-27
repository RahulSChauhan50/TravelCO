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
import DateTimePicker from '@react-native-community/datetimepicker';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import Carousel from 'react-native-snap-carousel';

const horizontalMargin = 10;
const slideWidth = 280;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;

const itemHeight = 200;

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

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
      date: new Date(),
      date2: '',
      date3: '',
      show: false,
      mode: 'date',
      month: '',
      day: '',
      Date: '',
      shortMonth: '',
      day2: '',
      Date2: '',
      shortMonth2: '',
      day3: '',
      Date3: '',
      shortMonth3: '',
    };
  }

  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    this.setState({
      show: Platform.OS === 'ios',
      date: currentDate,
    });
    this.fetchDate();
  };
  showMode = currentMode => {
    this.setState({
      show: true,
      mode: currentMode,
    });
  };
  showDatepicker = () => {
    this.showMode('date');
  };
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

  fetchDate = () => {
    console.log(this.state.date.toDateString());
    const fullDate = this.state.date.toDateString();
    if (Number(this.state.date2) <= 2) {
      var mnth2 = this.state.date.getMonth() + 1;
      var mnth3 = this.state.date.getMonth() + 1;
    } else {
      var mnth2 = this.state.date.getMonth();
      var mnth3 = this.state.date.getMonth();
    }
    console.log(mnth2, mnth3);
    let arr = fullDate.split(' ');
    this.setState({
      Date: arr[2],
      day: arr[0],
      shortMonth: arr[1],
      month: monthNames[this.state.date.getMonth()],
      // shortMonth2: monthNames[actualMonth],
      // shortMonth3: monthNames[actualMonth2],
    });
    console.log('date', this.state.shortMonth2, this.state.shortMonth3);
    console.log(this.state.Date, this.state.month);
  };
  componentDidMount() {
    this.setState({
      date2: this.state.date.getDate() + 1,
      date3: this.state.date.getDate() + 2,
    });
    console.log(this.state.date2, this.state.date3);
    this.onChange();
  }

  render() {
    console.log('date', this.state.shortMonth2, this.state.shortMonth3);
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          style={{flexGrow: 1, backgroundColor: 'white'}}
          showsVerticalScrollIndicator={false}>
          <View
            style={{
              backgroundColor: 'white',
              paddingHorizontal: 10,
              elevation: 10,
            }}>
            <TextInput
              placeholder="Search Train Name or Number"
              placeholderTextColor={'grey'}
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
                {this.state.Date}
              </Text>
              <View>
                <Text
                  style={{
                    fontSize: moderateScale(15),
                    fontWeight: '400',
                    color: 'black',
                  }}>
                  {this.state.month}
                </Text>
                <Text
                  style={{
                    fontSize: moderateScale(16),
                    fontWeight: '400',
                    color: 'grey',
                  }}>
                  {this.state.day}day
                </Text>
              </View>
              <MaterialCommunityIcons
                name="calendar-month"
                size={25}
                style={{marginLeft: '5%'}}
                color={'grey'}
                onPress={this.showDatepicker}
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
                  {this.state.Date} {this.state.shortMonth}
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
                  {this.state.date2} {this.state.shortMonth}
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
                  {this.state.date3} {this.state.shortMonth}
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
            {this.state.show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={this.state.date}
                mode={this.state.mode}
                is24Hour={true}
                display="default"
                onChange={this.onChange}
              />
            )}
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
