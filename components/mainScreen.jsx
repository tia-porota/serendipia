import {View, Text, Image, StyleSheet, Pressable} from 'react-native'
import { Stack,useRouter } from 'expo-router'

import {useState} from 'react'
export default function MainScreen(){
    const [check,useCheck] = useState(false)
    const router = useRouter();
    return(
        <View style={styles.container}>
            <Stack.Screen options={{headerRight:()=>{},headerTitle:() => <Image style={{height:50, width:200}} source={require('../assets/newLogo.png')}/>}}/>
            <View style={{flexDirection:"row", marginHorizontal:20}}>
            
            <Text> Al ingresar indico que soy mayor de 18 años y he leído los <Pressable onPress={()=>{Linking.openURL('https://github.com/maymay031222/serendipia/blob/verop/tyc.md')}}><Text style={{color:"blue"}}>términos y condiciones</Text></Pressable> de Serendipia</Text>
            </View>
            <Pressable style={styles.btn} onPress={()=>{router.replace('/form/first')}}>
                <Text style={{textAlign:"center",fontSize:18}}>INGRESAR</Text>
            </Pressable>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        paddingVertical:40
    },
    btn:{
        paddingVertical:20,
        paddingHorizontal: 20,
        flexDirection:"row",
        alignItems:"center",
        marginVertical:20,
        marginHorizontal: 15,
        borderWidth:5,
        borderColor:"#21E88F",
        borderRadius:50,
        justifyContent:"center"
    }
})