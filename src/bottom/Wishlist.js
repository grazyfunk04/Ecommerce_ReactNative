import { View, Text } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import CartItem from "../common/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeFromWishlist } from "../redux/actions/Actions";

const Wishlist = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector((state) => state.reducers2);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, marginTop: 40, marginBottom: 80 }}>
      <FlatList
        data={cartData}
        renderItem={({ item, index }) => {
          return (
            <CartItem
              item={item}
              isWishlist={'True'}
              onRemoveWishlist={()=>{
                dispatch(removeFromWishlist(index));
              }}
              onAddToCart={(x) => {
                dispatch(addItemToCart(x));
              }}
            />
          );
        }}
      />
    </View>
  );
}

export default Wishlist