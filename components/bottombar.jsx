import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export function BottomBar() {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={styles.bar}>
      <NewButton path="" text="Grupos Públicos" img="eye" />
      <NewButton path="private" text="Grupos Privados" img="eye-slash" />
      <NewButton path="settings" text="Configuración" img="gear" />
    </View>
  );
}
function NewButton({path, text, img}){
  return(
  <Link href={`/${path}`} asChild>
        <Pressable className="active:bg-gray-200" style={{alignItems:"center"}}>
        <FontAwesome name={img} size={24} color="black" />
          <Text>{text}</Text>
          
          </Pressable>
  </Link>
  )
}

const styles = StyleSheet.create({
  bar: {
    paddingTop: 5,
    borderTopColor: "black",
    borderTopWidth: 1,
    alignItems: "center",
    flexDirection:"row",
    justifyContent:"space-around",
    paddingVertical:10
  },
  image: {
    width: 35,
    height: 35,
  },
});
