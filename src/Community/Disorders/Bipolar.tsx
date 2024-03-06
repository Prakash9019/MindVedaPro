import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, ImageSourcePropType } from "react-native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'E:/MindVeda2/src/type';
import {  useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'

interface GroupHeaderProps {
  title: {
    name: string;
    imageUri: string;
  };
  memberCount: string;
}

const GroupHeader: React.FC<GroupHeaderProps> = ({ title, memberCount }) => (
  <View style={styles.groupHeader}>
    <Image resizeMode="cover" source={{ uri: title.imageUri }} style={styles.groupHeaderImage} />
    <View style={styles.groupHeaderDetails}>
      <Text style={styles.groupHeaderTitle}>{title.name}</Text>
      <Text style={styles.groupHeaderMembers}>{`${memberCount} Members`}</Text>
    </View>
  </View>
);

interface SectionButtonProps {
  title: string;
}

const SectionButton: React.FC<SectionButtonProps> = ({ title }) => (
  <TouchableOpacity style={styles.sectionButton}>
    <Text style={styles.sectionButtonText}>{title}</Text>
  </TouchableOpacity>
);

interface Icon {
  name: string;
  imageUri: string;
}

interface FooterNavigationProps {
  icons: Icon[];
}

const FooterNavigation: React.FC<FooterNavigationProps> = ({ icons }) => (
  <View style={styles.footerNavigation}>
    {icons.map((icon, index) => (
      <View key={index} style={styles.footerNavigationItem}>
        <Image resizeMode="cover" source={{ uri: icon.imageUri }} style={styles.footerNavigationImage} />
        <Text style={styles.footerNavigationText}>{icon.name}</Text>
      </View>
    ))}
  </View>
);

const SupportGroupApp1: React.FC = () => {
  const iconsData: Icon[] = [
    { name: "Home", imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c1358be9110a84119137e645de2b983f0920d67354b83c477f6b7d49527d00f6?apiKey=42bb954c825745999302100cb42c8fd0&" },
    { name: "Experts", imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/83bfaccafd2807e055ad3466f40d63648f5b84966530fe614ed17a147a7ea1b7?apiKey=42bb954c825745999302100cb42c8fd0&" },
    { name: "Community", imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/8cfdbd8ae78df2ec2b2ec0ed094a06b26f3bd768022bd4318a0e7b9d3af91e65?apiKey=42bb954c825745999302100cb42c8fd0&" },
    { name: "Stories", imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0192e72bafcb15d5c653f3cffa32147bf86153bf435c91a07259ec278618fb17?apiKey=42bb954c825745999302100cb42c8fd0&" },
    { name: "Profile", imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/23631277636ece196b6ba9014dae0f6901f80bfe6116a3f1d74d13d2bdaffb88?apiKey=42bb954c825745999302100cb42c8fd0&" },
  ];
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <ScrollView style={styles.container}>
      <GroupHeader title={{ name: "Bipolar Support Group", imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/28a13921ae9b0e83392b906639d49f984df1c172c19a91ea246ccf7c572c18b6?apiKey=42bb954c825745999302100cb42c8fd0&" }} memberCount="2.1k" />
      <SectionButton title="Invite" />
      <SectionButton title="Consult with Experts" />

      <TouchableOpacity style={styles.sectionButton} onPress={()=>{navigation.navigate("NGOs")}} >
       <Text style={styles.sectionButtonText}>NGOs Working on Bipolar</Text>
        </TouchableOpacity>
      <SectionButton title="Bipolar Chat Rooms" />
      <SectionButton title="Happy Stories of People with Bipolar" />
      <SectionButton title="Resources on Bipolar" />
      {/* <FooterNavigation icons={iconsData} /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  groupHeader: {
    alignItems: "center",
    padding: 16,
  },
  groupHeaderImage: {
    width: "100%",
    height: 120,
  },
  groupHeaderDetails: {
    alignItems: "center",
    marginTop: 8,
  },
  groupHeaderTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  groupHeaderMembers: {
    marginTop: 4,
    color: "#4F7596",
    fontSize: 14,
  },
  sectionButton: {
    borderRadius: 20,
    backgroundColor: "#1A8AE5",
    margin: 10,
    padding: 10,
    alignItems: "center",
  },
  sectionButtonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "700",
  },
  footerNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#E8EDF2",
    backgroundColor: "#F7FAFC",
    paddingVertical: 10,
  },
  footerNavigationItem: {
    alignItems: "center",
  },
  footerNavigationImage: {
    width: 24,
    height: 24,
  },
  footerNavigationText: {
    marginTop: 4,
    fontSize: 12,
    color: "#706387",
  },
});

export default SupportGroupApp1;