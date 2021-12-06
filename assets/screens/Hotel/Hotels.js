import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {moderateScale, scale} from 'react-native-size-matters';

export default class Hotels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      india: false,
      international: true,
    };
  }
  setIndia = () => {
    this.setState({
      india: true,
      international: false,
    });
    //console.log(this.state.india, this.state.international);
  };
  setInternational = () => {
    this.setState({
      india: false,
      international: true,
    });
    // console.log(this.state.india, this.state.international);
  };
  render() {
    console.log(this.state.india, this.state.international);
    return (
      <SafeAreaView style={{}}>
        <ScrollView style={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
          <View style={styles.mainContainer}>
            <View style={styles.topContainer}></View>
            <View style={styles.travelContainer}>
              <View
                style={{
                  height: moderateScale(30),
                  width: '80%',
                  borderRadius: 20,
                  backgroundColor: '#DDEBF7',
                  alignSelf: 'center',
                  marginTop: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  style={{
                    height: '100%',
                    width: scale(140),
                    borderRadius: 20,
                    backgroundColor:
                      this.state.india == true ? 'blue' : '#DDEBF7',
                    //  justifyContent: 'flex-start',
                  }}
                  onPress={() => this.setIndia()}>
                  <View>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: moderateScale(15),
                        fontWeight: '500',
                        color: 'white',
                        marginTop: 3,
                      }}>
                      India
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: '100%',
                    width: scale(140),
                    borderRadius: 20,
                    backgroundColor:
                      this.state.india == false ? 'blue' : '#DDEBF7',
                  }}
                  onPress={() => this.setInternational()}>
                  <View>
                    <Text
                      style={{
                        textAlign: 'center',
                        marginTop: 3,
                        fontSize: moderateScale(15),
                        fontWeight: '500',
                        color: 'white',
                      }}>
                      International
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#DDEBF7',
  },
  topContainer: {
    backgroundColor: '#2274E0',
    height: 200,
    width: '100%',
  },
  travelContainer: {
    backgroundColor: 'white',
    width: '95%',
    top: 100,
    height: moderateScale(290),
    alignSelf: 'center',
    position: 'absolute',
    borderRadius: 5,
  },
});
