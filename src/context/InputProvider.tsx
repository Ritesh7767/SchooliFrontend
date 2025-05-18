import React, { useContext, useState } from 'react'
import { createContext } from 'react'

export interface InputContextInterface {
    input: boolean,
    setInput: React.Dispatch<React.SetStateAction<boolean>>
}
export const InputContext = createContext<InputContextInterface | undefined>(undefined)

const InputProvider = ({children}: {children: React.ReactNode}) => {
    const [input, setInput] = useState(false)
  return (
    <InputContext.Provider value={{input, setInput}}>
        {children}
    </InputContext.Provider>
  )
}

export const useInput = () => {
    const context = useContext(InputContext)
    if(!context) throw Error("Something wrong in input context")
    return context
}

export default InputProvider