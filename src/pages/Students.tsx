import { useLocation } from 'react-router-dom';
import Button from '../components/Button'
import UserCard from '../components/UserCard'
import { studentData } from '../data'
import { FaFilter } from "react-icons/fa6";
import { MdAdd } from "react-icons/md";
import { useEffect, useRef, useState } from 'react';
import { FaFemale } from "react-icons/fa";
import { FaMale } from "react-icons/fa";
import { StudentInterface } from '../utils/interfaces/StudentInterfaces';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import AddBtn from '../components/AddBtn';
import DisplayStudents from '../components/DisplayStudents';
import { useSearch } from '../context/SearchProvider';
import { fetchStudent } from '../redux/slices/studentSlice';
import Loading from '../components/Loading';
import DisplayError from '../components/DisplayError';
import { useUser } from '../context/UserProvider';
import { useCount } from '../context/CountProvider';
// import { useDispatch } from 'react-redux';



const Students = () => {

  const {loading, studentData, errMessage, error} = useAppSelector(store => store.studentReducer)
  const [data, setData] = useState<StudentInterface[]>([])
  const {searchView} = useSearch()
  const {user} = useUser()
  const {count} = useCount()

  const std = useRef({
    "5": false,
    "6": false,
    "7": false,
    "8": false,
    "9": false,
    "10": false,
    "male": true,
    "female": true
  })
  
  const gender = useRef({
    male: count.male,
    female: count.female
  })
  
  useEffect(() => {
    setData(studentData)
  },[studentData])

  const handleClick = (standard: "5" |"6" | "7" | "8" | "9" | "10" | "female" | "male") => {
        std.current[standard] = !std.current[standard]
        if (!std.current.male && !std.current.female){
          std.current.male = true
          std.current.female = true
        }
        gender.current.male = 0
        gender.current.female = 0
    if (Object.values({...std.current, male: false, female: false}).every(value => !value)){
      let temp = studentData
      if (std.current.male && std.current.female){
        temp.forEach((student: StudentInterface) => {
          if (student.gender == "male") gender.current.male++
          else gender.current.female++
        })
      }
      else if (std.current.male){
        temp = temp.filter((student: StudentInterface) => {
          if (student.gender == "male"){
            gender.current.male++
            return student
          }
        })
      }
      else {
        temp = temp.filter((student: StudentInterface) => {
          if (student.gender == "female"){
            gender.current.female++
            return student
          }
        })
      } 
      setData(temp)
    }
    else if (std.current.male && std.current.female || !std.current.male && !std.current.female){
      setData(studentData?.filter((student: StudentInterface) => {
        if(std.current[student.std as keyof typeof std.current]){
          if (student.gender == "female") gender.current.female++
          else gender.current.male++
          return student
        }
      }))
    } 
    else if (std.current.male){
      setData(studentData?.filter((student: StudentInterface) => {
        if (std.current[student.std as keyof typeof std.current] && student.gender == "male"){
          gender.current.male++
          return student
        }
      }))
    } 
    else {
      setData(studentData?.filter((student: StudentInterface) => {
        if(std.current[student.std as keyof typeof std.current] && student.gender == "female"){
          gender.current.female++
          return student
        }
      }))
    }
  }
  
  return (
    <div className={`p-3`}>
      <div className='flex justify-between items-center'>
        <div>
          <div className='flex items-center gap-2 md:gap-10'>
            <h1 className='text-lg font-bold'>Students Database</h1>
            <div className='flex gap-2'>
              <span style={{backgroundColor: std.current.female ? "#b6d87d": "", border: !std.current.female ? "": "purple"}} onClick={()=>handleClick("female")} className='rounded-lg p-2 border border-purple-800 flex shadow-xl items-center justify-center' ><span className='md:text-3xl'><FaFemale/></span>{gender.current.female}</span>
              <span style={{backgroundColor: std.current.male ? "#b6d87d": "", border: !std.current.male ? "": "purple"}} onClick={()=>handleClick("male")} className='rounded-lg p-2 border border-purple-800 flex shadow-xl items-center justify-center' ><span className='md:text-3xl'><FaMale/></span>{gender.current.male}</span>
            </div>
          </div>
        <p className='hidden md:block text-sm'>Hi, Ritesh Welcome to Schoooli Student Database</p>
        </div>
        {user?.status == "Admin" && <div className='flex justify-center items-center gap-1'>
          <AddBtn url='user/admission' />
        </div>}
      </div>
      <div className='border-2 border-black mt-3 bg-[#8C4AF2] p-1 rounded-lg'>
        <ul className='grid grid-cols-6 cursor-pointer gap-2 text-center font-bold'>
          <li style={{backgroundColor: std.current["5"] ? "white": "#8C4AF2", color: std.current["5"] ? "#8C4AF2": "white"}} onClick={() => handleClick("5")} className='text-white bold pointer rounded-md p-1'>5th</li>
          <li style={{backgroundColor: std.current["6"] ? "white": "#8C4AF2", color: std.current["6"] ? "#8C4AF2": "white"}} onClick={() => handleClick("6")} className='text-white bold pointer rounded-md p-1'>6th</li>
          <li style={{backgroundColor: std.current["7"] ? "white": "#8C4AF2", color: std.current["7"] ? "#8C4AF2": "white"}} onClick={() => handleClick("7")} className='text-white bold pointer rounded-md p-1'>7th</li>
          <li style={{backgroundColor: std.current["8"] ? "white": "#8C4AF2", color: std.current["8"] ? "#8C4AF2": "white"}} onClick={() => handleClick("8")} className='text-white bold pointer rounded-md p-1'>8th</li>
          <li style={{backgroundColor: std.current["9"] ? "white": "#8C4AF2", color: std.current["9"] ? "#8C4AF2": "white"}} onClick={() => handleClick("9")} className='text-white bold pointer rounded-md p-1'>9th</li>
          <li style={{backgroundColor: std.current["10"] ? "white": "#8C4AF2", color: std.current["10"] ? "#8C4AF2": "white"}} onClick={() => handleClick("10")} className='text-white bold pointer rounded-md p-1'>10th</li>
        </ul>
      </div>
      {loading && <Loading/>}
      {error && <DisplayError errMessage={errMessage}/> }
      {
        data && <DisplayStudents data={data} />
      }
    </div>
  )
}

export default Students