import React from "react";
import { View, StyleSheet, Text,TouchableOpacity,Alert, ScrollView } from "react-native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../type';
 import {  useNavigation } from '@react-navigation/native';
 import AntDesign from 'react-native-vector-icons/AntDesign'

const EmotionalCheckIn = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [selectedValue, setSelectedValue] = React.useState(false);
      const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);

  const handleNextQuestion = () => {
    // Check if there are more questions
    if (currentQuestionIndex < questions.length - 1) {
      // Increment the current question index
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // No more questions, handle end of quiz
      Alert.alert('End of quiz!');
    }
  };
  
const handleclick =()=>{
  setSelectedValue(true);
}

  const questions = [
    ["How often have you felt overwhelmed or unable to cope with your emotions?", "Never", "Rarely", "Sometimes", "Often", "Always"],
    ["Have you experienced a loss of interest or pleasure in activities that you once enjoyed?", "Not at all", "Slightly", "Moderately", "Severely", "Extremely"],
    ["Do you often feel tired or have trouble sleeping?", "Never", "Occasionally", "Frequently", "Almost every night", "Every night"],
    ["How often do you feel nervous, anxious, or on edge?", "Rarely or none of the time", "Some or a little of the time", "Occasionally or a moderate amount of the time", "Often or a lot of the time", "Most or all of the time"],
    ["Have you experienced changes in your appetite or weight recently?", "No change", "Slight change", "Moderate change", "Significant change", "Extreme change"],
    ["Do you have difficulty concentrating or making decisions?", "Not at all", "Occasionally", "Often", "Almost all the time", "All the time"],
    ["How often do you feel down, depressed, or hopeless?", "Rarely or never", "Occasionally", "Frequently", "Almost every day", "Every day"],
    ["Have you had thoughts of harming yourself or ending your life?", "Never", "Rarely", "Sometimes", "Often", "Always"]
];

  return (
    <ScrollView>
    <View style={styles.container}>
   
    <TouchableOpacity onPress={() => navigation.goBack()} >
            <AntDesign size={25} name="arrowleft"  />
    </TouchableOpacity>
    <View style={styles.headerContainer}>
    <Text style={styles.headerText}> {questions[currentQuestionIndex][0]} </Text>
  </View>
  <View style={styles.container1}>
  <TouchableOpacity onPress={()=> handleclick()}>
    <View style={ selectedValue ? styles.ratingContainer2 :styles.ratingContainer }>
      <View style={styles.ratingIcon} />
      <View style={styles.ratingTextContainer}>
        <Text style={styles.ratingText}>{questions[currentQuestionIndex][1]}</Text>
      </View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity >
    <View style={ styles.ratingContainer2}>
      <View style={styles.ratingIcon} />
      <View style={styles.ratingTextContainer}>
        <Text style={styles.ratingText}>{questions[currentQuestionIndex][2]}</Text>
      </View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity >
    <View style={ styles.ratingContainer2}>
      <View style={styles.ratingIcon} />
      <View style={styles.ratingTextContainer}>
        <Text style={styles.ratingText}>{questions[currentQuestionIndex][3]}</Text>
      </View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity >
    <View style={ styles.ratingContainer2}>
      <View style={styles.ratingIcon} />
      <View style={styles.ratingTextContainer}>
        <Text style={styles.ratingText}>{questions[currentQuestionIndex][4]}</Text>
      </View>
    </View>
    </TouchableOpacity>
    {/* <CustomRadioButton 
                label="ReactJS"
                selected={selectedValue === 'option1'}  onSelect={() => setSelectedValue('option1')} 
            />  */}
  </View>
  {/* <View style={styles.bodyContainer}>
    <Text style={styles.bodyText}>Take a moment to check in with yourself. We'll use this information to help track your emotional well-being over time</Text>
  </View> */}
    
   
  <TouchableOpacity style={styles.nextButtonContainer} onPress={handleNextQuestion} >
    <Text style={styles.nextButtonText}>Next</Text>
  </TouchableOpacity>
  </View>
  </ScrollView>
  );
};

interface RatingProps{
  ratingText:string;
  // style:any;
    selected:string;
    // onSelect:boolean;
}

const RatingItem :React.FC<RatingProps>= ({ ratingText,selected }) => ( 
  <TouchableOpacity >
    <View style={ styles.ratingContainer2}>
      <View style={styles.ratingIcon} />
      <View style={styles.ratingTextContainer}>
        <Text style={styles.ratingText}>{ratingText}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
  


const styles = StyleSheet.create({
  nextButtonContainer: {
    backgroundColor: "#694AE8",
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 24,
    alignSelf: "center",
    marginTop: 42,
  },
  nextButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
    container1: {
        alignItems: "stretch",
        marginTop: 15,
        width: "100%",
        flexDirection: "column",
        padding: 16,
      },
      radioButton: { 
        paddingVertical: 12, 
        paddingHorizontal: 16, 
        borderRadius: 8, 
        marginVertical: 8, 
        borderWidth: 1, 
        borderColor: '#007BFF', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        width: 280, 
    }, 
    radioButtonText: { 
        fontSize: 16, 
    }, 
  container: {
     marginTop: 10,
    width: "100%",
    paddingHorizontal: 17,
    backgroundColor: "#fff",
  },
  headerContainer: {
    marginTop:10,
    marginBottom: 16,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Epilogue, sans-serif",
  },
  bodyContainer: {
    marginBottom: 16,
  },
  bodyText: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    fontFamily: "Epilogue, sans-serif",
  },
  ratingContainer: {
    alignItems: "stretch",
    borderRadius: 12,
    borderColor: "blue",
    borderWidth: 1,
    display: "flex",
    marginTop: 12,
    padding: 18,
    flexDirection: "row"
  },
  ratingContainer2: {
    alignItems: "stretch",
    borderRadius: 12,
    // backgroundColor:'blue',
    borderColor: "rgba(222, 219, 229, 1)",
    borderWidth: 1,
    display: "flex",
    marginTop: 12,
    padding: 18,
    flexDirection: "row"
  },
  firstItem: {
    marginTop: 0,
  },
  ratingIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(222, 219, 229, 1)",
  },
  ratingTextContainer: {
    marginLeft: 18,
  },
  ratingText: {
    fontFamily: "Epilogue, sans-serif",
    fontSize: 14,
    color: "#121217",
    fontWeight: "500",
  }
});

export default EmotionalCheckIn;


