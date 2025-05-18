import React, { createContext, SetStateAction, useContext, useState } from "react";
import { StudentInterface } from "../utils/interfaces/StudentInterfaces";
import { TeacherInterface } from "../utils/interfaces/TeacherInterfaces";

export interface SearchContextInterface {
    searchData: StudentInterface[] | TeacherInterface[]
    setSearchData: React.Dispatch<SetStateAction<any>>
    searchView: boolean
    setSearchView: React.Dispatch<SetStateAction<any>>
}

export const SearchContext = createContext<SearchContextInterface | undefined>(undefined)

export const SearchProvider = ({children}: {children: React.ReactNode}) => {
    const [searchData, setSearchData] = useState<StudentInterface[] | TeacherInterface[]>([])
    const [searchView, setSearchView] = useState<boolean>(false)
    return (
        <SearchContext.Provider value={{searchData, setSearchData, searchView, setSearchView}}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearch = () => {
    const context = useContext(SearchContext)
    if (!context) throw Error("Something went wrong with search provider")
    return context
}