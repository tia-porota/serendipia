import { View, TextInput, StyleSheet, Pressable } from "react-native";
import { SendIcon } from "../utils/icons";
import { useState } from "react";
import { conString } from "../../functions/backInfo";





export default function SendBar({idGroup, userName}) {
  const [text, useText] = useState("");  
  function send(userName, msg,idGroup){
    if (text!=""){
    const send = JSON.stringify({text:msg,sender:userName,});
    let url = conString+"groups/msgs/"+idGroup
    fetch(url,{
      method:"PUT",
      headers: { "Content-Type": "application/json" },
      body: send
  
    })
    url = conString+"public/msgs/"+idGroup
    fetch(url,{
      method:"PUT",
      headers: { "Content-Type": "application/json" },
      body: send
  
    })
  }
    else {
      Alert.alert("Error","Ingrese un mensaje")
    }
    


  }
  return (
    <View style={styles.sendBar}>
      <View style={{ flexGrow: 1 }}>
        <TextInput style={styles.input} placeholder="Mensaje..." value={text} onChangeText={newText => useText(newText)}></TextInput>
      </View>
      <Pressable style={styles.icon} onPress={() => {send(userName,text,idGroup),useText('')}}>
        <SendIcon />
      </Pressable>
      
    </View>
  );
}





const styles = StyleSheet.create({
  sendBar: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 5, 
    alignItems:"center"
   
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  icon: {
    paddingHorizontal: 10,
  },
});