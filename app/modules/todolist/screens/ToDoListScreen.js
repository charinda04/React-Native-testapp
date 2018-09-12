import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  ScrollView,
  NetInfo,
  Button
} from 'react-native';

class HomeScreen extends Component {
  state = {  }
  render() { 
    return ( 
    <View style={{flex: 1}}>
      
      <Text>Todolist page</ Text>
    </ View> 
    );
  }
}
 
export default HomeScreen;