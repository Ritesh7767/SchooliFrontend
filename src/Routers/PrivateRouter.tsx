import { redirect } from "react-router-dom"
import { useUser } from "../context/UserProvider"

import { ComponentType } from "react";

interface PrivateRouterProps {
    Node: ComponentType;
}

const PrivateRouter = ({ Node }: PrivateRouterProps) => {
    
    const user = useUser()
    
    if (!user) redirect("/")

    return <Node/>
}

export default PrivateRouter