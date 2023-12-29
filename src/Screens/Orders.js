import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler'

const Orders = () => {
    const orders = useSelector(state => state.orderreducers);
  return (
    <SafeAreaView style={{flex: 1}}> 
        <View style={{flex: 1}}>
            <FlatList data={orders} renderItem={(item,index)=>{
                return (
                    <View style={{width: '100%', height: 100}}>
                        {
                            item.items.map((item1) => {
                                return (
                                    <Image source={item1.image} style={{width: 50, height: 50}}/>
                                )
                            })
            }
                    </View>
                )
            }}/> 
        </View>
    </SafeAreaView>
  )
}

export default Orders