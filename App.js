import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GamesDetalhes from './src/screens/GamesDetalhes';
import Games from './src/screens/Games';
import Iniciar from './src/screens/TelaInicial';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Catálogo de jogos">
        <Stack.Screen name="Iniciar" component={Iniciar}/>
        <Stack.Screen name="Lista de Jogos" component={Games} />
        <Stack.Screen name="Detalhes dos Jogos" component={GamesDetalhes} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
