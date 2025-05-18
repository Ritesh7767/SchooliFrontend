import { events } from '../data/event'
import EventSection from '../components/EventSection'
import { MdEmojiEvents } from "react-icons/md";

const Events = () => {

  return (
    <div className='p-5'>
      <div className='flex justify-around items-center gap-1 bg-red-950 text-[#Ffd700] p-2 rounded-xl'>
        <span className='text-xl md:text-3xl' ><MdEmojiEvents/></span>
        <span className='text-xl md:text-3xl' ><MdEmojiEvents/></span>
        <h1 className='font-bold text-center text-2xl italic md:text-3xl'>Welcome To School Event Zone</h1>
        <span className='text-xl md:text-3xl' ><MdEmojiEvents/></span>
        <span className='text-xl md:text-3xl' ><MdEmojiEvents/></span>
      </div>
      <br />
      <div className='flex flex-col gap-6'>
        {
          events.map(section => <EventSection section={section}/>)
        }
      </div>
    </div>
  )
}

export default Events