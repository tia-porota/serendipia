import React, {createContext, useContext, useState} from 'react'

const ReloadContext = createContext();
export function ReloadProvider({children}) {
    const [reload, setReload] = useState(0)
    const triggerReload = () => setReload(prev=> prev+1);
    return (
        <ReloadContext.Provider value={{reload,triggerReload}}>
            {children}
        </ReloadContext.Provider>
    )
}
export const useReload = () => useContext(ReloadContext)