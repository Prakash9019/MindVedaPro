import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import {Slider as MySlider} from '@react-native-community/slider';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../type';
import {  useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'


const Header = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return(
  <View style={styles.headerContainer}>
     <TouchableOpacity onPress={() => navigation.goBack()} >
            <AntDesign size={25} name="arrowleft" style={styles.logo} />
          </TouchableOpacity>
    <TouchableOpacity onPress={()=> navigation.goBack() }>
      <Text>Skip</Text>
    </TouchableOpacity>
  </View>
)};
const myLocalSlider: MySlider = {

}

const MoodQuestion = () => (
  <View style={styles.moodQuestionContainer}>
    <Text style={styles.questionText}>How often do you feel happy?</Text>
    <Text style={styles.questionDescription}>
      We ask this question to understand your general mood.
    </Text>
  </View>
);

const Slider = () => (
  <View style={styles.sliderContainer}>
    <Text>Slider</Text>
    <Text>50</Text>
  </View>
);

const SliderBackground = () => {
  const [sliderValue, setSliderValue] = React.useState(0);
return(
  <View style={styles.sliderBackgroundContainer}>
      <Slider
        value={sliderValue}
        onValueChange={(value) => setSliderValue(value)}
        minimumValue={0}
        maximumValue={100}
        step={1}
      />
      <Text>Value: {sliderValue}</Text>
    <View style={styles.sliderBackgroundFill} />
    <View style={styles.sliderKnob} />
  </View>
)};

const MoodScale = () => (
  <View style={styles.moodScaleContainer}>
    <Text style={styles.moodScaleText}>Not at all</Text>
    <Text style={styles.moodScaleText}>All the time</Text>
  </View>
);

const DotsIndicator = () => (
  <View style={styles.dotsContainer}>
    {Array(7)
      .fill(null)
      .map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            index === 0 ? styles.dotActive : styles.dotInactive,
          ]}
        />
      ))}
  </View>
);

const NextButton = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
  <TouchableOpacity style={styles.nextButtonContainer} onPress={()=>{ navigation.navigate("EmotionalCheckIn"); }}>
    <Text style={styles.nextButtonText}>Next</Text>
  </TouchableOpacity>
)};

const SurveyScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Image
        // resizeMode="auto"
        source={{ uri: "https://placeholder.com/100" }}
        style={styles.mainImage}
      />
      <MoodQuestion />
      <View style={styles.sliderSection}>
        <Slider />
        <SliderBackground />
      </View>
      <MoodScale />
      <DotsIndicator />
      <NextButton />
      <View style={styles.bottomSpace} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    backgroundColor: "#FFF",
    display: "flex",
    maxWidth: 480,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    // margin: "0 auto",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  logo: {
    width: 24,
    height: 24,
  },
  mainImage: {
    width: "100%",
    height: 200, // Example height to keep aspect ratio
  },
  moodQuestionContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  questionText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  questionDescription: {
    fontSize: 16,
  },
  sliderSection: {
    marginTop: 36,
    paddingHorizontal: 16,
  },
  sliderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sliderBackgroundContainer: {
    flexDirection: "row",
    marginTop: 12,
  },
  sliderBackgroundFill: {
    backgroundColor: "#121217",
    flex: 1,
    height: 4,
    borderRadius: 2,
  },
  sliderKnob: {
    width: 16,
    height: 16,
    backgroundColor: "#121217",
    borderRadius: 8,
    marginLeft: -8, // Half of its own width to visually center it with the fill
  },
  moodScaleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    paddingHorizontal: 16,
  },
  moodScaleText: {
    fontSize: 14,
    color: "#6B6387",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
    paddingVertical: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: "#121217",
  },
  dotInactive: {
    backgroundColor: "#DEDBE5",
  },
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
  bottomSpace: {
    minHeight: 20,
    marginTop: 12,
    width: "100%",
  },
});

export default SurveyScreen;