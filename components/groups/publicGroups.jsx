import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import findGroups from "../../functions/findGroups";
import findPublicGroups from "../../functions/findPublicGroups";
import { useEffect, useState } from "react";
import { NextIcon } from "../utils/icons";
import { useUserData } from "../../functions/findUser";
function GroupFlatList() {
  const { user, loading: userLoading } = useUserData(); // Obtener datos del usuario
  const [groupData, setGroupData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGroups = async () => {
      if (user) { 
        try {
          const groups = await findPublicGroups();
          setGroupData(groups);
        } catch (error) {
          
        } finally {
          setLoading(false);
        }
      }
    };

    fetchGroups();
  }, [user]);


  if (loading || userLoading) {
    return <Text>No hay grupos para mostrar</Text>
  }

  return (
    <FlatList
      data={groupData}
      renderItem={({ item }) => <Item title={item.name} id={item._id} />}
      keyExtractor={item => item._id}
    />
  );
}

const Item = ({ title, id }) => {

  return (
    <Link href={`/publicGroup/${id}`} asChild>
      
      <Pressable style={styles.grupos}>
        <View>
          <Text style={{ color: "#112A46" }}>{title}</Text>
        </View>
        <View>
          <NextIcon />
        </View>
      </Pressable>
  
      
    </Link>
  );
};



export function PublicGroups() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grupos Públicos</Text>
      <GroupFlatList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  title:{
    fontSize:30,
    fontWeight:"bold",
    textAlign:"center",
    paddingTop:10
  },
  grupos: {
    padding: 40,
    margin: 4,
    backgroundColor: "#F3F4F6",
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between"

  }
});
