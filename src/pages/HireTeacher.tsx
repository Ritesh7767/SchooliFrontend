import { useEffect } from 'react'
import TeacherInfo from '../components/TeacherInfo'
import { teacherObject } from '../utils/teacherObject'
import { useTeacher } from '../context/TeacherProvider'

const HireTeacher = () => {
  
  const {setView, setDetails} = useTeacher()
  useEffect(() => {
    localStorage.setItem("details", JSON.stringify(teacherObject))
    setDetails(teacherObject), 
    setView(false)
  },[])

  return (
    <>
      <TeacherInfo method='post'/>
    </>
  )
}

export default HireTeacher