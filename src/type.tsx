import { NavigatorScreenParams } from "@react-navigation/native";

export type BottomTabParamList = {
    Home: undefined;
    Exprets: undefined;
    Community: undefined;
    Profile: undefined;
    stories: undefined;
    ProfileScreen: undefined;
    DoctorProfile:undefined;

}

export type RootStackParamList = {
    BottomTabs: NavigatorScreenParams<BottomTabParamList>;
    CrisisSupportApp:undefined;
    StorySharing :undefined;
    ThankForStory: undefined;
    RequestConst: undefined;
    MsgRequest: undefined;
    ArticleScreen: undefined;
    Stories: undefined;
    RequestSent: undefined;
    NGOApp :undefined;
    NGOs :undefined;
    SupportGroupApp :undefined;
    CommunityInvitation :undefined;
    SocialShareComponent :undefined;
    Test :undefined;
    CrisisSupportApp:undefined;
    SupportOptions :undefined;
    MentalWellnessApp:undefined;
    PostOfDay:undefined;
    Ngos:undefined;
    CallaCenter:undefined;
    ConsultHomePage:undefined;
    DoctorProfile: undefined;
    // details: {id: string, name: string, description: string,images: string[],  price: string;};
}