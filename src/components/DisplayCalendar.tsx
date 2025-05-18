import axios from 'axios'
import { useEffect, useState } from 'react'
import { server } from '../utils/url'
import Calendar from './Calendar'

export interface eventInterface {
    _id?: string
    title: string,
    start: string,
    color: string
}

const DisplayCalendar = () => {

    const [events, setEvents] = useState<eventInterface[]>([])
    const [error, setError] = useState<string>()

    const handleDateClick = async ({dateStr}: {dateStr: string}) => {
        try {
            const title = prompt("Enter event title")
            if (!title) return
            let obj = {
                title, start: dateStr, color: "green"
            }
            await axios.post(`${server}/schedule`, 
                obj,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                        "Content-Type": "application/json"
                    }
                }
            )
            setEvents((prev: eventInterface[]) => ([...prev, obj]))
        } catch (error: any) {
            setError(error.response.data.message)
        }
    }
  
    useEffect(() => {
        (
            async () => {
                try {
                    const response = await axios.get(`${server}/holidays`)
                    const schedule = await axios.get(`${server}/schedule`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                            "Content-Type": "application/json"
                        }
                    })
                    const festival = response.data.data.map((ele: eventInterface) => {
                        ele.color = "sky"
                        return ele
                    })

                    const userSchedule = schedule.data.data.map((ele: eventInterface) => {
                        ele.color = "green"
                        return ele
                    })

                    setEvents([...festival, ...userSchedule])
                } catch (error: any) {
                    setError(error.data.message)
                }
            }
        )()
    }, [])

  return (
    <div className=''>
      <Calendar events={events} error={error || " "} handleDateClick={handleDateClick} />
    </div>
  )
}

export default DisplayCalendar