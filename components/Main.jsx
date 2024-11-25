import { StyleSheet, Text, View } from "react-native";
import { ChatLink } from './chatComponents/chatLink'
import { PublicGroups } from "./groups/publicGroups";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {useEffect} from 'react'
import {useNavigation} from 'expo-router'
export function Main() {
  const insets = useSafeAreaInsets();
  const navigation= useNavigation();
  
  return (
    <View style={{paddingHorizontal: 20}}>
    <PublicGroups />
    </View>
  );
}
