import {
    FlatList,
    ScrollView,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    Text,
  } from "react-native";
import React from 'react'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../type';
 import {  useNavigation } from '@react-navigation/native';
 import AntDesign from 'react-native-vector-icons/AntDesign'
import { SafeAreaView } from "react-native-safe-area-context";

const MsgRequest = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [value, onChangeText] = React.useState('');
  return (
    <SafeAreaView style={{backgroundColor:"white"}}>
      
            <View style={styles.view3}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
            <AntDesign size={25} name="arrowleft"/>
          </TouchableOpacity>
            </View>
            <View style={styles.view4}>
              <View>
                <Text style={styles.view5}>Send a Message Request</Text>
              </View>
              <View style={styles.view6}>
                <Text>Your message</Text>
              </View>
              {/* <View style={styles.view7}> */}
              <TextInput editable multiline={true} numberOfLines={10} onChangeText={text => onChangeText(text)} value={value}
        placeholder="What are the main reasons you're reaching 
        out to this expert for?" style={styles.view7}
      />
              {/* </View> */}
              <View style={styles.view8}>
              {/* onPress={()=> navigation.navigate("Stories")} */}
              <TouchableOpacity style={styles.view9}  onPress={() => navigation.navigate("ConfirmationScreen")} >
              <Text style={{color:"white"}}>Send message request</Text>
            </TouchableOpacity>
               
              </View>
            </View>
            <View style={styles.view10} />
          
        </SafeAreaView>
      );
    }
export default MsgRequest;
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
        // fontFeatureSettings: "dlig"
        fontFamily: 'Inter, sans-serif',
        fontWeight: '700',
        fontSize: 22,
      },
      view6: {
        // fontFeatureSettings: "'dlig' on",
        fontFamily: "Inter, sans-serif",
        fontWeight: "500",
        marginTop: 24,
        // whiteSpace: "nowrap",
      },
      view7: {
        // fontFeatureSettings: "'dlig' on",
        fontFamily: "Inter, sans-serif",
        justifyContent: "space-between",
        alignItems: "stretch",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#DBDEE5',
        borderStyle: 'solid',
        backgroundColor: "#FFF",
        marginTop: 3,
        marginBottom: 3,
        color: "#637087",
        fontWeight: "400",
        paddingTop: 15,
        paddingRight: 15,
        paddingLeft: 15,
        paddingBottom: 84,
      },
      view8: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        backgroundColor: "#1A8AE5",
        display: "flex",
        marginTop: 24,
        color: "#FFF",
        letterSpacing: 0.24,
        paddingVertical: 12,
        paddingHorizontal: 60,
      },
      view9: {
        // fontFeatureSettings: "'dlig' on",
        fontFamily: "Inter, sans-serif",
        alignItems: "stretch",
        backgroundColor: "#1A8AE5",
        justifyContent: "center",
      },
      view10: {
        backgroundColor: "#FFF",
        minHeight: 20,
        width: "100%",
        marginTop: 12,
        marginRight: 0,
        marginLeft: 0,
        marginBottom: 286,
      },
    });
    
    