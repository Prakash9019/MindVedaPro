import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
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

const MenuItem: React.FC<MenuItemProps> = ({ imageUri, label }) => (
  <TouchableOpacity style={styles.menuItem}>
    <HeaderImage source={imageUri} style={styles.menuImage} />
    <Text style={styles.menuLabel}>{label}</Text>
  </TouchableOpacity>
);

// Main Component
const MentalWellnessApp = () => {
  

  return (
    <View style={styles.container}>
      
      <TouchableOpacity >
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

        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
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