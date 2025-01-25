import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Platform } from 'react-native';
import { ThemedView } from '@/components/ThemedView'; // Importing a themed view component for consistent styling

export default function BMICalculator() {
  // State variables to hold weight, height, and the calculated BMI
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  // Function to calculate BMI based on user input
  const calculateBMI = () => {
    // Convert weight and height from strings to numbers
    const weightNumber = parseFloat(weight);
    const heightNumber = parseFloat(height);

    // Check if weight and height are valid numbers greater than zero
    if (weightNumber > 0 && heightNumber > 0) {
      // Calculate BMI using the formula: weight / (height * height)
      const calculatedBMI = weightNumber / (heightNumber * heightNumber);
      // Set the calculated BMI to state, formatted to two decimal places
      setBmi(calculatedBMI.toFixed(2));
    } else {
      // Alert user if input values are invalid
      alert('Please enter valid weight and height!');
    }
  };

  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)" // Placeholder text for weight input
        keyboardType="numeric" // Numeric keyboard for weight input
        value={weight} // Controlled component for weight
        onChangeText={setWeight} // Update weight state on input change
      />
      <TextInput
        style={styles.input}
        placeholder="Height (m)" // Placeholder text for height input
        keyboardType="numeric" // Numeric keyboard for height input
        value={height} // Controlled component for height
        onChangeText={setHeight} // Update height state on input change
      />
      <Button title="Calculate BMI" onPress={calculateBMI} /> {/* Button to trigger BMI calculation */}
      {bmi && (
        <Text style={styles.result}>
          Your BMI is: {bmi} {/* Display the calculated BMI */}
        </Text>
      )}
    </ThemedView>
  );
}

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1, // Take full height of the screen
    justifyContent: 'center', // Center content vertically
    padding: 16, // Padding around the container
    backgroundColor: '#A1CEDC', // Light background color
  },
  title: {
    fontSize: 24, // Font size for the title
    fontWeight: 'bold', // Bold text for the title
    marginBottom: 16, // Space below the title
    textAlign: 'center', // Center text alignment
  },
  input: {
    height: 50, // Height of the input fields
    borderColor: 'gray', // Border color for input fields
    borderWidth: 1, // Border width for input fields
    marginBottom: 16, // Space below the input fields
    paddingHorizontal: 8, // Padding inside input fields
    borderRadius: 5, // Rounded corners for input fields
  },
  result: {
    marginTop: 20, // Space above the result text
    fontSize: 18, // Font size for the result text
    textAlign: 'center', // Center text alignment
  },
});
