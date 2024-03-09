import * as React from "react";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
} from "react-native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../type';
import {  useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'

interface Card{
  name: string;
  specialization:string;
  rating :string;
  imageUri: string;
}
const SpecialistCard :React.FC <Card> = ({ name, specialization, rating, imageUri }) => (
  <View style={styles.cardContainer}>
    <View style={styles.cardContent}>
      <Image resizeMode="contain" source={{ uri: imageUri }} style={styles.cardImage} />
      <View style={styles.cardTextContainer}>
        <Text style={styles.specialistName}>{name}</Text>
        <Text style={styles.specialistInfo}>{`${specialization} · Rating: ${rating}`}</Text>
      </View>
    </View>
  </View>
);

const ConsultHomePage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const specialists = [
    {
      id: "1",
      name: "Dr. Laura",
      specialization: "PhD in Psychology, Anxiety specialist",
      rating: "4.5",
      imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0bbdf272996ad4266972bf8af6c85ab8769008aa3378bd5d8e1a93a4aebb5cc3",
    },
    // Additional items would be added here
  ];

  return (

      <ScrollView>
    <View style={styles.view1}>
      <View style={styles.view2}>
        <View style={styles.view3}>
          <View style={styles.view4}>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <AntDesign size={25} name="arrowleft"/>
          </TouchableOpacity>
            <View style={styles.view5}>
              <Text style={{fontSize:16,fontWeight:"600"}}>Consult with Experts</Text>
            </View>
          </View>
        </View>
        <ImageBackground
        resizeMode="cover"
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f078080d01d8acbc0ecba8e717b4c2c6e1cb7a9dd4c64e1f5c4b820d5d3d451d',
        }}
        style={styles.backgroundImage}
      >
        <View style={styles.contentContainer}>
          <View style={styles.headlineContainer}>
            <Text style={styles.headlineText}>Expert advice, whenever you need it</Text>
          </View>
          <View style={styles.subtextContainer}>
            <Text style={styles.subtext}>
              Get advice from licensed therapists and counselors. Start your journey to a happier and
              healthier life.
            </Text>
          </View>
        </View>
      </ImageBackground>
        {/* </Image> */}
        <View style={styles.view8}>
          {/* <View style={styles.view9}> */}
            {/* <Image
              resizeMode="auto"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab6611e4a573cbdd3b14f41123fbcac6dad6856e7d79a3cc7de8fb238c8594af?apiKey=42bb954c825745999302100cb42c8fd0&",
              }}
              style={styles.image3}
            /> */}
            {/* <View style={styles.view10}> */}
            <AntDesign style={styles.searchIcon} size={25} name="search1"/>
            <TextInput editable multiline={true} numberOfLines={10} placeholder="Search by expertise or condition" style={styles.view9}
      />
           </View>
           <Text style={styles.view11}>Top experts</Text>
        <TouchableOpacity style={styles.view12} onPress={()=> navigation.navigate("DoctorProfile")}>
        {specialists.map((specialist) => (
        <SpecialistCard
          key={specialist.id}
          name={specialist.name}
          specialization={specialist.specialization}
          rating={specialist.rating}
          imageUri={specialist.imageUri}
        />
      ))}
      </TouchableOpacity>
       
        {/* <View style={styles.view17}>
         import AntDesign from 'react-native-vector-icons/AntDesign'
          <View style={styles.view18}>
            <Image
              resizeMode="auto"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0bbdf272996ad4266972bf8af6c85ab8769008aa3378bd5d8e1a93a4aebb5cc3?apiKey=42bb954c825745999302100cb42c8fd0&",
              }}
              style={styles.image5}
            />
            <View style={styles.view19}>
              <View style={styles.view20}>
                <Text>Dr. Laura</Text>
              </View>
              <View style={styles.view21}>
                <Text>PhD in Psychology, Anxiety specialist · Rating: 4.5</Text>
              </View>
            </View>
          </View>
        </View> */}
      {/* <TouchableOpacity style={styles.postButton}>
        <Text style={styles.postButtonText}>Consult with Experts</Text>
      </TouchableOpacity> */}
      
      </View>
    </View>
    </ScrollView>
  );
}

export default ConsultHomePage;

const styles = StyleSheet.create({
  searchIcon:{
      padding:10,
  },
  backgroundImage: {
    // flex: 1,
    marginLeft:9,
    borderRadius:20,
    marginRight:9,
    width:350,
    height:500,
    justifyContent: 'center',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  headlineContainer: {
    marginTop: 87,
  },
  headlineText: {
    fontFamily: 'Epilogue',
    fontWeight: '700',
    fontSize: 36,
    textTransform: 'uppercase',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  subtextContainer: {
    marginTop: 20,
    marginVertical: 98,
  },
  subtext: {
    fontFamily: 'Epilogue',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21, // approximately 150% of the fontSize
    color: '#FFFFFF',
    textAlign: 'center',
  },
  view1: {
    alignItems: "flex-start",
    backgroundColor: "blue",
    display: "flex",
    maxWidth: 480,
    width: "100%",
    flexDirection: "column",
    marginTop: 0,
    justifyContent: "center",
//1    margin: "0 auto",
  },
  view2: {
    alignItems: "center",
    backgroundColor: "#F7FAFA",
    display: "flex",
    width: "100%",
    paddingBottom: 30,
    flexDirection: "column",
  },
  view3: {
    alignItems: "stretch",
    backgroundColor: "#F7FAFA",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: 28,
    color: "#0D171C",
    fontWeight: "700",
 //   whiteSpace: "nowrap",
  },  image1: { position: "relative", width: 24, aspectRatio: 1 },
  view4: {
    alignItems: "stretch",
    display: "flex",
    flexDirection:"row",
    gap: 5,
    marginLeft:10,
    paddingBottom: 12,
    paddingTop:12,
  },
  view5: {
    marginLeft:88,
    fontFamily: "Inter, sans-serif",
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
  },
  image2: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "stretch",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    aspectRatio: "0.81",
    width: "95%",
    flexDirection: "column",
  //1  //1 padding: "50px 17px",
  },
  view6: {
    // fontFeatureSettings: "'dlig' on",
    position: "relative",
    marginTop: 87,
   //1 font: "700 36px Epilogue, sans-serif ",
  },
  view7: {
    // fontFeatureSettings: "'dlig' on",
    position: "relative",
 //1   margin: "98px 0 93px",
 //1 //1    font: "400 14px/150% Epilogue, sans-serif ",
  },
  view8: {
    display: "flex",
    marginTop: 12,
    width: "100%",
    flexDirection: "row",
    alignItems: "stretch",
  //1  //1 padding: "0 16px",
  },
  view9: {
    borderRadius: 12,
    backgroundColor: "#E8F0F2",
    gap: 2,
     width:"90%",
     marginLeft:12,
    height:60,
    fontSize: 16,
    color: "#4F8296",
    fontWeight: "400",
  //1  //1 padding: "12px 16px",
  },
  image3: { position: "relative", width: 24, aspectRatio: 1 },
  view10: {
    // fontFeatureSettings: "'dlig' on",
    fontFamily: "Epilogue, sans-serif",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
  },
  view11: {
    color: "#0D171C",
    // fontFeatureSettings: "'dlig' on",
    marginTop: 28,
    marginLeft:8,
    fontSize:16,
  //1    font: "700 18px Epilogue, sans-serif ",
  },
  view12: {
    alignItems: "flex-start",
    backgroundColor: "#F7FAFA",
    display: "flex",
    marginTop: 8,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    //1 padding: "16px 60px 16px 16px",
  },
  view13: {
    justifyContent: "space-between",
    alignItems: "stretch",
    display: "flex",
    gap: 10,
  },
  image4: {
    position: "relative",
    width: 72,
    marginLeft: "70%",
    height: 72,
    aspectRatio: 1,
    borderRadius: 12,
  },
  view14: {
    alignItems: "stretch",
    display: "flex",
    flexGrow: 1,
    flexBasis: "0%",
    flexDirection: "column",
  },
  view15: {
    color: "#0D171C",
    fontFamily :"Epilogue, sans-serif",
    // fontFeatureSettings: "'dlig' on",
  //1    font: "700 16px Epilogue, sans-serif ",
  },
  view16: {
    color: "#4F8296",
    // fontFeatureSettings: "'dlig' on",
    marginTop: 4,
  //1    font: "400 14px/21px Epilogue, sans-serif ",
  },
  postButton: {
    marginTop: 12,
    // marginLeft: 8,
    // marginRight: 8,
    backgroundColor: "#421AE5",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",

    paddingVertical: 12,
  },
  postButtonText: {
    paddingRight:12,
    paddingLeft:12,
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
  cardContainer: {
    backgroundColor: "#F7FAFA",
    marginTop: 8,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardImage: {
    width: 55,
    height: 55,
    marginRight: 10,
  },
  cardTextContainer: {
    flex: 1,
  },
  specialistName: {
    fontWeight: "700",
    fontSize: 16,
    color: "#0D171C",
  },
  specialistInfo: {
    marginTop: 4,
    fontSize: 14,
    lineHeight: 21,
    color: "#4F8296",
  },
});


