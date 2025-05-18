import React from 'react'
import { StudentInterface } from '../utils/interfaces/StudentInterfaces'
import { TeacherInterface } from '../utils/interfaces/TeacherInterfaces'

const BirthDayCard = ({user}: {user: StudentInterface | TeacherInterface}) => {
  return (
    <div className='w-36 h-36 relative sm:w-48 sm:h-48 p-2 md:p-5 overflow-hidden bg-[url(./birthdaybg.jpg)] rounded-lg shadow-xl bg-no-repeat bg-center bg-cover'> 
        {/* <img className='absolute h-2/5 -top-3 -left-3 rotate-[135deg] ' src="./rose.png" /> */}
        <img className='rounded-full w-full h-full  object-cover object-top' src={user.profile ? user.profile : user.gender == "male" ? "https://www.bing.com/th?id=OIP.31F7heyNrbiTmHBz1Jc1LQHaH3&w=169&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" : "https://th.bing.com/th/id/OIP.Q95pQRcQPSO-Z1WbGRzD7wHaHX?rs=1&pid=ImgDetMain"} alt="" />
        <div className='text-red-800 font-semibold flex justify-between'>
            <span className=''>{user.firstname}</span>
            <span>{user.std || user.classOf}</span>
        </div>
    </div>
  )
}

export default BirthDayCard