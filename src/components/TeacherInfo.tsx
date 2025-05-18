import Heading from "./Heading"
import Field from "./Field"
import InputOptions from "./InputOptions"
import { gender } from "../utils/data/state"
import { FaKey, FaUser } from "react-icons/fa"
import { CgProfile, CgRename } from "react-icons/cg"
import { CiCalendarDate } from "react-icons/ci"
import { IoPhonePortraitOutline, IoSchool } from "react-icons/io5"
import { MdOutlineEmail } from "react-icons/md"
import { MdOutlineNotes } from "react-icons/md";
import { FaBook } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";
import { RiAdminFill } from "react-icons/ri"
// import ProfileImage from "./ProfileImage"
import EditBtn from "./EditBtn"
import { useTeacher } from "../context/TeacherProvider"
import CnfBtn from "./CnfBtn"
import { FaHouseChimney } from "react-icons/fa6";
import { useState } from "react"
import ShowDocuments from "./ShowDocuments"
import axios from "axios"
import { server } from "../utils/url"
import { useAppDispatch } from "../hooks/reduxHooks"
import { fetchTeacher } from "../redux/slices/teacherSlice"
import { useNavigate } from "react-router-dom"
import DisplayError from "./DisplayError"
import Loading from "./Loading"
import { useUser } from "../context/UserProvider"

const TeacherInfo = ({method}: {method: "post" | "patch"}) => {

    const {view, details, setDetails, setView} = useTeacher()
    const {user} = useUser()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string>("")
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
    
            const formData = new FormData()
    
            Object.keys(details).map(key => {
                formData.append(key, details[key])
            })
            setLoading(true)
            const response = await axios[method](`${server}/teacher`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                    }
                }
            )
            setLoading(false)
            localStorage.setItem("details", JSON.stringify(response.data.data))
            setDetails(response.data.data)
            dispatch(fetchTeacher())
            setView(true)
            navigate("/user/teacherDetails")
        } catch (error: any) {
            setLoading(false)
            setError(error.response.data.message)
        }
        
    }

    console.log(details)

  return (
    <div className="bg-purple-50 relative">
        {
          <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                <ShowDocuments name="profile" status="Teacher" />
                <Heading heading="Credentials"/>
                <div className="flex flex-wrap gap-3 items-center justify-center">
                    <Field
                        status="teacher" 
                        name="username"
                        label="Username"
                        placeholder="username"
                        Icon={FaUser}
                    />
                    <Field
                        status="teacher" 
                        name="password"
                        label="Password"
                        placeholder="Password"
                        Icon={FaKey}
                    />
                </div>
                <Heading heading="Basic Information"/>
                <div className="flex flex-wrap gap-3 items-center justify-center">
                    <Field
                        status="teacher" 
                        name="firstname"
                        label="Firstname"
                        placeholder="firstname"
                        Icon={CgProfile}
                    />
                    <Field
                        status="teacher" 
                        name="lastname"
                        label="lastname"
                        placeholder="lastname"
                        Icon={CgRename}
                    />
                    <Field
                        status="teacher" 
                        name="middlename"
                        label="middlename"
                        placeholder="middlename"
                        Icon={MdOutlineNotes}
                    />
                    <Field
                        status="teacher" 
                        name="DOB"
                        label="DOB"
                        placeholder="dob"
                        Icon={CiCalendarDate}
                    />
                    <InputOptions status="Teacher" name="gender" label="Gender" data={gender} />
                </div>
                <Heading heading="General Information" />
                <div className="flex flex-wrap gap-3 items-center justify-center">
                    <Field
                        status="teacher" 
                        name="classOf"
                        label="ClassOf"
                        placeholder="classOf"
                        Icon={IoSchool}
                    />
                    <Field
                        status="teacher" 
                        name="subject"
                        label="Subject"
                        placeholder="subject"
                        Icon={FaBook}
                    />
                    <Field
                        status="teacher" 
                        name="qualification"
                        label="Qualification"
                        placeholder="qualification"
                        Icon={GrCertificate}
                    />
                    <InputOptions status="Teacher" label="Status" name="status" data={["Teacher", "Admin"]}/>
                </div>
                <Heading heading="Contact Information"/>
                <div className="flex flex-wrap gap-3 items-center justify-center">
                    <Field
                        status="teacher"
                        name="email"
                        label="Email"
                        placeholder="Email"
                        Icon={MdOutlineEmail}
                    />
                    <Field
                        status="teacher"
                        name="contact"
                        label="Contact No."
                        placeholder="Contact No."
                        Icon={IoPhonePortraitOutline}
                    />
                    <Field
                        status="teacher"
                        name="address"
                        label="Address"
                        placeholder="Address"
                        Icon={FaHouseChimney}
                    />
                </div>
                {!view && !loading && <CnfBtn status="Teacher" />}
                {loading && <Loading/>}
                {error && <DisplayError errMessage={error} />}
          </form>
        }
      {view && user?._id == details?._id && <EditBtn view={view} setView={setView} />}
    </div>
  )
}

export default TeacherInfo