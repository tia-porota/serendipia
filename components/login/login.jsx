import { useState } from "react";
import { Pressable, StyleSheet, Text, View, Alert } from "react-native";
import { TextInput } from "react-native";
import logUser from "../../functions/logUser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import restart from "react-native-restart";
import {useRouter} from 'expo-router'

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  
  async function login() {
    const result = await logUser(user, pass);
    Alert.alert("Éxito","Login exitoso")
    router.replace("/");
    


    //console.log(result);
    
    
  }
  return (
    <View>
      <Text>Usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su usuario"
        value={user}
        onChangeText={(t) => setUser(t)}
      />
      <Text>Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su contraseña"
        value={pass}
        onChangeText={(t) => setPass(t)}
        secureTextEntry
      />
      <Pressable style={styles.button} onPress={login}>
        <Text style={{ textAlign: "center" }}>Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  button: {
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "pink",
  },
});
