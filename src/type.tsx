import { NavigatorScreenParams } from "@react-navigation/native";

export type BottomTabParamList = {
    Home: undefined;
    Exprets: undefined;
    Community: undefined;
    Profile: undefined;
    stories: undefined;

}

export type RootStackParamList = {
    BottomTabs: NavigatorScreenParams<BottomTabParamList>;
    StorySharing :undefined;
    ThankForStory: undefined;
    RequestConst: undefined;
    MsgRequest: undefined;
    RequestSent: undefined;
    // details: {id: string, name: string, description: string,images: string[],  price: string;};
}