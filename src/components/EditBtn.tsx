import React, { SetStateAction } from 'react'
import { FaPencil } from 'react-icons/fa6'

const EditBtn = ({view, setView}: {view: boolean, setView: React.Dispatch<SetStateAction<any>>}) => {

    const handleClick = () => {
        setView(false)
    }

  return (
    <span onClick={handleClick} className='absolute cursor-pointer top-4 right-2 md:right-4 border border-black w-12 h-12 md:w-16 md:h-16 rounded-full bg-sky-700 text-white flex justify-center items-center text-xl md:text-2xl'><FaPencil/></span>
  )
}

export default EditBtn