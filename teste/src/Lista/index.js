import React, {Component} from 'react';
import {
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

class Lista extends Component{
    
    constructor(props){
        super(props);
        this.state={
            feed: this.props.data
        };
    }
    
    

    render(){
        return(
            <View>
                <View style={styles.areaHeader}>
                    <Image
                    source={{uri: this.state.feed.imgperfil}}
                    style={styles.imgPerfil}
                    />
                    <Text style={styles.nome}>{this.state.feed.nome}</Text>               
                </View>
                
                <Image
                    source={{uri: this.state.feed.imgPublicacao}}
                    style={styles.imgPublicacao}
                />

                <View style={styles.areaFooterBtn}>
                    <TouchableOpacity>       
                        <Image
                        source={require('../img/like.png')}
                        style={styles.btnFooter}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                        source={require('../img/send.png')}
                        style={styles.btnFooter}
                        />
                    </TouchableOpacity>
                </View>
                
                <View style={styles.areaFooter}>
                    <Text style={styles.nomeFooter}>{this.state.feed.nome}</Text>
                    <Text>{this.state.feed.descricao}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    areaHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },  
    imgPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 5
    },
    nome: {
        fontSize: 20,
    },
    imgPublicacao: {
        width: '100%',
        height: 400
    },
    areaFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5
    },
    nomeFooter: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 8
    },
    btnFooter: {
        width: 33,
        height: 33,
        margin: 1
    },
    areaFooterBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5
    }
})

export default Lista;