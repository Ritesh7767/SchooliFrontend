import { useEffect, useState } from 'react';
import { StudentInterface } from '../utils/interfaces/StudentInterfaces';
import TeacherInfo from './TeacherDetails';
import { useStudent } from '../context/StudentProvider';
import { studentObject } from '../utils/studentObject';
import StudentInfo from '../components/StudentInfo';

const Admission = () => {
  const {details, setDetails, setView} = useStudent()
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