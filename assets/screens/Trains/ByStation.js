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
  Platform,
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
import {connect} from 'react-redux';
import {
  setStartingStationAction,
  setFinalStationAction,
} from '../../Redux/index';
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
class ByStation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
      date: new Date(),
      show: false,
      mode: 'date',
      month: '',
      day: '',
      Date: '',
      shortMonth: '',
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

    let arr = fullDate.split(' ');
    this.setState({
      Date: arr[2],
      day: arr[0],
      shortMonth: arr[1],
      month: monthNames[this.state.date.getMonth()],
    });
    console.log(this.state.Date, this.state.month);
  };
  componentDidMount() {
    this.onChange();
  }
  render() {
    // console.log(this.state.date.toDateString());
    console.log(this.props.startingStation, this.props.finalStation);
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          style={{flexGrow: 1, backgroundColor: 'white'}}
          showsVerticalScrollIndicator={false}>
          <View
            style={{
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('SearchBar', {setStart: true})
              }>
              <View
                style={{
                  flexDirection: 'row',
                  elevation: 10,
                  backgroundColor: 'white',
                  padding: 10,
                  paddingVertical: 20,
                  marginVertical: 2,
                }}>
                <View
                  style={{
                    elevation: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 70,
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    marginHorizontal: 10,
                    backgroundColor: 'white',
                  }}>
                  <Text
                    style={{
                      fontSize: moderateScale(18),
                      fontWeight: '700',
                      color: 'black',
                      padding: 2,
                    }}>
                    START
                  </Text>
                </View>
                <Text style={{fontSize: 18, fontWeight: '700', color: 'black'}}>
                  {this.props.startingStation === null
                    ? 'Select Starting Station'
                    : this.props.startingStation}
                </Text>
              </View>
            </TouchableOpacity>
            {/* <View style={{height: 1, backgroundColor: '#C3CAD3'}} /> */}
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('SearchBar', {setStart: false})
              }>
              <View
                style={{
                  flexDirection: 'row',
                  elevation: 10,
                  backgroundColor: 'white',
                  padding: 10,
                  paddingVertical: 20,
                }}>
                <View
                  style={{
                    elevation: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 70,
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    marginHorizontal: 10,
                    backgroundColor: 'white',
                  }}>
                  <Text
                    style={{
                      fontSize: moderateScale(18),
                      fontWeight: '700',
                      color: 'black',
                      padding: 2,
                    }}>
                    END
                  </Text>
                </View>
                <Text style={{fontSize: 18, fontWeight: '700', color: 'black'}}>
                  {this.props.finalStation === null
                    ? 'Select Final Station'
                    : this.props.finalStation}
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                position: 'absolute',
                elevation: 10,
                backgroundColor: 'white',
                right: 20,
                top: 50,
                borderColor: 'grey',
                borderWidth: 0.5,
              }}>
              <MaterialCommunityIcons
                name="arrow-down"
                size={30}
                color={'black'}
              />
            </View>
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
                  }}>
                  {this.state.day}day
                </Text>
              </View>
              <MaterialCommunityIcons
                name="calendar-month"
                size={25}
                style={{marginLeft: '5%'}}
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
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}>
              <MaterialCommunityIcons
                name={
                  this.state.check == true
                    ? 'checkbox-marked'
                    : 'checkbox-blank-outline'
                }
                size={30}
                color={this.state.check == true ? '#47AFF1' : 'grey'}
                onPress={() =>
                  this.setState({
                    check: !this.state.check,
                  })
                }
              />
              <Text
                style={{
                  marginLeft: 10,
                  color: 'black',
                  fontSize: moderateScale(11),
                }}>
                Show this trains with both non-AC and AC coaches
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
              Search Trains
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

const mapStateToProps = state => {
  return {
    startingStation: state.stationReducer.startingStation,
    finalStation: state.stationReducer.finalStation,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setStartingStation: parameter => {
      dispatch(setStartingStationAction(parameter));
    },
    setFinalStation: parameter => {
      dispatch(setFinalStationAction(parameter));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ByStation);
