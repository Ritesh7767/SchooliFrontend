import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction"
import DisplayError from './DisplayError'
import { eventInterface } from './DisplayCalendar'

const Calendar = ({error, events, handleDateClick}: {error: string | null, events: eventInterface[], handleDateClick: ({dateStr}: {dateStr: string}) => void}) => {

    
    return (
    <div 
        className="">
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView='dayGridMonth'
            selectable={true}
            editable={true} 
            events={events}
            dateClick={handleDateClick}
            height={"auto"}
        />
        {error && <DisplayError errMessage={error} /> }
    </div>    
  )
}
export default Calendar