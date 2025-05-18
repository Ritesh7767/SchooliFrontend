import React, { useEffect } from 'react'
import { useAppSelector } from '../hooks/reduxHooks'
import UserCard from '../components/UserCard'
import AddBtn from '../components/AddBtn'
import { useTeacher } from '../context/TeacherProvider'
import Loading from '../components/Loading'
import DisplayError from '../components/DisplayError'
import { useUser } from '../context/UserProvider'


const Teachers = () => {
  const {loading, teacherData, error, errMessage} = useAppSelector(store => store.teacherReducer)
  const {view, setView} = useTeacher()
  const {user} = useUser()

  console.log(error, errMessage, loading, teacherData)

  useEffect(() => setView(true), [])

  return (
    <div className='p-2'>
      <div className='flex pl-2 pr-2 justify-between items-center mb-4'>
        <h1 className='font-bold text-xl'>Teacher's Database</h1>
        {user?.status == "Admin" && <AddBtn url="user/hireTeacher"/>}
      </div>
      {loading && <Loading/>}
      {error && <DisplayError errMessage={errMessage} /> }
      <div className='grid grid-cols-1 pl-3 pr-3 gap-3 sm:grid-cols-2 lg:grid-cols-3'>
        {
          teacherData?.map((ele, index) => <UserCard key={index} user={ele}/>)
        }
      </div>
    </div>
  )
}

export default Teachers