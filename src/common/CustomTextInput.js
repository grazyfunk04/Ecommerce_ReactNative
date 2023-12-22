import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

const CustomTextInput = ({ value, onChangeText, placeholder, icon, type, keyboardType }) => {
    const [text, setText] = useState(value);
  return (
    <View
      style={{
        width: "85%",
        height: 50,
        borderWidth: 0.5,
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <Image source={icon} style={{ width: 24, height: 24 }} />
      <TextInput
        value={value}
        onChangeText={txt => {
            onChangeText(txt);
        }}
        keyboardType={keyboardType?keyboardType:'default'}
        placeholder={placeholder}
        style={{ marginLeft: 10 }}
        secureTextEntry={type?true:false}
      />
    </View>
  );
};

export default CustomTextInput;
