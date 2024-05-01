// import React from "react";
// import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity,KeyboardAvoidingView, ScrollView, SafeAreaView, SafeAreaViewBase } from "react-native";

// interface MessageProps {
//   userType: string;
//   messageText: string;
//   avatarUri: string;
// }

// const MessageComponent: React.FC<MessageProps> = ({ userType, messageText, avatarUri }) => (
//   <View style={styles.messageRow}>
//     <View style={styles.messageBubble}>
//       <Text style={styles.userTypeText}>{userType}</Text>
//       <Text style={styles.messageText}>{messageText}</Text>
//     </View>
//     <Image resizeMode="cover" source={require("../n1.jpg")} style={styles.avatarImage} />
//   </View>
// );

// const ChatRoomVolunteer: React.FC = () => {
//   return (
   
//     <View style={{backgroundColor:"white"}}>
//         <ScrollView>
//     <View style={styles.container}>
      // <View style={styles.headerContainer}>
      //   <Image resizeMode="cover" source={require("../n1.jpg")} style={styles.headerImage} />
      //   <View style={styles.headerTextContainer}>
      //     <Text style={styles.headerTitle}>Crisis Assistance</Text>
      //     <Text style={styles.headerSubtitle}> We're here to help you. Please take a moment to tell us about what you're going through. </Text>
      //   </View>
      // </View>
//       <View style={styles.messagesContainer}>
//         <MessageComponent
//           userType="User"
//           messageText="I'm feeling really overwhelmed and anxious right now. I can't seem to stop worrying about everything."
//           avatarUri="userAvatarUri"
//         />
//         <MessageComponent
//           userType="Crisis Supporter"
//           messageText="It's completely understandable to feel this way. You're not alone, and we're here to support you through this. Is there anything specific that's causing your anxiety?"
//           avatarUri="supporterAvatarUri"
//         />
//       </View>
//     </View>
//        </ScrollView>
//        <SafeAreaView style={{display:"flex",flex:1,backgroundColor:"blue"}}>
//     <KeyboardAvoidingView behavior="padding" >
//       <View style={styles.inputContainer}>
//         {/* <Image resizeMode="cover" source={require("../n1.jpg")} style={styles.inputBackgroundImage} /> */}
//         <View style={styles.inputRow}>
//           <TextInput placeholder="Type a message..." style={styles.messageInput} />
//           {/* <TouchableOpacity>
//             <Image resizeMode="cover" source={{ uri: "sendIconUri" }} style={styles.iconImage} />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Image resizeMode="cover" source={{ uri: "attachIconUri" }} style={styles.iconImage} />
//           </TouchableOpacity> */}
//         </View>
//       </View>
//       </KeyboardAvoidingView></SafeAreaView>
//     </View>
    
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#FFF",
//     padding: 16,
//   },
  // headerContainer: {
  //   flexDirection: "column",
  //   marginBottom: 32,
  // },
  // headerImage: {
  //   width: "100%",
  //   height: 200,
  // },
  // headerTextContainer: {
  //   marginTop: 16,
  // },
  // headerTitle: {
  //   fontWeight: "bold",
  //   fontSize: 22,
  //   color: "#121417",
  // },
  // headerSubtitle: {
  //   fontSize: 16,
  //   color: "#6B7280",
  //   marginTop: 8,
  // },
//   messagesContainer: {
//     marginBottom: 24,
//   },
//   messageRow: {
//     flexDirection: "row",
//     marginBottom: 16,
//     alignItems: "flex-end",
//   },
//   messageBubble: {
//     maxWidth: "80%",
//     padding: 12,
//     borderRadius: 12,
//   },
//   userTypeText: {
//     fontWeight: "bold",
//     fontSize: 14,
//     color: "#374151",
//   },
//   messageText: {
//     fontSize: 16,
//     color: "#1F2937",
//     marginTop: 4,
//   },
//   avatarImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginLeft: 8,
//   },
//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 12,
//     marginBottom:20,
//   },
//   inputBackgroundImage: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,
//   },
//   inputRow: {
//     flexDirection: "row",
//     backgroundColor:"white",
//     alignItems: "center",
//     flex: 1,
//   },
//   messageInput: {
//     flex: 1,
//     height: 40,
//     borderColor: "#D1D5DB",
//     borderWidth: 1,
//     borderRadius: 20,
//     paddingHorizontal: 12,
//     marginRight: 8,
//   },
//   iconImage: {
//     width: 24,
//     height: 24,
//   },
// });

// export default ChatRoomVolunteer;
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,Image,TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../type';
 import {  useNavigation } from '@react-navigation/native';
 import AntDesign from 'react-native-vector-icons/AntDesign'

const ChatRoomVolunteer: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([]);
  const [initialMessageDisplayed, setInitialMessageDisplayed] = useState(false); // Track initial message display

  // useEffect(() => {
  //   // Respond with a welcome message when opening the page (only once)
  //   // if (!initialMessageDisplayed) {
  //     setMessages([{ text: 'Thanks for reaching out! Please hang tight while our volunteers get in touch. Relax your shoulders, take a deep breath, and stay tuned!', sender: 'bot' }]);
  //     // setInitialMessageDisplayed(true);
  //   // }
  // }, [setMessage]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, sender: 'user' },
      ]);
      setMessage('');
  
      // Simulate bot response after 2 seconds (only if it's the first user message)
      if (!initialMessageDisplayed) {
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              text:
                'Thanks for reaching out! Please hang tight while our volunteers get in touch. Relax your shoulders, take a deep breath, and stay tuned!',
              sender: 'bot',
            },
          ]);
        }, 2000);
        setInitialMessageDisplayed(true);
      }
    }
  };
  

  const renderMessages = () => {
    return messages.map((msg, index) => (
      <View
        key={index}
        style={[styles.messageBubble, msg.sender === 'user' ? styles.userBubble : styles.botBubble]}
      >
        <Text>{msg.text}</Text>
      </View>
    ));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableOpacity onPress={() => navigation.goBack()} >
            <AntDesign size={25} name="arrowleft"/>
          </TouchableOpacity>
       <View style={styles.headerContainer}>
        {/* <Image resizeMode="cover" source={require("../n1.jpg")} style={styles.headerImage} /> */}
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Crisis Assistance</Text>
          <Text style={styles.headerSubtitle}> We're here to help you. Please take a moment to tell us about what you're going through. </Text>
        </View>
      </View>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <ScrollView style={styles.messageContainer}>{renderMessages()}</ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={message}
            onChangeText={setMessage}
            placeholder="Type your message..."
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          />
          <Button title="SEND" onPress={handleSend} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "column",
    marginBottom: 32,
  },
  headerImage: {
    width: "100%",
    height: 200,
  },
  headerTextContainer: {
    marginTop: 16,
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#121417",
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#6B7280",
    marginTop: 8,
  },
  safeArea: {
    flex: 1,
    padding:12,
    backgroundColor: 'white', // Set your desired background color
  },
  container: {
    flex: 1,
  },
  messageContainer: {
    flex: 1,
    padding: 10,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  botBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5E5EA',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius:8,
  },
  input: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    height: 40,
    color: 'white',
    paddingHorizontal: 10,

  },
});

export default ChatRoomVolunteer;
