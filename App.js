import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/login';
import Home from './screens/home';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{contentStyle:{backgroundColor:"#99B8B85A"},headerStyle:{backgroundColor:"#99BCAEFF"},animation:"slide_from_right",headerTitleStyle:{fontWeight:"bold"},headerTintColor:"#174d38",}}>
        <Stack.Screen name="login" component={Login} options={{title:"welcome back!"}} />
        <Stack.Screen name='home' component={Home} options={{title:"huddle",}}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}