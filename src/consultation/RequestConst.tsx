import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../type';
 import {  useNavigation } from '@react-navigation/native';

const RequestConst = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <ScrollView>
    <View style={styles.view1}>
      <View style={styles.view2}>
        <View style={styles.view3}>
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/82a8f6a4069aaecb2290702867cfe0f01e2f73cf101a47e09524b0a1f8185a98?apiKey=42bb954c825745999302100cb42c8fd0&",
            }}
            style={styles.image1}
          />
        </View>
        <View style={styles.view4}>
          <View >
            <Text style={styles.view5} >Request a Consultation</Text>
          </View>
          <View style={styles.view6}>
              <Text>Select date and time</Text>
            {/* <Image
              resizeMode="auto"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/781e7c67f55f475eb2897edb3fecb01daa0bb79267d827a128555a9cba5acfb6?apiKey=42bb954c825745999302100cb42c8fd0&",
              }}
              style={styles.image2}
            /> */}
          </View>
          <View style={styles.view8}>
            <Text>Your concerns</Text>
          </View>
          <View style={styles.view9}>
            <TextInput placeholder="What are the main reasons you're seeking help for?"/>
          </View>
          <View style={styles.view8}>
            <Text>Preferred consultation method</Text>
          </View>
          <View style={styles.view9}>
            <TextInput placeholder="Video call, in-person, no preference" />
           
            {/* <Image
              resizeMode="auto"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7fcca66fd698349d85724b20345e679cf2b9cce5034943e7b9f023a7330dedaf?apiKey=42bb954c825745999302100cb42c8fd0&",
              }}
              style={styles.image3}
            /> */}
          </View>
          <View style={styles.view8}>
            <Text>Additional notes</Text>
          </View>
          <View style={styles.view9}>
          <TextInput placeholder="Anything else you'd like to share with your doctor?"/>
          </View>
          <View style={styles.view15}>
            <TouchableOpacity style={styles.view16} onPress={()=> navigation.navigate("RequestSent")} >
              <Text style={{color:"white"}}>Submit request</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.view17} />
      </View>
    </View>
    </ScrollView>
  );
}
export default RequestConst;
const styles = StyleSheet.create({
  view1: {
    alignItems: "stretch",
    backgroundColor: "#FFF",
    display: "flex",
    maxWidth: 480,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: 0,
    marginVertical: "auto",
  },
  view2: {
    alignItems: "stretch",
    backgroundColor: "#FFF",
    display: "flex",
    width: "100%",
    paddingBottom: 28,
    flexDirection: "column",
  },
  view3: {
    backgroundColor: "#FFF",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 24,
    paddingRight: 60,
    paddingLeft: 24,
    paddingBottom: 16,
  },
  image1: { position: "relative", width: 24, aspectRatio: "1" },
  view4: {
    display: "flex",
    marginTop: 20,
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    fontSize: 16,
    color: "#121217",
    fontWeight: "400",
    paddingHorizontal: 0,
    paddingVertical: "auto",
  },
  view5: {

    fontFamily: 'Inter, sans-serif',
    fontWeight: '700',
    fontSize: 22,
  },
  view6: {
    justifyContent: "space-between",
    alignItems: "stretch",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DBDEE5',
    borderStyle: 'solid',
    backgroundColor: "#FFF",
    display: "flex",
    marginTop: 24,
    marginLeft: 10,
    marginRight: 12,
    gap: 20,
    color: "#637087",
    paddingVertical: 16,
    paddingHorizontal: 15,
  },

  image2: { position: "relative", width: 24, aspectRatio: "1" },
  view8: {
  //  fontFeatureSettings: "'dlig' on",
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    marginTop: 24,
    marginLeft: 10,
  },
  view9: {

    fontFamily: "Inter, sans-serif",
    justifyContent: "space-between",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DBDEE5',
    borderStyle: 'solid',
    backgroundColor: "#FFF",
    marginTop: 8,
    marginLeft: 10,
    marginRight: 12,
    color: "#637087",
    // paddingTop: 15,
    paddingRight: 15,
    // paddingLeft: 15,
    paddingBottom: 84,
  },
  
  
  image3: { position: "relative", width: 24, aspectRatio: "1" },
  
  view15: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#1A5CE5",
    display: "flex",
    marginTop: 24,
    marginLeft: 100,
    marginRight: 100,
    color: "#FFF",
    fontWeight: "700",
    // whiteSpace: "nowrap",
    letterSpacing: 0.24,
    // color: "#FFF",
    // fontWeight: "700",
    // // whiteSpace: "nowrap",
    // letterSpacing: 0.24,
    paddingVertical: 9,
    paddingHorizontal: 6,
  },
  view16: {
    fontFamily: "Inter, sans-serif",
    alignItems: "center",
    color: "red",
    // backgroundColor: "white",
    justifyContent: "center",
  },
  view17: {
    backgroundColor: "#FFF",
    minHeight: 20,
    marginTop: 12,
    width: "100%",
  },
});


