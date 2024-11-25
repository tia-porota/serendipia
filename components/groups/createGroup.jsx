import { useState, useEffect } from "react";
import { Alert, Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import saveGroup from "../../functions/regGroup";
import {useRouter} from 'expo-router'
import addGroup from "../../functions/addGroup";
export default function Register() {
  const router = useRouter()
  const [name, setName] = useState("");
  const [addG,setAddG] = useState("");
  useEffect(()=>{console.log("render")},[])
  function save() {
    if (name!=""){
    saveGroup(name);
    router.replace("/private")
    Alert.alert("Éxito","Grupo creado con éxito. Se eliminará en 24 horas")
    } else {
      Alert.alert("Error","Ingrese un nombre al grupo")
    }
  }
  function add(){
    if (addG!=""){
    addGroup(addG);
    router.replace("/private")
    Alert.alert("Éxito","Unión exitosa")
    }
    else {
      Alert.alert("Error","Ingrese un código de grupo")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear un Grupo</Text>
      <Text>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el nombre del grupo"
        value={name}
        onChangeText={(t) => setName(t)}
      />
      <Pressable style={styles.btn} onPress={save} className="active:bg-gray-200">
        <Text style={{ flexGrow:1, textAlign:"center"}}>Crear Grupo</Text>
      </Pressable>
      <Text style={styles.title}>Unise a un grupo existente</Text>
      <Text>Código</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el código del grupo"
        value={addG}
        onChangeText={(t) => setAddG(t)}
      />
      <Pressable style={styles.btn} onPress={add} className="active:bg-gray-200">
        <Text style={{ flexGrow:1, textAlign:"center"}}>Unirse al grupo</Text>
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
  container:{
    paddingHorizontal:10
  },
  btn:{
    paddingVertical:20,
    paddingHorizontal: 20,
    flexDirection:"row",
    alignItems:"center",
    marginVertical:20,
    marginHorizontal: 15,
    borderWidth:5,
    borderColor:"#21E88F",
    borderRadius:50,

    
},
  title:{
    fontSize:30,
    fontWeight:"bold",
    textAlign:"center",
    flexGrow:1,
    paddingVertical:10,
    alignContent:"center",
  },
});
