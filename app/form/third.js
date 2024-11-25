import { useLocalSearchParams,Stack } from "expo-router";
import Form2nd from "../../components/form/second";
import {View, Text} from 'react-native'
import FormTemplate from "../../components/form/formTemplate";
export default function Step3(){
    const {animal1, animal2} = useLocalSearchParams()
    const btn1=["Energético/a y activo/a", "dog"]
  const btn2=["Tranquilo/a y hogareño/a", "cat"]
  const btn3=["Curioso/a y astuto/a","monkey"]
  const btn4=["Fuerte y decidido/a","bear"]
  const btn5=["  Divertido/a y sociable","rat"]
  const newForm=["last",[animal1,animal2,""]]
  console.log(newForm[1])
  

  
  
    return (
      <View style={{marginHorizontal:10}}>
      <Text style={{marginTop:20,flexGrow:1,alignSelf:"center", fontWeight: "bold",fontSize:30}}>
        GENERAR USUARIO
        </Text>
      <Text style={{color:"#7a7a7a",marginBottom:20}}>¡Complete el siguiente formulario para obtener su nombre de usuario anónimo!!</Text>
        <Text style={{fontWeight:"bold",
        fontSize:18,
        padding:6}}>Pregunta 3: ¿Cómo describirías tu personalidad?</Text>
        <FormTemplate btn1={btn1} btn2={btn2} btn3={btn3} btn4={btn4} btn5={btn5} form={newForm}/>
    </View>
    )
}