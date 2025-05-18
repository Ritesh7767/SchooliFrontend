import React, { createContext, SetStateAction, useContext, useState } from "react"

interface countInterface {
    male: number,
    female: number
}

interface countProviderInterface {
    count: countInterface,
    setCount: React.Dispatch<SetStateAction<any>>
}

export const CountContext = createContext<countProviderInterface | undefined>(undefined)

export const CountProvider = ({children}: {children: React.ReactNode}) => {
    const [count, setCount] = useState<countInterface>({male: 0, female: 0})
    return (
        <CountContext.Provider value={{count, setCount}}>
            {children}
        </CountContext.Provider>
    )
}

export const useCount = () => {
    const context = useContext(CountContext)
    if (!context) throw Error("Something went wrong with the count context")
    return context
}