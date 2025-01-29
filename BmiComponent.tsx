import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import { ThemedView } from '@/components/ThemedView'; // Importing a themed view component for consistent styling

export default function BMICalculator() {
  // State variables to hold weight, height, and the calculated BMI
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to calculate BMI based on user input
  const calculateBMI = () => {
    setBmi(null);
    const weightNumber = parseFloat(weight);
    const heightNumber = parseFloat(height);

    // Validate input
    if (isNaN(weightNumber) || isNaN(heightNumber) || weightNumber <= 0 || heightNumber <= 0) {
      Alert.alert('Input Error', 'Please enter valid weight and height greater than zero!');
      return;
    }

    setLoading(true);
    const calculatedBMI = weightNumber / (heightNumber * heightNumber);
    setBmi(calculatedBMI.toFixed(2));
    setLoading(false);
  };

  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Height (m)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <TouchableOpacity style={styles.button} onPress={calculateBMI}>
        <Text style={styles.buttonText}>Calculate BMI</Text>
      </TouchableOpacity>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {bmi && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Your BMI is:</Text>
          <Text style={styles.resultValue}>{bmi}</Text>
        </View>
      )}
    </ThemedView>
  );
}

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#A1CEDC',
  },
  title: {
    fontSize: 28, // Increased size for better visibility
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#2C3E50', // Darker color for contrast
  },
  input: {
    height: 50,
    borderColor: '#34495E', // Darker border for better visibility
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 12,
    borderRadius: 5,
    backgroundColor: '#FFFFFF', // White background for input fields
    elevation: 2, // Shadow for input fields
  },
  button: {
    backgroundColor: '#2980B9', // Button color
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // White text for button
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#D9E8F5',
    borderRadius: 8,
    alignItems: 'center',
    elevation: 3, // Shadow for the result box
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  resultValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2980B9',
  },
});
