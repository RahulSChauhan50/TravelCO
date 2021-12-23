import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {ProgressBar, Colors, Appbar, Avatar, Card} from 'react-native-paper';
import FIcon from 'react-native-vector-icons/Ionicons';
import Mat from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale, scale} from 'react-native-size-matters';
import {TouchableOpacity} from 'react-native-gesture-handler';
const veg = [
  {img: require('../../images/veg1.jpg')},
  {img: require('../../images/veg2.jpg')},
  {img: require('../../images/veg3.jpg')},
  {img: require('../../images/veg4.jpg')},
  {img: require('../../images/veg5.jpg')},
  {img: require('../../images/veg1.jpg')},
  {img: require('../../images/veg2.jpg')},
  {img: require('../../images/veg3.jpg')},
  {img: require('../../images/veg4.jpg')},
  {img: require('../../images/veg5.jpg')},
];
const nonveg = [
  {img: require('../../images/nonveg1.jpg')},
  {img: require('../../images/nonveg2.jpg')},
  {img: require('../../images/nonveg3.jpg')},
  {img: require('../../images/nonveg4.jpg')},
  {img: require('../../images/nonveg5.jpg')},
  {img: require('../../images/nonveg1.jpg')},
  {img: require('../../images/nonveg2.jpg')},
  {img: require('../../images/nonveg3.jpg')},
  {img: require('../../images/nonveg4.jpg')},
  {img: require('../../images/nonveg5.jpg')},
];
const desert = [
  {img: require('../../images/desert1.jpg')},
  {img: require('../../images/desert2.jpg')},
  {img: require('../../images/desert3.jpg')},
  {img: require('../../images/desert4.jpg')},
  {img: require('../../images/desert5.jpg')},
  {img: require('../../images/desert1.jpg')},
  {img: require('../../images/desert2.jpg')},
  {img: require('../../images/desert3.jpg')},
  {img: require('../../images/desert4.jpg')},
  {img: require('../../images/desert5.jpg')},
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
class Meals extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Appbar style={{backgroundColor: '#2176E3', elevation: 0}}>
          <Appbar.Action
            icon="arrow-left"
            onPress={() => this.props.navigation.goBack()}
          />
          <TextInput
            placeholder="Enter your city"
            placeholderTextColor={'white'}
            style={{
              flex: 1,
              borderBottomWidth: 0.5,
              borderBottomColor: 'white',
              color: 'white',
              fontSize: moderateScale(20),
            }}
          />
        </Appbar>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={{
              fontWeight: '700',
              fontSize: moderateScale(20),
              color: 'black',
              margin: 10,
            }}>
            Deals on Veg foods
          </Text>
          <View style={{marginTop: 10}}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={veg}
              renderItem={({item, index, separators}) => (
                <Card
                  style={{
                    width: 150,
                    height: 190,
                    borderRadius: 5,
                    marginHorizontal: 2,
                    elevation: 10,
                    marginBottom: 10,
                  }}>
                  <Image
                    resizeMode="cover"
                    source={item.img}
                    style={{
                      height: 190,
                      width: '100%',
                      borderRadius: 5,
                      alignSelf: 'center',
                    }}
                  />
                </Card>
              )}
              keyExtractor={(item, ind) => ind}
            />
          </View>
          <Text
            style={{
              fontWeight: '700',
              fontSize: moderateScale(20),
              color: 'black',
              margin: 10,
            }}>
            Deals on Non-Veg foods
          </Text>
          <View style={{marginTop: 10}}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={nonveg}
              renderItem={({item, index, separators}) => (
                <Card
                  style={{
                    width: 150,
                    height: 190,
                    borderRadius: 5,
                    marginHorizontal: 2,
                    elevation: 10,
                    marginBottom: 10,
                  }}>
                  <Image
                    resizeMode="cover"
                    source={item.img}
                    style={{
                      height: 190,
                      width: '100%',
                      borderRadius: 5,
                      alignSelf: 'center',
                    }}
                  />
                </Card>
              )}
              keyExtractor={(item, ind) => ind}
            />
          </View>
          <Text
            style={{
              fontWeight: '700',
              fontSize: moderateScale(20),
              color: 'black',
              margin: 10,
            }}>
            Deals on Deserts
          </Text>
          <View style={{marginVertical: 10}}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={desert}
              renderItem={({item, index, separators}) => (
                <Card
                  style={{
                    width: 150,
                    height: 190,
                    borderRadius: 5,
                    marginHorizontal: 2,
                    elevation: 10,
                    marginBottom: 10,
                  }}>
                  <Image
                    resizeMode="cover"
                    source={item.img}
                    style={{
                      height: 190,
                      width: '100%',
                      borderRadius: 5,
                      alignSelf: 'center',
                    }}
                  />
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

export default Meals;
