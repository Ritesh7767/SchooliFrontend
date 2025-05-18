import { IoNotificationsSharp } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";
import { useTranslate } from "../context/TranslateProvider";
import Input from "./Input";
import { useUser } from "../context/UserProvider";

const Navbar = () => {
    const {setTranslate} = useTranslate()
    const {user} = useUser()

  return (
    <>
        <nav className='flex items-center justify-between relative md:pl-7 md:pr-7 gap-2 h-14 p-2 shadow-lg mb-3'>
            <div className="flex items-center gap-3 w-3/5">
                <h1 onClick={() => setTranslate(prev => !prev)} id="logo" className="active:bg-[#8C4AF2] active:text-white flex items-center justify-center rounded-md p-2 font-extrabold text-2xl text-purple-900 font-serif">Schoooli</h1>
                {
                    user?.status != "student" &&
                    <div className="hidden md:block">
                    <Input/> 
                </div>
                }
            </div>
            <div className="flex items-center gap-4">
                <span className="text-purple-700 text-xl"><IoNotificationsSharp/></span>
                <span className="flex items-center shadow-xl gap-2 p-1 pl-2 pr-2 border object-cover border-black rounded-xl h-10">
                    <img className="rounded-full w-8 h-8" src={user?.profile || "https://res.cloudinary.com/duvoga9f5/image/upload/v1729088231/zeszhjwnyh2dop1kmbza.jpg"}/>
                    <p className="font-semibold">{user?.firstname}</p>
                    <span><RiArrowDownSLine/></span>
                </span>
            </div>
        </nav>
        <div className="md:hidden">
            <Input/>
        </div>
    </>
  )
}

export default Navbar