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
        };
        this.carregaIcone = this.carregaIcone.bind(this);
        this.mostraLikes = this.mostraLikes.bind(this);
        this.like = this.like.bind(this);
    }

    carregaIcone(likeada){
        return likeada ? require('../img/likeada.png') : require('../img/like.png')
    }

    like(){
        let feed = this.state.feed;

        if(feed.likeada === true){
            this.setState({
                feed: {
                    ...feed,
                    likeada: false,
                    likers: feed.likers - 1
                }
            });
        } else{
            this.setState({
                feed: {
                    ...feed,
                    likeada: true,
                    likers: feed.likers + 1
                }
            });
        }
    }

    mostraLikes(likers){
        let feed = this.state.feed;

        if(feed.likers <= 0){
            return;
        }
        return(
            <Text style={styles.likes}>
                {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'

                }
            </Text>
        );
    }


    render(){
        return(
            <View style={styles.container}>
                <View style={styles.areaHeader}>
                    <Image 
                    source={{uri: this.state.feed.imgperfil}}
                    style={styles.imgPerfil}
                    />
                    <Text style={styles.nomeHeader}>{this.state.feed.nome}</Text>
                </View>
                
                <Image 
                resizemode="cover"
                source={{uri: this.state.feed.imgPublicacao}}
                style={styles.imgPublicacao}
                />

                <View style={styles.areaFooterBtn}>
                    <TouchableOpacity onPress={this.like}>
                        <Image 
                        source={this.carregaIcone(this.state.feed.likeada)}
                        style={styles.imgLike}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                        source={require('../img/send.png')}
                        style={styles.imgSend}
                        />
                    </TouchableOpacity>
                </View>

                {this.mostraLikes(this.state.feed.likers)}

                <View style={styles.areaFooterText}>
                    <Text style={styles.nomeFooter}>{this.state.feed.nome}</Text>
                    <Text style={styles.descricaoFooter}>{this.state.feed.descricao}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 1
    },
    areaHeader: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8
    },
    imgPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25
    }, 
    nomeHeader: {
        fontSize: 18,
        marginTop: 10,
        marginLeft: 5,
    },
    imgPublicacao: {
        height: 350,
        width: '100%'
    },
    areaFooter: {
        flexDirection: 'row'
    },
    nomeFooter: {
        fontSize: 15,
        marginTop: 4,
        marginLeft: 5,
        fontWeight: 'bold',
        marginBottom: 4
    },
    descricaoFooter: {
        fontSize: 14,
        marginTop: 4,
        marginLeft: 8,
        marginBottom: 4
    },
    areaFooterText: {
        flexDirection: 'row'
    },
    imgLike: {
        width: 33,
        height: 33,
        margin: 2
    },
    imgSend: {
        width: 33,
        height: 33,
        marginLeft: 2,
        marginTop: 2
    },
    areaFooterBtn: {
        flexDirection: 'row'
    },
    likes: {
        fontWeight: 'bold',
        marginLeft: 5
    }
})

export default Lista;