import * as React from 'react';
import { View,Text } from 'react-native';

import AppHeadder from '../Components/AppHeadder';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View>
                <AppHeadder/>
                <Text>HomeScreen Check!</Text>
            </View>
        )
    }
}