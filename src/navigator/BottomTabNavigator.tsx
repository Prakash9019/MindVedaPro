import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { MaterialIcon } from '../Icons';
// import { Icon } from 'react-native-elements'; AntDesign
import HomePage from '../HomePage';
import Stories from '../Stories/Stories';
import DoctorProfile from '../Profiles/DoctorProfile';
import SearchPage from '../SearchPage';
import RequestConst from '../consultation/RequestConst';
import MsgRequest from '../consultation/MsgRequest';
import RequestSent from '../consultation/RequestSent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigation: React.FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#fff', height: 70},
        tabBarInactiveTintColor: '#6366f1',
        tabBarActiveTintColor: 'red',
        tabBarLabelStyle: {
          fontSize: 14,
          
          
        },
        tabBarShowLabel: true,
        headerStyle: {
          backgroundColor: '#e0f2fe'
        },
        headerShown: false

      }}
    >
      <BottomTabs.Screen

        name="Home" component={HomePage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign size={25} name="home" color={color}/>
          ),
        }}
      />
      <BottomTabs.Screen
        name="Exprets" component={DoctorProfile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name='user-graduate' size={25} color={color} />       
          ),
        }}
      />
      <BottomTabs.Screen
        name="Community" component={MsgRequest}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="groups" color={color} size={35} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="stories" component={Stories}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="description" color={color} size={30} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Profile" component={RequestSent}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-circle" size={28} color={color} />
          ),
        }}
      />

    </BottomTabs.Navigator>
  );
};