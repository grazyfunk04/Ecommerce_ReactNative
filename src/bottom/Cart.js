import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import CartItem from "../common/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { addItemToWishlist, removeFromCart } from "../redux/actions/Actions";
import CommonButton from "../common/CommonButton"

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector((state) => state.reducers);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, marginTop: 40, marginBottom: 80 }}>
      {cartData.length>0 ? (
        <>
          <FlatList
            data={cartData}
            renderItem={({ item, index }) => {
              return (
                <CartItem
                  item={item}
                  onAddWishlist={(x)=>{
                    dispatch(addItemToWishlist(x));
                  }}
                  onRemoveItem={() => {
                    dispatch(removeFromCart(index));
                  }}
                />
              );
            }}
          />
          <View style={{marginBottom: 80}}>
            <CommonButton title={'Proceed to Payment'} bgColor={'green'} textColor={'#fff'} />
          </View>
          </>
      ):(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../images/no_items.png')} style={{width: 150, height: 150}}/>
          <Text style={{fontSize: 20, fontWeight: '600'}}>No Items in Cart</Text>
        </View>
      )}
    </View>
  );
};

export default Cart;
