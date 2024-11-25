import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import GroupSinglePublic from '../../components/groups/GroupSinglePublic'

export default function (){
    const {groupId} = useLocalSearchParams();
    
    return(

        <>
        
            <GroupSinglePublic id={groupId} />
        </>
    )
}