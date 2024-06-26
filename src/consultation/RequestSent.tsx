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
 import AntDesign from 'react-native-vector-icons/AntDesign'

const RequestSent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <View style={styles.view3}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
            <AntDesign size={25} name="arrowleft"/>
          </TouchableOpacity>
        </View>
        <View style={styles.view4}>
         
            <Text style={styles.view5}>Request Sent</Text>
       
          <View style={styles.view6}>
            <Text>
              Your request for a consultation with Dr. Emilia Clarke has been
              successfully sent. You will be notified once the doctor has
              confirmed the appointment.
            </Text>
          </View>
          <View style={styles.view7}>
          <TouchableOpacity style={styles.view8} onPress={()=> navigation.navigate("DoctorProfile")} >
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
    marginLeft:20,
     fontFamily: 'Inter, sans-serif',
     fontWeight: '700',
     fontSize: 22,
   },
  view6: {
    // fontFeatureSettings: "'dlig' on",
    fontFamily: "Inter, sans-serif",
    fontWeight: "900",

    marginTop: 16,
  },
  view7: {
    justifyContent: "center",
    alignItems: "stretch",
    borderRadius: 12,
    backgroundColor: "#1A8AE5",
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
    backgroundColor: "#1A8AE5",
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





