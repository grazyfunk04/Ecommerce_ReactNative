import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import CustomButton from "../common/CommonButton";
import RazorpayCheckout from "react-native-razorpay";
import { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } from "@env";
import { useNavigation } from "@react-navigation/native";
import { addOrder, deleteOrder } from "../redux/actions/Actions";

const Checkout = () => {
  const cartData = useSelector((state) => state.reducers);
  const dispatch = useDispatch();
  const addressList = useSelector((state) => state.addressreducers);
  const [selectedAddress, setSelectedAddress] = useState(" ");
  const navigation = useNavigation();
  let razorpay = RAZORPAY_KEY_ID;
  let razorpay_secret = RAZORPAY_KEY_SECRET;

  const getTotal = () => {
    let tempTotal = 0;
    cartData.map((item) => {
      tempTotal += item.price;
    });
    return tempTotal;
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View>
          <FlatList
            data={cartData}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    width: "100%",
                    height: 70,
                    flexDirection: "row",
                    marginTop: 50,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{ width: 70, height: 70, marginLeft: 30 }}
                  />
                  <View style={{ padding: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: 600 }}>
                      {item.name}
                    </Text>
                    <Text style={{ marginTop: 10, fontWeight: 600 }}>
                      ₹ {item.price}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 50,
            paddingRight: 20,
            marginTop: 30,
            borderTopWidth: 0.5,
            borderTopColor: "#8e8e8e",
            height: 50,
          }}
        >
          <Text>Total : </Text>
          <Text>{"₹ " + getTotal()}</Text>
        </View>
        <View>
          <FlatList
            data={addressList}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    width: "100%",
                    height: 100,
                    borderWidth: 0.4,
                    borderColor: "#8e8e8e",
                    alignSelf: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text style={{ marginLeft: 20, marginBottom: 10 }}>
                      {"City : " + item.city}
                    </Text>
                    <Text style={{ marginLeft: 20, marginBottom: 10 }}>
                      {"Building : " + item.building}
                    </Text>
                    <Text style={{ marginLeft: 20, marginBottom: 10 }}>
                      {"Pincode : " + item.pincode}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      borderWidth: 0.2,
                      borderRadius: 10,
                      padding: 7,
                      marginRight: 20,
                    }}
                    onPress={() => {
                      setSelectedAddress(
                        "City : " +
                          item.city +
                          " " +
                          ",Building : " +
                          item.building +
                          " " +
                          ",Pincode : " +
                          item.pincode
                      );
                    }}
                  >
                    <Text>Select Address</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <Text style={{ margin: 20, fontSize: 18 }}>Selected Address</Text>
        <Text style={{ marginLeft: 20, fontSize: 16 }}>
          {selectedAddress === " "
            ? "Please select any address"
            : selectedAddress}
        </Text>
        <CustomButton
          title={"Place Order"}
          bgColor={"#000"}
          textColor={"white"}
          onPress={() => {
            var options = {
              description: "Credits towards consultation",
              image:
                "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.decanter.com%2Fwine-news%2Flegal-battle-looms-over-apple-s-champagne-iphone-16277%2F&psig=AOvVaw2dW5994jUkfRgpPiRi96So&ust=1703926903157000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCOiYk8CktIMDFQAAAAAdAAAAABAE",
              currency: "INR",
              key: "rzp_test_NCnSgt2UCCjzvs", // Replace with your Razorpay key
              amount: "" + parseInt(getTotal() * 100) + "", // Amount in paise (e.g., 5000 INR = 500000 paise)
              name: "Acme Corp",
              order_id: "",
              prefill: {
                email: "kunalmehndi10@razorpay.com",
                contact: "9191919191",
                name: "Kunal Mehndiratta",
              },
              theme: { color: "#53a20e" },
            };

            RazorpayCheckout.open(options)
              .then((data) => {
                // handle success
                alert(`Success: ${data.razorpay_payment_id}`);
                dispatch(
                  addOrder({
                    items: cartData,
                    total: getTotal(),
                    address: selectedAddress,
                  })
                );
                navigation.navigate("OrderSucess", {
                  status: "Success",
                });
              })
              .catch((error) => {
                // handle failure
                alert(`Error: ${error.code} | ${error.description}`);
                navigation.navigate("OrderSucess", {
                  status: "Failed",
                });
              });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Checkout;
