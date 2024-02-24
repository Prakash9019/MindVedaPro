import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../../HomePage';
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
        component={HomePage}
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