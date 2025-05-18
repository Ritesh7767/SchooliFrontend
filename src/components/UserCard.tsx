import { useNavigate } from 'react-router-dom'
import { StudentInterface } from '../utils/interfaces/StudentInterfaces'
import { TeacherInterface } from '../utils/interfaces/TeacherInterfaces'
import { TeacherContextInterface, useTeacher } from '../context/TeacherProvider'
import { StudentContextInterface, useStudent } from '../context/StudentProvider'
import { useSearch } from '../context/SearchProvider'
import { useUser } from '../context/UserProvider'

const UserCard = ({user}: {user: StudentInterface | TeacherInterface}) => {

    const navigate = useNavigate()
    const {setDetails} = user.status == "Teacher" || user.status == "Admin" ? useTeacher() as TeacherContextInterface : useStudent() as StudentContextInterface
    const {setSearchView, setSearchData} = useSearch()
    const {user: currentUser} = useUser()
    const handleClick = () => {

        if (currentUser?.status == "student") return 
        localStorage.setItem("details", JSON.stringify(user))
        setDetails(user)
        setSearchView(false)
        setSearchData([])
        navigate(user.status == "Teacher" || user.status == "Admin" ? "/user/teacherDetails": "/user/studentDetails")
    }

    const handlePhone = () => {
        console.log("handleClick")
        try {
            window.location.href = `tel:${user.fatherContactNumber || user.motherContactNumber || user.contact
                
            }`
        } catch (error) {
            alert("Cannot open phone dialer")
        }
    }

    const handleChat = () => {
        console.log("handleChat")

        try {
            window.location.href = `http://wa.me/${user.fatherContactNumber || user.motherContactNumber || user.contact}`
        } catch (error) {
            alert("Unable to open WhatsApp. Make sure the number is on WhatsApp.")
        }
    }

    const handleEmail = () => {
        window.open(`mailto:${user.email}?body=Dear ${user.firstname} ${user.lastname}`)
    }

  return (
    <div onClick={handleClick} className='flex cursor-pointer shadow-xl bg-white justify-center items-center gap-5 p-4 rounded-2xl'>
        <div className=''>
            <img className='h-20 w-20 rounded-full object-cover' src={user.profile ? user.profile : user.gender == "male" ? "https://www.bing.com/th?id=OIP.31F7heyNrbiTmHBz1Jc1LQHaH3&w=169&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" : "https://th.bing.com/th/id/OIP.Q95pQRcQPSO-Z1WbGRzD7wHaHX?rs=1&pid=ImgDetMain"} alt="" />
        </div>
        <div className='w-3/5'>
            <h2 className='font-bold text-xl font-serif whitespace-nowrap'>{user.firstname} {user.lastname}</h2>
            <div className='flex justify-around'>
                <p className='text-slate-500'>{user.std || user.classOf}th</p>
                <p className='text-slate-500'>{user.class ? user.contact: user.gender}</p>
            </div>
            <div className='flex justify-between '>
                {(user.fatherContactNumber || user.motherContactNumber || user.contact) && <img onClick={e => {e.stopPropagation(); handlePhone()}} className='cursor-pointer h-10' src='/phone.jpg'/>}
                {(user.fatherContactNumber || user.motherContactNumber || user.contact) && <img onClick={e => {e.stopPropagation(); handleChat()}} className='cursor-pointer w-10' src='/whatsapp.webp'/>}
                {user.email && <img onClick={e => {e.stopPropagation(); handleEmail()}} className='cursor-pointer w-10' src='/email.webp'/>}
            </div>
        </div>
    </div>
  )
}

export default UserCard