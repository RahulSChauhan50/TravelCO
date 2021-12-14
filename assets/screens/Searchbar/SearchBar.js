import React, {Component} from 'react';
import {Text, View, FlatList, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Searchbar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredData: [],
      masterData: [],
      search: '',
    };
  }
  componentDidMount() {
    this.fetchLoc();
  }
  fetchLoc = async () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    const res = await fetch(apiUrl);
    const json = await res.json();
    //console.log('res', json);
    this.setState({
      // filteredData: json,
      masterData: json,
    });
    if (this.state.filteredData != null) {
      // console.log(this.state.filteredData[0]);
    }
  };
  searchFilter = text => {
    if (text) {
      const newData = this.state.masterData.filter(item => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();

        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.setState({
        filteredData: newData,
        search: text,
      });
    }
  };
  render() {
    //console.log(this.state.filteredData[0].address);

    const ItemView = ({item}) => {
      return (
        <TouchableOpacity
          onPress={() => this.setState({search: item.title.toUpperCase()})}>
          <Text
            style={{
              fontSize: 14,
              color: 'black',
              fontWeight: '400',
              padding: 15,
            }}>
            {item.title.toUpperCase()}
          </Text>
        </TouchableOpacity>
      );
    };
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
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
          />
        </View>
      </SafeAreaView>
    );
  }
}
