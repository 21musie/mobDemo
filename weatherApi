import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';

// WeatherApp Component
export default function WeatherApp() {
  // State to hold the user-inputted city name
  const [city, setCity] = useState('');

  // State to store weather data fetched from the API
  const [weather, setWeather] = useState(null);

  // Function to fetch weather data from OpenWeatherMap API
  const fetchWeather = async () => {
    // OpenWeatherMap API key (replace 'YOUR_API_KEY' with your actual API key)
    const apiKey = 'YOUR_API_KEY';
    // Construct the API URL with the city name and API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
      // Make an API call to fetch weather data
      const response = await fetch(apiUrl);

      // Check if the response is valid; if not, alert the user
      if (!response.ok) {
        Alert.alert('Error', 'City not found or API error!');
        return;
      }

      // Parse the JSON response from the API
      const data = await response.json();

      // Update the weather state with the fetched data
      setWeather({
        temperature: data.main.temp, // Temperature in Celsius
        description: data.weather[0].description, // Weather description
        humidity: data.main.humidity, // Humidity percentage
        city: data.name, // City name
      });
    } catch (error) {
      // Alert the user if there's an error in the API call
      Alert.alert('Error', 'Something went wrong. Please try again!');
    }
  };

  // Render the UI
  return (
    <View style={styles.container}>
      {/* App title */}
      <Text style={styles.title}>Weather App</Text>

      {/* Input field for the city name */}
      <TextInput
        style={styles.input}
        placeholder="Enter city name" // Placeholder text
        value={city} // Value bound to the city state
        onChangeText={setCity} // Update the city state when text changes
      />

      {/* Button to trigger weather data fetch */}
      <Button title="Get Weather" onPress={fetchWeather} />

      {/* Display the fetched weather information if available */}
      {weather && (
        <View style={styles.weatherInfo}>
          {/* Display the city name */}
          <Text style={styles.weatherText}>City: {weather.city}</Text>
          {/* Display the temperature */}
          <Text style={styles.weatherText}>
            Temperature: {weather.temperature}°C
          </Text>
          {/* Display the weather description */}
          <Text style={styles.weatherText}>
            Description: {weather.description}
          </Text>
          {/* Display the humidity level */}
          <Text style={styles.weatherText}>Humidity: {weather.humidity}%</Text>
        </View>
      )}
    </View>
  );
}

// Styles for the WeatherApp component
const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the full height of the screen
    justifyContent: 'center', // Center content vertically
    padding: 16, // Padding around the container
    backgroundColor: '#F0F4F8', // Light background color
  },
  title: {
    fontSize: 24, // Font size for the title text
    fontWeight: 'bold', // Bold font weight for emphasis
    textAlign: 'center', // Center-align the title text
    marginBottom: 20, // Space below the title
  },
  input: {
    height: 50, // Height of the input field
    borderColor: 'gray', // Gray border color for the input
    borderWidth: 1, // Border width
    borderRadius: 5, // Rounded corners
    marginBottom: 16, // Space below the input field
    paddingHorizontal: 8, // Padding inside the input field
  },
  weatherInfo: {
    marginTop: 20, // Space above the weather info container
    padding: 16, // Padding inside the weather info container
    backgroundColor: '#D9E8F5', // Light blue background for weather info
    borderRadius: 8, // Rounded corners for the weather info container
  },
  weatherText: {
    fontSize: 18, // Font size for weather details text
    marginBottom: 8, // Space below each weather detail
    textAlign: 'center', // Center-align the text
  },
});
