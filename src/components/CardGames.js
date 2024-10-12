import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CardGames({ game }) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            onPress={() => navigation.navigate('Detalhes dos Jogos', { game })}
            style={styles.game}
            >
            <Text>{game.name}</Text> 
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    game: {
        alignItems: "center",
        backgroundColor: 'grey',
        padding: 15,
        gap: 10,
        marginBottom: 10,
        borderRadius: 10,
    },
});