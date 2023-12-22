import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import CustomTextInput from "../common/CustomTextInput";
import CommonButton from "../common/CommonButton";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
let isValid = true;

const SignUp = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [badName, setBadName] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [badMobile, setBadMobile] = useState(false);
  const [password, setPassword] = useState("");
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [badConfirmPassword, setBadConfirmPassword] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const signup = () => {
    setButtonDisabled(true);
    if (name === "") {
      setBadName(true);
      setButtonDisabled(false);
    } else {
      setBadName(false);
      if (email === "") {
        setBadEmail(true);
        setButtonDisabled(false);
      } else {
        setBadEmail(false);
        if (mobile === "" || mobile.length < 10 || mobile.length > 10) {
          setBadMobile(true);
          setButtonDisabled(false);
        } else {
          setBadMobile(false);
          if (password === "") {
            setBadPassword(true);
            setButtonDisabled(false);
          } else {
            setBadPassword(false);
            if (confirmPassword === "" || confirmPassword !== password) {
              setBadConfirmPassword(true);
              setButtonDisabled(false);
            } else {
              setBadConfirmPassword(false);
              saveData();
            }
          }
        }
      }
    }
  };
  
  const saveData = async () => {
    await AsyncStorage.setItem("NAME", name);
    await AsyncStorage.setItem("EMAIL", email);
    await AsyncStorage.setItem("MOBILE", mobile);
    await AsyncStorage.setItem("PASSWORD", password);
    navigation.goBack();
  };
  
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../images/playstore.png")}
          style={{ width: 80, height: 80, alignSelf: "center", marginTop: 80 }}
        />
        <Text
          style={{
            marginTop: 30,
            alignSelf: "center",
            fontSize: 30,
            fontWeight: "600",
            color: "#000",
          }}
        >
          Create New Account
        </Text>
        <CustomTextInput
          placeholder={"Enter your Name"}
          value={name}
          onChangeText={(txt) => {
            setName(txt);
          }}
          icon={require("../images/user.png")}
        />
        {badName === true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
            Please Enter Name
          </Text>
        )}
        <CustomTextInput
          placeholder={"Enter your Email Id"}
          value={email}
          onChangeText={(txt) => {
            setEmail(txt);
          }}
          icon={require("../images/email.png")}
        />
        {badEmail === true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
            Please Enter Email id
          </Text>
        )}
        <CustomTextInput
          placeholder={"Enter your Mobile"}
          value={mobile}
          onChangeText={(txt) => {
            setMobile(txt);
          }}
          keyboardType={"number-pad"}
          icon={require("../images/mobile.png")}
        />
        {badMobile === true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
            Please Enter Valid Mobile
          </Text>
        )}
        <CustomTextInput
          placeholder={"Enter your password"}
          value={password}
          onChangeText={(txt) => {
            setPassword(txt);
          }}
          icon={require("../images/lock.png")}
        />
        {badPassword === true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
            Please Enter Password
          </Text>
        )}
        <CustomTextInput
          placeholder={"Confirm your password"}
          value={confirmPassword}
          onChangeText={(txt) => {
            setConfirmPassword(txt);
          }}
          icon={require("../images/lock.png")}
        />
        {badConfirmPassword === true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
            Please Confirm Password
          </Text>
        )}
        <CommonButton
          title={"Sign Up"}
          bgColor={buttonDisabled ? "#8e8e8e" : "#000"}
          textColor={"#fff"}
          onPress={() => {
            signup();
          }}
          disabled={buttonDisabled}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            alignSelf: "center",
            marginTop: 20,
            textDecorationLine: "underline",
            marginBottom: 70,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          Already have an account
        </Text>
      </View>
    </ScrollView>
  );
};

export default SignUp;
