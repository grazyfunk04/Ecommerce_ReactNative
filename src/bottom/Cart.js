import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import CartItem from "../common/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { addItemToWishlist, removeFromCart } from "../redux/actions/Actions";
import CommonButton from "../common/CommonButton";
import RazorpayCheckout from "react-native-razorpay";
import {RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET} from "@env"
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector((state) => state.reducers);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  let razorpay = RAZORPAY_KEY_ID;
  let razorpay_secret = RAZORPAY_KEY_SECRET;
  let amount = 500;

  return (
    <View style={{ flex: 1, marginTop: 40, marginBottom: 80 }}>
      {cartData.length > 0 ? (
        <FlatList
          data={cartData}
          renderItem={({ item, index }) => {
            return (
              <CartItem
                item={item}
                onAddWishlist={(x) => {
                  dispatch(addItemToWishlist(x));
                }}
                onRemoveItem={() => {
                  dispatch(removeFromCart(index));
                }}
              />
            );
          }}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={require("../images/no_items.png")}
            style={{ width: 150, height: 150 }}
          />
          <Text style={{ fontSize: 20, fontWeight: "600" }}>
            No Items in Cart
          </Text>
        </View>
      )}
      {cartData.length > 0 ? (
        <View style={{ marginBottom: 10 }}>
          <CommonButton
            title={"Proceed to Payment"}
            bgColor={"green"}
            textColor={"#fff"}
            onPress={() => {
              navigation.navigate('Checkout');
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

export default Cart;
