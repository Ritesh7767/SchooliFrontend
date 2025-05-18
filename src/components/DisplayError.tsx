import React from 'react'

const DisplayError = ({errMessage}: {errMessage: string}) => {
  return (
    <p className='text-center sm:text-lg font-bold text-red-700'>{errMessage}</p>
  )
}

export default DisplayError