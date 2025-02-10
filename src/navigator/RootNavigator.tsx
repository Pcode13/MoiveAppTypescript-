import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from '../screen/HomeScreen';
import UserScreen from '../screen/UserScreen';

const RootStack = createNativeStackNavigator();

export const RootNavigator:React.FC =()=>{
    return(
        <NavigationContainer>
<RootStack.Navigator>
    <RootStack.Screen name="Home" component={HomeScreen}/>
    <RootStack.Screen name="User" component={UserScreen}/>
</RootStack.Navigator>
</NavigationContainer>
    )
}