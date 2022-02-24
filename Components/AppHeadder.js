import * as React from 'react';
import { View,Text,StyleSheet } from 'react-native';

class AppHeadder extends React.Component{
    render(){
        return(
            <View style={styles.bg}>
                <Text style={styles.bgtxt}>Air Technology</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bg:{
        backgroundColor:'blue',
        padding:12,
    },

    bgtxt:{
        color:'white',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:32,
    },
})

export default AppHeadder;