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
import ArticleScreen from "../consultation/Blog2";
 

const ProfileHeader = () => (
  <View style={styles.profileHeaderContainer}>
    <Image
      resizeMode="cover"
      source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/54aa71ad7638140251d45c2a1cbe31fe5991738fe9b6523e5dc6e0e6faa63ea8?apiKey=42bb954c825745999302100cb42c8fd0&" }}
      style={styles.profileImage}
    />
    <View style={styles.profileInfo}>
      <Text style={styles.profileName}>Dr. Emilia</Text>
      <Text style={styles.profileUniversity}>Stanford University</Text>
      <Text style={styles.profileLocation}>Palo Alto, CA</Text>
    </View>
  </View>
);
interface Action{
    title: string;
    buttonStyle: string;
    textStyle: string;
}

interface Post{
    title: string;
    subtitle: string;
    imageUrl: string;
}
// const ActionButton: React.FC <Action> = ({ title, buttonStyle, textStyle }) => (
//   <View style={[styles.buttonContainer, buttonStyle]}>
//     <Text style={[styles.buttonText, textStyle]}>{title}</Text>
//   </View>
// );

const Post : React.FC<Post> = ({ title, subtitle, imageUrl }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity style={styles.articleContainer}  onPress={()=> navigation.navigate("ArticleScreen")} >
    <View style={styles.headerContainer}>
      <Text style={styles.postTitle}>{title}</Text>
      <Text style={styles.postSubtitle}>{subtitle}</Text>
      </View>
      <Image resizeMode="cover" source={{ uri: imageUrl }} style={styles.postImage} />
    </TouchableOpacity>
  )
};
  


const DoctorProfile = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const posts = [
    {
      title: "The secret to managing stress",
      subtitle: "Mental Health · 3d ago · #StressRelief",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/319dc1e48bea128e89302e66ad0758266213944e12c0e857475ad66aaedbaf5d",
    },
    {
      title: "How to overcome anxiety",
      subtitle: "Mental Health · 5d ago · #Anxiety",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ebbe8c7a5a2c4da90d57cf7a37af6a3fe743679e23b26be825512fec8f6fada",
    },
    {
      title: "What is burnout?",
      subtitle: "Mental Health · 8d ago · #Burnout",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d5614b44a9fae83ec40b6b23689ceba6f77ada07188569aca356b634e75ae59",
    },
  ];
  return (
    <ScrollView>
    <View style={styles.view1}>
      <View style={styles.view2}>
        <View style={styles.view3}>
          <View style={styles.view4}>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <AntDesign size={25} name="arrowleft"/>
          </TouchableOpacity>
          <View style={styles.view5}>
              <Text style={{fontSize:16,fontWeight:"600"}}>Profile</Text>
           </View>
          </View>
        </View>
        <View style={styles.view6}>
         
         <ProfileHeader />
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
          <View style={styles.container}>
      
      {/* <ActionButton 
        title="Request Consultation" 
        buttonStyle={styles.requestConsultationButton} 
        textStyle={styles.buttonTextWhite} 
      />
      <ActionButton 
        title="Send Query Anonymously" 
        buttonStyle={styles.sendQueryButton} 
        textStyle={styles.buttonTextWhite} 
      /> */}
      <Text style={styles.sectionTitle}>About</Text>
      <Text style={styles.sectionContent}>
        I'm a psychologist and professor at Stanford University. I've been studying stress for over 20 years. My research has shown that stress can actually be good for you, if you know how to manage it.
      </Text>
      <Text style={styles.sectionTitle}>Posts</Text>
      {posts.map((post, index) => (
        <Post key={index} title={post.title} subtitle={post.subtitle} imageUrl={post.imageUrl} />
      ))}
    </View>
      
        </View>
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
  image1: { position: "relative", width: 24, aspectRatio: 1 },
  view4: {
    alignItems: "stretch",
    display: "flex",
    flexDirection:"row",
    gap: 5,
    paddingBottom: 12,
    paddingTop:12,
  },
  view5: {
    marginLeft:118,
    fontFamily: "Inter, sans-serif",
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
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
    width: 72,
    marginLeft: "10%",
    height: 72,
    aspectRatio: 1,
    borderRadius: 12,
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
    width: 72,
    marginLeft: "70%",
    height: 72,
    aspectRatio: 1,
    borderRadius: 12,
  },
  view33: { backgroundColor: "#F7FAFC", minHeight: 20, width: "100%" },
  container: { alignItems: "stretch", backgroundColor: "#FFF", display: "flex", flexDirection: "column", justifyContent: "center", padding: 16 },
  profileHeaderContainer: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  profileImage: { width: 100, height: 100, borderRadius: 50, marginRight: 16 },
  profileInfo: { flex: 1 },
  profileName: { fontWeight: "bold", fontSize: 20, marginBottom: 4 },
  profileUniversity: { color: "#666", marginBottom: 2 },
  profileLocation: { color: "#666" },
  buttonContainer: { padding: 12, borderRadius: 8, alignItems: "center", marginBottom: 16 },
  requestConsultationButton: { color: "#1A8AE5" },
  sendQueryButton: { backgroundColor: "#4CAF50" },
  buttonText: { fontSize: 16 },
  buttonTextWhite: { color: "#FFFFFF" },
  sectionTitle: { fontWeight: "bold", fontSize: 18, marginTop: 24, marginBottom: 16 },
  sectionContent: { fontSize: 14, color: "#666", marginBottom: 16 },
  postContainer: { marginBottom: 16 },
  postTitle: { fontWeight: "bold", fontSize: 16 },
  postSubtitle: { fontSize: 14, color: "#999" },
  postImage: {   height: 90,
    width: 90,
    aspectRatio: 1.33,
 marginRight:23, backgroundColor:"green" ,borderRadius:8, },
  articleContainer: {    marginRight:10,  display: "flex", paddingBottom: 16, flexDirection:"row"},
  headerContainer: {
    alignItems: "stretch",
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    paddingEnd: 12,
    paddingBottom: 21,
  },

});



