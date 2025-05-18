import { Route, Routes } from 'react-router-dom'
import Front from '../pages/Front'
import Login from '../pages/Login'
import LoggedPages from '../components/LoggedPages'
import Dashboard from '../pages/Dashboard'
import Admission from '../pages/Admission'
import Events from '../pages/Events'
import HireTeacher from '../pages/HireTeacher'
import StudentDetails from '../pages/StudentDetails'
import Students from '../pages/Students'
import Teachers from '../pages/Teachers'
import Id from '../pages/Id'
import TeacherDetails from '../pages/TeacherDetails'
import Schedule from '../pages/Schedule'
import ProfilePage from '../pages/ProfilePage'
import PrivateRouter from './PrivateRouter'


const MainRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Front/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path="/user" element={<LoggedPages/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='profile' element={<PrivateRouter Node={ProfilePage} />}/>
            <Route path="events" element={<PrivateRouter Node={Events}/>}/>
            <Route path='schedules' element={<PrivateRouter Node={Schedule}/>}/>
            <Route path="teachers" element={<PrivateRouter Node={Teachers}/>}/>
            <Route path="students" element={<PrivateRouter Node={Students}/>}/>
            <Route path='admission' element={<PrivateRouter Node={Admission}/>}/>
            <Route path="hireTeacher" element={<PrivateRouter Node={HireTeacher}/>}/>
            <Route path="studentDetails" element={<PrivateRouter Node={StudentDetails}/>}/>
            <Route path="teacherDetails" element={<PrivateRouter Node={TeacherDetails}/>}/>
            <Route path="id" element={<Id/>}/>
        </Route>
    </Routes>
  )
}

export default MainRouter