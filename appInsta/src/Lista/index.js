import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

class Lista extends Component{

    constructor(props){
        super(props);
        this.state={
            feed: this.props.data
        }
    }

    render(){
        return(
            <View>
                <Text style={{margin: 10}}>{this.state.feed.nome}</Text>
                <Text style={{margin: 10}}>{this.state.feed.descricao}</Text>
            </View>
        );
    }
}

export default Lista;