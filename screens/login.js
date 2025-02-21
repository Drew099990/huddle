import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Image, Button, Platform,useWindowDimensions } from 'react-native';
import { useState } from 'react';

export default function App({navigation}) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const widthWidndow = useWindowDimensions().width;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={[styles.login]}>
        <Image 
          source={require("../assets/selfhug.png")} 
          style={styles.image} 
        />
        <Text style={styles.headerText}>-huddle-</Text>
        <Text style={styles.labelText}>UserName:</Text>
        <TextInput 
          placeholder='man234'
          value={user}
          onChangeText={setUser}
          style={styles.input}
        />
        <Text style={styles.labelText}>Password:</Text>
        <TextInput 
          placeholder='*********'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <Button 
          title='Login' 
          onPress={() => {navigation.navigate("home",{name:user}) }} 
          color="#174d38"
        />
        <Text style={styles.linkText}>Register instead?</Text>
        <Text style={styles.linkText}>Forgot password?</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   backgroundColor:"#99B8B815"
  },
  login: {
    backgroundColor:"white",
    width: "70%",
    height: "auto",
    borderColor: "#288360FF",
    borderWidth: 2,
    padding: 20,
    margin: 10,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150, 
    height: 150,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#2B8B66FF',
    borderRadius: 25,
    padding: 10,
    marginBottom: 15,
    width: '100%',
  },
  headerText: {
    color: "#081B14FF",
    marginTop: 10,
    fontFamily: "courier",
    
  },
  labelText: {
    color: "#081B14FF",
    marginTop: 10,
    fontFamily: "cursive",
    fontSize: 22,
  },
  linkText: {
    color: "#081B14FF",
    fontFamily: "courier",
  marginTop:Platform.OS === 'web'? "13":"10"
}}

);