import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Headers = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: "100%",
        height: 100,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        borderBottomWidth: 0.2,
        borderBottomColor: "#8e8e8e",
        backgroundColor: "#fff",
      }}
    >
      <Text
        style={{
          fontWeight: "600",
          fontSize: 20,
          color: "#000",
          marginLeft: 20,
          marginTop: 30,
        }}
      >
        Bucket Queue
      </Text>
      <TouchableOpacity onPress={()=>{
        navigation.navigate('Home');
      }}>
        <Image
          source={require("../images/playstore.png")}
          style={{ width: 40, height: 40, marginRight: 35, marginTop: 22, justifyContent: 'center', alignItems: 'center' }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Headers;
