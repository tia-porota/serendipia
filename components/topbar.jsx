
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

import { useRouter, Link } from "expo-router";
import { useUserData } from "../functions/findUser";

export function TopBar() {
  const insets = useSafereaInsets();
  

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: 4,
        borderBottomColor: "#1111111",
        borderBottomWidth: 1,
      }}
    >
      <View style={styles.bar}>
        <Link href={"/"} asChild>
          <Text style={styles.textSeren}>Serendipia</Text>
        </Link>

        <View>
          <IsUser />
        </View>
      </View>
    </View>
  );
}

export function IsUser() {
  const { user } = useUserData();
  const router = useRouter();

  return (
    <View>
      {user ? (
        <View >
        <Text  >{user.user}</Text>
        
        </View> 
      ) : (
        <>
          <Link href={"/register"} asChild>
            <Text>Registrarse</Text>
          </Link>
          <Link href={"/login"} asChild>
            <Text>Iniciar Sesión</Text>
          </Link>
        </>
      )}
    </View>
  );
}

export const styles = StyleSheet.create({
  config: {
    width: 35,
    height: 35,
    marginTop: 5,
  },
  bar: {
    flexDirection: "row",
    justifyContent:"space-around",
    
  },
  textSeren: {
    fontWeight: "bold",
    fontSize: 30,
  },
});

export function Seren(){
  return(
    <Link href={"/"} asChild>
    <Pressable style={styles.bar}>
  
  <Image style={{height:50, width:200}} source={require('../assets/newLogo.png')}/>
  
  </Pressable>
  </Link>)
}