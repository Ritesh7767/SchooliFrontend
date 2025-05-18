import { StudentInterface } from "../utils/interfaces/StudentInterfaces"
import { useTeacher } from "../context/TeacherProvider"
import { useStudent } from "../context/StudentProvider"
import { useParams, useSearchParams } from "react-router-dom"
import { required } from "../utils/required"
import { useUser } from "../context/UserProvider"

const Field = ({name, status, label, placeholder, Icon}: {name: string, status: string ,label: string, placeholder: string, Icon: React.ElementType | ""}) => {
  
  const {details, setDetails, view} = status == "teacher" ? useTeacher() : useStudent()
  const {user} = useUser()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails((prev: StudentInterface) => ({...prev, [e.target.name]: e.target.value}))
  }
  
  return (
    <div>
        <label className='text-purple-800 font-bold' htmlFor="">
          {label}
          {
            name in required && <span className="text-red-600">*</span>
          }
        </label><br />
        <div className="relative">
            {Icon && <span className="absolute text-xl top-1/2 left-2 transform -translate-y-1/2">
                 <Icon/>
            </span>}
            <input type={name == 'DOB' ? "date" : "text"} name={name} value={details[name]} onChange={handleChange} disabled={view ||  (name in required && user?.status == "Student")} className='rounded-3xl focus:outline-purple-800 border border-slate-400 p-2 pl-8' placeholder={placeholder}/>
        </div>
    </div>
  )
}

export default Field