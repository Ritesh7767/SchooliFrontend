import { useEffect, useRef, useState } from "react"
import { useStudent } from "../context/StudentProvider"
import { TeacherContextInterface, useTeacher } from "../context/TeacherProvider"
import ProfileImage from "./ProfileImage"
import Documents from "./Documents"
import { StudentInterface } from "../utils/interfaces/StudentInterfaces"

const ShowDocuments = ({status, name}: {status: "Teacher" | "Student", name: string}) => {
  
  const inputTag = useRef<HTMLInputElement>(null)
  const {details, setDetails, view} = status == "Teacher" ? useTeacher() as TeacherContextInterface: useStudent()
  const [previewImage, setPreviewImage] = useState<string>()
  
  useEffect(() => {
    setPreviewImage(details[name] || "") 
  } ,[localStorage.getItem("details")])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : ""
    if (file){
      const imageUrl = URL.createObjectURL(file)
      setPreviewImage(imageUrl)
      setDetails((prev: StudentInterface) => ({...prev, [name]: file}))
    }
  }

  const handleClick = () => {
    console.log("clicked")
    if (inputTag.current) {
      inputTag.current.click()
    }
  }

  return (
    <div className="flex relative">
        {name == "profile" ? <ProfileImage status={status} previewImage={previewImage ? previewImage : null} handleClick={handleClick} /> : 
            <Documents view={view} handleClick={handleClick} previewImage={previewImage ? previewImage : null} name={name} />
        }
        <input ref={inputTag} className="absolute hidden" type="file" name={name} disabled={view} onChange={handleImageChange} />
    </div>
  )
}

export default ShowDocuments