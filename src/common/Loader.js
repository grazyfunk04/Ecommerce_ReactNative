import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { Modal } from "react-native";

const Loader = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            width: 200, 
            height: 200,
            margin: 20,
            backgroundColor: "white",
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 35,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
            <ActivityIndicator/>
        </View>
      </View>
    </Modal>
  );
};

export default Loader;
