import { View, Text, TextInput, StyleSheet, Pressable, ActivityIndicator } from "react-native";
import { SendIcon } from "../utils/icons";
import { useState } from "react";
import { conString } from "../../functions/backInfo";
import { useUserData } from "../../functions/findUser";




export default function SendBar({idGroup, userName}) {
  const [text, useText] = useState("");  
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

function send(userName, msg,idGroup){
  const send = JSON.stringify({text:msg,sender:userName,});
  const url = conString+"groups/msgs/"+idGroup
  fetch(url,{
    method:"PUT",
    headers: { "Content-Type": "application/json" },
    body: send

  })
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