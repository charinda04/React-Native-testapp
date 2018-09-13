import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  ScrollView,
  NetInfo,
  Button
} from 'react-native';

import {navigateToCounterScreen,navigateToToDoListScreen} from '../../../navigation/home/HomeNavAction';
import styles from './HomeSccreen.styles';
import HomeActions from '../actions/HomeActions';

class HomeScreen extends Component {
  constructor(props){
    super(props);
  }

  state = {  }

  onHandleNavigateCounter = (): void => {
    navigateToCounterScreen();
  }

  onHandleNavigateToDoList = (): void => {
    navigateToToDoListScreen();
  }

  onSagaTest = () => {
    this.props.dispatch(HomeActions.authenticateUser());

  }


  render() { 
    return ( 
    <View style={{flex: 1}}>
      
      <View style={styles.buttonwrapper}>
        <Button
        onPress={this.onHandleNavigateCounter}
        title="Counter"
        color="#841584"
        />
      </View>
      <View style={styles.buttonwrapper}>
        <Button
        onPress={this.onHandleNavigateToDoList}
        title="Todolist"
        color="#341298"
        />
      </View>
      <View style={styles.buttonwrapper}>
        <Button
        onPress={this.onSagaTest}
        title="Saga Test"
        color="#781365"
        />
      </View>
    </ View> 
    );
  }
}
 
const mapStateToProps = (state) => {
  return(state);
}

export default connect(mapStateToProps)(HomeScreen);
// export default HomeScreen;
