import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
// import CheckBoxGroup from 'react-native-checkbox-group';
// import CheckBox from '@react-native-community/checkbox';
// import DropDownPicker from 'react-native-dropdown-picker';

const VolunteerSignupForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [skills, setSkills] = useState([]);
  const [otherSkills, setOtherSkills] = useState('');
  const [interests, setInterests] = useState([]);
  const [otherInterests, setOtherInterests] = useState('');
  const [availableDays, setAvailableDays] = useState([]);
  const [preferredTime, setPreferredTime] = useState('');
  const [motivation, setMotivation] = useState('');
  const [volunteeringExperience, setVolunteeringExperience] = useState('');
  const [personalGrowth, setPersonalGrowth] = useState('');

  return (
    <ScrollView>
      <View style={{ paddingHorizontal: 20 }}>
        <Text>Section 1: Basic Information</Text>
        <TextInput
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

        <Text>Section 2: Skills and Interests</Text>
        <Text>What skills can you offer to our NGO? (Select all that apply)</Text>
        {/* <CheckBoxGroup
          labels={['Counseling', 'Administrative Support', 'Fundraising', 'Technical Support (IT)', 'Event Management', 'Public Speaking']}
          checked={skills}
          onChange={(checked : any) => setSkills(checked)}
        /> */}
        <TextInput
          placeholder="Other Skills"
          value={otherSkills}
          onChangeText={setOtherSkills}
        />

        <Text>Please indicate your areas of interest: (Select all that apply)</Text>
        {/* <CheckBoxGroup
          labels={['Youth Outreach', 'Adult Mental Health', 'Elderly Care', 'Community Workshops', 'Research and Data Analysis']}
          checked={interests}
          onChange={(checked : any) => setInterests(checked)}
        /> */}
        <TextInput
          placeholder="Other Interests"
          value={otherInterests}
          onChangeText={setOtherInterests}
        />

        <Text>Section 3: Availability</Text>
        <Text>On which days are you available to volunteer? (Check all that apply)</Text>
        {/* <CheckBoxGroup
          labels={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']}
          checked={availableDays}
          onChange={(checked : any) => setAvailableDays(checked)}
        /> */}

        <Text>Preferred time of day for volunteering:</Text>
       

        <Text>Section 4: Motivations and Experience</Text>
        <TextInput
          placeholder="Why are you interested in volunteering with our organization?"
          multiline={true}
          numberOfLines={4}
          value={motivation}
          onChangeText={setMotivation}
        />
        <TextInput
          placeholder="Do you have any previous volunteering experience? If so, please describe it."
          multiline={true}
          numberOfLines={4}
          value={volunteeringExperience}
          onChangeText={setVolunteeringExperience}
        />
        <TextInput
          placeholder="How do you think your involvement with our NGO will impact your personal and professional growth?"
          multiline={true}
          numberOfLines={4}
          value={personalGrowth}
          onChangeText={setPersonalGrowth}
        />
      </View>
    </ScrollView>
  );
};

export default VolunteerSignupForm;
