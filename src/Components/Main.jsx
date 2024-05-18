import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions,TouchableOpacity,Text, Image,FlatList, Animated, ScrollView } from "react-native";
import Slide from "./Slide";
import { Button } from "react-native-elements";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../type';
import {  useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get("window");

const data=[
  {
    id:1, url : "https://th.bing.com/th/id/R.2fcf4307a708b5c8ba2ceb1f847f45ca?rik=F1jPHNURmn2djQ&riu=http%3a%2f%2fwww.healthline.com%2fhlcmsresource%2fimages%2fmhqc%2fquote12.jpg&ehk=IlRn0e6fQuXWOpRUvLZbGneV1dT%2fnS9HWL86SlbeieA%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id:2, url:"https://i0.wp.com/www.healthyplace.com/sites/default/files/images/stories/insight/quotes/mental-health-quote-hp-51-v.jpg"
  },
  {
    id:3,url:"https://th.bing.com/th/id/OIP.H29n4QKvUUL27h87grWRIwHaL2?rs=1&pid=ImgDetMain"
  }
]

const Main = () => {
  const navigation=useNavigation();
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  const [dataList, setDataList] = useState(data);

useEffect(() => {
  setDataList(data); // Initialize your data
  let currentIndex = 0; // Track the current index

  const interval = setInterval(() => {
    // Calculate the next index (directly move to the first item if at the end)
    const nextIndex = (currentIndex + 1) % dataList.length;
    // Calculate the scroll value based on the next index
    const nextScrollValue = nextIndex * width;
    // Update the current index and scroll to the next item
    currentIndex = nextIndex;
    this.flatList.scrollToOffset({ animated: true, offset: nextScrollValue });
  }, 3000);
  return () => clearInterval(interval); // Clean up the interval
}, [dataList]);

  if (data && data.length) {
    return (
      <View >
          <TouchableOpacity
          onPress={()=>{ navigation.navigate("SignIn"); }}
          style={{ backgroundColor: "#007AFF",position:"absolute", width:"30%" ,height:"7%"  ,alignSelf:"center",justifyContent:"center",borderRadius: 5,zIndex:3,bottom: "10%" }}
        >
          <Text style={{ color: "#FFFFFF",alignSelf:"center" }}>Sign Up</Text>
        </TouchableOpacity> 
        <FlatList
          data={data}
          ref={(flatList) => {
            this.flatList = flatList;
          }}
          keyExtractor={(item, index) => "key" + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
           return (
             <>
        <Slide item={item} />

        </>
    ); }}
    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}

        />
        
      
        <View style={styles.dotView}>
          {data.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 10,
                  width: 10,
                  backgroundColor: "#595959",
                  margin: 8,
                  borderRadius: 5,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  dotView: { flexDirection: "row", justifyContent: "center" },
});

export default Main;
