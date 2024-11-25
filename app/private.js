import { View } from "react-native";
import { ChatLink } from "../components/chatComponents/chatLink";
import {Stack} from 'expo-router'
export default function (){

    return(

        <View>
            <Stack.Screen  options={{headerBackVisible:false}}/>
            <ChatLink />
        </View>
    )
}