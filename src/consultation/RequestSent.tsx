import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../type';
 import {  useNavigation } from '@react-navigation/native';

const RequestSent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <View style={styles.view3}>
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/07dd90382204c49c44274eb52abd1d50f1ab47983728f3eebfddd4babd899220?apiKey=42bb954c825745999302100cb42c8fd0&",
            }}
            style={styles.image1}
          />
        </View>
        <View style={styles.view4}>
          <View style={styles.view5}>
            <Text>Request Sent</Text>
          </View>
          <View style={styles.view6}>
            <Text>
              Your request for a consultation with Dr. Emilia Clarke has been
              successfully sent. You will be notified once the doctor has
              confirmed the appointment.
            </Text>
          </View>
          <View style={styles.view7}>
          <TouchableOpacity style={styles.view8} onPress={()=> navigation.navigate("Stories")} >
              <Text style={{color:"white"}}>Back to Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.view9} />
      </View>
    </View>
  );
}
export default RequestSent;

const styles = StyleSheet.create({
  view1: {
    alignItems: "stretch",
    backgroundColor: "#FFF",
    display: "flex",
    maxWidth: 480,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
   marginHorizontal:0,
   marginVertical: "auto",
  },
  view2: {
    alignItems: "stretch",
    backgroundColor: "#FFF",
    display: "flex",
    width: "100%",
    paddingBottom: 50,
    flexDirection: "column",
  },
  view3: {
    alignItems: "flex-start",
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
    fontWeight: "700",
    paddingVertical: 0,
    paddingHorizontal: 16,
  },
  view5: {
    // fontFeatureSettings: "'dlig' on",
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    marginTop: 22,
  },
  view6: {
    // fontFeatureSettings: "'dlig' on",
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    marginTop: 16,
  },
  view7: {
    justifyContent: "center",
    alignItems: "stretch",
    borderRadius: 12,
    backgroundColor: "#1A5CE5",
    alignSelf: "center",
    display: "flex",
    marginTop: 24,
    width: 156,
    maxWidth: "100%",
    flexDirection: "column",
    color: "#FFF",
    letterSpacing: 0.24,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  view8: {
    // fontFeatureSettings: "'dlig' on",
    fontFamily: "Inter, sans-serif",
    alignItems: "center",
    backgroundColor: "#1A5CE5",
    justifyContent: "center",
  },
  view9: {
    backgroundColor: "#FFF",
    minHeight: 20,
    width: "100%",
    marginTop: 12,
        marginRight: 0,
        marginLeft: 0,
        marginBottom: 356,
  },
});





