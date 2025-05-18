import { useUser } from "../context/UserProvider"

const Logo = () => {

  const {user} = useUser()

  return (
    <div className='mt-5 flex flex-col justify-center items-center'>
      <img  className='w-24 h-24 rounded-full object-cover' src={user?.profile || "https://www.bing.com/th?id=OIP.31F7heyNrbiTmHBz1Jc1LQHaH3&w=169&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"}/>
      <p className="font-bold text-lg italic">{user?.username}</p>
      <p className="font-semibold">{user?.status}</p>
    </div>
  )
}

export default Logo