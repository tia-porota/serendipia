import { useState } from "react";
import { Pressable, StyleSheet, Text, View, TextInput, Alert } from "react-native";

import saveUser from "../../functions/regUser";
import { Redirect } from "expo-router";
export default function Register() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  function save() {
    saveUser(user, pass);
    Alert.alert("Éxito","Usuario creado correctamente")
  }

  return (
    <View>
      <Text>Usuario</Text>

      <TextInput
        style={styles.Input}
        placeholder="Ingrese su usuario"
        value={user}
        onChangeText={(t) => setUser(t)}
      />

      <Text>Contraseña</Text>

      <TextInput
        style={styles.Input}
        placeholder="Ingrese su contraseña"
        value={pass}
        onChangeText={(t) => setPass(t)}
        secureTextEntry
      />
      <Pressable style={styles.button} onPress={save}>
        <Text style={{ textAlign: "center" }}>Registro</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  Input: {
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
