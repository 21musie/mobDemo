import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

type RootStackParamList = {
    Home: undefined;
    About: { name: string };
};

const HomeScreen: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <Button 
                title="Go to About" 
                onPress={() => navigation.navigate("About", { name: "Guest" })}
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

export default HomeScreen;
