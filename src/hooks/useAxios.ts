import axios from 'axios'
import { useEffect, useState } from 'react'
import { server } from '../utils/url'

const useAxios = (endpoints: string) => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [data, setData] = useState<any>()

    useEffect(() => {

        setLoading(true)
        axios.get(`${server}/${endpoints}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
        .then(response => {
            setLoading(false)
            setError("")
            setData(response.data.data)
        })
        .catch((err: any) => {
            setLoading(false)
            setError(err.response.data.message)
        })
    }, [])

    return [loading, data, setData, error, setError]
}

export default useAxios