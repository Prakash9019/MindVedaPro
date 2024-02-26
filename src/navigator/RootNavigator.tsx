import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchPage from '../SearchPage';
import Stories from '../Stories/Stories';
import StorySharing from '../Stories/StorySharing';
import ThankForStory from '../Stories/ThankForStory';
import BipolarStory from '../Stories/BipolarStory';
import DoctorProfile from '../Profiles/DoctorProfile';
import MsgRequest from '../consultation/MsgRequest';
import RequestConst from '../consultation/RequestConst';
import RequestSent from '../consultation/RequestSent';
import { BottomTabsNavigation } from './BottomTabNavigator';
// import { BottomTabsNavigation } from './BottomTabsNavigation';
// import DrawerNavigatorNavigation from './DrawerNavigatorNavigation';
// import Details from '../screen/Details';
// import { RootStackParamList } from '../type';

const RootStack = createNativeStackNavigator();

export const RootNavigator: React.FC = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="BottomTabsNavigation"
        component={BottomTabsNavigation}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="HomePage"
        component={SearchPage}
        options={{ headerShown: false }}
      />
        <RootStack.Screen
        name="Stories"
        component={Stories}
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
      {/* <RootStack.Screen
        name="Drawer"
        component={DrawerNavigatorNavigation}
        options={{ headerShown: false }}
      />
       */}
    </RootStack.Navigator>
  );
};