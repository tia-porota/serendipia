import { conString } from "./backInfo";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function addGroup(code){
    const userId = await AsyncStorage.getItem("idUser")
    let url = `${conString}users`
    let send = JSON.stringify({ id: userId, groupCode: code });
    result = await fetch(url, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: send,
    })
    url = `${conString}users/${userId}`
    result = await fetch(url,{method:"get"})
    result = await result.json()

    const sender = result.user
    const text = "Hola! Me acabo de unir a la conversación"
    
    send = JSON.stringify({text,sender});
    url = conString+"groups/msgs/"+code

  await fetch(url,{
    method:"PUT",
    headers: { "Content-Type": "application/json" },
    body: send
  })



}