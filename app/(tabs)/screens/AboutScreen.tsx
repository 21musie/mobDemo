import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    Home: undefined;
    About: { name: string };
};

type AboutScreenProps = {
    route: RouteProp<RootStackParamList, "About">;
    navigation: NativeStackNavigationProp<RootStackParamList, "About">;
};
const AboutScreen: React.FC<AboutScreenProps> = ({ route, navigation }) => {
    const { name } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>About {name}</Text>
            <Button 
                title="Update the name" 
                onPress={() => navigation.setParams({ name: "App Development" })}
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