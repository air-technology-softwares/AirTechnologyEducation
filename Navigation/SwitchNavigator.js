import * as React from 'react';
import { View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';

export default class SwitchNavigator extends React.Component{
    render(){
        return(
            <View>
                <AppContainer/>
            </View>
        )
    }
}

const AppNavigator=createSwitchNavigator({
    LoginScreen:LoginScreen,
    HomeScreen:HomeScreen,
})

const AppContainer = createAppContainer(AppNavigator)