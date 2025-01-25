import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Platform } from 'react-native';
import { ThemedView } from '@/components/ThemedView'; // Assuming you have a themed component.

export default function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    const weightNumber = parseFloat(weight);
    const heightNumber = parseFloat(height);

    if (weightNumber > 0 && heightNumber > 0) {
      const calculatedBMI = weightNumber / (heightNumber * heightNumber);
      setBmi(calculatedBMI.toFixed(2));
    } else {
      alert('Please enter valid weight and height!');
    }
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
      <Button title="Calculate BMI" onPress={calculateBMI} />
      {bmi && (
        <Text style={styles.result}>
          Your BMI is: {bmi}
        </Text>
      )}
    </ThemedView>
  );
}


});
