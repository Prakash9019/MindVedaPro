import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../type';
 import {  useNavigation } from '@react-navigation/native';
 import AntDesign from 'react-native-vector-icons/AntDesign'

const DoctorProfile = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <ScrollView>
    <View style={styles.view1}>
      <View style={styles.view2}>
        <View style={styles.view3}>
          <View style={styles.view4}>
            <TouchableOpacity >
            <AntDesign size={25} name="arrowleft"/>
            </TouchableOpacity>
          <AntDesign size={25} name="arrowleft"/>

            <View style={styles.view5}>
              <Text>Profile</Text>
            </View>
          </View>
        </View>
        <View style={styles.view6}>
          {/* <Image
            
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/46efc83b97142b2cc02286f8f39b8c604bcf7c0b824974ac98fa54fab0c13d99?apiKey=42bb954c825745999302100cb42c8fd0&",
            }}
            style={styles.image2}
          /> */}
          <View style={styles.view7}>
            <Text>Dr. Emilia </Text>
          </View>
          <View style={styles.view8}>
            <Text>Stanford University</Text>
          </View>
          <View style={styles.view8}>
            <Text>Palo Alto, CA</Text>
          </View>
          <View style={styles.view10}>
            <View style={styles.view11}>
              <TouchableOpacity style={styles.view12} onPress={()=> navigation.navigate("RequestConst")} >
                <Text>Request Consultation</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.view11}>
              <TouchableOpacity style={styles.view12} onPress={()=> navigation.navigate("MsgRequest")} >
                <Text>Send Query Anonymously</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.view15}>
            <Text>About</Text>
          </View>
          <View style={styles.view16}>
            <Text>
              I'm a psychologist and professor at Stanford University. I've been
              studying stress for over 20 years. My research has shown that
              stress can actually be good for you, if you know how to manage it.
            </Text>
          </View>
          <View style={styles.view17}>
            <Text>Posts</Text>
          </View>
        </View>
        <View style={styles.view18}>
          <View style={styles.view19}>
            <View style={styles.view20}>
              <View>
                <Text style={styles.view21}>The secret to managing stress</Text>
              </View>
              <View style={styles.view22}>
                <Text>Mental Health · 3d ago · #StressRelief</Text>
              </View>
            </View>
            {/* <Image
              
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/319dc1e48bea128e89302e66ad0758266213944e12c0e857475ad66aaedbaf5d?apiKey=42bb954c825745999302100cb42c8fd0&",
              }}
              style={styles.image3}
            /> */}
          </View>
        </View>
        <View style={styles.view23}>
          <View style={styles.view24}>
            <View style={styles.view25}>
              <View>
                <Text  style={styles.view21}>How to overcome anxiety</Text>
              </View>
              <View style={styles.view22}>
                <Text>Mental Health · 5d ago · #Anxiety</Text>
              </View>
            </View>
            {/* <Image
              
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ebbe8c7a5a2c4da90d57cf7a37af6a3fe743679e23b26be825512fec8f6fada?apiKey=42bb954c825745999302100cb42c8fd0&",
              }}
              style={styles.image4}
            /> */}
          </View>
        </View>
        <View style={styles.view23}>
          <View style={styles.view24}>
            <View style={styles.view25}>
              <View>
                <Text  style={styles.view21}>What is burnout?</Text>
              </View>
              <View style={styles.view22}>
                <Text>Mental Health · 8d ago · #Burnout</Text>
              </View>
            </View>
            {/* <Image
              
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d5614b44a9fae83ec40b6b23689ceba6f77ada07188569aca356b634e75ae59?apiKey=42bb954c825745999302100cb42c8fd0&",
              }}
              style={styles.image5}
            /> */}
          </View>
        </View>
        <View style={styles.view33} />
      </View>
    </View>
    </ScrollView>
  );
}

export default DoctorProfile;

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
    backgroundColor: "#F7FAFC",
    display: "flex",
    width: "100%",
    flexDirection: "column",
  },
  view3: {
    alignItems: "stretch",
    backgroundColor: "#F7FAFC",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    fontSize: 18,
    color: "#0D141C",
    fontWeight: "700",
   
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 8,
    paddingLeft: 16,
  },
  view4: {
    justifyContent: "space-between",
    alignItems: "stretch",
    display: "flex",
    gap: 20,
    paddingBottom: 12,
    paddingTop:12,
  },
  image1: { position: "relative", width: 24, aspectRatio: 1 },
  view5: {
    
    fontFamily: "Inter, sans-serif",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
  },
  view6: {
    display: "flex",
    marginTop: 16,
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    fontSize: 22,
    fontWeight: "700",
    paddingLeft:16,
    paddingRight:16,
  },
  image2: {
    position: "relative",
    width: 128,
    maxWidth: "100%",
    aspectRatio: 1,
  },
  view7: {
    color: "#0D141C",
    
    fontFamily: "Inter, sans-serif",
    alignSelf: "flex-start",
    marginTop: 16,
  },
  view8: {
    color: "#4F7596",
    
    alignSelf: "flex-start",
    fontFamily: 'Epilogue, sans-serif',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24, 
  },
 
  view10: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row" ,
    // marginLeft: 20,
     justifyContent: 'space-evenly',
    marginRight:12,
    // marginTop: 16,
    gap: 12,
    fontSize: 14,
    letterSpacing: 0.21,
  },
  view11: {
    justifyContent: "center",
    alignItems: "stretch",
    borderRadius: 12,
    backgroundColor: "#E8EDF2",
    display: "flex",
    flexGrow: 1,
    flexBasis: "0%",
    flexDirection: "column",
    color: "#0D141C",
    paddingTop: 10,
    paddingRight: 3,
    paddingBottom: 10,
    paddingLeft: 3,
  },
  view12: {
    
    fontFamily: "Inter, sans-serif",
    // alignItems: "stretch",
    backgroundColor: "#E8EDF2",
    justifyContent: "center",
  },
  
  view15: {
    color: "#0D141C",
    
    fontFamily: "Inter, sans-serif",
    marginTop: 36,
  },
  view16: {
    color: "#0D141C",
    
    marginTop: 16,
    fontFamily: 'Epilogue, sans-serif',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24, 
  },
  view17: {
    color: "#0D141C",
    
    fontFamily: "Inter, sans-serif",
    marginTop: 128,
  },
  view18: {
    alignItems: "stretch",
    backgroundColor: "#F7FAFC",
    display: "flex",
    marginTop: 12,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    padding: 16,
  },
  view19: {
    justifyContent: "space-between",
    alignItems: "stretch",
    display: "flex",
    gap: 16,
  },
  view20: {
    alignItems: "stretch",
    display: "flex",
    flexGrow: 1,
    flexBasis: "0%",
    flexDirection: "column",
    paddingRight:39,
    paddingBottom:21,
  },
  view21: {
    color: "#0D141C",
    
    fontFamily: 'Epilogue, sans-serif',
    fontWeight: '700',
    fontSize: 16,
  },
  view22: {
    color: "#4F7596",
    
    marginTop: 24,
    fontFamily: 'Epilogue, sans-serif',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24, 
  },
  image3: {
    position: "relative",
    width: 114,
    maxWidth: "100%",
    aspectRatio: "1.33",
  },
  view23: {
    alignItems: "stretch",
    backgroundColor: "#F7FAFC",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
   
    padding: 16,
  },
  view24: {
    justifyContent: "space-between",
    alignItems: "stretch",
    display: "flex",
    gap: 16,
  },
  view25: {
    alignItems: "stretch",
    alignSelf: "flex-start",
    display: "flex",
    flexGrow: 1,
    flexBasis: "0%",
    paddingRight: 8,
    flexDirection: "column",
  },
 
  image4: {
    position: "relative",
    width: 114,
    maxWidth: "100%",
    aspectRatio: "1.79",
  },
  view33: { backgroundColor: "#F7FAFC", minHeight: 20, width: "100%" },
});



