import {conString} from "./backInfo"

export default async function findPublicGroups() {
    const url = `${conString}public/`;
    let result = await fetch(url, {
        method: "get"
    });
    result = await result.json();
    
    

    

    
    
    return result;
}