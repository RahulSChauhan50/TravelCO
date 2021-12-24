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
import Icon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/FontAwesome5';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';

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
const list = [
  {iname: 'piggy-bank', title: 'Affordable interest rates'},
  {iname: 'mobile-alt', title: 'Easy 3-step process'},
  {iname: 'calendar-check', title: 'Upto 12 months EMI options'},
  {iname: 'rupee-sign', title: 'Borrow as little as Rs. 2,000'},
  {iname: 'piggy-bank', title: 'No down payment'},
];
const safe = [{id: 0}, {id: 1}, {id: 2}, {id: 3}, {id: 4}];

class TripMoney extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: 0,
    };
  }

  onPressHandler(id) {
    this.setState({selectedItem: id});
    // console.log(id);
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flexGrow: 1, backgroundColor: '#C6F7C6'}}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              width: '100%',
              height: 50,
              paddingHorizontal: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <MaterialCommunityIcons
              name="less-than"
              size={20}
              color={'black'}
              style={{position: 'absolute', left: 15}}
              onPress={() => this.props.navigation.goBack()}
            />
            <Text
              style={{
                color: 'green',
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              TripMoney
            </Text>
          </View>
          <View style={{maxWidth: '100%', padding: 15}}>
            <Text style={{fontSize: 28, fontWeight: '900', color: 'black'}}>
              Get up to Rs. 1 Lakh Instantly to Book Flights, Hotels {'&'} More!
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '400',
                color: 'black',
                marginTop: 10,
              }}>
              Pay interest on only what you else!
            </Text>
          </View>
          <Card
            style={{
              marginHorizontal: '3%',
              backgroundColor: 'white',
              borderRadius: 10,
              padding: 20,
              marginVertical: 20,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '900',
                color: 'black',
                marginLeft: 10,
              }}>
              Get Started
            </Text>
            <View>
              <TextInput
                theme={{colors: {text:'black'}}}
                label={
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '900',
                      color: 'grey',
                    }}>
                    Enter current pincode
                  </Text>
                }
                left={
                  <TextInput.Icon
                    name={() => (
                      <Icon name={'location'} size={30} color={'grey'} />
                    )}
                  />
                }
                underlineColor="grey"
                activeUnderlineColor="green"
                style={{backgroundColor: 'white', marginVertical: 10}}
              />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: 'green',
                borderRadius: 10,
                justifyContent: 'center',
                height: 50,
                marginTop: 10,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '900',
                  color: 'white',
                  alignSelf: 'center',
                }}>
                check Eligibility
              </Text>
            </TouchableOpacity>
          </Card>
          <View style={{marginBottom: 20}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '900',
                color: 'black',
                marginLeft: 15,
                marginVertical: 10,
              }}>
              Why get TripMoney credit line?
            </Text>
            {list.map((item, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 5,
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 10,
                    height: 40,
                    width: 40,

                    marginLeft: 15,
                    justifyContent: 'center',
                  }}>
                  <FIcon
                    name={item.iname}
                    color={'green'}
                    size={20}
                    style={{alignSelf: 'center'}}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '400',
                    color: 'black',
                    marginLeft: 20,
                  }}>
                  {item.title}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default TripMoney;
