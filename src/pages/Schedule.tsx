import { useEffect, useState } from 'react'
import Calendar from '../components/Calendar'
import { eventInterface } from '../components/DisplayCalendar'
import Loading from '../components/Loading'
import axios from 'axios'
import { server } from '../utils/url'
import { useUser } from '../context/UserProvider'

const Schedule = () => {
  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [events, setEvents] = useState<any>()
  const {user} = useUser()
  
  useEffect(() => {
    setLoading(true)
    axios.get(`${server}/generalSchedule`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    })
    .then(response => {
        setLoading(false)
        setError("")
        setEvents(response.data.data)
    })
    .catch((err: any) => {
        setLoading(false)
        setError(err.response.data.message)
    })
  }, [])

  const handleDateClick = async ({dateStr}: {dateStr: string}) => {

    if(user?.status == "Student") return 
    
    try {
      const title = prompt("Enter your task")
  
      const existingEvent = events.find((event: eventInterface) => event.start == dateStr)
      const obj = {title, start: dateStr}
      let response;

      if (existingEvent){
        if (!title){
          console.log("deleting")
          console.log(existingEvent._id)
          response = await axios.delete(`${server}/generalSchedule/${existingEvent._id}`, {headers: {Authorization: `Bearer ${localStorage.getItem("accessToken")}`}})
        }
        else {
          response = await axios.patch(`${server}/generalSchedule/${existingEvent._id}`, obj, {headers: {Authorization: `Bearer ${localStorage.getItem("accessToken")}`}})
        }
      }
      else {
        console.log("post")
        response = await axios.post(`${server}/generalSchedule`, obj, {headers: {Authorization: `Bearer ${localStorage.getItem("accessToken")}`}})
      }
      setEvents(response.data.data)
    } catch (error: any) {
      setError(error.response.data.message)
    }
  }

  return (
    <div>
        {loading && <Loading/>}
        <Calendar events={events} error={error} handleDateClick={handleDateClick} />
    </div>
  )
}

export default Schedule