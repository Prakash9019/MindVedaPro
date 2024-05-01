import React from "react";
import { View, StyleSheet, Image, Animated,Text, TouchableOpacity } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import { ToastProvider } from 'react-native-toast-message';
import {RootStackParamList} from '../type';
 import {  useNavigation } from '@react-navigation/native';
 import Toast from 'react-native-toast-message';
// import AntDesign from 'react-native-vector-icons/AntDesign'

interface UserInfoProps {
  name: string;
  title: string;
  imageUri: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, title, imageUri }) => (
  <View style={styles.userInfoContainer}>
    <Image resizeMode="cover" source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/54aa71ad7638140251d45c2a1cbe31fe5991738fe9b6523e5dc6e0e6faa63ea8?apiKey=42bb954c825745999302100cb42c8fd0&" }} style={styles.userImage} />
    <View style={styles.userInfoTextWrapper}>
      <Text style={styles.userName}>{name}</Text>
      <Text style={styles.userTitle}>{title}</Text>
    </View>
  </View>
);

interface IconCounterProps {
  iconUri: string;
  count: number;
}

const IconCounter: React.FC<IconCounterProps> = ({ iconUri, count }) => (
  <View style={styles.iconCounterContainer}>
    <Image resizeMode="cover" source={require("./n1.jpg")} style={styles.iconImage} />
    <Text>{count}</Text>
  </View>
);

const InstaPost: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [isBookmarked, setIsBookmarked] = React.useState(false); // State to track bookmark status
   const [issharedmarked,setIsSharedmarked] = React.useState(false);
  const handleBookmarkToggle = () => {
    setIsBookmarked(!isBookmarked); // Toggle bookmark status
    if (!isBookmarked) {
      Toast.show({
        type: 'success',
        text1: 'Shared successfully!',
        position: 'top',
      });
    }
  };
  const handleShareToggle = () => {
    setIsSharedmarked(!issharedmarked);
  };
  const [showSavedMessage, setShowSavedMessage] = React.useState(false);
  const [showSavedMessage1, setShowSavedMessage1] = React.useState(false);
  const handleSave = () => {
    // Show the "Saved" message
    setShowSavedMessage(true);

    // Hide the message after 2 seconds
    setTimeout(() => {
      setShowSavedMessage(false);
    }, 2000);
  };
  const handleSave2 = () => {
    // Show the "Saved" message
    setShowSavedMessage1(true);

    // Hide the message after 2 seconds
    setTimeout(() => {
      setShowSavedMessage1(false);
    }, 2000);
  };

  return (
    <View style={styles.mainContainer}>
       <TouchableOpacity  onPress={()=> navigation.navigate("DoctorProfile")} >
      <UserInfo
        name="Dr. Emilia"
        title="Psychiatrist "
        imageUri="imageUri1"
      /></TouchableOpacity>
      <Text style={styles.quoteText}>
        It's okay to not be okay. It's okay to not have everything figured out. It's okay to feel lost and confused. It's okay to cry and feel sad. It's okay to take a break. It's okay to not know what you want. It's okay to say no. It's okay to ask for help. It's to be human.
      </Text>
      <View style={styles.imageGrid}>
        <Image resizeMode="cover" source={require("./blogimg1.jpeg")} style={styles.gridImage} />
      </View>
      {/* <Toast ref={(ref : any) => Toast.setRef(ref)} /> */}
      
      <View style={styles.iconCounterRow}>
      <TouchableOpacity style={styles.iconCounterContainer} onPress={()=>{handleShareToggle();handleSave()}}>
          <MaterialCommunityIcons  name={issharedmarked ? 'share-variant' : 'share-variant-outline'}  size={25} style={styles.iconImage} />
        </TouchableOpacity>
        {showSavedMessage && (
        <Animated.View style={styles.savedMessage}>
          <Text style={styles.savedText}>Copied Link</Text>
        </Animated.View>
      )}
        <TouchableOpacity style={styles.iconCounterContainer} onPress={()=>{handleBookmarkToggle();handleSave2()}}>
          <MaterialCommunityIcons  name={isBookmarked ? 'bookmark' : 'bookmark-outline'} size={25} style={styles.iconImage} />
        </TouchableOpacity>
        {showSavedMessage1 && (
        <Animated.View style={styles.savedMessage1}>
          <Text style={styles.savedText}>Saved</Text>
        </Animated.View>
      )}
      </View>
      <View style={styles.commentSection}>
        <Text style={styles.commentText}>See 12 comments</Text>
        <Text style={styles.timeText}>2w</Text>
      </View>
      <TouchableOpacity  onPress={()=> navigation.navigate("DoctorProfile")} >
      <UserInfo
               name="Dr. Emilia"
               title="Psychiatrist "
        imageUri="imageUri3"
      />
      </TouchableOpacity>
      <Text style={styles.questionText}>How do I know if my child has ADHD or is just being a kid?</Text>
      <View style={styles.imageWrapper}>
        <Image resizeMode="cover" source={require("./f1.jpeg")} style={styles.fullWidthImage} />
      </View>
      <View style={styles.iconCounterRow}>
      <TouchableOpacity style={styles.iconCounterContainer} onPress={()=>{handleShareToggle();handleSave()}}>
          <MaterialCommunityIcons  name={issharedmarked ? 'share-variant' : 'share-variant-outline'}  size={25} style={styles.iconImage} />
        </TouchableOpacity>
        {showSavedMessage && (
        <Animated.View style={styles.savedMessage}>
          <Text style={styles.savedText}>Copied Link</Text>
        </Animated.View>
      )}
        <TouchableOpacity style={styles.iconCounterContainer} onPress={()=>{handleBookmarkToggle();handleSave2()}}>
          <MaterialCommunityIcons  name={isBookmarked ? 'bookmark' : 'bookmark-outline'} size={25} style={styles.iconImage} />
        </TouchableOpacity>
        {showSavedMessage1 && (
        <Animated.View style={styles.savedMessage1}>
          <Text style={styles.savedText}>Saved</Text>
        </Animated.View>
      )}
      </View>
      <View style={styles.commentSection}>
        <Text style={styles.commentText}>See 7 comments</Text>
        <Text style={styles.timeText}>4d</Text>
      </View>
     

    </View>
  );
};

const styles = StyleSheet.create({
  saveIcon: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    zIndex: 1,
  },
  savedMessage: {
    position: 'absolute',
    bottom: 60,
    right: 200,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    zIndex: 2,
  },
  savedMessage1: {
    position: 'absolute',
    bottom: 60,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    zIndex: 2,
  },
  savedText: {
    color: 'white',
    fontSize: 14,
  },
  mainContainer: { backgroundColor: "#F7FAFC", padding: 20 },
  userInfoContainer: { marginTop: 20,flexDirection: "row", alignItems: "center", marginBottom: 20 },
  userImage: { width: 56, height: 56, borderRadius: 28 },
  userInfoTextWrapper: { marginLeft: 10 },
  userName: { fontWeight: "bold" },
  userTitle: { color: "#666" },
  quoteText: { marginVertical: 20 },
  imageGrid: { flexDirection: "row", justifyContent: "space-between" },
  gridImage: { width: "100%", height: 200, borderRadius: 8 },
  iconCounterContainer: { flexDirection: "row", alignItems: "center" },
  iconImage: { width: 24, height: 24 },
  iconCounterRow: { flexDirection: "row", justifyContent: "space-around", marginVertical: 20 },
  commentSection: { flexDirection: "row", justifyContent: "space-between", borderTopWidth: 1, borderTopColor: "#eee", paddingTop: 10 },
  commentText: { color: "#888" },
  timeText: { color: "#888" },
  questionText: { fontWeight: "bold", marginVertical: 20 },
  imageWrapper: { marginBottom: 20 },
  fullWidthImage: { width: "100%", height: 200, borderRadius: 8 },
  spacingView: { height: 20 },
});

export default InstaPost;
// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet, TouchableOpacity, Animated } from 'react-native';

// const App = () => {
//   const [answers, setAnswers] = useState({
//     question1: null,
//     question2: null,
//     question3: null,
//     question4: null,
//   });

//   const handleAnswer = (question : any, answer : any) => {
//     setAnswers({ ...answers, [question]: answer });
//   };

//   const calculateResult = () => {
//     // Customize the logic to calculate the overall result based on the answers.
//     // For simplicity, let's assume higher scores indicate better mental health.
//     const totalScore = Object.values(answers).reduce((acc, val) => acc + (val || 0), 0);
//     const result = totalScore >= 8 ? 'Good' : 'Needs attention';
//     return result;
//   };

//   const resultOpacity = new Animated.Value(0);

//   const showResult = () => {
//     const result = calculateResult();
//     const message = result === 'Good' ? 'You are doing great! Keep it up.' : 'Remember to take care of yourself.';

//     Animated.timing(resultOpacity, {
//       toValue: 1,
//       duration: 500,
//       useNativeDriver: true,
//     }).start();
   
//     return (
//       <Animated.View style={[styles.resultContainer, { opacity: resultOpacity }]}>
//         <Text style={styles.resultText}>Your Mental Health:</Text>
//         <Text style={styles.result}>{result}</Text>
//         <Text style={styles.message}>{message}</Text>
//         <TouchableOpacity style={styles.exploreButton}>
//           <Text style={styles.exploreButtonText}>Explore Resources</Text>
//         </TouchableOpacity>
//       </Animated.View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.question}>How often do you feel stressed?</Text>
//       <Button title="Never" onPress={() => handleAnswer('question1', 1)} />
//       <Button title="Sometimes" onPress={() => handleAnswer('question1', 2)} />
//       <Button title="Frequently" onPress={() => handleAnswer('question1', 3)} />

//       <Text style={styles.question}>How would you rate your mood today?</Text>
//       <Button title="Happy" onPress={() => handleAnswer('question2', 3)} />
//       <Button title="Neutral" onPress={() => handleAnswer('question2', 2)} />
//       <Button title="Sad" onPress={() => handleAnswer('question2', 1)} />

//       <Text style={styles.question}>Do you have trouble sleeping?</Text>
//       <Button title="No" onPress={() => handleAnswer('question3', 1)} />
//       <Button title="Sometimes" onPress={() => handleAnswer('question3', 2)} />
//       <Button title="Frequently" onPress={() => handleAnswer('question3', 3)} />

//       <Text style={styles.question}>How often do you feel anxious?</Text>
//       <Button title="Rarely" onPress={() => handleAnswer('question4', 1)} />
//       <Button title="Sometimes" onPress={() => handleAnswer('question4', 2)} />
//       <Button title="Often" onPress={() => handleAnswer('question4', 3)} />

//       <Button title="Submit" onPress={() => showResult()} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   question: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   resultContainer: {
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   resultText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   result: {
//     fontSize: 24,
//     color: '#007AFF',
//     marginBottom: 10,
//   },
//   message: {
//     fontSize: 16,
//     color: '#555',
//     textAlign: 'center',
//     marginHorizontal: 20,
//   },
//   exploreButton: {
//     backgroundColor: '#007AFF',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//     marginTop: 20,
//   },
//   exploreButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });

// export default App;