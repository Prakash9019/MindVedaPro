import React from "react";
import { View, StyleSheet, Image,Modal,Button, Text, TouchableOpacity,TextInput, ScrollView, SafeAreaView } from "react-native";
import { WebView } from 'react-native-webview';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../type';
import {  useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons';
import InstaPost from "./InstaPost";
interface HeaderImageProps {
  source: string;
  style: { [key: string]: any };
}

const HeaderImage: React.FC<HeaderImageProps> = ({ source, style }) => (
  <Image resizeMode="cover" source={{ uri: source }} style={style} />
);

interface MenuItemProps {
  imageUri: string;
  label: string;
}

interface HeaderIconsProps {
  src: string;
  style: { [key: string]: any };
}

const HeaderIcons : React.FC<HeaderIconsProps> = ({ src, style }) => (
  <Image source={{ uri: src }} style={style} />
);

const MenuItem: React.FC<MenuItemProps> = ({ imageUri, label }) => (
  <TouchableOpacity style={styles.menuItem}>
    <HeaderImage source={imageUri} style={styles.menuImage} />
    <Text style={styles.menuLabel}>{label}</Text>
  </TouchableOpacity>
);

// Main Component
const MentalWellnessApp = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [modalVisible, setModalVisible] = React.useState(false);
  const Google='https://www.chatbase.co/chatbot-iframe/o9j4Oy2qHq5QKyt1o2zQA';
  return (
    <SafeAreaView >
    <ScrollView style={styles.container}>
    <View >    
      <View style={styles.header}>
      <TouchableOpacity onPress={()=>{navigation.navigate("ProfilePage")}} >
        <HeaderImage
          source="https://cdn.builder.io/api/v1/image/assets/TEMP/20c430cd24c554602ac7482620760b96c5976058992dd12c4f9fbe36daa29d22?apiKey=42bb954c825745999302100cb42c8fd0&"
          style={styles.headerLogo}
        />
        </TouchableOpacity>
         {/* <View style={styles.searchView}>
        <TextInput editable multiline={true} numberOfLines={10} placeholder="Search your story" style={styles.bar} />
       <AntDesign style={styles.searchIcon} size={25} name="search1"/>
       </View> */}
       
       <TouchableOpacity onPress={()=>{navigation.navigate("NotificationList")}} >
        <Ionicons style={styles.searchIcon} size={25} name="notifications" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate("ConversionList")}} >
        <MaterialCommunityIcons style={styles.searchIcon1} size={25} name="message-text"/></TouchableOpacity>
    
      </View>
    
      <View style={styles.body}>
        <View style={styles.messageCard}>
          <HeaderImage
            source="https://cdn.builder.io/api/v1/image/assets/TEMP/e3542823bf36bce073c7fb896ca0ff0f6929a92c58827cb11600ba9c9a4b1525?apiKey=42bb954c825745999302100cb42c8fd0&"
            style={styles.messageImage}
          />
          <View style={styles.messageTextWrapper}>
            <Text style={styles.messageTitle}>Be kind to yourself</Text>
            <Text style={styles.messageSubtitle}>You're stronger than you think</Text>
          </View>
        </View>
        <Text style={styles.emergencyTitle}>Are you in crisis?</Text>
      <Text style={styles.emergencyDescription}>If you or someone you know is in a crisis consider reaching out immediately.</Text>
      <TouchableOpacity style={styles.emergencySupport} onPress={()=>{navigation.navigate("SupportOptions")}}>
        <Text style={{color:"white",fontWeight:"bold", fontSize:16}}>Emergency support</Text>
      </TouchableOpacity>
      <View style={styles.testSection}>
        <Text style={styles.testTitle}>Can't apprehend your actions?</Text>
        <Text style={styles.testDescription}>Take a free mental health test</Text>
        <TouchableOpacity style={styles.startTest} onPress={()=>{navigation.navigate("MindfulApp")}} >
          <Text style={{color:"white",fontWeight:"bold", fontSize:16}}>Start Test</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
    
    <InstaPost />
   
    </ScrollView>
    <TouchableOpacity style={styles.chatbotIcon} onPress={() => setModalVisible(true) } >
        {/* You can use an icon or any other representation for your chatbot */}
        {/* <Text style={styles.iconText}>Chatbot</Text> */}
        <Image style={{width:"120%",height:"100%"}} source={require("./playstore-icon.png")} />
      </TouchableOpacity>
 
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
         <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <View style={{ height:600, width:600,marginLeft:300,borderRadius:12,}}>
      <WebView
        source={{ uri: Google }}
        // onLoad={console.log("Loading")}
        style={styles.webview}
      />
      </View>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  chatbotIcon: {
    position: 'absolute',
    bottom: 20, // Adjust the position from the bottom
    right: 20, // Adjust the position from the right
    // backgroundColor: 'blue', // Set your icon background color
    padding: 10,
    width:"15%",
    height:"10%",
    borderRadius: 20, // Make it circular or adjust as needed
    zIndex: 1, // Set the z-index to ensure it appears on top
  },
  iconText: {
    // color: 'white',
    // fontSize: 16,
    width:"20%",
    height:"20%",
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width:"5%",
    height:"5%",
    zIndex:6,
    marginLeft:230,
    marginBottom:500,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius:12,
  },
  modalContent: {
    backgroundColor: 'white',
    // padding: 20,
    width: '50%',
    height: '80%',
    borderRadius: 10,
    alignItems: 'center',
  },
  webview: {
    // backgroundColor:"blue",
    width: '50%',
    borderRadius:12,
    height: '80%',
  },
  iconContainer: {
    display: "flex",
    flexDirection: 'row',
    backgroundColor: "blue",
    justifyContent: 'flex-end', // Align items to the end of the flex container
    marginHorizontal:150,
    alignItems:"flex-end",
   // paddingHorizontal: 15, // Add padding horizontally to create some space from the right edge
    paddingTop: 8, // Add padding vertically if needed
  },
  searchIcon: {
    display:"flex",
    justifyContent:"flex-end",
   marginLeft:210,

    // marginRight:5, // Adjust as needed to add space between icons
  },
  searchIcon1: {
    marginLeft:10,
    // marginRight:20, // Adjust as needed to add space between icons
  },
searchView: {
  display: "flex",
  // marginTop: ,
  width: "65%",
  borderRadius: 30,
  paddingLeft:10,
  marginRight:6,
  marginLeft:4,
  // height:"10%"
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  backgroundColor: "#E8F0F2",
//1  //1 padding: "0 16px",
},
bar: {
  borderRadius: 12,
  backgroundColor: "#E8F0F2",
  gap: 2,
   width:"85%",
  //  marginLeft:12,
  height:50,
  fontSize: 16,
  color: "#4F8296",
  fontWeight: "400",
//1  //1 padding: "12px 16px",
},
  container: {
    // flex: 1,
    backgroundColor: "#FFF",
  },
  emergencyTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  emergencyDescription: {
    fontSize: 16,
    marginBottom: 16,
  },
  emergencySupport: {
    backgroundColor: 'red',
    borderRadius: 20,
    marginLeft:36,
    marginRight:36,
    padding: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  testSection: {
    marginBottom: 16,
  },
  testTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  testDescription: {
    fontSize: 14,
    color: '#7D6387',
    marginBottom: 16,
  },
  startTest: {
    backgroundColor: '#1A8AE5',
    borderRadius: 16,
    marginRight:36,
    marginLeft:36,
    padding: 18,
    alignItems: 'center',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 16,
  },
  postSection: {
    paddingTop :8,
    display:"flex",
    flexDirection: "row",
    marginBottom: 16,
  },
  postImage: {
    // display:"flex",
    width: 85,
    height: 85,
    borderRadius: 8,
  },
  header: {
    padding: 10,
    margin:10,
    // backgroundColor:"blue",
    display: "flex",
    flexDirection: "row",
    gap:4,
    // alignItems: "center",
    // justifyContent: "space-between",
  },
  headerLogo: {
    width: 32,
    height: 32,
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
  },
  messageCard: {
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    overflow: 'hidden',
  },
  messageImage: {
    width: "100%",
    height: 200,
  },
  messageTextWrapper: {
    padding: 20,
  },
  messageTitle: {
    fontSize: 24,
    fontWeight: "700",
  },
  messageSubtitle: {
    fontSize: 16,
    marginTop: 4,
    fontWeight: "500",
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  menuItem: {
    alignItems: "center",
  },
  menuImage: {
    width: 36,
    height: 36,
  },
  menuLabel: {
    marginTop: 8,
    fontSize: 12,
  },
});

export default MentalWellnessApp;