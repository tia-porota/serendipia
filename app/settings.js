import Settings from "../components/settings";
import {Stack} from 'expo-router'
export default function(){

    return(
        <>
        <Stack.Screen  options={{headerBackVisible:false}}/>
        <Settings />
        </>
    )

}