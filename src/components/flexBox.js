import React, { Component } from 'react';
import {View , Text ,TextInput , Image,StyleSheet} from 'react-native';

export default class flexBox extends Component{
    render(){
        return(
            <View style={styles.container}>
                    <Text>Madhusha</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ccccc',
        flexDirection:'colomn',
        justifyContent:'space-between',
        alignItems:'center',
    }
});