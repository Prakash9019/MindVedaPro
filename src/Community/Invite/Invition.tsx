import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../type';
import {  useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'

interface CommunityHeaderProps {
  imageUrl: string;
}

const CommunityHeader: React.FC<CommunityHeaderProps> = ({ imageUrl }) => (
  <View style={styles.headerContainer}>
    <Image resizeMode="cover" source={{ uri: imageUrl }} style={styles.headerImage} />
  </View>
);

interface SectionProps {
  title?: string;
  bodyText?: string;
}

const SectionTitle: React.FC<SectionProps> = ({ title }) => (
  <View style={styles.sectionTitleContainer}>
    <Text style={styles.sectionTitleText}>{title}</Text>
  </View>
);

const SectionBody: React.FC<SectionProps> = ({ bodyText }) => (
  <View style={styles.sectionBodyContainer}>
    <Text style={styles.sectionBodyText}>{bodyText}</Text>
  </View>
);

const CommunityInvitation = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <ScrollView>
    <View style={styles.mainContainer}>
    <View style={styles.headerContainer}>
          <View style={styles.view4}>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <AntDesign size={25} name="arrowleft"/>
          </TouchableOpacity>
          <View style={styles.view5}>
              <Text style={{fontSize:16,fontWeight:"600"}}>Invite to join</Text>
           </View>
          </View>
      </View>
      <View style={styles.welcomeContainer}>
        <SectionTitle title="Welcome to Our Bipolar Disorder Community Group" />
        <SectionBody bodyText="We're so glad you're here! Our community group is a safe space for anyone affected by Bipolar Disorder, as well as their loved ones. We're a group of like-minded individuals who are passionate about mental health and wellness." />
        <SectionBody bodyText="Our group is a place to connect, find inspiration, and celebrate wins. We also provide a supportive space for discussing challenges and seeking guidance." />
        <SectionBody bodyText="Join our Bipolar Disorder community group" />
      </View>
      <View style={styles.linkContainer}>
        <Text>https://www.talkspace.com/invite/bipolar-disorder-group</Text>
      </View>
      <View style={styles.joinInstructionsContainer}>
        <SectionBody bodyText="To join our Bipolar Disorder community group, click the link above or copy and paste it into your browser." />
        <SectionTitle title="Benefits of joining:" />
        <SectionBody bodyText="• Connect with a supportive community" />
        <SectionBody bodyText="• Learn from others' experiences and insights" />
        <SectionBody bodyText="• Access exclusive resources and events" />
      </View>
      <TouchableOpacity style={styles.shareLinkContainer} onPress={()=>{navigation.navigate("SocialShareComponent")}}>
        <Text style={styles.shareLinkText} >Share Link</Text>
      </TouchableOpacity>
      <View style={styles.footerSpace} />
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
    marginLeft:100,
    fontFamily: "Inter, sans-serif",
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
  },
  view6: {
    display: "flex",
    marginTop: 16,
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    fontSize: 22,
    fontWeight: "700",
    paddingLeft:16,
    paddingRight:16,
  },
  mainContainer: {
    alignItems: 'stretch',
    backgroundColor: '#FFF',
    display: 'flex',
    maxWidth: 480,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: 16,
    color: '#141217',
    fontWeight: '700',
  },
  headerContainer: {
    justifyContent: 'space-between',
    alignItems: 'stretch',
    display: 'flex',
    gap: 20,
    padding: 12,
  },
  headerImage: {
    width: '100%',
    height: 120, // Adjusted for a better display
  },
  inviteContainer: {
    fontFamily: 'Inter, sans-serif',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
    marginTop: 20,
  },
  welcomeContainer: {
    display: 'flex',
    marginTop: 0,
    width: '100%',
    flexDirection: 'column',
    // alignItems: 'stretch',
    padding: 20, // Adjusted padding for better spacing
  },
  sectionTitleContainer: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 22,
    marginTop: 43,
  },
  sectionTitleText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  sectionBodyContainer: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: '400',
    marginTop: 15,
  },
  sectionBodyText: {
    fontSize: 16,
  },
  linkContainer: {
    fontFamily: 'Inter, sans-serif',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#FFF',
    marginTop: 30,
    padding: 16,
  },
  joinInstructionsContainer: {
    display: 'flex',
    marginTop: 4,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: 20, // Adjusted padding for better spacing
  },
  shareLinkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#6B1AE5',
    display: 'flex',
    marginTop: 24,
    marginLeft: 24,
    marginRight: 24,
    paddingBottom: 12,
    paddingTop: 12,
    paddingRight:60,
    paddingLeft: 60,
  },
  shareLinkText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '700',
  },
  footerSpace: {
    backgroundColor: '#FFF',
    minHeight: 20,
    marginTop: 12,
    width: '100%',
  },
});

export default CommunityInvitation;