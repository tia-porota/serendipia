import {View, Text, Alert, StyleSheet, Pressable, Linking} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRouter } from 'expo-router'
export default function Settings(){
    const router = useRouter()


    return(
        <View style={styles.container}>
            <Pressable className="bg-gray-150 active:bg-gray-200" style={styles.btn}>
            <FontAwesome name="warning" size={24} color="red" />
            <Text style={{fontSize:18,flexGrow:1,textAlign:"center"}} onPress={() => {
          AsyncStorage.setItem("idUser", "")
          Alert.alert("Byebye","Borrando sesión del dispositivo...",[{text:"Ok",onPress: () => router.replace("/")}])
          

        }}>PANIC! Button</Text>
            </Pressable>
            <Pressable onPress={()=>{Linking.openURL('https://github.com/tia-porota/serendipia/blob/verop/tyc.md')}}>
            <Text style={{textAlign:"center", paddingTop:10,marginTop:20, color:"blue"}}>
                Términos y Condiciones
            </Text>
            </Pressable>
            <Text style={{textAlign:"center", borderTopWidth:1,borderTopColor:"black", paddingTop:10,marginTop:20}}>
                Serendipia v1.0 By Echo 2024
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        paddingVertical:30
    },
    btn:{
        paddingVertical:20,
        paddingHorizontal: 20,
        flexDirection:"row",
        alignItems:"center",
        marginVertical:20,
        marginHorizontal: 15,
        borderWidth:5,
        borderColor:"#fa2222",
        borderRadius:50
    }

})