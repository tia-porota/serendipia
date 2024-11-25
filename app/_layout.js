import { Stack, usePathname} from "expo-router";
import { BottomBar } from "../components/bottombar";
import {Seren, IsUser} from '../components/topbar'
import {LogBox} from 'react-native'

export default function Layout(){
    LogBox.ignoreAllLogs();
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
