import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../hooks/reduxHooks'
import EditBtn from '../components/EditBtn'
import { useStudent } from '../context/StudentProvider'
import { MdOutlineEmail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import { GrUserManager } from "react-icons/gr";
import { GrUserFemale } from "react-icons/gr";
import { IoSchool } from "react-icons/io5";
import { CgProfile, CgRename } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { MdPlace } from "react-icons/md";
import { gender, nations, states } from '../utils/data/state';
import Heading from '../components/Heading';
import Field from '../components/Field';
import InputOptions from '../components/InputOptions';
import CnfBtn from '../components/CnfBtn';
import ShowDocuments from './ShowDocuments';
import axios from 'axios';
import { server } from '../utils/url';
import { fetchStudent } from '../redux/slices/studentSlice';
import { useState } from 'react';
import Loading from './Loading';
import DisplayError from './DisplayError';

const StudentInfo = ({method}: {method: "post" | "patch"}) => {

  const {view, setView, details, setDetails} = useStudent()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>("")
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
  
      const formData = new FormData()
  
      Object.keys(details).forEach(key => {
        formData.append(key, details[key])
      })
      setLoading(true)
      const response = await axios[method](
        `${server}/student`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
        }
      )
      setLoading(false)
      setError(" ")
      dispatch(fetchStudent())
      setView(true) 
      localStorage.setItem("details", JSON.stringify(response.data.data))
      setDetails(response.data.data)
      navigate("/user/studentDetails", {replace: true})
    } catch (error: any) {
      setLoading(false)
      setError(error.response.data.message)
    }
  }

  console.log(details)
    return (
    <div className='relative'>
      <form onSubmit={handleSubmit} className='p-3 flex flex-col items-center gap-3 ' encType='multipart/form-data'>
        <ShowDocuments status='Student' name='profile'/>
        <Heading heading={"Login Credentials"}/>
        <div className='flex flex-wrap items-center justify-center gap-3'>
          <Field status="student" name='username' label='Username' placeholder='username' Icon={FaUser} />
          <Field status="student" name='password' label='Password' placeholder='password' Icon={FaKey} />
        </div>
        <Heading heading={"Basic Information"}/>
        <div className='flex flex-wrap justify-center gap-3'>
          <div className='flex flex-wrap justify-center gap-3'>
            <Field status="student" name='firstname' label='firstname' placeholder='firstname' Icon={CgProfile} />
            <Field status="student" name='lastname' label='lastname' placeholder='lastname' Icon={CgRename} />
          </div>
          <div className='flex flex-wrap items-center justify-center gap-3'>
            <Field status="student" name='fatherName' label="Father's Name" placeholder='fathername' Icon={GrUserManager} />
            <Field status="student" name='motherName' label="Mother's Name" placeholder='mothername' Icon={GrUserFemale} />
          </div>
          <div className='flex flex-wrap items-center justify-center gap-3'>
            <Field status="student" name='DOB' label='DOB' placeholder='DOB' Icon={CiCalendarDate} />
            <InputOptions status='student' name='gender' label='Gender' data={gender} />
            <Field status="student" name='std' label='Standard' placeholder='std' Icon={IoSchool} />
            <Field status="student" name='aadharNumber' label='Aadhar Number' placeholder='Aadhar Number' Icon={FaIdCard} />
          </div>
        </div>
        <Heading heading={"Contact Information"}/>
        <div className='flex flex-wrap justify-center gap-3'>
          <Field status="student" name='fatherContactNumber' label="Father's Contact" placeholder="father's number" Icon={IoPhonePortraitOutline}/>      
          <Field status="student" name='motherContactNumber' label="Mother's Contact" placeholder="mother's number" Icon={MdOutlinePhoneIphone}/>      
          <Field status="student" name='email' label='Email' placeholder='Email' Icon={MdOutlineEmail}/>      
          <Field status="student" name='address' label='Address' placeholder='address' Icon={FaHome} />
        </div>
        <Heading heading={"General Information"}/>
        <div className='flex flex-wrap justify-center items-center gap-3'>
          <Field status="student" name='religion' label='Religion' placeholder='Religion' Icon={GoDotFill} />
          <Field status="student" name='birthPlace' label="Birth Place" placeholder='Birth Place' Icon={MdPlace} />
          <InputOptions name='state' status='student' label='State' data={states} />
          <InputOptions status='student' name='nationality' label='Nationality' data={nations} />
        </div>
        <Heading heading='Documents' />
        <div className='flex flex-wrap justify-center items-center gap-4'>
          <ShowDocuments status='Student' name='aadharImage' />
          <ShowDocuments status='Student' name='leavingCertificate' />
          <ShowDocuments status='Student' name='birthCertificate' />
        </div>
        {
          !view && !loading && <CnfBtn status='Student' />
        }
        {
          loading && <Loading/>
        }
        {
          error && <DisplayError errMessage={error}/>
        }
    </form>
      {view && <EditBtn view={view} setView={setView}/>}
    </div>
  )
}

export default StudentInfo