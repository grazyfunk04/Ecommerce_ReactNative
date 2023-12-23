import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react/cjs/react.production.min";
import { useDispatch, useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import { deleteAddress } from "../redux/actions/Actions";
let addressList = [];
const MyAddress = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const addressList = useSelector((state) => state.addressreducers);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          height: 70,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          marginTop: 30,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600", marginLeft: 15 }}>
          My Address
        </Text>
        <TouchableOpacity
          style={{
            marginRight: 20,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 0.2,
            padding: 7,
            borderRadius: 10,
            
          }}
          onPress={() => {
            navigation.navigate("AddAddress");
          }}
        >
          <Text>Add Address</Text>
        </TouchableOpacity>
      </View>
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
                }} onPress={()=>{
                    dispatch(deleteAddress(index));
                }}
              >
                <Text>Delete Address</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default MyAddress;
