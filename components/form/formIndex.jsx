import {View, Text} from 'react-native'
import FormTemplate from "./formTemplate";
export default function FormIndex(){


    const btn1=["Corriendo y jugando al aire libre", "dog"]
    const btn2=["Descansando en casa", "cat"]
    const btn3=["Explorando y siendo curioso/a","monkey"]
    const btn4=["Comiendo y relajándome","bear"]
    const btn5=["Jugando en grupo","rat"]
    const form=["second",["","",""]]
    return (
      <View style={{marginHorizontal:10}}>
        <Text style={{marginTop:20,flexGrow:1,alignSelf:"center", fontWeight: "bold",fontSize:30}}>
          GENERAR USUARIO
          </Text>
        <Text style={{color:"#7a7a7a",marginBottom:20}}>¡Complete el siguiente formulario para obtener su nombre de usuario anónimo!!</Text>
      <Text style={{fontWeight:"bold",
          fontSize:18,
          padding:6}}>Pregunta 1: ¿Cómo te gusta pasar tu tiempo libre?</Text>
    <FormTemplate btn1={btn1} btn2={btn2} btn3={btn3} btn4={btn4} btn5={btn5} form={form}/>
    </View>
  );
}