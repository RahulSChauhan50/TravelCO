import React, {Component} from 'react';
import {Text, View, FlatList, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import {
  setStartingStationAction,
  setFinalStationAction,
} from '../../Redux/index';
import {Searchbar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const data = [
  {stationName: 'Bangalore'},
  {stationName: 'Raipur'},
  {stationName: 'Delhi'},
  {stationName: 'Ahemdabad'},
  {stationName: 'Mumbai'},
  {stationName: 'Chennai'},
  {stationName: 'Kolkata'},
  {stationName: 'KanyaKumari'},
  {stationName: 'Bhopal'},
  {stationName: 'Lucknow'},
  {stationName: 'Patna'},
  {stationName: 'Panji'},
  {stationName: 'Bhuvaneshwar'},
  {stationName: 'Indore'},
  {stationName: 'Chandigarh'},
];

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      filteredData: [],
    };
  }
  searchFilter = text => {
    if (text.trim() !== '') {
      let newData = data.filter(item =>
        item.stationName
          .toString()
          .toLowerCase()
          .includes(text.toString().toLowerCase()),
      );
      this.setState({
        filteredData: newData,
        search: text,
      });
    } else {
      this.setState({
        filteredData: [],
        search: text,
      });
    }
  };
  render() {
    console.log(this.state.filteredData, this.state.search);
    const ItemSeparatorView = () => {
      return (
        <View style={{height: 1, width: '100%', backgroundColor: 'black'}} />
      );
    };
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{backgroundColor: 'white'}}>
          <Searchbar
            style={{
              //height: 50,
              marginHorizontal: 5,
              // padding: 10,
              backgroundColor: 'white',
              borderColor: 'blue',
              borderWidth: 1,
              marginVertical: 10,
            }}
            icon={() => (
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={30}
                  // color={'black'}
                  onPress={() => this.props.navigation.goBack()}
                />
              </TouchableOpacity>
            )}
            value={this.state.search}
            placeholder="search Here"
            onChangeText={text => this.searchFilter(text)}
          />
          <FlatList
            data={this.state.filteredData}
            keyExtractor={(item, index) => index}
            // ItemSeparatorComponent={ItemSeparatorView}
            renderItem={({item, index, separators}) => (
              <TouchableOpacity
                onPress={() =>
                  this.setState({search: item.title.toUpperCase()})
                }>
                <Text
                  style={{
                    fontSize: 14,
                    color: 'black',
                    fontWeight: '400',
                    padding: 15,
                  }}>
                  {item.stationName.toUpperCase()}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
