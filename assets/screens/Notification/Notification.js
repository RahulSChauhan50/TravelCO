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
import {Item} from 'react-native-paper/lib/typescript/components/List/List';
import GlobalStyles from '../../Style/GlobalStyles';
const offer = [
  {
    iname: 'office-building',
    status: 'In review',
    id: '01',
    time: '9 mins ago',
    header: '2024: Is Mamata Banerjee punching above her weight?',
    disc: 'Banerjee’s actions appear driven by the temptation to exploit Congress leaders’ diminished self-esteem which makes them vulnerable to switching parties',
  },
  {
    iname: 'airplane-takeoff',
    status: 'Active',
    id: '02',
    time: '18 mins ago',
    header: 'City records sharp dip in temperature, but winter isn’t here yet',
    disc: 'Unseasonal rain earlier this month sent the temperature dropping to 18.4 degrees Celsius on December 5. This follows a steep drop in temperature in Mumbai since Monday evening',
  },
  {
    iname: 'office-building',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5H4kG05ZRQ9ZevjoRMZr-YnJwoxd9WMQs3g&usqp=CAU',
    status: 'Pending',
    id: '03',
    time: '38 mins ago',
    header:
      'Hunting dog spots a cat but stands still like a statue. Watch funny video',
    disc: 'This Instagram video shows a hunting dog called Pepper who stands like a statue when she sees a cat while on a walk.',
  },
  {
    iname: 'office-building',
    status: 'Ongoing',
    id: '06',
    time: '6 hrs ago',
    header: '2024: Is Mamata Banerjee punching above her weight?',
    disc: 'This Instagram video shows a hunting dog called Pepper who stands like a statue when she sees a cat while on a walk.',
  },
  {
    iname: 'airplane-takeoff',
    status: 'Ongoing',
    id: '06',
    time: '9 mins ago',
    header: 'City records sharp dip in temperature, but winter isn’t here yet',
    disc: 'This Instagram video shows a hunting dog called Pepper who stands like a statue when she sees a cat while on a walk.',
  },
  {
    iname: 'office-building',
    status: 'Ongoing',
    id: '06',
    time: '25 mins ago',
    header: 'City records sharp dip in temperature, but winter isn’t here yet',
    disc: 'This Instagram video shows a hunting dog called Pepper who stands like a statue when she sees a cat while on a walk.',
  },
  {
    iname: 'airplane-takeoff',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Ongoing',
    id: '06',
    time: '9 mins ago',
    header: '2024: Is Mamata Banerjee punching above her weight?',
    disc: 'This Instagram video shows a hunting dog called Pepper who stands like a statue when she sees a cat while on a walk.',
  },
  {
    iname: 'office-building',
    status: 'In review',
    id: '01',
    time: '2 hrs ago',
    header: '2024: Is Mamata Banerjee punching above her weight?',
    disc: 'Banerjee’s actions appear driven by the temptation to exploit Congress leaders’ diminished self-esteem which makes them vulnerable to switching parties',
  },
  {
    iname: 'airplane-takeoff',
    status: 'Active',
    id: '02',
    time: '30 mins ago',
    header: 'City records sharp dip in temperature, but winter isn’t here yet',
    disc: 'Unseasonal rain earlier this month sent the temperature dropping to 18.4 degrees Celsius on December 5. This follows a steep drop in temperature in Mumbai since Monday evening',
  },
  {
    iname: 'office-building',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5H4kG05ZRQ9ZevjoRMZr-YnJwoxd9WMQs3g&usqp=CAU',
    status: 'Pending',
    id: '03',
    time: '8 hrs ago',
    header:
      'Hunting dog spots a cat but stands still like a statue. Watch funny video',
    disc: 'This Instagram video shows a hunting dog called Pepper who stands like a statue when she sees a cat while on a walk.',
  },
  {
    iname: 'office-building',
    status: 'Ongoing',
    id: '06',
    time: '9 mins ago',
    header: '2024: Is Mamata Banerjee punching above her weight?',
    disc: 'This Instagram video shows a hunting dog called Pepper who stands like a statue when she sees a cat while on a walk.',
  },
  {
    iname: 'airplane-takeoff',
    status: 'Ongoing',
    id: '06',
    time: '9 mins ago',
    header: 'City records sharp dip in temperature, but winter isn’t here yet',
    disc: 'This Instagram video shows a hunting dog called Pepper who stands like a statue when she sees a cat while on a walk.',
  },
  {
    iname: 'office-building',
    status: 'Ongoing',
    time: '9 mins ago',
    id: '06',
    header: 'City records sharp dip in temperature, but winter isn’t here yet',
    disc: 'This Instagram video shows a hunting dog called Pepper who stands like a statue when she sees a cat while on a walk.',
  },
  {
    iname: 'airplane-takeoff',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Ongoing',
    time: '9 mins ago',
    id: '06',
    header: '2024: Is Mamata Banerjee punching above her weight?',
    disc: 'This Instagram video shows a hunting dog called Pepper who stands like a statue when she sees a cat while on a walk.',
  },
];
const list = [
  {name: '1st Booking', id: 0},
  {name: 'All', id: 1},
  {name: 'Bank Offers', id: 2},
  {name: 'Flights', id: 3},
  {name: 'Hotels', id: 4},
  {name: 'Cabs', id: 5},
  {name: 'Bus', id: 6},
  {name: 'Trains', id: 7},
  {name: 'Metro', id: 8},
  {name: 'Self Drive', id: 9},
];
const safe = [{id: 0}, {id: 1}, {id: 2}, {id: 3}, {id: 4}];

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all: 1,
      offer: 0,
    };
  }

  onPressHandler(id) {
    this.setState({selectedItem: id});
    // console.log(id);
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
            title="Notifications"
            titleStyle={{fontSize: moderateScale(18)}}
          />
        </Appbar>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flexGrow: 1, backgroundColor: '#E4E4ED'}}>
          <View
            style={{
              height: 70,
              marginBottom: 10,
              backgroundColor: 'white',
              elevation: 5,
              flexDirection: 'row',
              paddingHorizontal: 10,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => this.setState({all: 1, offer: 0})}
              style={{
                height: 35,
                borderRadius: 25,
                paddingHorizontal: 20,
                alignSelf: 'center',
                justifyContent: 'center',
                borderWidth: 0.5,
                borderColor: 'grey',
                marginHorizontal: 5,
                backgroundColor: this.state.all === 1 ? 'blue' : 'white',
              }}>
              <Text
                style={{
                  color: this.state.all === 1 ? 'white' : 'grey',
                  fontSize: moderateScale(14),
                  fontWeight: '500',
                }}>
                {' '}
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({all: 0, offer: 1})}
              style={{
                height: 35,
                borderRadius: 25,
                paddingHorizontal: 20,
                alignSelf: 'center',
                justifyContent: 'center',
                borderWidth: 0.5,
                borderColor: 'grey',
                marginHorizontal: 5,
                backgroundColor: this.state.offer === 1 ? 'blue' : 'white',
              }}>
              <Text
                style={{
                  color: this.state.offer === 1 ? 'white' : 'grey',
                  fontSize: moderateScale(14),
                  fontWeight: '500',
                }}>
                Offers
              </Text>
            </TouchableOpacity>
          </View>
          {offer.map((item, index) => (
            <View
              key={index}
              style={{
                backgroundColor: 'white',
                elevation: 10,
                paddingVertical: 20,
                marginVertical: 2,
              }}>
              <View
                style={{
                  elevation: 10,
                  flexDirection: 'row',
                }}>
                <Avatar.Icon
                  icon={item.iname}
                  size={moderateScale(40)}
                  color="#9A0E2F"
                  style={{
                    backgroundColor: '#F7BAC5',
                    marginLeft: 10,
                    marginRight: 20,
                  }}
                />
                <View style={{maxWidth: '90%', alignSelf: 'center'}}>
                  <Text
                    style={{
                      fontSize: moderateScale(16),
                      fontWeight: '600',
                      color: 'black',
                      maxWidth: '95%',
                    }}>
                    {item.header}
                  </Text>
                  <Text
                    style={{
                      maxWidth: '95%',
                      marginTop: 5,
                      fontSize: moderateScale(13),
                      fontWeight: '400',
                      color: 'grey',
                    }}>
                    {item.disc}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: 'blue',
                        marginRight: 10,
                      }}>
                      Copy & Book: WELCOME
                    </Text>
                    <Icon name="copy-outline" size={20} color={'blue'} />
                  </View>
                </View>
              </View>
              {item.img != null ? (
                <Image
                  resizeMode="cover"
                  source={{uri: item.img}}
                  style={{
                    height: 180,
                    width: '95%',
                    borderRadius: 10,
                    marginTop: 10,
                    alignSelf: 'center',
                  }}
                />
              ) : (
                <View />
              )}
              <Text style={{marginLeft: '18%', marginTop: 5, color: 'grey'}}>
                {item.time}
              </Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Notification;
