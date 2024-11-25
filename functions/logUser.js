import AsyncStorage from "@react-native-async-storage/async-storage";
import { conString } from "./backInfo";
export default async function logUser(user) {
  console.log(user)
  const url = `${conString}users/`;
  const r = await fetch(url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user })
  });
  const json = await r.json();
  const res = json._id;
  console.log("hoal",res)
  await AsyncStorage.setItem("idUser", res);
}
