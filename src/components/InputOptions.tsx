import React from "react"
import { StudentInterface } from "../utils/interfaces/StudentInterfaces"
import { useTeacher } from "../context/TeacherProvider"
import { useStudent } from "../context/StudentProvider"
import { TeacherInterface } from "../utils/interfaces/TeacherInterfaces"
import { required } from "../utils/required"

const InputOptions = ({status, label, data, name}: {status: string, data: string[], label: string, name: string}) => {

  const {details, setDetails, view} = status == "Teacher" || status == "Admin" ? useTeacher() : useStudent()

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDetails((prev: StudentInterface | TeacherInterface) => ({...prev, [e.target.name]: e.target.value}))
  }
  
  return (
    <div className="basis-1/3">
        <label className='text-purple-800 font-bold' htmlFor="">
          {label}
          {
            name in required && <span className="text-red-600">*</span>
          }

        </label><br />
          <select onChange={handleSelect} value={details[name]} name={name} disabled={view} className="bg-white border-purple-800 border p-2 rounded-3xl w-full">
              <option value="">Select</option>
              {
                data.map((ele, index) => (<option key={index} value={ele}>{ele}</option>))
              }
          </select>
    </div>
  )
}
export default InputOptions