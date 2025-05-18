import { MdDashboard } from "react-icons/md";
import { MdEventNote } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudentBold } from "react-icons/pi";
import { FaIdCard } from "react-icons/fa6";
import "./sidebar.css"
import { useTranslate } from '../context/TranslateProvider';
import Logo from "./Logo";
import SideAttr from "./SideAttr";
import { CgProfile } from "react-icons/cg";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { useUser } from "../context/UserProvider";

const Sidebar = () => {
    const {translate} = useTranslate()
    const {user} = useUser()
 
    return (
    <div className='-translate-x-full rounded-lg text-white absolute h-max(h-screen, h-full) bg-gradient-to-b from-[#8C4AF2] to-[#6b56f6] z-20'
        style={{translate: translate ? "100%" : 0, transition: "0.187s all ease-out"}}
    >
    <div>
            <Logo/>
            <ul className='p-6 flex flex-col gap-4'>
                {user?.status != "student" && <SideAttr url="" name="Dashboard" Icon={MdDashboard} />}
                <SideAttr url="profile" name="Profile" Icon={CgProfile}/>
                <SideAttr url="events" name="Events" Icon={MdEventNote} />
                <SideAttr url="schedules" name="Schedule" Icon={RiCalendarScheduleLine} />
                <SideAttr url="teachers" name="Teachers" Icon={FaChalkboardTeacher} />
                {user?.status != "student" && <SideAttr url="students" name="Students" Icon={PiStudentFill} />}
                {user?.status == "Admin" && <SideAttr url="admission" name="Take Admission" Icon={PiStudentBold} />}
                {user?.status == "Admin" && <SideAttr url="hireTeacher" name="Hire Teacher" Icon={LiaChalkboardTeacherSolid} />}
                {user?.status != "student" && <SideAttr url="id" name="Id Card" Icon={FaIdCard} />}
            </ul>
        </div>
        <div className="w-64" >
            <img className="" src="/school.png"/>
        </div>
    </div>

  )
}

export default Sidebar