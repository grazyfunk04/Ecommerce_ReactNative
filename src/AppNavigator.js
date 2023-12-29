import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Home from './Screens/Home';
import Main from './bottom/Main';
import Search from './bottom/Search';
import Cart from './bottom/Cart';
import Wishlist from './bottom/Wishlist';
import Profile from './bottom/Profile';
import MyAddress from './Screens/MyAddress';
import AddAddress from './Screens/AddAddress';
import Checkout from './Screens/Checkout';
import OrderSucess from './OrderSucess';
import Orders from './Screens/Orders';
const Stack = createStackNavigator();


const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen options= {{headerShown: false}} name="Splash" component={Splash} />
        <Stack.Screen options= {{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen options= {{headerShown: false}} name="SignUp" component={SignUp} />
        <Stack.Screen options= {{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen options= {{headerShown: false}} name="Main" component={Main} />
        <Stack.Screen options= {{headerShown: false}} name="Search" component={Search} />
        <Stack.Screen options= {{headerShown: false}} name="Cart" component={Cart} />
        <Stack.Screen options= {{headerShown: false}} name="Wishlist" component={Wishlist} />
        <Stack.Screen options= {{headerShown: false}} name="Profile" component={Profile} />
        <Stack.Screen options= {{headerShown: false}} name="MyAddress" component={MyAddress} />
        <Stack.Screen options= {{headerShown: false}} name="AddAddress" component={AddAddress} />
        <Stack.Screen options= {{headerShown: false}} name="Checkout" component={Checkout} />
        <Stack.Screen options= {{headerShown: false}} name="OrderSucess" component={OrderSucess} />
        <Stack.Screen options= {{headerShown: false}} name="Orders" component={Orders} />

        </Stack.Navigator>

    </NavigationContainer>
  )
}

export default AppNavigator