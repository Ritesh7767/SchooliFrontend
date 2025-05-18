import React, { createContext, useContext, useState, SetStateAction } from "react";
import { StudentInterface } from "../utils/interfaces/StudentInterfaces";
import { studentObject } from "../utils/studentObject";


export interface StudentContextInterface {
    details: StudentInterface,
    setDetails: React.Dispatch<SetStateAction<any>>,
    view: boolean,
    setView: React.Dispatch<SetStateAction<any>>
}

export const StudentContext = createContext<StudentContextInterface | undefined>(undefined)

const StudentProvider = ({children}: {children: React.ReactNode}) => {
    const [details, setDetails] = useState<StudentInterface>(
        JSON.parse(localStorage.getItem("details") as string)
    )
    const [view, setView] = useState<boolean>(true)

    return (
        <StudentContext.Provider value={{details, setDetails, view, setView}}>
            {children}
        </StudentContext.Provider>
    )
}

export const useStudent = () => {
    const context = useContext(StudentContext)
    if (!context) throw Error("Something went wrong in Teacher context")
    return context
}

export default StudentProvider