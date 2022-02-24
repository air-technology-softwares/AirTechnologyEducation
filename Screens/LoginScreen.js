import * as React from 'react';
import { View,Text,StyleSheet,TextInput,KeyboardAvoidingView,TouchableOpacity } from 'react-native';

import AppHeadder from '../Components/AppHeadder';
import firebase from 'firebase';
import config from '../config';

export default class LoginScreen extends React.Component{
    constructor(){
        super()
        this.state={
            Email:'',
            Password:'',
        }
    }

    login=async()=>{
        if(this.state.Email === '' && this.state.Password===''){
            alert('No Entry Can Be Left Empty!')
        }

        else{

        }
    }


    render(){
        return(
            <View>
                <AppHeadder/>
                <Text style={styles.title}>Welcome</Text>
                <Text style={styles.txt}>Kindly Login!</Text>
                <KeyboardAvoidingView>
                <TextInput placeholder='Email' style={styles.input} onChangeText={text=>{this.setState({Email:text})}}/>
                <TextInput placeholder='Password' style={styles.input} secureTextEntry={true} onChangeText={text=>{this.setState({Password:text})}}/>
                <TouchableOpacity style={styles.btn} onPress={() =>{this.login()}}>
                    <Text style={styles.btntxt}>Login</Text>
                </TouchableOpacity>
                </KeyboardAvoidingView>

                <Text style={styles.opt} onPress={()=>{this.props.navigation.navigate('RegisterScreen')}}>Create An Account</Text>
                <Text style={styles.opt} onPress={()=>{this.props.navigation.navigate('ForgotScreen')}}>Forgot Your Password?</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title:{
        textAlign:'center',
        fontSize:29,
        marginTop:12,
        fontWeight:'bold',
    },

    txt:{
        textAlign:'center',
        marginTop:8,
        fontSize:25,
    },

    input:{
        borderWidth:1,
        borderRadius:10,
        width:210,
        height:35,
        textAlign:'center',
        alignSelf:'center',
        marginTop:17,
    },

    btn:{
        backgroundColor:'darkblue',
        height:30,
        width:150,
        borderColor:'black',
        borderWidth:1,
        borderRadius:6,
        alignSelf:'center',
        marginTop:20,
    },

    btntxt:{
        alignSelf:'center',
        textAlign:'center',
        color:'white',
        fontSize:18,
    },

    opt:{
        textAlign:'center',
        marginTop:16,
    },
})