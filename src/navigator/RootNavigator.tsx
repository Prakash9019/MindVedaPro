import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchPage from '../SearchPage';
import Stories from '../Stories/Stories';
import StorySharing from '../Stories/StorySharing';
import ThankForStory from '../Stories/ThankForStory';
import ConsultHomePage from '../consultation/ConsultHomePage';
import BipolarStory from '../Stories/BipolarStory';
import PostOfDay from '../Home/PostOfDay';
import ArticleScreen from '../consultation/Blog2';
import DoctorProfile from '../Profiles/DoctorProfile';
import MsgRequest from '../consultation/MsgRequest';
import RequestConst from '../consultation/RequestConst';
import RequestSent from '../consultation/RequestSent';
import { BottomTabsNavigation } from './BottomTabNavigator';
import HomePage from '../Home/HomePage';
import Test from '../Home/MindTest/test';
import SupportOptions from '../Home/Support/EmergencySupport';
import SupportGroupApp1 from '../Community/Disorders/Bipolar';
import NGOs from '../Community/Disorders/Ngos';
import NGOApp from '../Community/Disorders/NGO';
import CommunityInvitation from '../Community/Invite/Invition';
import MindfulApp from '../Home/MindTest/StartAss';
import EmotionalCheckIn from '../Home/MindTest/Page2';
import SurveyScreen from '../Home/MindTest/Page1';
import ProfilePage from '../Profiles/Profile';
import CrisisSupportApp from '../Home/Support/CallaCenter';
import SocialShareComponent from '../Community/Invite/Share';
import MentalHealthJourneyScreen from '../Stories/YourStory';
import ConfirmationScreen from '../consultation/ReqSent';
import BipolarDisorderResources from '../Community/Resources/BipolarResources';
import CommunityHomePage from '../Community/CommunityHomePage';
import TestResult from '../Home/MindTest/Result';
import MentalWellnessApp from '../Home/HomePage';
import ChatRoom from '../Community/Disorders/ChatRoom';
import NotificationList from '../Home/Notification';
import ConversionList from '../Home/Conversation';
import { ImageBackgroundComponent } from 'react-native';
import VolunteerSignupForm from '../Community/Disorders/Volunteer';
import DonatePage from '../Community/Disorders/Donate';
import ChatRoomVolunteer from '../Home/Support/ChatRoomVolunteer';
import ProfileScreen from '../Profiles/EditProfile';
import Signup from '../Components/SignIn';
import SignIn from '../Components/SignUp';
import Main from '../Components/Main';
import { Slide } from '@mui/material';
// import { BottomTabsNavigation } from './BottomTabsNavigation';
// import DrawerNavigatorNavigation from './DrawerNavigatorNavigation';
// import Details from '../screen/Details';
// import { RootStackParamList } from '../type';

const RootStack = createNativeStackNavigator();

export const RootNavigator: React.FC = () => {
  return (
    <RootStack.Navigator>
        
      {/* <RootStack.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
        <RootStack.Screen
        name="SignUp"
        component={Signup}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />   */}
      <RootStack.Screen
        name="BottomTabs"
        component={BottomTabsNavigation}
        options={{ headerShown: false }}
      />
    <RootStack.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false }}
      />
        <RootStack.Screen
        name="Stories"
        component={Stories}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="ConsultHomePage"
        component={ConsultHomePage}
        options={{ headerShown: false }}
      />
       <RootStack.Screen
        name="StorySharing"
        component={StorySharing}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="ThankForStory"
        component={ThankForStory}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="ArticleScreen"
        component={ArticleScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="DoctorProfile"
        component={DoctorProfile}
        options={{ headerShown: false }}
      />
       <RootStack.Screen
        name="MsgRequest"
        component={MsgRequest}
        options={{ headerShown: false }}
      />
       <RootStack.Screen
        name="RequestConst"
        component={RequestConst}
        options={{ headerShown: false }}
      />
       <RootStack.Screen
        name="RequestSent"
        component={RequestSent}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="PostOfDay"
        component={PostOfDay}
        options={{ headerShown: false }}
      />
       <RootStack.Screen
        name="SupportOptions"
        component={SupportOptions}
        options={{ headerShown: false }}
      />
       <RootStack.Screen
        name="Test"
        component={Test}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="SupportGroupApp1"
        component={SupportGroupApp1}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="NGOs"
        component={NGOs}
        options={{ headerShown: false }}
      />
       <RootStack.Screen
        name="VolunteerSignupForm"
        component={VolunteerSignupForm}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="DonatePage"
        component={DonatePage}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="NGOApp"
        component={NGOApp}
        options={{ headerShown: false }}
      />
        <RootStack.Screen
        name="CommunityInvitation"
        component={CommunityInvitation}
        options={{ headerShown: false }}
      />
       <RootStack.Screen
        name="MindfulApp"
        component={MindfulApp}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="EmotionalCheckIn"
        component={EmotionalCheckIn}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="SurveyScreen"
        component={SurveyScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{ headerShown: false }}
      />
         <RootStack.Screen
        name="CrisisSupportApp"
        component={CrisisSupportApp}
        options={{ headerShown: false }}
      />
       <RootStack.Screen
        name="SocialShareComponent"
        component={SocialShareComponent}
        options={{ headerShown: false }}
      />
       <RootStack.Screen
        name="BipolarStory"
        component={BipolarStory}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="MentalHealthJourneyScreen"
        component={MentalHealthJourneyScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="ConfirmationScreen"
        component={ConfirmationScreen}
        options={{ headerShown: false }}
      />
       <RootStack.Screen
        name="BipolarDisorderResources"
        component={BipolarDisorderResources}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="CommunityHomePage"
        component={CommunityHomePage}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="TestResult"
        component={TestResult}
        options={{ headerShown: false }}
      />
        <RootStack.Screen
        name="MentalWellnessApp"
        component={MentalWellnessApp}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={{ headerShown: false }}
      />
     <RootStack.Screen
        name="NotificationList"
        component={NotificationList}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="ConversionList"
        component={ConversionList}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="ChatRoomVolunteer"
        component={ChatRoomVolunteer}
        options={{ headerShown: false }}
      />
       <RootStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
       
         {/* <RootStack.Screen
        name="Slide"
        component={Slide}
        options={{ headerShown: false }}
      /> */}
      {/* <RootStack.Screen  ChatRoom NotificationList ChatRoomVolunteer
        name="Drawer" CommunityHomePage TestResult
        component={DrawerNavigatorNavigation} ProfileScreen
        options={{ headerShown: false }}
      />
       */}
    </RootStack.Navigator>
  );
};