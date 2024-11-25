import logUser from "../../functions/logUser";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function SetUser(){
    login()
    return null
}

async function login(){
    const router = useRouter();
    const {user} = useLocalSearchParams();
    const result = await logUser(user)
    router.replace("/")

}