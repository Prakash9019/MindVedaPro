import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../type';
import {  useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'

type ConversationItemProps = {
  name: string;
  lastMessageTime: string;
  avatarUri: string;
  onPress: () => void;
};

const ConversationItem: React.FC<ConversationItemProps> = ({ name, lastMessageTime, avatarUri ,onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.conversationItem}>
    <Image resizeMode="cover" source={{ uri: avatarUri }} style={styles.avatar} />
    <View style={styles.conversationTextContainer}>
      <Text style={styles.conversationName}>{name}</Text>
      <Text style={styles.conversationTime}>{lastMessageTime}</Text>
    </View>
    {/* <Image resizeMode="cover" source={require("./n1.jpg")} style={styles.conversationIcon} /> */}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { alignItems: "stretch", backgroundColor: "#FFF", display: "flex", width: "100%", flexDirection: "column",padding:12 },
  title: { alignItems: "center", backgroundColor: "#FFF", width: "100%", color: "#121417", padding: 16, fontWeight: "700", fontSize: 18, fontFamily: "Epilogue, sans-serif",marginLeft:60 },
  searchSection: { display: "flex", marginTop: 12, width: "100%", flexDirection: "column", alignItems: "stretch" },
  searchBox: { alignItems: "stretch", borderRadius: 24, backgroundColor: "#F0F2F5", display: "flex", padding: 12, flexDirection: "row", alignContent: "center" },
  searchIcon: { width: 24, aspectRatio: 1 },
  searchText: { marginLeft: 12, fontSize: 16, color: "#637887", fontWeight: "400" },
  sectionTitle: { color: "#121417", marginTop: 32, fontWeight: "700", fontSize: 22, fontFamily: "Epilogue, sans-serif" },
  conversationItem: { flexDirection: "row", alignItems: "center", backgroundColor: "#FFF", paddingVertical: 8, paddingHorizontal: 16 },
  avatar: { width: 56, aspectRatio: 1, borderRadius: 28 },
  conversationTextContainer: { flex: 1, marginLeft: 16 },
  conversationName: { color: "#121417", fontWeight: "500", fontSize: 16, fontFamily: "Epilogue, sans-serif" },
  conversationTime: { color: "#637887", fontWeight: "400", fontSize: 14, fontFamily: "Epilogue, sans-serif" },
  conversationIcon: { width: 24, aspectRatio: 1 },
  floatingActionButton: { justifyContent: "center", alignItems: "center", borderRadius: 28, backgroundColor: "#1A8AE5", position: "absolute", bottom: 20, right: 20, width: 56, height: 56 },
  fabIcon: { width: "100%", aspectRatio: 1 },
  bottomSpacing: { minHeight: 75, backgroundColor: "#FFF", width: "100%", marginTop: 20 },
  titleContainer:{alignItems:"center",display:"flex",flexDirection:"row"},
});

const ConversionList = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const conversations = [
    { id: "1", name: "Dr. Morgan", lastMessageTime: "1d", avatarUri: "./n1.jpg"  },  { id: "2", name: "Dr. Stevens", lastMessageTime: "2d", avatarUri: "./n1.jpg" },
    // Add more conversation data here
  ];

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()} >
            <AntDesign size={25} name="arrowleft"/>
          </TouchableOpacity>
        <Text style={styles.title}>Conversations</Text>
      </View>
      <View style={styles.searchSection}>
        <View style={styles.searchBox}>
        <AntDesign style={styles.searchIcon} size={25} name="search1"/>
          <Text style={styles.searchText}>Search</Text>
        </View>
      </View>
      <Text style={styles.sectionTitle}>Expert conversations</Text>
      {conversations.map((conversation) => (
        <ConversationItem
          key={conversation.id}
          name={conversation.name}
          lastMessageTime={conversation.lastMessageTime}
          avatarUri={conversation.avatarUri}
          onPress={() => console.log("Conversation pressed")}
        />
      ))}
      <View style={styles.bottomSpacing} />
      <TouchableOpacity style={styles.floatingActionButton}>
        {/* <Image resizeMode="cover" source={require("./n1.jpg")} style={styles.fabIcon} /> */}
      </TouchableOpacity>
    </View>
  );
};

export default ConversionList;