import { useEffect, useState } from 'react'
import { useUser } from '../context/UserProvider'
import Elements from '../components/Elements'
import { useAppSelector } from '../hooks/reduxHooks'
import { StudentInterface } from '../utils/interfaces/StudentInterfaces'
import { TeacherInterface } from '../utils/interfaces/TeacherInterfaces'
import DisplayBirthday from '../components/DisplayBirthday'
import DashboardHeading from '../components/DashboardHeading'
import DisplayCalendar from '../components/DisplayCalendar'
import GoToElement from '../components/GoToElement'
import { useCount } from '../context/CountProvider'

interface starInterface {
  teachers: TeacherInterface[],
  students: StudentInterface[]
}

const Dashboard = () => {
  const {user} = useUser()
  const {studentData} = useAppSelector(store => store.studentReducer)
  const {teacherData} = useAppSelector(store => store.teacherReducer)
  const [starUser, setStarUser] = useState<starInterface>()
  // const [count, setCount] = useState({boys: 0, girls: 0})
  const {count, setCount} = useCount()
  
  const date = new Date().getDate()
  const month = new Date().getMonth()
  
  useEffect(() => {
    let male = 0
    let students: StudentInterface[] = []
    let teachers: TeacherInterface[] = []
    
    studentData?.map(ele => {
      if (ele.gender == "male") male++

      if (ele.DOB.length == 10){
        const birthDate = ele.DOB.substring(8)
        const birthMonth = ele.DOB.substring(5, 7)
        
        if (parseInt(birthDate) === date && parseInt(birthMonth) === month + 1){
          students.push(ele)
        }
      }
    })
    teacherData?.map(ele => {
  
      if (ele.DOB.length == 10){
  
          const birthDate = ele.DOB.substring(8)
          const birthMonth = ele.DOB.substring(5, 7)
          
          if (parseInt(birthDate) == date && parseInt(birthMonth) === month + 1){
            teachers.push(ele)
          }
      }
    }) 
      setStarUser({students, teachers})
      setCount({male, female: studentData.length - male})
    }, [studentData, teacherData])

  console.log(starUser)

  const hours = new Date().getHours()
  const greeting = hours < 12 ? "Good Morning" : hours < 16 ? "Good Afternoon" : "Good Evening"
  return (
    
    <div className='p-4'>
      <h1 className='text-purple-800 font-bold sm:text-xl'>Hii,... {user?.firstname}, {greeting}</h1>

      <div className='flex flex-col gap-6'>
          {starUser?.students.length ? <DisplayBirthday status='Student' data={starUser.students} /> : ""}
          {starUser?.teachers.length ? <DisplayBirthday status='Teacher' data={starUser.teachers} /> : ""}
      </div>
      <br />
      <div className=''>
        <DashboardHeading heading={"School Information"} />
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 items-center justify-around'>
          <Elements role='Students' value={studentData.length} url='./student.png' />
          <Elements role='Teachers' value={teacherData.length} url='./teachers.png' />
          <Elements role='Boys' value={count.male} url='./boys.png' />
          <Elements role='Girls' value={count.female} url='./girls.png' />
        </div>
      </div>
      <br />
      <div>
        <DashboardHeading heading='Go To'/>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 items-center justify-around'>
          <GoToElement url='/user/events' value={"Events"} path='./events.png' />
          <GoToElement url='/user/teachers' value={"Teachers"} path='./teacher.png' />
          <GoToElement url='/user/students' value={"Students"} path='./students.png' />
          <GoToElement url='/user/schedules' value={"Schedules"} path='./schedule.webp' />
          {user?.status == "Admin" && <GoToElement url='/user/admission' value={"Admission"} path='./admission.png' />}
          {user?.status == "Admin" && <GoToElement url='/user/hireTeacher' value={"Hire Teacher"} path='./hireTeacher.png' />}
          {/* <GoToElement url='/user/' value={"Announcement"} path='./announcement.png' /> */}
          <GoToElement url='/user/id' value={"Id Card"} path='./id.webp' />
        </div>
      </div>
      <br />
      <h1 className='sm:text-xl font-bold'>Calendar</h1>
      <div className='flex gap-2'>
        {/* <div className='w-1/3 border border-black'>
            <h2 className='text-center font-bold color-'>Today's Task</h2>
            <ul>
              <li>Meeting</li>
            </ul>
        </div> */}
        {/* <div className='w-2/3'> */}

          <DisplayCalendar/>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Dashboard