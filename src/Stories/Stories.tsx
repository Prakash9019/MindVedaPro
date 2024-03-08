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

const Stories = () => {
  //const navigation=useNavigation();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScrollView>
        
            <View style={styles.view3}>
            <View style={styles.view4}>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <AntDesign size={25} name="arrowleft"/>
          </TouchableOpacity>
          <View style={styles.view5}>
          <Text style={styles.groupHeaderTitle}>Stories</Text>
          <AntDesign style={styles.image2} size={25} name="search1"/>
           </View>
          </View>
           

                {/* <Image
                  resizeMode="auto"
                  source={{
                    uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/892fa454aa7a764fa50d30b5fce1c02d76b760e85491927f02bb65fbbad1c0c7?apiKey=42bb954c825745999302100cb42c8fd0&",
                  }}
                  style={styles.image2}
                /> */}
              {/* </View> */}
            </View>
              <View style={styles.view7}>
                <View style={styles.view8}>
                  <Text>All stories</Text>
                </View>
                <View style={styles.view9}>
                  <Text>Anxiety</Text>
                </View>
                <View style={styles.view10}>
                  <Text>Depression</Text>
                </View>
              </View>
             
            <View style={styles.view15}>
              <Text>Positive stories</Text>
            </View>
            <View style={styles.view16}>
              <View style={styles.view17}>
                <View style={styles.view18}>
                    <Text style={styles.view19}>Mental Health</Text>
                    <Text style={styles.view20}>Neeraj Chopra</Text>
                    <Text style={styles.view19}>How I gained confidence and overcame anxiety</Text>                
                </View>
                {/* <View style={{backgroundColor:"blue", width: 72,
    marginLeft: "55%",
    height: 72,}}> */}
                   <Image
                    source={require("../n1.jpg")}
                  style={styles.image3}
                />
                {/* </View> */}
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("BipolarStory")} >
            <View style={styles.view16}>
              <View style={styles.view17}>
                <View style={styles.view18}>
                    <Text style={styles.view19}>Bipolar Disorder</Text>
                    <Text style={styles.view20}>Masa Vaishnavi</Text>                             
                    <Text style={styles.view19}>Riding the waves: My experience with bipolar disorder</Text>
                </View>
                <Image
                    source={require("../n1.jpg")}
                  style={styles.image3}
                />
              </View>
            </View>
            </TouchableOpacity>
            <View style={styles.view46}>
              <View style={styles.view47}>
                {/* <View style={styles.view48}> */}
                  <Text>Do you have a story to share?</Text>
                {/* </View> */}
                {/* <View style={styles.view49}> */}
                  <TouchableOpacity style={styles.view50} onPress={()=> navigation.navigate("StorySharing")}>
                    <Text>Share</Text>
                  </TouchableOpacity>
                </View>
              {/* </View> */}
            </View>
          
          
        </ScrollView>
      );
    }

    export default Stories;
    
    const styles = StyleSheet.create({
      view4: {
        alignItems: "stretch",
        display: "flex",
        flexDirection:"row",
        gap: 5,
        marginLeft:9,
        paddingBottom: 12,
        paddingTop:12,
      },
      view5: {
        marginLeft:70,
        fontFamily: "Inter, sans-serif",
        display: "flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
      },
      groupHeaderTitle: {
        fontSize: 18,
        fontWeight: "700",
      },
      view1: {
        alignItems: "stretch",
        backgroundColor: "#FFF",
        display: "flex",
        maxWidth: 480,
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        color: "#4F7596",
        marginHorizontal: 0,
    marginVertical: "auto",
      },
      image3: {
        // position: "relative",
        backgroundColor:"grey",
    width: 72,
    marginRight: "70%",
    height: 72,
    // aspectRatio: 1,
    borderRadius: 12,
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
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 8,
      },
     
      image2: { position: "relative", width: 24, aspectRatio: 1 },
      view6: {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "stretch",
        fontSize: 14,
        color: "#0D141C",
        marginLeft: 12,
        marginRight: 12,
        fontWeight: "500",
        paddingTop: 12,
    paddingLeft: 12,
    paddingRight: 58,
    paddingBottom: 12,
      },
      view7: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row" ,marginLeft: 20, justifyContent: 'space-evenly',
        marginRight:12,
      },
      view8: {
        // fontFeatureSettings: "'dlig' on",
        fontFamily: "Epilogue, sans-serif",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
         marginRight: 12,
        backgroundColor: "#E8EDF2",
        flexGrow: 1,
         paddingVertical: 6, // Padding for top and bottom
         paddingHorizontal: 6, // Padding for left and right
      },
      view9: {
        // fontFeatureSettings: "'dlig' on",
        fontFamily: "Epilogue, sans-serif",
        justifyContent: "center",
        alignItems: "stretch",
        borderRadius: 12,
        // marginLeft: 12,
        backgroundColor: "#E8EDF2",
        flexGrow: 1,
         paddingVertical: 6, // Padding for top and bottom
    paddingHorizontal: 16, // Padding for left and right
      },
      view10: {
        // fontFeatureSettings: "'dlig' on",
        fontFamily: "Epilogue, sans-serif",
        justifyContent: "center",
        alignItems: "stretch",
        borderRadius: 12,
        backgroundColor: "#E8EDF2",
        flexGrow: 1,
        marginLeft: 12,
         paddingVertical: 6, // Padding for top and bottom
    paddingHorizontal: 16, // Padding for left and right
      },

      view15: {
        color: "#0D141C",
        // fontFeatureSettings: "'dlig' on",
        alignSelf: "flex-start",
        marginTop: 20,
        marginLeft: 16,
        fontFamily: 'Epilogue, sans-serif',
        fontWeight: '700',
        fontSize: 22,
      },
      view16: {
        alignItems: "stretch",
        backgroundColor: "#F7FAFC",
        display: "flex",
        marginTop: 12,
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        fontSize: 14,
        fontWeight: "400",
        padding: 16,
      },
      view17: {
        justifyContent: "space-between",
        alignItems: "stretch",
       // backgroundColor:"grey",
        display: "flex",
         flexDirection:"row",
        gap: 16,
      },
      view18: {
        // alignItems: "stretch",      
        display: "flex",
        flexGrow: 1,
        // flexBasis: "0%",
        flexDirection: "column",
        paddingEnd: 12,
          paddingBottom: 21,
      },
      view19: {
        // fontFeatureSettings: "'dlig' on",
        fontFamily: "Epilogue, sans-serif",
      },
      view20: {
        color: "#0D141C",
        // fontFeatureSettings: "'dlig' on",
        marginTop: 4,
        fontFamily: 'Epilogue, sans-serif',
        fontWeight: '700',
        fontSize: 16,
      },
      view46: {
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: "#F7FAFC",
        display: "flex",
        width: "100%",
        flexDirection: "column",
        color: "#0D141C",
        paddingVertical: 12, // Padding for top and bottom
        paddingHorizontal: 16, // Padding for left and right
      },
      view47: {
        // alignItems: "stretch",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 2,
      },
      view50: {
        // fontFeatureSettings: "'dlig' on",
        fontFamily: "Epilogue, sans-serif",
        paddingTop: 8,
        borderRadius: 12,
        paddingBottom: 8,
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: "#E8EDF2",
        justifyContent: "center",
        alignItems: "center",
        // alignItems: "flex-end",
      },
    });