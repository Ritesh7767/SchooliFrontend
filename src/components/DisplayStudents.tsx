import { StudentInterface } from "../utils/interfaces/StudentInterfaces"
import { TeacherInterface } from "../utils/interfaces/TeacherInterfaces"
import UserCard from "./UserCard"

const DisplayStudents = ({data}: {data: StudentInterface[] | TeacherInterface[]}) => {
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 shrink pl-3 pr-3'>
        {
          data?.map((ele, index) => <UserCard key={index} user={ele}/>)
        }
      </div>
  )
}

export default DisplayStudents