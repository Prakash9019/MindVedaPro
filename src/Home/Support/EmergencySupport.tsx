import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../type';
import {  useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const informationSections = [
  {
    key: 'callCrisisCenter',
    title: "Call a crisis center",
    description: "Recommended for immediate support",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/7872acc53655c8d2a5441e8b0442ec70e2a3ab4f353eee288b531f27d52e751c?apiKey=42bb954c825745999302100cb42c8fd0&",
  },
  {
    key: 'chatWithVolunteer',
    title: "Chat with a trained volunteer",
    description: "Available 24/7",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b6ed422dcb116fb5583fb703fdf6ae296d5ba44a7374dbbe47690aab33a6f87d?apiKey=42bb954c825745999302100cb42c8fd0&",
  },
  {
    key: 'reachOutToFriend',
    title: "Reach out to a friend",
    description: "Sometimes talking to someone you trust can be helpful",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/ec1d01cd10ef62811bfb9d9b7574510fb4a61b0e6a6b52315d8313e4d8ed7343?apiKey=42bb954c825745999302100cb42c8fd0&",
  },
];

interface SectionItemProps {
  imageUrl: string;
  title: string;
  description: string;
}
const handlePress = (title: string) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  // Implement navigation logic based on the NGO name
  switch (title) {
    case "callCrisisCenter":
      navigation.navigate("CrisisSupportApp");
      break;
    case "chatWithVolunteer":
      navigation.navigate("CrisisSupportApp");
      break;
    case "reachOutToFriend":
      navigation.navigate("CrisisSupportApp");
      break;
    // Add more cases as needed for other NGOs
  }
};


const Section : React.FC<SectionItemProps> = ({ title, description, imageUrl }) => (
  <TouchableOpacity onPress={()=>{handlePress(title)}}>
  <View style={styles.sectionContainer}>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
    <Image source={{ uri: imageUrl }} style={styles.sectionImage} />
  </View>
  </TouchableOpacity>
);

const SupportOptions = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <ScrollView>
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} >
            <AntDesign size={25} name="arrowleft"/>
          </TouchableOpacity>
      <View style={styles.headerContainer}>
        <Image 
       
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/8607e87e9f754262a39c3222ae14facef7f7f1660412e455ddf5b177b3b35bf6?apiKey=42bb954c825745999302100cb42c8fd0&" }} 
          style={styles.logo} 
        />
      </View>
      <View style={styles.bannerContainer}>
        <Image 
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7d1df0b94d030b9e2429ec918041272037f6453aa0ff77b693310c1903d002a3?apiKey=42bb954c825745999302100cb42c8fd0&" }} 
          style={styles.bannerImage} 
        />
      </View>
      <Text style={styles.mainTitle}>We are here for you</Text>
      <Text style={styles.mainDescription}>If you're feeling distressed, we can help. You're not alone.</Text>
      {informationSections.map((section,index) => (
        <TouchableOpacity onPress={()=>{navigation.navigate("CrisisSupportApp")}} key={index}>
        <View style={styles.sectionContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{section.title}</Text>
            <Text style={styles.description}>{section.description}</Text>
          </View>
          <Image source={{ uri: section.imageUrl }} style={styles.sectionImage} />
        </View>
        </TouchableOpacity>
        
        // <Section key={section.key} title={section.title} description={section.description} imageUrl={section.imageUrl} />
      ))}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    padding: 20,
  },
  headerContainer: {
    alignItems: "center",
    backgroundColor: "#F7FAFC",
    paddingVertical: 24,
  },
  logo: {
    width: 24,
    height: 24,
  },
  bannerContainer: {
    alignItems: "stretch",
    backgroundColor: "#F7FAFC",
  },
  bannerImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1.79,
  },
  mainTitle: {
    color: "#0D171C",
    textAlign: "center",
    marginTop: 20,
    fontSize: 28,
    fontWeight: "700",
  },
  mainDescription: {
    color: "#0D171C",
    textAlign: "center",
    marginTop: 16,
    fontSize: 16,
  },
  sectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F7FAFC",
    marginTop: 36,
    padding: 14,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: "#0D171C",
    fontSize: 16,
    fontWeight: "500",
  },
  description: {
    color: "#4F8096",
    fontSize: 14,
  },
  sectionImage: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
});

export default SupportOptions;