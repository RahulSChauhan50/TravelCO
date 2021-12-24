import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
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
import Icon from 'react-native-vector-icons/Ionicons';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';
import GlobalStyles from '../../Style/GlobalStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import FIcon from 'react-native-vector-icons/Ionicons';
import Mat from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {TouchableOpacity} from 'react-native-gesture-handler';
const list = [
  {iname: 'piggy-bank', title: 'Affordable interest rates'},
  {iname: 'mobile-alt', title: 'Easy 3-step process'},
  {iname: 'calendar-check', title: 'Upto 12 months EMI options'},
  {iname: 'rupee-sign', title: 'Borrow as little as Rs. 2,000'},
  {iname: 'piggy-bank', title: 'No down payment'},
];
const data = [
  {
    iconname: 'bag-checked',
    header: 'My Trips',
    disc: 'All your bookings in one place',
  },
  {
    iconname: 'cash-usd',
    header: 'Recommend and Earn',
    disc: 'Recommend your hotel stay & earn goCash',
  },
  {
    iconname: 'ticket-confirmation',
    header: 'My Coupons',
    disc: 'Your goPasses, coupons & vouchers here',
  },
  {
    iconname: 'needle',
    header: 'My Saved Vaccination Certificate',
    disc: 'View and Manae your Covid Vaccination certificate',
  },
  {
    iconname: 'human-greeting',
    header: 'Refer and Earn',
    disc: 'Refer Goibibo to friends & earn goCash',
  },
  {
    iconname: 'comment-edit',
    header: 'My Contributions',
    disc: 'Review Quetions asked & answered',
  },
  {
    iconname: 'contacts',
    header: 'goContacts',
    disc: 'Sync your phonebook to earn goCash',
  },
  {iconname: 'content-save', header: 'UPI', disc: 'Your saved payment details'},
  {
    iconname: 'credit-card-multiple',
    header: 'My Saved Cards',
    disc: 'Your saved payment details',
  },
];
export default class Wallet extends Component {
  render() {
    return (
      <SafeAreaView style={{}}>
        <View style={styles.topContainer}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={35}
            color={'white'}
            style={{position: 'absolute', left: 10, top: 10}}
            onPress={() => this.props.navigation.goBack()}
          />
          <Text
            style={{
              fontSize: moderateScale(16),
              fontWeight: 'bold',
              color: 'white',
              marginTop: 30,
            }}>
            goCash Balance
          </Text>
          <Text
            style={{
              fontSize: moderateScale(26),
              fontWeight: '700',
              color: 'white',
            }}>
            ₹ 0
          </Text>
          <View
            style={{
              borderRadius: 25,
              backgroundColor: '#054A82',
              width: '95%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 10,
              paddingHorizontal: 7,
              // opacity: 0.8,
            }}>
            <View
              style={{
                height: 23,
                width: 23,
                borderRadius: 45,
                backgroundColor: '#CEE7CA',
                padding: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="trending-up-sharp" size={13} color={'green'} />
            </View>
            <Text
              style={{
                color: 'white',
                fontSize: moderateScale(12),
                fontWeight: '400',
              }}>
              Complete your hotel booking in South Delhi, Gurgaon
            </Text>
            <MaterialCommunityIcons
              name="greater-than"
              color={'white'}
              size={20}
            />
          </View>
        </View>
        <ScrollView
          style={{flexGrow: 1, backgroundColor: '#DDEBF7', paddingTop: 10}}
          showsVerticalScrollIndicator={false}>
          <View style={{backgroundColor: 'white', elevation: 5, padding: 10}}>
            <Text
              style={{
                fontSize: moderateScale(16),
                fontWeight: 'bold',
                color: 'black',
              }}>
              Recent Transactions
            </Text>
            <View style={{marginVertical: 10}}>
              <Text style={{color: 'grey'}}>Dec 04, 2021</Text>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      borderRadius: 45,
                      backgroundColor: '#DDEBF7',
                      padding: 10,
                      height: 40,
                      width: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 10,
                    }}>
                    <FontAwesome name={'coins'} size={20} color={'#E7B61C'} />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: moderateScale(13),
                        fontWeight: 'bold',
                        color: 'black',
                        marginTop: 10,
                      }}>
                      goCash expired
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: moderateScale(16),
                    fontWeight: 'bold',
                    color: 'red',
                  }}>
                  -50
                </Text>
              </View>
            </View>
            <View style={{backgroundColor: 'grey', height: 0.2}} />
            <View style={{marginVertical: 10}}>
              <Text style={{color: 'grey'}}>Dec 03, 2021</Text>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      borderRadius: 45,
                      backgroundColor: '#DDEBF7',
                      padding: 10,
                      height: 40,
                      width: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 10,
                    }}>
                    <FontAwesome name={'coins'} size={20} color={'#E7B61C'} />
                  </View>
                  <View style={{maxWidth: '70%'}}>
                    <Text
                      style={{
                        fontSize: moderateScale(13),
                        fontWeight: 'bold',
                        color: 'black',
                        marginTop: 10,
                      }}>
                      goCash expired
                    </Text>
                    <Text style={{color: 'grey'}}>
                      Sigin-up bonus from Goibibo Expires on Dec 04, 2021
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: moderateScale(16),
                    fontWeight: 'bold',
                    color: 'green',
                  }}>
                  +50
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              fontSize: moderateScale(16),
              fontWeight: '500',
              color: 'black',
              marginTop: 30,

              marginLeft: 10,
            }}>
            How to Earn goCash?
          </Text>
          <View style={{flexDirection: 'row', marginLeft: 10}}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={data}
              renderItem={({item, index, separators}) => (
                <LinearGradient
                  key={index}
                  start={{x: 0, y: 0}}
                  end={{x: 0.5, y: 0.5}}
                  colors={['#F7F763', '#ffffff', '#ffffff']}
                  style={{
                    width: '95%',
                    backgroundColor: 'white',
                    alignSelf: 'center',
                    height: 90,
                    width: 300,
                    marginTop: 20,
                    marginHorizontal: 5,
                    elevation: 10,
                    marginBottom: 10,
                    borderRadius: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <View style={{alignSelf: 'center'}}>
                    <FontAwesome name={'coins'} size={25} color={'#E7B61C'} />
                    <Text
                      style={{
                        fontSize: moderateScale(14),
                        fontWeight: '900',
                        color: 'black',
                      }}>
                      ₹125
                    </Text>
                  </View>
                  <View
                    style={{
                      height: '100%',
                      width: 0.2,
                      backgroundColor: 'grey',
                    }}
                  />
                  <View
                    style={{
                      alignSelf: 'center',
                      maxWidth: '80%',
                    }}>
                    <Text
                      style={{
                        fontSize: moderateScale(15),
                        fontWeight: 'bold',
                        color: 'black',
                      }}>
                      Invite Friends
                    </Text>
                    <Text
                      style={{
                        fontSize: moderateScale(10),
                        fontWeight: '400',
                        color: 'grey',
                      }}>
                      Share your referral link and invite your friends on
                      Goibibo. Earn ₹125 goCash on every referral
                    </Text>
                  </View>
                </LinearGradient>
              )}
              keyExtractor={(item, ind) => ind}
            />
          </View>
          <View
            style={{
              backgroundColor: 'white',
              marginTop: 10,
              padding: 10,
              elevation: 5,
              height: 430,
            }}>
            <Text
              style={{
                fontSize: moderateScale(16),
                fontWeight: '900',
                color: 'black',
                marginBottom: 20,
              }}>
              FAQ
            </Text>
            {list.map((item, index) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: 40,
                }}
                key={index}>
                <Text style={{fontSize: moderateScale(13), color: 'black'}}>
                  {item.title}
                </Text>
                <MaterialCommunityIcons
                  name="chevron-down"
                  size={30}
                  color={'black'}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#DDEBF7',
    paddingTop: 10,
  },
  topContainer: {
    backgroundColor: '#2274E0',
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
