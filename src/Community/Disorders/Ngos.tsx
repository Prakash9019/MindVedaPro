import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../type';
import {  useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'


interface NGOInfo {
  name: string;
  description: string;
  imageUrl: string;
  websiteUrl: string;
}

const ngoData: NGOInfo[] = [
  {
    name: "NAMI",
    description: "National Alliance on Mental Illness",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a2bd1cda9855f51a38555d177c82214fcc3556080140e8d31bc938a55e43cde?apiKey=42bb954c825745999302100cb42c8fd0&",
    websiteUrl: "https://nami.org",
  },
  {
    name: "IBPF",
    description: "International Bipolar Foundation",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/f0c39ac01c36e27ed870b34b5a1163fd093baf1dd937a9277a7304af5895d340?apiKey=42bb954c825745999302100cb42c8fd0&",
    websiteUrl: "https://ibpf.org",
  },
  {
    name: "DBSA",
    description: "Depression and Bipolar Support Alliance",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/a7654ead2d63740bb2c965c3e98db3eaa005a8fc8a299d97e735ee9d02074bce?apiKey=42bb954c825745999302100cb42c8fd0&",
    websiteUrl: "https://dbsalliance.org",
  },
];

const NgoItem = ({ ngo }: { ngo: NGOInfo }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
   return (
    <View>
   
  <View style={styles.ngoContainer}>
    <Image resizeMode="cover" source={{ uri: ngo.imageUrl }} style={styles.ngoImage} />
    <View style={styles.ngoTextContainer}>
      <Text style={styles.ngoName}>{ngo.name}</Text>
      <Text style={styles.ngoDescription}>{ngo.description}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("NGOApp")} style={styles.visitButton}>
        <Text style={styles.visitButtonText}>Visit Website</Text>
      </TouchableOpacity>
    </View>
  </View>
  </View>
)};

const NGOs: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
       <TouchableOpacity onPress={() => navigation.goBack()} >
    <AntDesign size={25} name="arrowleft"/>
  </TouchableOpacity>
      {ngoData.map((ngo, index) => (
        <NgoItem key={index} ngo={ngo} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
  },
  ngoContainer: {
    flexDirection: "row",
    backgroundColor: "#F0F2F5",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
  },
  ngoImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 16,
  },
  ngoTextContainer: {
    flex: 1,
  },
  ngoName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#121417",
  },
  ngoDescription: {
    fontSize: 14,
    color: "#637887",
    marginVertical: 4,
  },
  visitButton: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignItems: "center",
    marginTop: 8,
  },
  visitButtonText: {
    fontSize: 14,
    color: "#FFFFFF",
  },
});

export default NGOs;