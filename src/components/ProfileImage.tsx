import { useTeacher } from '../context/TeacherProvider'
import { useStudent } from '../context/StudentProvider'

const ProfileImage = ({status, previewImage, handleClick}: {status: string, previewImage: string | null, handleClick: () => void}) => {
  const {view, details} = status == "Teacher" ? useTeacher() : useStudent()

  return (
    <img onClick={() => !view && handleClick()} src={previewImage ? previewImage : details.gender == "male" ? "https://www.bing.com/th?id=OIP.31F7heyNrbiTmHBz1Jc1LQHaH3&w=169&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" : details.gender == "female" ? "https://th.bing.com/th/id/OIP.Q95pQRcQPSO-Z1WbGRzD7wHaHX?rs=1&pid=ImgDetMain": "/defaultProfile.png"} className="w-64 h-64 rounded-full object-cover shadow-xl"/>
  )
}

export default ProfileImage