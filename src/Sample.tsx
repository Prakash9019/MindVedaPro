import React from 'react';
import { View, StyleSheet, Image, Text, FlatList } from 'react-native';

type RoutineCardProps = {
  title: string;
  detail: string;
  time: string;
  points: string;
  imageUri: string;
  reminderIconUri: string;
};

const RoutineCard: React.FC<RoutineCardProps> = ({ title, detail, time, points, imageUri, reminderIconUri }) => (
  <View style={styles.routineCardContainer}>
    <Image resizeMode="contain" source={{ uri: imageUri }} style={styles.routineImage} />
    <View style={styles.routineDetailContainer}>
      <Text style={styles.routineTitle}>{title}</Text>
      <View style={styles.routineTimeDetailContainer}>
        <Text style={styles.routineDetail}>{detail}</Text>
        <View style={styles.routineTimeContainer}>
          <Image resizeMode="contain" source={{ uri: reminderIconUri }} style={styles.reminderIcon} />
          <Text style={styles.routineTime}>{time}</Text>
        </View>
      </View>
      <Text style={styles.routinePoints}>{points}</Text>
    </View>
    <Image resizeMode="contain" source={{ uri: "https://example.com/done-icon.png" }} style={styles.doneIcon} />
  </View>
);

const MyComponent: React.FC = () => {
  const routines = [
    {
      title: 'Drinking Water',
      detail: 'Consumable',
      time: '09:30 AM',
      points: '8 🌻',
      imageUri: 'https://example.com/water-icon.png',
      reminderIconUri: 'https://example.com/clock-icon.png',
    },
    {
      title: 'Amrutam Kuntal Care Hair Spa',
      detail: 'Application Based',
      time: '02:00 PM',
      points: '9 🌻',
      imageUri: 'https://example.com/haircare-icon.png',
      reminderIconUri: 'https://example.com/clock-icon.png',
    },
    // Add more routines as per the design
  ];

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={routines}
        renderItem={({ item }) => (
          <RoutineCard
            title={item.title}
            detail={item.detail}
            time={item.time}
            points={item.points}
            imageUri={item.imageUri}
            reminderIconUri={item.reminderIconUri}
          />
        )}
        keyExtractor={(item, index) => item.title + index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  routineCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  routineImage: { 
    width: 50,
    height: 50,
    marginRight: 12,
  },
  routineDetailContainer: {
    flex: 1,
  },
  routineTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#101018',
  },
  routineTimeDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  routineDetail: {
    color: '#A0A0A0',
    fontSize: 12,
  },
  routineTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reminderIcon: {
    width: 12,
    height: 12,
    marginRight: 4,
  },
  routineTime: {
    fontSize: 12,
    color: '#101018',
  },
  routinePoints: {
    textAlign: 'right',
    color: '#000',
    fontSize: 14,
    fontWeight: '700',
  },
  doneIcon: {
    width: 24,
    height: 24,
  }
});

export default MyComponent;