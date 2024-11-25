import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import GroupSingle from '../../components/groups/GroupSingle'

export default function IndGroup(){
    const {groupId} = useLocalSearchParams();
    
    return(

        <>
        
            <GroupSingle id={groupId} />
        </>
    )
}