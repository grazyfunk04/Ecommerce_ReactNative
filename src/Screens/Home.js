import { View, Text, Image, Touchable } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Main from "../bottom/Main";
import Search from "../bottom/Search";
import Cart from "../bottom/Cart";
import Wishlist from "../bottom/Wishlist";
import Profile from "../bottom/Profile";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={{ flex: 1 }}>
      {selectedTab == 0 ? (
        <Main />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Cart />
      ) : selectedTab == 3 ? (
        <Wishlist />
      ) : (
        <Profile />
      )}
      <View
        style={{
          width: "100%",
          height: 70,
          backgroundColor: "#fff",
          position: "absolute",
          bottom: 0,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }} onPress={()=>{
            setSelectedTab(0);
          }}
        >
          <Image
            source={require("../images/home.png")}
            style={{ width: 24, height: 24, tintColor: selectedTab == 0 ? '#000':'#8e8e8e' }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={()=>{
            setSelectedTab(1);
          }}
        >
          <Image
            source={require("../images/search.png")}
            style={{ width: 24, height: 24, tintColor: selectedTab == 1 ? '#000':'#8e8e8e' }}
          />
        </TouchableOpacity>

        <View
          style={{
            width: "10%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              backgroundColor: selectedTab == 2 ? 'purple' : '#000',
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={()=>{
              setSelectedTab(2);
            }}
          >
            <Image
              source={require("../images/bag.png")}
              style={{ width: 24, height: 24, tintColor: '#fff' }}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }} onPress={()=>{
            setSelectedTab(3);
          }}
        >
          <Image
            source={require("../images/like.png")}
            style={{ width: 24, height: 24, tintColor: selectedTab == 3 ? '#000':'#8e8e8e' }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }} onPress={()=>{
            setSelectedTab(4);
          }}
        >
          <Image
            source={require("../images/personal.png")}
            style={{ width: 24, height: 24, tintColor: selectedTab == 4 ? '#000':'#8e8e8e' }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
