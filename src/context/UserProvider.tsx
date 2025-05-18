import React, { createContext, SetStateAction, useContext, useState } from "react";
import { StudentInterface } from "../utils/interfaces/StudentInterfaces";
import { TeacherInterface } from "../utils/interfaces/TeacherInterfaces";

interface StudentContextProvider {
    user: StudentInterface | TeacherInterface | undefined
    setUser: React.Dispatch<SetStateAction<any>>
}

export const UserContext = createContext<StudentContextProvider | undefined>(undefined)

export const UserProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<StudentInterface | TeacherInterface | undefined>(
        JSON.parse(localStorage.getItem("user") as string)
    );

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)
    if (!context) throw Error("Something went wrong with userContext")
    return context
}