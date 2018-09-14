import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  ScrollView,
  NetInfo,
  Button,
  TextInput,
} from 'react-native';
import ToDoListActions from '../actions/ToDoListAction';

class ToDoListScreen extends Component {


  constructor(props){
    super(props);

    state = { 
      text: '',
   }
  }
  

  onHandleAddToDoList = () => {
    // console.log(this.state.text);
    // console.log('-------------------');
    
    this.props.dispatch(ToDoListActions.addToDoList(this.state.text));
    
  }

  handleToDoListChange = (text: any) => {
    this.setState({text});
    // console.log(this.state.text);
  }



  render() { 
    return ( 
    <View style={{flex: 1}}>
      <View style={{
          // alignItems: 'center',
          padding: 20,
          paddingVertical: 5,
        }}>
        {this.props.list.map((item,key)=>(
          <Text key={key}>{item}</Text>)
        )}
        {/* <Text >{this.props.list}</ Text> */}
      </View>
      <View style={{padding: 10}}>
        
        <TextInput
          key='input'
          style={{height: 40}}
          placeholder="Type here to add todolist!"
          onChangeText={text => this.setState({text})}
          onSubmitEditing={this.onHandleAddToDoList}
          onChangeText={this.handleToDoListChange}
        
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {/* {this.state.text.split(' ').map((word) => word && '🍕').join(' ')} */}
        </Text>
      </View>
    </ View> 
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.todolist.list,
  };
}


export default connect(mapStateToProps)(ToDoListScreen);