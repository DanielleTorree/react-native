import React, {Component} from 'react';
import {
    View, 
    Text,
    TextInput,
    StyleSheet,
    Switch,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class App extends Component{

    constructor(props){
        super(props);
        this.state={
            nome: '',
            inputNome: '',
            idade: '',
            inputIdade: '',
            primeiraOpSexo: 0,
            opcaoSexo: [
                {key: 0, nome: 'Feminino'},
                {key: 1, nome: 'Masculino'},
            ],
            limite: 250,
            estudante: false,
        };
        this.cadastrar = this.cadastrar.bind(this);
    }

    cadastrar(){
        if(this.state.inputNome === '' || this.state.inputIdade === ''){
            alert('Preencha todos os dados para continuar!')
            return;
        }

        alert(
            'Conta aberta com sucesso!!! \n\n' +
            'Nome: ' + this.state.inputNome + '\n' +
            'Idade: ' + this.state.inputIdade + '\n' +
            'Sexo: ' + this.state.opcaoSexo[this.state.primeiraOpSexo].nome + '\n' +
            'Limite Cartão: R$ ' + this.state.limite.toFixed(0) + '\n' +
            'Estudante: ' +  ((this.state.estudante)? ' Ativo' : ' Inativo')
        )
    }

    render(){

        let sexoItem = this.state.opcaoSexo.map((v, k) => {
            return <Picker.Item key={k} value={k} label={v.nome} />
        })

        return(
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    
                    
                    <Text style={styles.txtBanco}>Banco React</Text>


                    <View>
                        <Text style={styles.txtNome}>Nome: </Text> 
                        <TextInput 
                            onChangeText={(texto) => this.setState({inputNome: texto})}
                            underlineColorAndroid="transparent"   
                            style={styles.txtInputNome}
                        />
                        <Text style={styles.txtIdade}>Idade: </Text>
                        <TextInput 
                            onChangeText={(texto) => this.setState({inputIdade: texto})}
                            keyboardType="numeric"
                            underlineColorAndroid="transparent"
                            style={styles.txtInputIdade}
                        />
                    </View>
                
                
                    <View>
                        <Text style={styles.txtSexo}>Sexo: </Text>
                        <Picker
                            selectedValue={this.state.primeiraOpSexo}
                            onValueChange={(itemValue, itemIndex) => this.setState({primeiraOpSexo: itemValue})}
                        >
                            {sexoItem}
                        </Picker>
                    </View>


                    <View>
                        <Text style={styles.txtLimite}>Seu Limite: R$ {this.state.limite.toFixed(0)}</Text>
                        <Slider
                            minimumValue={250}
                            maximumValue={3000}
                            value={this.state.limite}
                            onValueChange={(valorSelecionado) => this.setState({limite: valorSelecionado})}
                            minimumTrackTintColor="#bf0100"
                        />
                        </View>   
                    
                    
                    <View>
                        <Text style={styles.txtEstudante}>Estudante: 
                        {(this.state.estudante)? ' ativo' : ' inativo'}
                        </Text>
                        <Switch
                            value={this.state.estudante}    
                            onValueChange={(valorSelecionado) => this.setState({estudante: valorSelecionado})}
                            style={styles.opcaoSwitch}
                        />
                    </View>

                    
                    <View style={styles.btnArea}>
                        <TouchableOpacity style={styles.btn} onPress={this.cadastrar}>
                            <Text style={styles.txtBtn}>Abrir Conta</Text>
                        </TouchableOpacity>
                    </View>

            
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    txtInputNome: {
        backgroundColor: '#E5E7E9',
        borderWidth: 1,
        borderColor: '#5D6D7E',
        borderRadius: 10, 
        height: 40,
        padding: 10
    },
    txtInputIdade: {
        backgroundColor: '#E5E7E9',
        borderWidth: 1,
        borderColor: '#5D6D7E',
        borderRadius: 10, 
        height: 40,
        padding: 10
    },
    btn: {
        backgroundColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        height: 35,
        width: 300,
        marginTop: 20
    },
    btnArea: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtBtn: {
        color: 'white',
        textAlign: 'center',
        padding: 5,
        fontWeight: 'bold'
    },
    txtBanco: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    txtNome: {
        fontWeight: 'bold',
        marginTop: 20
    },
    txtIdade: {
        fontWeight: 'bold',
        marginTop: 10
    },
    txtSexo: {
        fontWeight: 'bold',
        marginTop: 10
    },
    txtLimite: {
        fontWeight: 'bold',
        marginTop: 10
    },
    txtEstudante: {
        fontWeight: 'bold',
        marginTop: 10
    },
    opcaoSwitch: {
        marginRight: 320
    }
})

export default App;