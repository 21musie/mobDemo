import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    Home: undefined;
    About: { name: string };
    Contact: { name: string };
};

type ContactScreenProps = {
    route: RouteProp<RootStackParamList, "Contact">;
    navigation: NativeStackNavigationProp<RootStackParamList, "Contact">;
};

const ContactScreen: React.FC<ContactScreenProps> = ({ route, navigation }) => {
    const { name } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Contact {name}</Text>
            <Button 
                title="Update the name" 
                onPress={() => navigation.setParams({ name: "Contact Management" })}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
});

export default ContactScreen;
