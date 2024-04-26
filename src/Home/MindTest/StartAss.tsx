import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, SafeAreaView } from "react-native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../type';
 import {  useNavigation } from '@react-navigation/native';
 import AntDesign from 'react-native-vector-icons/AntDesign'

const AssessmentSection = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return(
  <View style={styles.assessmentContainer}>
    <Text style={styles.assessmentTitle}>State of Mind Assessment</Text>
    <Text style={styles.assessmentDescription}>
      Take 5 minutes to reflect and assess your current state of mind. The results will be used to personalize your
      experience.
    </Text>
    <TouchableOpacity style={styles.startButtonContainer} onPress={()=> navigation.navigate("EmotionalCheckIn")}>
      <Text style={styles.startButtonText} >Start Assessment</Text>
    </TouchableOpacity>
  </View>
)};

const MindfulApp = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView>
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.topImageContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
            <AntDesign size={25} name="arrowleft" style={styles.iconImage} />
          </TouchableOpacity>
        </View>
        <View style={styles.bannerImageContainer}>
          <Image
            resizeMode="contain"
            source={{
              uri:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/6f8d28bd515223b4fd3bbc3ceb1d827",
            }}
            style={styles.bannerImage}
          />
        </View>
        <AssessmentSection />
        <View style={styles.bottomSpacing} />
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "stretch",
    backgroundColor: "#FFF",
    display: "flex",
    maxWidth: 480,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    // margin: "0 auto",
  },
  contentContainer: {
    alignItems: "stretch",
    backgroundColor: "#FFF",
    display: "flex",
    width: "100%",
    paddingBottom: 80,
    flexDirection: "column",
  },
  topImageContainer: {
    // alignItems: "start",
    backgroundColor: "#FFF",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    padding: 24,
  },
  iconImage: {
    width: 24,
    height: 24,
  },
  bannerImageContainer: {
    alignItems: "stretch",
    backgroundColor: "#FFF",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },
  bannerImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1.22,
  },
  assessmentContainer: {
    display: "flex",
    marginTop: 20,
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    padding: 16,
  },
  assessmentTitle: {
    fontSize: 28,
    fontFamily: "Epilogue, sans-serif",
    fontWeight: "700",
  },
  assessmentDescription: {
    fontFamily: "Epilogue, sans-serif",
    fontWeight: "400",
    marginTop: 16,
  },
  startButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    backgroundColor: "#1AA3E5",
    display: "flex",
    marginTop: 32,
    paddingVertical: 12,
    paddingHorizontal: 60,
  },
  startButtonText: {
    color: "#FFF",
    fontFamily: "Epilogue, sans-serif",
  },
  bottomSpacing: {
    backgroundColor: "#FFF",
    minHeight: 20,
    width: "100%",
    marginVertical: 56,
  },
});

export default MindfulApp;