import React, {Component} from 'react';
import {
  View,
  Modal,
  Button,
  StyleSheet
} from 'react-native';
import Entrar from './src/Entrar'

export default class App extends Component{

  constructor(props){
    super(props);
    this.state={
      modalVisible: false
    }
    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }

  entrar(){
    this.setState({
      modalVisible: true
    })
  }

  sair(){
    this.setState({
      modalVisible: false
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <Button 
          title="Entrar"
          onPress={this.entrar}
        />
        <Modal 
          transparent={true}
          animationType="slide"
          visible={this.state.modalVisible}
        >
          <Entrar fechar={this.sair}/>
        </Modal> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#548'
  }
})