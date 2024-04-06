import React from "react";
import { View, StyleSheet, Text,TouchableOpacity } from "react-native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../type';
 import {  useNavigation } from '@react-navigation/native';
 import AntDesign from 'react-native-vector-icons/AntDesign'

const EmotionalCheckIn = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [selectedValue, setSelectedValue] = React.useState(null);
    const ratings = [
        { key: "1", text: "Great", style: styles.firstItem },
        { key: "2", text: "Good", style: null },
        { key: "3", text: "Okay", style: null },
        { key: "4", text: "Not great", style: null },
        { key: "5", text: "Awful", style: null }
      ];
  return (
    <View>
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()} >
            <AntDesign size={25} name="arrowleft"  />
    </TouchableOpacity>
    <View style={styles.headerContainer}>
    <Text style={styles.headerText}>How are you feeling today?</Text>
  </View>
  <View style={styles.bodyContainer}>
    <Text style={styles.bodyText}>Take a moment to check in with yourself. We'll use this information to help track your emotional well-being over time</Text>
  </View>
     </View>
    <View style={styles.container1}>
    <CustomRadioButton 
                label="ReactJS"
                selected={selectedValue === 'option1'}  onSelect={() => setSelectedValue('option1')} 
            /> 
    {ratings.map(rating => (
      <CustomRadioButton key={rating.key} label={rating.text}  selected={selectedValue === 'option1'} onSelect={() => setSelectedValue('option1')}    />
    ))}
  </View>
  </View>
  );
};

interface RatingProps{
    label:string;
    selected:boolean;
    onSelect:boolean;
}
const CustomRadioButton :React.FC<RatingProps>= ({ label, selected, onSelect }) => ( 
  <TouchableOpacity 
      style={[styles.radioButton, 
      { backgroundColor: selected ? '#007BFF' : '#FFF' }]} 
      onPress={()=>onSelect} 
  > 
      <Text style={[styles.radioButtonText, 
      { color: selected ? '#FFF' : '#000' }]}> 
          {label} 
      </Text> 
  </TouchableOpacity> 
); 

const RatingItem :  = ({ ratingText, style }) => (
    <View style={[styles.ratingContainer, style]}>
      <View style={styles.ratingIcon} />
      <View style={styles.ratingTextContainer}>
        <Text style={styles.ratingText}>{ratingText}</Text>
      </View>
    </View>
  );
  


const styles = StyleSheet.create({
    container1: {
        alignItems: "stretch",
        marginTop: 60,
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
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 17,
    backgroundColor: "#fff",
  },
  headerContainer: {
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


