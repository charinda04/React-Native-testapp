import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  ScrollView,
  NetInfo,
  Button,
  TouchableOpacity
} from 'react-native';
import {StyleSheet, Dimensions} from 'react-native';

import styles from './CounterScreen.styles';
import CounterActions from '../actions/CounterActions';



class CounterScreen extends Component {
  constructor(props){
    super(props);
    // this.state = props;
  }


  onHandleIncrement = () => {
  this.props.dispatch(CounterActions.incrementCounter());
  // console.log('********************************');
  }

  onHandleDecrement = () => {
  this.props.dispatch(CounterActions.decrementCounter());
  }

  //state = {  }
  render() { 
    return ( 
    <View style={{flex: 1}}>
      <View style={styles.countertext}>
        <Text>{this.props.counter}</ Text>
      </View>
      <View style={styles.buttoncontainer}>
        <View style={styles.buttonwrapper}>
          <TouchableOpacity 
            style={styles.touchablewrapper}
            onPress={this.onHandleIncrement}
            >
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonwrapper}>
          <TouchableOpacity 
            style={styles.touchablewrapper}
            onPress={this.onHandleDecrement}
            >
            <Text>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ View> 
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter,
  };
}
 
export default connect(mapStateToProps)(CounterScreen);

