import React from 'react'
import { StudentInterface } from '../utils/interfaces/StudentInterfaces'

const IdComponent = ({user}: {user: StudentInterface}) => {
  return (
    <div className='flex gap-1 border border-black p-1 items-center rounded-md'>
        <div className='h-[25vh] min-w-[22vh]'>
            <img className='h-full object-cover rounded-lg' src={user.profile} />
        </div>
        <div>
            <p className='font-bold'>Name : {`${user.lastname} ${user.firstname} ${user.fatherName}`}</p>
            <div className='flex flex-wrap justify-between'>
                <span>Std. : {user.std}th</span>
                <span className='pr-4'>Roll : ______</span>  
            </div>
            <div className='flex flex-wrap justify-between '>
                <span className='whitespace-nowrap'>D.O.B : {user.DOB}</span>
                <span>Blood Group : ______</span>
            </div>
            <p>Mob.: {`${user.fatherContactNumber}, ${user.motherContactNumber}`}</p>
            <p>{user.address}</p>
        </div>
    </div>
  )
}

export default IdComponent