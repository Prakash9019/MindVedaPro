import React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../type';
import {  useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'

type InformationFieldProps = {
  label: string;
  placeholder: string;
};

const InformationField: React.FC<InformationFieldProps> = ({ label, placeholder }) => (
  <View style={styles.informationFieldContainer}>
    <Text style={styles.fieldLabel}>{label}</Text>
    <TextInput style={styles.textField} placeholder={placeholder} />
  </View>
);

const ProfileScreen: React.FC = () => {
    
  const informationFields = [
    { label: "Full Name", placeholder: "Enter your full name" },
    { label: "Email Address", placeholder: "Enter your email" },
    { label: "Date of Birth", placeholder: "Select your date of birth" },
    { label: "Gender", placeholder: "Enter your gender" },
    { label: "Location", placeholder: "Enter your location" },
  ];
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
      <TouchableOpacity onPress={() => navigation.goBack()} >
            <AntDesign size={25} name="arrowleft"/>
          </TouchableOpacity>
        <Text style={{marginLeft:100}}>Edit Profile</Text>
      </View>
      <Text style={styles.sectionTitle}>Personal Information</Text>
      {informationFields.map((field, index) => (
        <InformationField key={index} label={field.label} placeholder={field.placeholder} />
      ))}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonCancel}>
          <Text>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSave}>
          <Text>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileHeader: {
    paddingVertical: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#E8E8E8',
    display:"flex",
    flexDirection:"row",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 20,
  },
  informationFieldContainer: {
    marginBottom: 15,
  },
  fieldLabel: {
    marginBottom: 5,
  },
  textField: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  buttonCancel: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 5,
    padding: 15,
  },
  buttonSave: {
    backgroundColor: "#E8E8E8",
    borderRadius: 5,
    padding: 15,
  }
});

export default ProfileScreen;