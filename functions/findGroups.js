
import {IP, PORT} from "./backInfo"
export default async function findGroups(userId) {
    if (!userId) return undefined; // Verifica si se proporciona un userId
    const url = 'http://'+IP+':'+PORT+'/users/' + userId;
    let result = await fetch(url, {
        method: "get"
    });
    result = await result.json();
    const groupArray = result.idGroups;
    
    return groupArray;
}
