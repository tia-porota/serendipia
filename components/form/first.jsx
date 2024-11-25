import {View, Text, StyleSheet, Pressable} from 'react-native'
import { SendIcon } from '../utils/icons'
import { Link } from 'expo-router'

export default function Form1st(){

    return(
        <View>
            <Text style={styles.title}>Primera Pregunta</Text>
            <OptButton text="Corriendo y jugando al aire libre" animal="dog"/>
            <OptButton />
            <OptButton />
            <OptButton />
            <OptButton />
        </View>
    )
}


function OptButton({animal,text}){
    return(
        <Link href={{pathname:"/form/second/",
            params:{animal1:animal}
        }} asChild>
    <Pressable style={styles.btn}>
        <SendIcon />
        <View style={{flexGrow:1,marginHorizontal:10,alignItems:"center"}}>

        
        
            <Text>{text}</Text>
        
        </View>
    </Pressable>
    </Link>
    )
}

const styles = StyleSheet.create({
    title:{
        fontWeight:"bold",
        fontSize:20,
        padding:6
    },
    btn:{
        paddingVertical:10,
        paddingHorizontal: 20,
        flexDirection:"row",
        alignItems:"center",
        
    }
})