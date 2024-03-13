import React from "react";
import { View, StyleSheet, Image, Text,TouchableOpacity, TextInput } from "react-native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../type';
import {  useNavigation } from '@react-navigation/native'; 
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import call from 'react-native-phone-call'


interface HelpItemProps {
    imageUri: string;
    title: string;
    number: string;
    time: string;
  }

// Create a reusable component for help line item
const HelpLineItem : React.FC<HelpItemProps> = ({ title, time, number, imageUri }) => {
  const [inputValue, setInputValue] = React.useState("6301750186");
  const triggerCall = () => {

    const args = {
    number: inputValue,
    skipCanOpen: true,
    prompt: true,  
    };
    
call(args).catch(console.error);

};

  return (
  <View style={styles.helpLineItemContainer}>
    <View style={styles.helpLineTextContainer}>
      <Text style={styles.helpLineTitle}>{title}</Text>
      <Text style={styles.helpLineTime}>{time}</Text>
      <Text style={styles.helpLineNumber}>{number}</Text>
    </View>
    <TouchableOpacity activeOpacity={0.7} onPress={triggerCall} style={styles.helpLineImage}>
    <Feather  size={25} name="phone"/>
    </TouchableOpacity>
  </View>
)};

const CrisisSupportApp = () => {
  // Data for help lines to map over
  const helpLines = [
    {
      title: "Suicide Prevention Lifeline (India)",
      time: "24/7",
      number: "1-800-273-8255",
      imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a2c52eebde139d930c550db0459ac2ddc7a24e578ea81161eda5baeeb93881d?apiKey=42bb954c825745999302100cb42c8fd0&"
    },
    {
      title: "Crisis Text Line",
      time: "24/7",
      number: "Text HOME to 741741",
      imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9ddc8393e156e24f2c76db5fe592f975f68822eee8661504660bab619e5511c5?apiKey=42bb954c825745999302100cb42c8fd0&"
    },
    // Add similar objects for each help line
  ];
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
       <TouchableOpacity onPress={() => navigation.goBack()} >
            <AntDesign size={25} name="arrowleft"/>
          </TouchableOpacity>

      <View style={styles.searchBar}>
      <AntDesign style={styles.searchIcon} size={25} name="search1"/>
      <View style={styles.searchInputContainer}>
        <TextInput style={styles.searchText}>Search for a location</TextInput>
      </View>
    </View>
      {helpLines.map((line, index) => (
        <HelpLineItem
          key={index}
          title={line.title}
          time={line.time}
          number={line.number}
          imageUri={line.imageUri}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    backgroundColor: "#F7FAFC",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  helpLineItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  helpLineTextContainer: {
    flex: 1,
  },
  helpLineTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  helpLineTime: {
    fontSize: 14,
    marginBottom: 5,
  },
  helpLineNumber: {
    fontSize: 14,
    color: "#007AFF",
  },
  helpLineImage: {
    width: 50,
    height: 50,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#E8F0F2",
    // padding: 12,
    paddingLeft:8,
    margin: 8,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  searchInputContainer: {
    flex: 1,
  },
  searchText: {
    fontFamily: "Lexend, sans-serif",
    fontSize: 16,
    color: "#4F8096",
  },
});

export default CrisisSupportApp;
