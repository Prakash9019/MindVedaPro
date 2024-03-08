import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../type';
import {  useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'

interface ActionButtonProps {
  title: string;
  backgroundColor:string;
  textColor: string;
  onPress: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ title, backgroundColor, textColor, onPress }) => (
  <TouchableOpacity style={[styles.actionButtonContainer, { backgroundColor }]} onPress={onPress}>
    <Text style={{ color: textColor }}>{title}</Text>
  </TouchableOpacity>
);

interface NGOInfoSectionProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const NGOInfoSection: React.FC<NGOInfoSectionProps> = ({ title, subtitle, imageUrl }) => (
  <View style={styles.ngoInfoContainer}>
    <Image resizeMode="contain" source={{ uri: imageUrl }} style={styles.ngoImage} />
    <View style={styles.ngoTextContainer}>
      <Text style={styles.ngoTitle}>{title}</Text>
      <Text style={styles.ngoSubtitle}>{subtitle}</Text>
    </View>
  </View>
);

const NGOApp = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
  
  <View style={styles.appContainer}>
    <View style={styles.contentContainer}>
    <View style={styles.view4}>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <AntDesign size={25} name="arrowleft"/>
          </TouchableOpacity>
          <View style={styles.view5}>
          <Text style={styles.groupHeaderTitle}>NGO Details</Text>
           </View>
          </View>
      
      <NGOInfoSection
        title="NAMI"
        subtitle="National Alliance on Mental Illness"
        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/7a2bd1cda9855f51a38555d177c82214"
      />
      <View style={styles.websiteContainer}>
        <Text>Visit Website</Text>
      </View>
      <Text style={styles.ngoDescription}>
        NAMI is the National Alliance on Mental Illness, the nation’s largest grassroots mental health organization dedicated to building better lives for the millions of Americans affected by mental illness.
      </Text>
      <Text style={styles.ngoExtraInfo}>
        Their work encompasses providing support, education, and advocacy for individuals and families affected by mental illness. They offer a variety of programs and initiatives, including support groups, education classes, and public awareness events.
      </Text>
      <ActionButton title="Donate" backgroundColor="#1A8AE5" textColor="#FFFFFF" onPress={() => {}} />
      <ActionButton title="Volunteer" backgroundColor="#F0F2F5" textColor="#000000" onPress={() => {}} />
      <ActionButton title="Find Support" backgroundColor="#F0F2F5" textColor="#000000" onPress={() => {}} />
    </View>
  </View>
)};

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
  groupHeaderTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  view5: {
    marginLeft:70,
    fontFamily: "Inter, sans-serif",
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
  },
  appContainer: {
    alignItems: "stretch",
    backgroundColor: "#FFF",
    display: "flex",
    maxWidth: 480,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },
  contentContainer: {
    alignItems: "stretch",
    backgroundColor: "#FFF",
    display: "flex",
    width: "100%",
    flexDirection: "column",
  },
  headerContainer: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  headerImage: {
    width: 24,
    height: 24,
  },
  headerTextContainer: {
    marginLeft: 16,
  },
  ngoInfoContainer: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
  },
  ngoImage: {
    width: 56,
    height: 56,
  },
  ngoTextContainer: {
    marginLeft: 16,
    justifyContent: "center",
  },
  ngoTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  ngoSubtitle: {
    fontSize: 14,
    color: "#637887",
  },
  websiteContainer: {
    alignSelf: "center",
    backgroundColor: "#F0F2F5",
    borderRadius: 12,
    padding: 6,
    marginVertical: 16,
  },
  ngoDescription: {
    paddingHorizontal: 16,
    paddingTop: 4,
    fontSize: 16,
  },
  ngoExtraInfo: {
    paddingHorizontal: 16,
    paddingTop: 12,
    fontSize: 16,
  },
  actionButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    marginVertical: 10,
    padding: 10,
    width: 200,
    alignSelf: "center",
  },
});

export default NGOApp;