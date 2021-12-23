import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
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
];
export default class Trains extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ButtonToggle:
        this.props.route.params === undefined
          ? 'bookTrain'
          : this.props.route.params.toggleOption,
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
            title="Trains"
            titleStyle={{fontSize: moderateScale(20)}}
          />
        </Appbar>
        <ScrollView style={{flexGrow: 1, backgroundColor: 'white'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
              marginLeft: 10,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 10,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 10,
                  padding: 10,
                  borderRadius: 10,
                  backgroundColor: 'white',
                  marginBottom: 10,
                }}>
                <MaterialCommunityIcons
                  name="ticket-confirmation-outline"
                  size={35}
                  onPress={() => {
                    this.props.navigation.navigate('Book'),
                      console.log('pressed');
                  }}
                />
              </View>
              <Text>Book Ticket</Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 20,
              }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('PNR')}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 10,
                  padding: 10,
                  borderRadius: 10,
                  backgroundColor: 'white',
                  marginBottom: 10,
                }}>
                <Text
                  style={{
                    fontSize: moderateScale(14),
                    color: '#50AFE4',
                    fontWeight: '900',
                  }}>
                  PNR
                </Text>
                <Text
                  style={{
                    fontSize: moderateScale(12),
                    color: 'blue',
                    fontWeight: '900',
                  }}>
                  CHECK
                </Text>
              </TouchableOpacity>
              <Text>Book Ticket</Text>
            </View>
          </View>

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
              fontWeight: '700',
              fontSize: moderateScale(20),
              color: 'black',
              margin: 10,
            }}>
            Reasons to book train tickets
          </Text>
          <View style={{marginLeft: 10}}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={offer}
              renderItem={({item, index, separators}) => (
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Card
                    style={{
                      width: 150,
                      height: 200,
                      borderRadius: 10,
                      marginHorizontal: 5,
                      elevation: 5,
                      marginBottom: 10,
                    }}>
                    <Image
                      resizeMode="cover"
                      source={{uri: item.img}}
                      style={{
                        height: 200,
                        width: '100%',
                        borderRadius: 5,
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
                  <Text style={{color: 'black'}}>{item.txt}</Text>
                </View>
              )}
              keyExtractor={(item, ind) => ind}
            />
          </View>
          <View style={{marginVertical: 30}}>
            <Carousel
              data={offer}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              autoplay={true}
              autoplayInterval={3000}
              firstItem={1}
            />
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
