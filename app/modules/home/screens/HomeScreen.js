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

class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state = props;
  }

  state = {  }

  onHandleNavigateCounter = (): void => {
    navigateToCounterScreen();
  }

  onHandleNavigateToDoList = (): void => {
    navigateToToDoListScreen();
  }


  render() { 
    return ( 
    <View style={{flex: 1}}>
      
      <Button
      onPress={this.onHandleNavigateCounter}
      title="Counter"
      color="#841584"
      />
      <Button
      onPress={this.onHandleNavigateToDoList}
      title="Todolist"
      color="#341298"
      />
    </ View> 
    );
  }
}
 
const mapStateToProps = (state) => {
  return(state);
}

// export default connect(mapStateToProps)(HomeScreen);
export default HomeScreen;
