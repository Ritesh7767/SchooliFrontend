import { useEffect } from 'react';
import { useStudent } from '../context/StudentProvider';
import { studentObject } from '../utils/studentObject';
import StudentInfo from '../components/StudentInfo';

const Admission = () => {
  const {setDetails, setView} = useStudent()
  useEffect(() => {
    localStorage.setItem("details", JSON.stringify(studentObject))
    setView(false)
    setDetails(studentObject)
  }, [])

  return (
    <StudentInfo method='post'/>
  )
}

export default Admission