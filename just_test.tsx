export default function HomeScreen() {
    const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: '',
    age: '',
    hobbies: [],
    });
    
    const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    };
    
    const toggleHobby = (hobby) => {
    setFormData((prev) => ({
    ...prev,
    hobbies: prev.hobbies.includes(hobby)
    ? prev.hobbies.filter((h) => h !== hobby)
    : [...prev.hobbies, hobby],
    }));
    };
    
    const handleSubmit = () => {
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
    
    Student Registration Form
    <ThemedView style={styles.formContainer}>
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
      <Button
        title="Male"
        onPress={() => handleInputChange('gender', 'Male')}
        color={formData.gender === 'Male' ? 'blue' : 'gray'}
      />
      <Button
        title="Female"
        onPress={() => handleInputChange('gender', 'Female')}
        color={formData.gender === 'Female' ? 'blue' : 'gray'}
      />
    </View>
    <TextInput
      style={styles.input}
      placeholder="Age"
      keyboardType="numeric"
      value={formData.age}
      onChangeText={(text) => handleInputChange('age', text)}
    />

    <View style={styles.hobbiesContainer}>
      <Button
        title="Reading"
        onPress={() => toggleHobby('Reading')}
        color={formData.hobbies.includes('Reading') ? 'blue' : 'gray'}
      />
      <Button
        title="Swimming"
        onPress={() => toggleHobby('Swimming')}
        color={formData.hobbies.includes('Swimming') ? 'blue' : 'gray'}
      />
      <Button
        title="Writing"
        onPress={() => toggleHobby('Writing')}
        color={formData.hobbies.includes('Writing') ? 'blue' : 'gray'}
      />
      <Button
        title="Playing Football"
        onPress={() => toggleHobby('Playing Football')}
        color={formData.hobbies.includes('Playing Football') ? 'blue' : 'gray'}
      />
    </View>

    <View style={styles.buttonContainer}>
      <Button title="Submit" onPress={handleSubmit} />
      <Button title="Clear" onPress={handleClear} color="red" />
    </View>
  </ThemedView>
</ParallaxScrollView>
);
}

const styles = StyleSheet.create({
titleContainer: {
flexDirection: 'row',
alignItems: 'center',
gap: 8,
},
formContainer: {
padding: 16,
gap: 12,
},
input: {
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 8,
padding: 8,
fontSize: 16,
},
genderContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
marginVertical: 8,
},
hobbiesContainer: {
flexDirection: 'row',
flexWrap: 'wrap',
gap: 8,
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

//this is just a comment for reminder to implement animated loading
