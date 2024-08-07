import React from "react";
import { View, StyleSheet, Text, Image,TouchableOpacity, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Slide = ({ item }) => {
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} source={{ uri: item.url }} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 20,
    height: height-40,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    zIndex:-1,
    elevation: 5,
  },
  image: {
    width: width - 20,
    height: "100%",
    borderRadius: 10,
    zIndex:1,
  },
 
});

export default Slide;