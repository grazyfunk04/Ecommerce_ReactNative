import { View, Text, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const OrderSucess = () => {
  const orders = useSelector((state) => state.orderreducers);
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={
          route.params.status == "Success"
            ? require("../src/images/check.png")
            : require("../src/images/failed.png")
        }
        style={{ width: 50, height: 50 }}
      />
      <Text style={{ marginTop: 20, fontSize: 20 }}>
        {route.params.status == "Success"
          ? "Your Order Placed Successfully"
          : "Order Failed"}
      </Text>
      <TouchableOpacity
        style={{
          width: 200,
          height: 50,
          marginTop: 50,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 0.5,
        }}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderSucess;
