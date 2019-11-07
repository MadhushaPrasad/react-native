import React, { Component } from 'react';
import { View, Text, TextInput, Image, StyleSheet, Button } from 'react-native';
import ListItem from './src/components/listItem';

export default class App extends Component {

  state = {
    placeName: '',
    places: [],
  };
  placeNameChangedHandler = event => {
    this.setState({
      placeName: event,
    });
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim == "") {
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName),
        placeName:"",
      };
    });
  };
  render() {

    const placesOutput = this.state.places.map((place,i) => (<ListItem key={i}>{place}</ListItem>));

    return (
      <View
        style={styles.container}>
        <View>
          <TextInput
            style={styles.inputContainer}
            placeholder={'Please input your Name'}
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <Button
            title='Login'
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View>{placesOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    color: '#000000',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  inputContainer: {
    width: "100%",
    borderColor: '#ffff',
    borderWidth: 1,
    fontSize: 25,
    alignSelf: 'center'
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  }
});