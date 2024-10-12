import React from 'react';
import { View, FlatList, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import GamesDetalhes from "../components/CardGames";

const meusGames = [
    { 
    id: '1',
    name: "Battlefield 4",
    ano: "2014",
    descricao: "Um jogo de tiro em primeira pessoa que oferece uma experiência de combate em larga escala com mapas dinâmicos e jogabilidade intensa, permitindo que os jogadores utilizem veículos e táticas de equipe.", 
    image: require('../assets/bf4.jpg'),
    },
    { 
    id: '2',
    name: "Mortal kombat x",
    ano: "2015", 
    descricao: "Um jogo de luta icônico que traz de volta os famosos personagens da franquia, oferecendo gráficos impressionantes, novas mecânicas de combate e um modo história envolvente.",
    image: require('../assets/mkx.jpg'),
    },
    {
    id: '3',
    name: "Call of duty: Warzone",
    ano: "2020", 
    descricao: "Um jogo de battle royale gratuito que combina ação rápida e estratégia, permitindo que até 150 jogadores se enfrentem em um vasto mapa.",
    image: require('../assets/warzone.jpg'),
    },
    {
    id: '4', 
    name: "Uncharted 4", 
    ano: "2016", 
    descricao: "Um jogo de aventura e ação que segue Nathan Drake em sua última caça ao tesouro.",
    image: require("../assets/uncharted.jpg"),
    },
    { 
    id: '5', 
    name: "Naruto storm 4", 
    ano: "2016", 
    descricao: "Um jogo de luta baseado no popular anime e mangá, permitindo que os jogadores participem de batalhas épicas.",
    image: require('../assets/naruto4.jpg'),
    },
];

export default function Games() {
    const navigation = useNavigation();

    return (
        <View>
            <FlatList
                data={meusGames}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <GamesDetalhes game={item} />
                )}
            />
        </View>
    );
}

