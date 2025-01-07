import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    Home: undefined;
    About: { name: string };
    Contact: { name: string };
    Help: { message: string };
};

type HelpScreenProps = {
    route: RouteProp<RootStackParamList, "Help">;
    navigation: NativeStackNavigationProp<RootStackParamList, "Help">;
};

const HelpScreen: React.FC<HelpScreenProps> = ({ route, navigation }) => {
    const { message } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Help Message: {message}</Text>
            <Button 
                title="Update the help message" 
                onPress={() => navigation.setParams({ message: "Need assistance? Contact support!" })}
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

export default HelpScreen;