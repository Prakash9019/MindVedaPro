import * as React from "react";
import { View, StyleSheet, Image, Text,TouchableOpacity } from "react-native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../type';
import {  useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'

type NotificationItemProps = {
  title: string;
  subtitle: string;
  imageUri: string;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ title, subtitle, imageUri }) => (
  <View style={styles.notificationItem}>
    <Image resizeMode="cover" source={{ uri: imageUri }} style={styles.notificationImage} />
    <View style={styles.notificationTextContainer}>
      <Text style={styles.notificationTitle}>{title}</Text>
      <Text style={styles.notificationSubtitle}>{subtitle}</Text>
    </View>
  </View>
);

const NotificationList: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const notifications = [
    { title: "Your post on 'How do you stay positive?' has 12 likes", subtitle: "Positive Stories", imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/03bf2600d65cc91e6259144b158f88755b2010f138b53d1bd827a9ea4de20d1a?apiKey=c59f5e5e431d46fb9fcb854f2676cd03&" },
    { title: "An expert has responded to your question", subtitle: "Community Updates", imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/1ad6fe31ffde3f5d4d88f2ae6963a9cc108971e8c57f5b66600b738e69cbed2c?apiKey=c59f5e5e431d46fb9fcb854f2676cd03&" },
    { title: "Dr. John has posted a new article", subtitle: "Expert Posts", imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/80055bb4172e0605264b93b694648e1be45d2c0889598a2bf49e9902bf2ef569?apiKey=c59f5e5e431d46fb9fcb854f2676cd03&" },
    { title: "You have 3 messages in the group", subtitle: "Chat Group Messages", imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/916340cbcc7a5664b152411e1ef3f0bbdb71ce47fb57a0b7e0b008921bfc9c9c?apiKey=c59f5e5e431d46fb9fcb854f2676cd03&" },
    { title: "Your post on 'What's your favorite self-care routine?' has 8 likes", subtitle: "Positive Stories", imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/a4712808e57e29ed7c0a5ead372f5ac04c106e69ca7993bfde2189d13326f2dd?apiKey=c59f5e5e431d46fb9fcb854f2676cd03&" },
    { title: "Dr. Smith has posted a new article", subtitle: "Expert Posts", imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/8c88d10a7056ba8ac529f76c3fa959b7b6436eb638744ae511fd738241703c36?apiKey=c59f5e5e431d46fb9fcb854f2676cd03&" },
  ];

  return (
    <View style={styles.container}>
      <View style={{display:"flex",flexDirection:"row"}}>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <AntDesign size={25} name="arrowleft"/>
          </TouchableOpacity>
      <Text style={styles.header}>Notifications</Text></View>
      <Text style={styles.subHeader}>Today</Text>
      {notifications.map((notification, index) => (
        <NotificationItem
          key={index}
          title={notification.title}
          subtitle={notification.subtitle}
          imageUri={notification.imageUri}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7FAFC",
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    marginLeft:56,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A5568",
    marginBottom: 16,
  },
  notificationItem: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "center",
  },
  notificationImage: {
    width: 56,
    height: 56,
    marginRight: 16,
  },
  notificationTextContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  notificationSubtitle: {
    fontSize: 14,
    color: "#4A5568",
  },
});

export default NotificationList;