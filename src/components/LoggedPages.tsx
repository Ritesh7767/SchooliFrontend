import { useTranslate } from '../context/TranslateProvider'
import { useSearch } from '../context/SearchProvider'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import ShowSearch from './ShowSearch'
import { Outlet } from 'react-router-dom'
import { useAppDispatch } from '../hooks/reduxHooks'
import { useEffect } from 'react'
import { fetchStudent } from '../redux/slices/studentSlice'
import { fetchTeacher } from '../redux/slices/teacherSlice'

const LoggedPages = () => {
  
  const {setTranslate, translate} = useTranslate()
  const {searchData} = useSearch()
  const {searchView} = useSearch()

  const handleClick = () => {
    if (translate) setTranslate(false)
  }

  const dispatch = useAppDispatch()
  useEffect(() => {
    console.log("fetching student and teacher data")
    dispatch(fetchStudent())
    dispatch(fetchTeacher())

  }, [])


  return (
    <div onScroll={handleClick} onClick={handleClick} className='relative'>
      <Sidebar/>
      <Navbar/>
      <div className={`relative ${searchView && "blur-md"}`}>
        <Outlet/>
      </div>
        {searchData.length ? <ShowSearch/> : ""}
    </div>
  )
}

export default LoggedPages  