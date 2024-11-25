import {View} from 'react-native'
import { Stack, usePathname} from "expo-router";
import { TopBar } from "../components/topbar";
import { BottomBar } from "../components/bottombar";
import  SendBar  from "../components/chatComponents/sendBar"
import {Seren, IsUser} from '../components/topbar'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ReloadProvider } from '../functions/reload';

export default function Layout(){
    
    return (
        <>
            <Stack screenOptions={{
                title:"",
                headerTitle: () => <Seren />,
                headerRight: () => <IsUser />,
                

            }} 
            >
                
            </Stack>
                
            <Bar />
            
        </>
    )

}
function Bar(){
    const path = usePathname();
    
    
    if (path.includes("group/") || path.includes("form/") || path.includes("mainScreen")){
        return "";
    }

    return <BottomBar path={path} />
}
