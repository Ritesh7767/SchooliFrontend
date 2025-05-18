import { useEffect } from 'react'
import { useUser } from '../context/UserProvider'
import StudentInfo from '../components/StudentInfo'
import { useStudent } from '../context/StudentProvider'
import { useTeacher } from '../context/TeacherProvider'
import TeacherInfo from '../components/TeacherInfo'

const ProfilePage = () => {

    const {user} = useUser()
    const {setDetails} = user?.state == "Student" ? useStudent() : useTeacher()

    useEffect(() => {
        localStorage.setItem("details", JSON.stringify(user))
        setDetails(user)
    }, [user])

  return (
    <div>
        {
            user?.status == "Student" ? <StudentInfo method='patch' /> : <TeacherInfo method='patch'/>
        }
    </div>
  )
}

export default ProfilePage