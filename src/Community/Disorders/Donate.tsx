import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const DonatePage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [donationAmount, setDonationAmount] = useState('');
  const [contactMethod, setContactMethod] = useState('');

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Support Our Cause</Text>
      <Text style={styles.headerSubtitle}>Your contribution makes a difference</Text>

      <Text style={styles.introduction}>
        Thank you for considering a donation to [NGO Name]. Please fill out this form to indicate your interest in contributing, and we will contact you with more information on how to proceed.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your email address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Suggested amounts: $50, $100, $250, Other"
        value={donationAmount}
        onChangeText={setDonationAmount}
      />
      <Text style={styles.note}>Please enter the amount you are considering donating.</Text>

      <Text style={styles.label}>How should we contact you to finalize your donation?</Text>
      <TouchableOpacity style={styles.radioButton} onPress={() => setContactMethod('Email')}>
        <Text>Email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.radioButton} onPress={() => setContactMethod('Phone')}>
        <Text>Phone</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        By submitting this form, you are not making a financial commitment at this time. We will reach out to you with details on how to complete your donation and provide any additional information you require.
      </Text>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Donation Inquiry</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  headerSubtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  introduction: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  note: {
    marginBottom: 10,
    fontStyle: 'italic',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  footerText: {
    marginTop: 20,
    fontStyle: 'italic',
  },
  submitButton: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default DonatePage;
