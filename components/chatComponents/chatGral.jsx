import { View, Text, TextInput, StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import MsgSingle from "./msgSingle";
import SendBar from "./sendBar";
export default function ChatGral() {
  return (

    <ScrollView contentContainerStyle={{justifyContent:"flex-end"}}>
      
      <MsgSingle />
      <MsgSingle />
      <MsgSingle />
    
   
      

    </ScrollView>

  );
}
