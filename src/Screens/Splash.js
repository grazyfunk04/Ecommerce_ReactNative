import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
    const navigation = useNavigation();
    useEffect(()=>{
        setTimeout(() => {
            getData();
        }, 3000);
    }, []);

    const getData = async()=>{
      const mEmail = await AsyncStorage.getItem('EMAIL');
      const mPassword = await AsyncStorage.getItem('PASSWORD');
      if(mEmail !== '' || mEmail !== null || mEmail !== undefined){
        navigation.navigate('Login');
      }
      else{
        navigation.navigate('Login');
      }
    }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
    <Image source={require('../images/playstore.png')} style={{width: 200, height: 200}}/>
    </View>
  )
}

export default Splash