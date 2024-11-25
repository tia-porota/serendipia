import { StyleSheet, Text, View } from "react-native";
import { ChatLink } from './chatComponents/chatLink'
import { PublicGroups } from "./groups/publicGroups";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {useEffect} from 'react'
import {Stack} from 'expo-router'
export function Main() {
  
  
  return (
    <View style={{paddingHorizontal: 20}}>
      <Stack.Screen  options={{headerBackVisible:false}}/>
    <PublicGroups />
    </View>
  );
}
