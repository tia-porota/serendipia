
import FormIndex from "../components/form/formIndex";
import { useUserData } from "../functions/findUser";
import {View, Text, ActivityIndicator} from 'react-native'
import { Redirect, Stack , useRouter} from "expo-router";
import { Main } from "../components/Main";


 export default function Index() {
  const {user, loading} = useUserData();
  const router = useRouter();
  if (loading){
    return <ActivityIndicator size="large" color="#0000ff" />
  }
  
  if(!user){
    router.replace("/mainScreen")
  } 
    return (

    <Main />

    )
  
  

}
