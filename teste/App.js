import React, {Component} from 'react';
import {
  View, 
  StyleSheet, 
  Image,
  FlatList,
} from 'react-native';
import Lista from './src/Lista'

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      feed: [
        {
          id: '1', 
          nome: 'Lucas Silva', 
          descricao: 'Mais um dia de muitos bugs :)', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
          likeada: false, 
          likers: 0
         },
        {
          id: '2', 
          nome: 'Matheus', 
          descricao: 'Isso sim é ser raiz!!!!!', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
          likeada: false, 
          likers: 0
        },
        {
          id: '3', 
          nome: 'Jose Augusto', 
          descricao: 'Bora trabalhar Haha', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
          likeada: false, 
          likers: 3
        },
        {
          id: '4', 
          nome: 'Gustavo Henrique', 
          descricao: 'Isso sim que é TI!', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
          likeada: true, 
          likers: 1
        },
        {
          id: '5', 
          nome: 'Guilherme', 
          descricao: 'Boa tarde galera do insta...', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false, 
          likers: 32
        }
      ]
    }
  }

  render(){
  return(
    <View style={styles.container}>
      <View style={styles.areaHeader}>
        <Image
        source={require('./src/img/logo.png')}
        style={styles.logoInst}
        />
        <Image 
        source={require('./src/img/send.png')}
        style={styles.sendHeader}
        />
      </View>

      <FlatList 
      //o atributo data recebe toda a nossa lista
      data={this.state.feed}
      //o atributo renderItem 
      renderItem={({item}) => <Lista data={item}/>}
      />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  areaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 50
  },
  sendHeader: {
    width: 23,
    height: 23,
    marginLeft: 5,
    marginRight: 5,
  },
  logoInst: {
    marginLeft: 5,
    marginRight: 5,
  }
})

export default App;