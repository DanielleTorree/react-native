import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image, 
  FlatList,
  TouchableOpacity,
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
    };
  }

  render(){
    return(
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity>
            <Image 
            //The currently supported formats are png, jpg, jpeg, bmp, gif, webp (Android only), psd (iOS only).
            source={require('./src/img/logo.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
            source={require('./src/img/send.png')}
            style={styles.send}
            />
          </TouchableOpacity>
        </View>

        <FlatList 

        //Attributes are refering to additional information of an object.
        //Properties are describing the characteristics of an object.
        
        showsHorizontalScroolIndicator={false}
        keyExtractor={(item) => item.id}
        data={this.state.feed}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    height: 55,
    backgroundColor: '#FFF',

    borderBottomWidth: 0.1,
    shadowColor: '#000000',
    elevation: 1
  },
  send: {
    width: 23, 
    height: 23
  },
})

export default App;