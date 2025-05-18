import { StudentInterface } from '../utils/interfaces/StudentInterfaces'
import { TeacherInterface } from '../utils/interfaces/TeacherInterfaces'
import BirthDayCard from './BirthDayCard'

const DisplayBirthday = ({data, status}: {data: StudentInterface[] | TeacherInterface[], status: "Teacher" | "Student"}) => {

  return (
    <div className='flex flex-col gap-2'>
        <h1 className='font-bold text-xl sm:text-2xl text-pink-800'>Star {data.length == 1 ? status : status + "s"}</h1>
        <div className='flex gap-4'>
            {data.map((ele: TeacherInterface | StudentInterface, index: number) => (<BirthDayCard key={index} user={ele} />))}
        </div>
    </div>
  )
}

export default DisplayBirthday