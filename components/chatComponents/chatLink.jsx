import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import findGroups from "../../functions/findGroups";
import { useEffect, useState } from "react";
import { useUserData } from "../../functions/findUser"; 
import { Add, NextIcon } from "../utils/icons";
function GroupFlatList() {
  const { user, loading: userLoading } = useUserData(); 
  const [groupData, setGroupData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGroups = async () => {
      if (user) { 
        try {
          const groups = await findGroups(user._id);
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
    return <ActivityIndicator size="large" color="#0000ff" />
  }
  if (groupData==[]){
    return(
      <Text>No hay grupos para mostrar</Text>
    )
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
    <Link href={`/groups/${id}`} asChild>
      
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



export function ChatLink() {
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.title}>Grupos Privados</Text>
      <Link asChild href={"/newGroup"}>
      <Pressable>
        <Add />
      </Pressable>
      </Link>
      
      
    </View>
    <View>
    <GroupFlatList />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    alignItems:"center",
    paddingVertical:10,
    borderBottomColor:"black",
    borderBottomWidth:1,
    marginHorizontal:40

  },
  title:{
    fontSize:30,
    fontWeight:"bold",
    textAlign:"center",
    flexGrow:1,
    alignContent:"center",
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
