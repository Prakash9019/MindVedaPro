import React from "react";
import { View, StyleSheet, Image, Text, ScrollView,TouchableOpacity } from "react-native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../type';
import {  useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'

interface HealthMetricProps {
  title: string;
  value: string;
}

const HealthMetric: React.FC<HealthMetricProps> = ({ title, value }) => (
  <View style={styles.healthMetricContainer}>
    <View style={styles.healthMetricTitleContainer}>
      <Text style={styles.healthMetricTitle}>{title}</Text>
    </View>
    <View style={styles.healthMetricValueContainer}>
      <Text style={styles.healthMetricValue}>{value}</Text>
    </View>
  </View>
);

const TestResult = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const healthMetrics = [
    { title: "Mood", value: "Good" },
    { title: "Anxiety", value: "Low" },
    { title: "Stress", value: "Low" },
    { title: "Depression", value: "Low" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
         <View style={styles.view3}>
          <View style={styles.view4}>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <AntDesign size={25} name="arrowleft"/>
          </TouchableOpacity>
            <View style={styles.view5}>
              <Text style={{fontSize:16,fontWeight:"600"}}> Bipolar Disorder Resources</Text>
            </View>
          </View>
        </View>
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Image
            resizeMode="cover"
            source={{ uri: "https://example.com/image1.jpg" }}
            style={styles.topImage}
          />
          <Text style={styles.mainHeading}>You are doing great!</Text>
          <Text style={styles.mainParagraph}>
            Your results are in. You're doing great. You're feeling good and
            handling things well. Keep up the good work.
          </Text>
        </View>
        <View style={styles.metricsSection}>
          {healthMetrics.map((metric) => (
            <HealthMetric key={metric.title} title={metric.title} value={metric.value} />
          ))}
        </View>
        <View style={styles.nextStepsSection}>
          <Text style={styles.nextStepsHeading}>What's next?</Text>
          <Text style={styles.nextStepsContent}>
            Mental fitness is like physical fitness. Track your mental health
            over time. Get personalized advice based on your results.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    view3: {
        alignItems: "stretch",
        backgroundColor: "#F7FAFC",
        display: "flex",
        width: "100%",
        flexDirection: "column",
        fontSize: 18,
        color: "#0D141C",
        fontWeight: "700",
       
        paddingTop: 16,
        paddingRight: 16,
        paddingBottom: 8,
        paddingLeft: 16,
      },
      view4: {
        alignItems: "stretch",
        display: "flex",
        flexDirection:"row",
        gap: 5,
        paddingBottom: 12,
        paddingTop:12,
      },
      view5: {
        marginLeft:38,
        fontFamily: "Inter, sans-serif",
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
      },
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  topSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  topImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  mainHeading: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  mainParagraph: {
    fontSize: 16,
    textAlign: "center",
  },
  metricsSection: {
    alignSelf: "stretch",
    marginTop: 20,
    marginBottom: 20,
  },
  healthMetricContainer: {
    backgroundColor: "#E8F2EB",
    padding: 24,
    borderRadius: 12,
    marginBottom: 16,
  },
  healthMetricTitleContainer: {},
  healthMetricTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  healthMetricValueContainer: {
    marginTop: 8,
  },
  healthMetricValue: {
    fontSize: 24,
    fontWeight: "700",
  },
  nextStepsSection: {
    marginTop: 20,
  },
  nextStepsHeading: {
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  nextStepsContent: {
    fontSize: 16,
  },
});

export default TestResult;