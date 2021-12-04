import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  ImageBackground,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const windowWidth = Dimensions.get('window').width;
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
];
export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, paddingHorizontal: 5}}>
        <ImageBackground
          style={{
            flex: 1,
            height: 300,
            width: '100%',
            resizeMode: 'contain',
          }}
          imageStyle={{
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}
          source={{
            uri: 'https://media.istockphoto.com/photos/fresh-mixed-fruits-picture-id467652436?b=1&k=20&m=467652436&s=170667a&w=0&h=SgDVjLV5rfJ-kJ80GYcQJ4CL1R0n4LoxTYXixnSZuWs=',
          }}
          resizeMode={'cover'}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginLeft: 20,
              marginTop: 20,
            }}>
            <TouchableHighlight
              style={{
                height: 90,
                width: 90,
                borderRadius: 45,
                borderColor: 'white',
                borderWidth: 1,
              }}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFwcHklMjB3b21hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
                }}
                style={{height: 90, width: 90, borderRadius: 45}}
                resizeMode={'cover'}
              />
            </TouchableHighlight>
            <View style={{marginTop: 15, marginLeft: 15}}>
              <Text style={{fontSize: 20, fontWeight: '500', color: 'white'}}>
                Noel Fashions
              </Text>

              <Text style={{fontSize: 15, color: 'white', marginTop: 5}}>
                Women's clothing
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 60,
            }}>
            <View
              style={{
                backgroundColor: '#65F700',
                paddingHorizontal: 5,
                borderRadius: 5,
                position: 'absolute',
                marginTop: 5,
                left: 10,
              }}>
              <MaterialCommunityIcons
                name="eye"
                color="white"
                size={20}
                style={{position: 'absolute', left: 5}}
              />
              <Text style={{marginLeft: 25, color: 'white', fontWeight: '300'}}>
                500
              </Text>
            </View>
            <View
              style={{
                paddingHorizontal: 10,
                position: 'absolute',
                marginTop: 5,
                left: 80,
              }}>
              <MaterialCommunityIcons
                name="youtube-tv"
                color="white"
                size={20}
                style={{position: 'absolute', left: 10}}
              />
              <Text style={{marginLeft: 30, color: 'white', fontWeight: '300'}}>
                500
              </Text>
            </View>
            <MaterialCommunityIcons
              name="account"
              color="white"
              size={30}
              style={{position: 'absolute', right: 90}}
            />
            <MaterialCommunityIcons
              name="share-variant"
              color="white"
              size={30}
              style={{position: 'absolute', right: 10}}
            />
          </View>
        </ImageBackground>
        <View
          style={{
            bottom: -20,
            backgroundColor: 'white',
            height: 280,
            borderRadius: 10,
            marginHorizontal: '5%',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '900',
              color: 'black',
              marginLeft: 10,
              marginTop: 5,
            }}>
            Statics
          </Text>
        </View>
        <View
          style={{
            borderRadius: 10,
            paddingTop: 10,
            backgroundColor: 'white',
            height: 380,
            bottom: -20,
            marginHorizontal: '5%',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              width: '100%',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '900',
                color: 'black',
                textAlign: 'center',
                position: 'absolute',
                marginLeft: 10,
              }}>
              Offers
            </Text>
            <Text
              style={{
                color: '#02cbfe',
                fontSize: 15,
                textAlign: 'center',
                position: 'absolute',
                right: 10,
                fontWeight: '400',
              }}>
              View More
            </Text>
          </View>
          <FlatList
            data={offer}
            numColumns={2}
            renderItem={({item}) => (
              <View
                style={{
                  flex: 1,
                  heigt: 150,
                  width: '50%',
                  marginTop: 10,
                  marginHorizontal: 2,
                  borderColor: 'white',
                  borderWidth: 1,
                }}>
                <ImageBackground
                  source={{
                    uri: item.img,
                  }}
                  style={{height: 150, width: '100%'}}
                  resizeMode={'cover'}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      width: '100%',
                      bottom: 0,
                      paddingVertical: 10,
                      position: 'absolute',
                      backgroundColor: 'black',
                      opacity: 0.7,
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 15,
                        textAlign: 'left',
                        marginLeft: 5,
                        fontWeight: '400',
                      }}>
                      {item.status}
                    </Text>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 15,
                        position: 'absolute',
                        marginTop: 10,
                        right: 5,
                        fontWeight: '400',
                      }}>
                      {item.id}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </SafeAreaView>
    );
  }
}
