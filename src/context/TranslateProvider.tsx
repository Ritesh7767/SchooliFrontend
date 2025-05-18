import React, { createContext, useContext, useState } from 'react'

export interface TranslateContextType {
  translate: boolean;
  setTranslate: React.Dispatch<React.SetStateAction<boolean>>;
}

export const translateContext = createContext<TranslateContextType | undefined>(undefined);

const TranslateProvider = ({children}: {children: React.ReactNode}) => {
  const [translate, setTranslate] = useState(false)
  return (
    <translateContext.Provider value={{translate, setTranslate}}>
      {children}
    </translateContext.Provider>
  )
}

export const useTranslate = () => {
  const context = useContext(translateContext)
  if (!context) throw Error("Translate context must be used within translate provider")
  return context
}

export default TranslateProvider