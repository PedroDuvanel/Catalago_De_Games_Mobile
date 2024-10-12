import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CardGames({ game }) {
    const navigation = useNavigation();

    return (
        <View style = {styles.fundo}>
        <TouchableOpacity 
            onPress={() => navigation.navigate('Detalhes dos Jogos', { game })}
            style={styles.game}
            >
            <Text>{game.name}</Text> 
        </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    game: {
        alignItems: "center",
        backgroundColor: "silver",
        padding: 15,
        gap: 10,
        marginBottom: 10,
        borderRadius: 10,
    },
    fundo: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    }
});