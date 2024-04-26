import React from "react";
import { View, StyleSheet, Image, Text, ScrollView,TouchableOpacity, TextInput } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../type';
import {  useNavigation } from '@react-navigation/native';

interface UserMessageProps {
  userImageUri: string;
  userName: string;
  message: string;
}

const UserMessage: React.FC<UserMessageProps> = ({ userImageUri, userName, message }) => (
  <View style={styles.userMessageContainer}>
    <Image resizeMode="cover" source={{ uri: userImageUri }} style={styles.userImage} />
    <View style={styles.messageBlock}>
      <Text style={styles.userName}>{userName}</Text>
      <Text style={styles.userMessage}>{message}</Text>
    </View>
  </View>
);

const ChatRoom = () => {
  const messagesData = [
    {
      userImageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/8dfc2b12e8e6e1f48a8e137f8820ab4d8e474fc3193fc9be6ea4ae78a4fd1268?apiKey=c59f5e5e431d46fb9fcb854f2676cd03&",
      userName: "Dany",
      message: "Hi Julia, I'm sorry to hear that. Have you started any treatment?",
    },
    {
      userImageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/d21b9e77913ebae7bc82ccf224a36f6c222eab6ae5964d7695f5b402dc814fef?apiKey=c59f5e5e431d46fb9fcb854f2676cd03&",
      userName: "Alex",
      message: "I'm Alex, 28. I've been living with bipolar disorder for a few years now. It's been a rollercoaster, but I've found some stability with therapy and medication.",
    },
  ];
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [isButtonDisabled, setButtonDisabled] = React.useState(false);

  const handleButtonPress = () => {
    setButtonDisabled(true);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        
        <View style={styles.headerTextBlock}>
        <TouchableOpacity onPress={() => navigation.goBack() }  style={{marginLeft:0,marginRight:20}}>
            <AntDesign size={25} name="arrowleft"/>
          </TouchableOpacity>
          <Text style={{fontWeight:"bold", fontSize:16,marginLeft:45}}>Bipolar Disorder Group </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={handleButtonPress}
        disabled={isButtonDisabled}
        // style={[
        //   styles.sectionButton,
        //   { backgroundColor: isButtonDisabled ? 'white' : '#1A8AE5',
        //   borderRadius: 20, margin: 20,    padding: 10,    width: isButtonDisabled ? "15%":"40%",    height: "50%", alignItems: "center",  }
        // ]}
        
      >
        {!isButtonDisabled &&       <View style={styles.joinButtonContainer}>
        <Text>Join</Text>
      </View>}
      </TouchableOpacity>


      <View style={styles.guidelinesContainer}>
        <Text style={styles.guidelinesTitle}>Safety Guidelines</Text>
        <Text style={styles.guidelinesText}>
          This is a peer support chat room, not professional advice. Please respect the privacy of others. Optional anonymity: You can chat under an anonymous ID if you prefer.
        </Text>
      </View>
      {messagesData.map((msg, index) => (
        <UserMessage key={index} userImageUri={msg.userImageUri} userName={msg.userName} message={msg.message} />
      ))}
      <View style={styles.searchView}><TextInput placeholder="Write a message" multiline /></View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    searchView: {
        display: "flex",
        width: "95%",
        height:230,
        borderRadius: 10,
        marginLeft:10,
        backgroundColor: "#E8F0F2",
      },
  container: {
    backgroundColor: "#F7FAFC",
  },
  header: {
    flexDirection: "row",
    padding: 16,
  },
  headerImage: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  headerTextBlock: {
    display:"flex",
    flexDirection:"row",
    justifyContent: "center",
  },
  joinButtonContainer: {
    marginVertical: 12,
    backgroundColor: "#1C91F2",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignSelf: "center",
    width: "90%",
    alignItems: "center",
  },
  guidelinesContainer: {
    borderTopColor: "rgba(229, 232, 235, 1)",
    borderTopWidth: 1,
    padding: 20,
  },
  guidelinesTitle: {
    fontWeight: "700",
    marginBottom: 8,
    color:"blue",
  },
  guidelinesText: {
    fontSize: 14,
    fontWeight:"600",
  },
  userMessageContainer: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
  },
  userImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 12,
  },
  messageBlock: {
    flex: 1,
  },
  userName: {
    fontWeight: "700",
  },
  userMessage: {
    fontSize: 14,
    marginTop: 4,
  },
});

export default ChatRoom;