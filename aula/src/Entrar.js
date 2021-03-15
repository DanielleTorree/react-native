import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

export default class App extends Component{
  render(){
    return(
        <View style={{backgroundColor: '#292929', width: '80%', height: 250, borderRadius: 15, marginLeft: 45, marginTop: 250}}>
            <Text style={{paddingTop: 15, color: '#FFF', fontSize: 28}}>Seja bem vindo!</Text>
            <Button 
                title="Sair"
                onPress={this.props.fechar}
            />
        </View>
    );
  }
}