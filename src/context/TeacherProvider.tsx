import React, { createContext, SetStateAction, useContext, useState } from "react";
import { teacherObject } from "../utils/teacherObject";
import { TeacherInterface } from "../utils/interfaces/TeacherInterfaces";

export interface TeacherContextInterface {
    details: TeacherInterface,
    setDetails: React.Dispatch<SetStateAction<any>>,
    view: boolean,
    setView: React.Dispatch<SetStateAction<any>>
}

export const TeacherContext = createContext<TeacherContextInterface | undefined>(undefined)

const TeacherProvider = ({children}: {children: React.ReactNode}) => {
    const [details, setDetails] = useState<TeacherInterface>(JSON.parse(localStorage.getItem("details") as string) || {...teacherObject})
    const [view, setView] = useState<boolean>(true)

    return (
        <TeacherContext.Provider value={{details, setDetails, view, setView}}>
            {children}
        </TeacherContext.Provider>
    )
}

export const useTeacher = () => {
    const context = useContext(TeacherContext)
    if (!context) throw Error("Something went wrong in Teacher context")
    return context
}

export default TeacherProvider