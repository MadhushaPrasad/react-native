import React, { Component } from 'react';
import {View , Text ,TextInput , Image,StyleSheet} from 'react-native';

export default class App extends Component{

  state={
    placeName:''
  };
  placeNameChangedHandler = event => {
      this.setState({
        placeName:event
      });
  }
  render(){
    return(
      <View
      style={styles.container}>
        <TextInput 
        style={{width:300,height:300,borderColor:'black',borderWidth:1,fontSize:25}}
        value={this.state.placeName}
        onChangeText={this.placeNameChangedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    color:'#000000',
    alignItems:'center',
    backgroundColor:'#FFFFFF'
  }
});