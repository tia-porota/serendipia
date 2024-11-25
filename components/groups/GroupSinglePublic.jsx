import {View, Text, ActivityIndicator,ScrollView, StyleSheet} from 'react-native'
import {conString} from '../../functions/backInfo';
import {useState, useEffect} from 'react'
import SendBar from '../chatComponents/sendBar'
import {Stack} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUserData } from '../../functions/findUser';
import MsgSingle from "./MsgSingle"
export default function GroupSingle({id}){
    const {user, loading} = useUserData();
    const [grupos, setGrupos] = useState([]); 
    const [cargando, setCargando] = useState(true); 
  
    useEffect(() => {
      const fetchGrupos = async () => {
        try {
          const response = await fetch(conString+"public/"+id);
          if (!response.ok) {
            throw new Error('Error en la red');
          }
          const data = await response.json();
          setGrupos(data); 
        } catch (error) {
          console.error('Hubo un problema al obtener los grupos:', error);
        } finally {
          setCargando(false); 
        }
      };
      fetchGrupos(); 
    }, [grupos]);
    if (cargando || loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
      }
      
    return(
      <>
      <Stack.Screen options={{
                headerTitle:()=><Text>{grupos.name} - Público</Text>,
                
                headerRight:()=>"",
            }}/>
            <SendBar idGroup={grupos._id} userName={user.user} />
      <View style={styles.container}>
        

            
          
            <MsgSingle msgs={grupos.msgs.reverse()}/>
            
            
            </View>
            
        </>
        
    )
}
const styles = StyleSheet.create({
  bar:{

  },
  container:{
    
    paddingHorizontal:20,
    paddingBottom: 55,
    
  },
  opa:{
    
    
  }

});