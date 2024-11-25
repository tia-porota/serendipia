import { useLocalSearchParams, useRouter } from "expo-router";
import {View, Text, Pressable, StyleSheet} from 'react-native'
import gen from "../../functions/usernameGen";
import {useState} from 'react'
import { NewLogo } from "../../components/form/formTemplate";
import { BackIcon, NextIcon } from "../../components/utils/icons";


export default function LastStep(){
    const router = useRouter()
    const {animal1,animal2,animal3} = useLocalSearchParams();
    const animals = [animal1,animal2,animal3]
    const fAnimal = animals[~~(Math.random() * animals.length)]
    const [name,setName] = useState(gen(fAnimal))
  

  
  
    return (
    <>
    <NewLogo />
        <View style={{alignItems:"center"}}>
        <Text style={{fontWeight:"bold",
        fontSize:15,
        padding:6,marginTop:10}}>Felicidades, tu nuevo usuario es</Text>
        <Text style={{marginBottom:10,fontWeight:"bold",fontSize:25}}>{name}</Text>
               
    </View>
    <View>
    <Pressable className="active:bg-gray-200" style={styles.btn} onPress={() => router.replace("/")} >
        <BackIcon />
        <Text style={styles.textButton}>Generar otro usuario</Text>
    </Pressable>
    <Pressable className="active:bg-gray-200" style={styles.btn} onPress={() => router.replace(`/form/setUser?user=${name}`)} >
    
        <Text style={styles.textButton}>Continuar</Text>
        <NextIcon />
    </Pressable>
    </View>
    </>
    )
}
const styles = StyleSheet.create({

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
   
        
    },
    textButton:{
        flexGrow:1,
        fontSize:17,
        textAlign:"center"
}
})