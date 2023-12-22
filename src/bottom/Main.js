import { View, Text, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Headers from "../common/Headers";
import { products } from "../Product";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import MyProductItem from "../common/MyProductItem";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, addItemToWishlist } from "../redux/actions/Actions";

const Main = () => {
  const dispatch = useDispatch();
  const [categoryList, setCategoryList] = useState([]);
  const [tshirtList, setTshirtList] = useState([]);
  const [jeansList, setJeansList] = useState([]);
  const [shoesList, setShoesList] = useState([]);
  const [jacketList, setJacketList] = useState([]);
  const [slippersList, setSlippersList] = useState([]);
  const [trousersList, setTrousersList] = useState([]);

  useEffect(() => {
    let tempCategory = [];
    products.category.map((item) => {
      tempCategory.push(item);
    });
    setCategoryList(tempCategory);
    setTshirtList(products.category[0].data);
    setJeansList(products.category[1].data);
    setShoesList(products.category[2].data);
    setJacketList(products.category[3].data);
    setSlippersList(products.category[4].data);
    setTrousersList(products.category[5].data);
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1 }}>
        <View>
          <Headers />
          <Image
            source={require("../images/banner.jpeg")}
            style={{
              width: "94%",
              height: 200,
              borderRadius: 10,
              alignSelf: "center",
              marginTop: 10,
            }}
          />
          <View style={{ marginTop: 20 }}>
            <FlatList
              data={categoryList}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    style={{
                      padding: 10,
                      borderWidth: 1,
                      marginLeft: 20,
                      borderRadius: 20,
                    }}
                  >
                    <Text style={{ color: "#000" }}>{item.category}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 20,
              color: "#000",
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            New T Shirts
          </Text>
          <View style={{ marginTop: 20 }}>
            <FlatList
              data={tshirtList}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <MyProductItem
                    item={item}
                    onAddWishlist={(x) => {
                      dispatch(addItemToWishlist(x));
                    }}
                    onAddToCart={(x) => {
                      dispatch(addItemToCart(x));
                    }}
                  />
                );
              }}
            />
          </View>

          <Text
            style={{
              marginTop: 20,
              marginLeft: 20,
              color: "#000",
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            New Jeans
          </Text>
          <View style={{ marginTop: 20 }}>
            <FlatList
              data={jeansList}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <MyProductItem
                    item={item}
                    onAddWishlist={(x) => {
                      dispatch(addItemToWishlist(x));
                    }}
                    onAddToCart={(x) => {
                      dispatch(addItemToCart(x));
                    }}
                  />
                );
              }}
            />
          </View>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 20,
              color: "#000",
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            New Shoes
          </Text>
          <View style={{ marginTop: 20 }}>
            <FlatList
              data={shoesList}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <MyProductItem
                    item={item}
                    onAddWishlist={(x) => {
                      dispatch(addItemToWishlist(x));
                    }}
                    onAddToCart={(x) => {
                      dispatch(addItemToCart(x));
                    }}
                  />
                );
              }}
            />
          </View>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 20,
              color: "#000",
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            New Jacket
          </Text>
          <View style={{ marginTop: 20 }}>
            <FlatList
              data={jacketList}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <MyProductItem
                    item={item}
                    onAddWishlist={(x) => {
                      dispatch(addItemToWishlist(x));
                    }}
                    onAddToCart={(x) => {
                      dispatch(addItemToCart(x));
                    }}
                  />
                );
              }}
            />
          </View>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 20,
              color: "#000",
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            New Trousers
          </Text>
          <View style={{ marginTop: 20 }}>
            <FlatList
              data={trousersList}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <MyProductItem
                    item={item}
                    onAddWishlist={(x) => {
                      dispatch(addItemToWishlist(x));
                    }}
                    onAddToCart={(x) => {
                      dispatch(addItemToCart(x));
                    }}
                  />
                );
              }}
            />
          </View>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 20,
              color: "#000",
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            New Slippers
          </Text>
          <View style={{ marginTop: 20, marginBottom: 100 }}>
            <FlatList
              data={slippersList}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <MyProductItem
                    item={item}
                    onAddWishlist={(x) => {
                      dispatch(addItemToWishlist(x));
                    }}
                    onAddToCart={(x) => {
                      dispatch(addItemToCart(x));
                    }}
                  />
                );
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Main;
