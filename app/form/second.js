import { useLocalSearchParams,Stack } from "expo-router";
import Form2nd from "../../components/form/second";
import {View, Text} from 'react-native'
import FormTemplate from "../../components/form/formTemplate";
export default function Step2(){
    const {animal1} = useLocalSearchParams()
    const btn1=["Lealtad y protección", "dog"]
  const btn2=["Cariño y compañía", "cat"]
  const btn3=["Inteligencia y curiosidad","monkey"]
  const btn4=["Fuerza y valentía","bear"]
  const btn5=["Adaptabilidad y creatividad","rat"]
  const newForm=["third",[animal1,"",""]]

  
  
  
  
  

  
  
    return (
      <View style={{marginHorizontal:10}}>
      <Text style={{marginTop:20,flexGrow:1,alignSelf:"center", fontWeight: "bold",fontSize:30}}>
        GENERAR USUARIO
        </Text>
      <Text style={{color:"#7a7a7a",marginBottom:20}}>¡Complete el siguiente formulario para obtener su nombre de usuario anónimo!!</Text>
        <Text style={{fontWeight:"bold",
        fontSize:18,
        padding:6}}>Pregunta 2: ¿Qué cualidad valoras más en un amigo?</Text>
        <FormTemplate btn1={btn1} btn2={btn2} btn3={btn3} btn4={btn4} btn5={btn5} form={newForm}/>
    </View>
    )
}