import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Iniciar() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.inicial}>Seja Bem-Vindo ao seu catálogo de jogos.</Text>

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Lista de Jogos')} 
            >
                <Text style={styles.buttonText}>Ir para Lista de Jogos</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    inicial: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 160,
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    }
});