import { View, Text } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import CartItem from "../common/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { addItemToWishlist, removeFromCart } from "../redux/actions/Actions";

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector((state) => state.reducers);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, marginTop: 40, marginBottom: 80 }}>
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
    </View>
  );
};

export default Cart;
