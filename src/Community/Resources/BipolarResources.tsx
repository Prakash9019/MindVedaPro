import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

interface ResourceItemProps {
  title: string;
  imageUri: string;
}

const ResourceItem: React.FC<ResourceItemProps> = ({ title, imageUri }) => {
  return (
    <View style={styles.resourceItemContainer}>
      <Text style={styles.resourceItemTitle}>{title}</Text>
      <Image resizeMode="contain" source={{ uri: imageUri }} style={styles.resourceItemImage} />
    </View>
  );
};

const BipolarDisorderResources: React.FC = () => {
  const resourceItems = [
    { title: 'Understand bipolar disorder', imageUri: 'imageUri1' },
    { title: 'Therapy and counseling', imageUri: 'imageUri2' },
    { title: 'Medication for bipolar disorder', imageUri: 'imageUri3' },
    { title: 'Support groups', imageUri: 'imageUri4' },
    { title: 'Crisis resources', imageUri: 'imageUri5' },
  ];

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Image resizeMode="contain" source={{ uri: 'headerImageUri' }} style={styles.headerImage} />
        <Text style={styles.headerTitle}>Bipolar Disorder Resources</Text>
      </View>
      {resourceItems.map((item, index) => (
        <ResourceItem key={index} title={item.title} imageUri={item.imageUri} />
      ))}
      <Text style={styles.discoverMore}>Discover more topics</Text>
      <View style={styles.additionalTopicsContainer}>
        <TouchableOpacity style={styles.topic}>
          <Text style={styles.topicText}>Anxiety</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topic}>
          <Text style={styles.topicText}>Depression</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topic}>
          <Text style={styles.topicText}>Bipolar Disorder</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topic}>
          <Text style={styles.topicText}>Stress</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topic}>
          <Text style={styles.topicText}>Relationships</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topic}>
          <Text style={styles.topicText}>Trauma</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
    width: 50,
    height: 50,
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
    justifyContent: 'space-around',
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