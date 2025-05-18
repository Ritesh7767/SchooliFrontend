import { useEffect } from 'react'
import './App.css'
import LoggedPages from './components/LoggedPages'
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks'
import MainRouter from './Routers/MainRouter'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { AppDispatch } from './redux/store'
import { fetchStudent } from './redux/slices/studentSlice'
import { fetchTeacher } from './redux/slices/teacherSlice'

function App() {

  return (
    <MainRouter/>
  )
}

export default App

