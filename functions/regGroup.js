import { conString } from "./backInfo";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveGroup = async (name) => {
  let code = ""
  const userId = await AsyncStorage.getItem("idUser")



  let send = JSON.stringify({ name });
  let url = `${conString}groups`;





  
  let result = await fetch(url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: send,
  });

  result = await result.json()
  code = result._id;
  url = conString+'users/';

  send = JSON.stringify({ id: userId, groupCode: code });
  result = await fetch(url, {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: send,
  })
let text=`El código de este grupo es: ${code}. No lo pierdas`
  send = JSON.stringify({text,sender:"Serendipia"});
  url = conString+"groups/msgs/"+code

  await fetch(url,{
    method:"PUT",
    headers: { "Content-Type": "application/json" },
    body: send
  })


};

export default saveGroup;