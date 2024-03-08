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
import DatePicker from 'react-native-date-picker'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../type';
 import {  useNavigation } from '@react-navigation/native';
 import AntDesign from 'react-native-vector-icons/AntDesign'
 import Foundation from 'react-native-vector-icons/Foundation'

const RequestConst = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [date, setDate] = React.useState(new Date())
  const [open, setOpen] = React.useState(false)
  const [value, onChangeText] = React.useState('');
  return (
    <ScrollView>
    <View style={styles.view1}>
      <View style={styles.view2}>
        <View style={styles.view3}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
            <AntDesign size={25} name="arrowleft"/>
          </TouchableOpacity>
        </View>
        <View >
            <Text style={styles.view5} >Request a Consultation</Text>
          </View>
        <View style={styles.view4}>
         
          <View style={styles.view6}>
          <TouchableOpacity onPress={() => setOpen(true)}><Text>Select date and time</Text></TouchableOpacity>
              <Foundation size={30} name="calendar"/>
              {/* <DatePicker  mode="datetime"/> */}
              <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
          </View>
          <View style={styles.view8}>
            <Text>Your concerns</Text>
          </View>
          <TextInput editable multiline={true} numberOfLines={2} onChangeText={text => onChangeText(text)} value={value}
        placeholder="What are the main reasons you're seeking help for?" style={styles.view9}
      />
         
          <View style={styles.view8}>
            <Text>Preferred consultation method</Text>
          </View>
          <View style={styles.view9}>
         
          <TextInput editable multiline={true} numberOfLines={2} onChangeText={text => onChangeText(text)} value={value}
        placeholder="Video call, in-person, no preference"   
      />  
       <Foundation size={30} name="comment-video" style={{padding:12,paddingRight:1,}}/>
        </View>
           
          <View style={styles.view8}>
            <Text>Additional notes</Text>
          </View>
          {/* <View style={styles.view9}> */}
          <TextInput editable multiline={true} numberOfLines={2} onChangeText={text => onChangeText(text)} value={value}
        placeholder="Anything else you'd like to share with your doctor?" style={styles.view9}
      />
         
          {/* </View> */}
          <View style={styles.view15}>
            <TouchableOpacity style={styles.view16} onPress={()=> navigation.navigate("RequestSent")} >
              <Text style={{color:"white"}}>Submit request</Text>
            </TouchableOpacity>
          </View>
        </View>
 
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
    marginTop: 10,
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
   marginLeft:23,
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
    marginTop: 24,
    marginLeft: 10,
    marginRight: 12,
    gap: 20,
    color: "#637087",
    paddingVertical: 16,
    display: "flex",
    flexDirection: "row",
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
    color: "blue",
    display:"flex",
    flexDirection:"row",
    // paddingTop: 15,
    paddingRight: 15,
    // paddingLeft: 15,
    // paddingBottom: 84,
  },
  
  
  image3: { position: "relative", width: 24, aspectRatio: "1" },
  
  view15: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#1A5CE5",
    display: "flex",
    marginTop: 100,
    marginBottom:50,
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


