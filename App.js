import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import rootReducer from './src/reducers';
import Usuarios from './src/components/ListaDeUsuarios';
import UsuarioPerfil from './src/components/PerfilDeUsuario';
import TareasUsuario from './src/components/ListaDeTareas';

const store = createStore(rootReducer, applyMiddleware(thunk));

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'; // Configura la URL base de la API

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Usuarios">
          <Stack.Screen name="Usuarios" component={Usuarios} />
          <Stack.Screen name="UsuarioPerfil" component={UsuarioPerfil} />
          <Stack.Screen name="TareasUsuario" component={TareasUsuario} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;