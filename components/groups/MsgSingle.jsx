import {View,Text, FlatList,ScrollView,TouchableWithoutFeedback} from "react-native"
import {TempUserIcon} from "../utils/icons"
export default function MsgSingle({msgs}){
    
    return(
    <>
    
    <FlatList
      data={msgs}
      renderItem={({ item }) => <Msg text={item.text} sender={item.sender} date={item.date}/>}
      keyExtractor={item => item._id}
      
      
    />
    </>)
}

const Msg= ({text, sender, date}) =>{
    return(
        
        <View style={{flexDirection:"row"}} >
        <TempUserIcon />
        <View className="bg-gray-200 rounded-md m-2 px-1.5 grow">
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Text>{sender}</Text>
            <Text className="italic font-light">{date}</Text>
            </View>
            <Text className="my-1" style={{fontSize:20}} selectable={true}>{text}</Text>

        </View>
        </View>
        
    )

}