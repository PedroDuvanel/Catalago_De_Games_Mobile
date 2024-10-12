import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function GamesDetalhes({ route }) {
    const { game } = route.params;

    return (
        <View style={styles.container}>
            <Image source={game.image} style={styles.image} />
            <Text style={styles.nome}>{game.name}</Text>
            <Text style={styles.text}>Ano: {game.ano}</Text>
            <Text style={styles.text}>Descrição: {game.descricao}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'silver',
        padding: 20,
        alignItems: 'center',
        height: 900,
        gap: 20
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold', 
        fontStyle: 'italic',
        alignItems: 'center',
        marginBottom: 10,
    },
    nome: {
        fontSize: 20,
        paddingBottom:20,
        fontWeight: 'bold',
    },
    text: {
        marginBottom: 10,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 400,
        borderRadius: 10,
        marginBottom: 20,
    },
});
