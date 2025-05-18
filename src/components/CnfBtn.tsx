import { useEffect, useState } from 'react'
import { useStudent } from '../context/StudentProvider'
import { useTeacher } from '../context/TeacherProvider'

const CnfBtn = ({status}: {status: "Teacher" | "Student"}) => {

  const [disabled, setDisabled] = useState<boolean>(false)
  const {details} = status == "Student" ? useStudent(): useTeacher()

  useEffect(() => {
    const result = ((details.username.length > 4) && (details.password.length > 4) && details.firstname && details.lastname && details.DOB && details.gender && (details.std || details.classOf))
    console.log(result)
    setDisabled(!result)
  }, [details])
  
  console.log(disabled)

  return (
    <div className="text-center mt-5">
        <input type="submit" value="Confirm" disabled={disabled}
          className={`bg-purple-500 ${!disabled && "bg-purple-800"}
             p-2 pl-4 pr-4 font-bold text-white rounded-3xl ${!disabled && "active:bg-white active:text-purple-800 active:border-purple-800 active:border"}`}/>
    </div>
  )
}

export default CnfBtn