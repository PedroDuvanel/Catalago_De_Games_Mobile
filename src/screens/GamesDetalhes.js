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
            <Text style={styles.text}>Desenvolvedora: {game.desenvolvedora}</Text>
            <Text style={styles.text}>Gênero: {game.genero}</Text>
            <Text style={styles.text}>Plataforma: {game.plataforma}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'silver',
        padding: 20,
        height: 900,
        gap: 10
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: 'italic',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 10,
    },
    nome: {
        fontSize: 20,
        paddingBottom: 20,
        fontWeight: 'bold',
    },
    text: {
        paddingTop: 10,
        marginBottom: 0,
    },
    image: {
        width: '100%',
        height: 400,
        borderRadius: 10,
        marginBottom: 20,
    },
});
