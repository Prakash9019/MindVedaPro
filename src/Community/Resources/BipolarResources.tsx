import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../type';
import {  useNavigation } from '@react-navigation/native';//
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
interface ResourceItemProps {
  title: string;
  imageUri: string;
}

const ResourceItem: React.FC<ResourceItemProps> = ({ title, imageUri }) => {
  return (
    <View style={styles.resourceItemContainer}>
      <Text style={styles.resourceItemTitle}>{title}</Text>
      <Feather size={35} name="arrow-right-circle" style={styles.resourceItemImage}/>
    </View>
  );
};

const BipolarDisorderResources: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const resourceItems = [
    { title: 'Understand bipolar disorder', imageUri: 'imageUri1' },
    { title: 'Therapy and counseling', imageUri: 'imageUri2' },
    { title: 'Medication for bipolar disorder', imageUri: 'imageUri3' },
    { title: 'Support groups', imageUri: 'imageUri4' },
    { title: 'Crisis resources', imageUri: 'imageUri5' },
  ];

  return (
    <ScrollView style={styles.mainContainer}>
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
        <View>
            </View>
      {resourceItems.map((item, index) => (
        <ResourceItem key={index} title={item.title} imageUri={item.imageUri} />
      ))}
    
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
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headerContainer: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerImage: {
    width: 100,
    height: 100,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  resourceItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  resourceItemTitle: {
    flex: 1,
    fontSize: 18,
    color: '#333',
  },
  resourceItemImage: {
    width: 35,
    height: 35,
    marginLeft: 10,
  },
  discoverMore: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  additionalTopicsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 20,
  },
  topic: {
    backgroundColor: '#E8EDF2',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 5,
  },
  topicText: {
    fontSize: 16,
  },
});

export default BipolarDisorderResources;