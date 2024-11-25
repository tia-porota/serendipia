import {View, Text, StyleSheet, Pressable, Image} from 'react-native'
import { Link, Stack } from 'expo-router'

export function NewLogo(){
    return(
        <Stack.Screen options={{headerRight:()=>{},headerTitle:() => <Image style={{height:50, width:200}} source={require('../../assets/newLogo.png')}/>}}/>
    )
}
export default function FormTemplate({btn1,btn2,btn3,btn4,btn5,form}){
// verde #21E88F
// violeta #2E0239
    return(
        <View>
            <NewLogo />
            
            
            <OptButton  text={btn1[0]} animal={btn1[1]} form={form}/>
            <OptButton text={btn2[0]} animal={btn2[1]} form={form}/>
            <OptButton text={btn3[0]} animal={btn3[1]} form={form}/>
            <OptButton text={btn4[0]} animal={btn4[1]} form={form}/>
            <OptButton text={btn5[0]} animal={btn5[1]} form={form}/>
        </View>
    )
}


function OptButton({animal,text, form}){
    
    switch (form[0]) {
        case "second": 
            form[1][0]=animal
            break;
        case "third":
            form[1][1]=animal
            break;
        case "last":
            form[1][2]=animal
            break;
        default:
            break;
    }
    return(
        <Link href={{pathname:`/form/${form[0]}`,
            params:{
                
                animal1:form[1][0],
                animal2:form[1][1],
                animal3:form[1][2],
            
            }
        }} asChild>
    <Pressable className="bg-gray-150 active:bg-gray-200" style={styles.btn}>
        
        <View style={{flexGrow:1,marginHorizontal:10,alignItems:"center"}}>

        
        
            <Text style={{fontSize:18, color:"#111"}}>{text}</Text>
        
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
        paddingVertical:20,
        paddingHorizontal: 20,
        flexDirection:"row",
        alignItems:"center",
        marginVertical:20,
        marginHorizontal: 15,
        borderWidth:5,
        borderColor:"#21E88F",
        borderRadius:50   
    }
})