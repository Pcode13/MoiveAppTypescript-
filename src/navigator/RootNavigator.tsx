import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import { BottomTabsNavigation } from './BottomTabsNavigation';
import Details from '../screen/Details';

import { RootStackParamList } from '../type';
const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator:React.FC =()=>{
    return(
        <NavigationContainer>
<RootStack.Navigator>
    <RootStack.Screen name="BottomTabs" component={BottomTabsNavigation} options={{headerShown:false}}/>
    <RootStack.Screen name="details" component={Details} options={{headerShown:false}}/>

</RootStack.Navigator>
</NavigationContainer>
    )
}