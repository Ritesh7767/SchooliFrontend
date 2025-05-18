import { useState } from "react"
import axios from 'axios'
import { FaKey, FaUser } from "react-icons/fa"
import { server } from "../utils/url"
import { useUser } from "../context/UserProvider"
import { useNavigate } from "react-router-dom"
import DisplayError from "../components/DisplayError"

interface userCredInterface {
    username: string,
    password: string
}

const Login = () => {

    const [userCred, setUserCred] = useState<userCredInterface>({username: "", password: ""})
    const {setUser} = useUser()
    const [error, setError] = useState("")
    const hours = new Date().getHours()
    const navigate = useNavigate()
    const greeting = hours < 12 ? "Good Morning" : hours < 16 ? "Good Afternoon" : "Good Evening"

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserCred((prev: userCredInterface) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement | HTMLInputElement>) => {
        try {
            e.preventDefault()
            console.log("login request")
            console.log(userCred)
            const {data} = await axios.post(`${server}/teacher/login`, userCred)
            console.log(data.data._doc)
            localStorage.setItem("user", JSON.stringify(data.data._doc))
            localStorage.setItem("accessToken", data.data.accessToken)
            localStorage.setItem("accessToken", data.data.refreshToken)
            setUser(data.data._doc)
            navigate("/user", {replace: true})
        } catch (error: any) {
            setError(error.response.data.message)
        }
    }

  return (
    <div className='absolute border text-purple-900 bg-[url(https://img.freepik.com/premium-photo/colorful-school-supplies-wooden-background_488220-23037.jpg)] bg-no-repeat bg-center bg-cover bg-opacity-55 border-black w-full h-full flex flex-col justify-center items-center'>
        <h1 className="font-bold text-3xl text-white">Welcome to <span className="text-purple-500">Schooli</span></h1>
        <div className="border-purple-900 rounded-xl shadow-2xl p-12 bg-opacity-50 bg-white">
            <h1 className="font-semibold">Hello User,.... {greeting} </h1>
            <p className="font-semibold italic text-xs" >Please enter your credentials</p>
            <form onSubmit={handleSubmit} className="p-12 rounded-lg flex flex-col justify-center items-center gap-3">
                <div className="">
                    <label className="font-bold" htmlFor="">Username</label><br />
                    <div className="relative">
                        <span className="absolute text-xl top-1/2 left-2 transform -translate-y-1/2">
                            <FaUser/>
                        </span>
                        <input onChange={handleChange} name="username" type="text" className='rounded-3xl focus:outline-purple-800 border border-slate-400 p-2 pl-8' placeholder="Username"/><br />
                    </div>
                </div>
                <div>
                    <label className="font-bold" htmlFor="">Password</label><br />
                    <div className="relative">
                        <span className="absolute text-xl top-1/2 left-2 transform -translate-y-1/2">
                            <FaKey/>
                        </span>
                        <input onChange={handleChange} name="password" type="password" className='rounded-3xl focus:outline-purple-800 border border-slate-400 p-2 pl-8' placeholder="Username"/><br />
                    </div>
                </div>
                <br />
                <input onSubmit={handleSubmit} type="submit" className={`rounded-3xl px-20 bg-purple-400 text-white font-bold border ${userCred.username.length > 5 && userCred.password.length > 5 && "bg-purple-900 active:border-purple-800 active:bg-white active:text-black"} p-2`}/><br />
                <div className="">
                    {error && <DisplayError errMessage={error} />}
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login