import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../type';
import {  useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'
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
 
  return (
    <ScrollView>
    <View style={styles.container}>
      
      <TouchableOpacity onPress={()=>{navigation.navigate("ProfilePage")}} >
      <View style={styles.header}>
        <HeaderImage
          source="https://cdn.builder.io/api/v1/image/assets/TEMP/20c430cd24c554602ac7482620760b96c5976058992dd12c4f9fbe36daa29d22?apiKey=42bb954c825745999302100cb42c8fd0&"
          style={styles.headerLogo}
        />
      </View>
      </TouchableOpacity>
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
      <Text style={styles.sectionTitle}>Post of the Day</Text>
      <TouchableOpacity onPress={()=>{navigation.navigate("ArticleScreen")}}>
      <View style={styles.postSection}>
        <View style={{width:"75%",marginRight:1}}>
        <Text>Emotional Support</Text>
        <Text>How to overcome anxiety?</Text>
        <Text>Posted by Dr. Emilia · Stress Specialist</Text>
        </View>
        <HeaderIcons src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fa5110698b89b90823fa03fe28a54d57ff3f76b7043716d58261cc8a7fc1e036a?apiKey=42bb954c825745999302100cb42c8fd0&" style={styles.postImage} />
      </View>
      </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    backgroundColor: '#A11AE5',
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
    backgroundColor: '#A11AE5',
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
    padding: 20,
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