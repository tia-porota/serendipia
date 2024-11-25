import { View } from "react-native";
import { PublicGroups } from "./groups/publicGroups";
import {Stack} from 'expo-router'
export function Main() {
  
  
  return (
    <View style={{paddingHorizontal: 20}}>
      <Stack.Screen  options={{headerBackVisible:false}}/>
    <PublicGroups />
    </View>
  );
}
