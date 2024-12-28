import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  Image,
  Pressable,
} from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';

interface FormData {
  fullName: string;
  dob: string;
  gender: string;
  age: string;
  hobbies: string[];
}

export default function HomeScreen() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    dob: '',
    gender: '',
    age: '',
    hobbies: [],
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleHobby = (hobby: string) => {
    setFormData((prev) => ({
      ...prev,
      hobbies: prev.hobbies.includes(hobby)
        ? prev.hobbies.filter((h) => h !== hobby)
        : [...prev.hobbies, hobby],
    }));
  };

  const handleSubmit = () => {
    if (!formData.fullName || !formData.dob || !formData.gender || !formData.age) {
      console.warn('Please fill in all required fields.');
      return;
    }
    console.log('Form Data:', formData);
  };

  const handleClear = () => {
    setFormData({ fullName: '', dob: '', gender: '', age: '', hobbies: [] });
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Student Registration Form</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={formData.fullName}
          onChangeText={(text) => handleInputChange('fullName', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Date of Birth"
          value={formData.dob}
          onChangeText={(text) => handleInputChange('dob', text)}
        />
        <View style={styles.genderContainer}>
          <Pressable
            onPress={() => handleInputChange('gender', 'Male')}
            style={{
              backgroundColor: formData.gender === 'Male' ? 'blue' : 'gray',
              padding: 8,
              borderRadius: 8,
              marginHorizontal: 4,
            }}>
            <Text style={{ color: 'white' }}>Male</Text>
          </Pressable>
          <Pressable
            onPress={() => handleInputChange('gender', 'Female')}
            style={{
              backgroundColor: formData.gender === 'Female' ? 'blue' : 'gray',
              padding: 8,
              borderRadius: 8,
              marginHorizontal: 4,
            }}>
            <Text style={{ color: 'white' }}>Female</Text>
          </Pressable>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Age"
          keyboardType="numeric"
          value={formData.age}
          onChangeText={(text) => handleInputChange('age', text.replace(/[^0-9]/g, ''))}
        />
        <View style={styles.hobbiesContainer}>
          {['Reading', 'Swimming', 'Writing', 'Playing Football'].map((hobby) => (
            <Button
              key={hobby}
              title={hobby}
              onPress={() => toggleHobby(hobby)}
              color={formData.hobbies.includes(hobby) ? 'blue' : 'gray'}
            />
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Submit" onPress={handleSubmit} />
          <Button title="Clear" onPress={handleClear} color="red" />
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  formContainer: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
    marginBottom: 8,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
  hobbiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
