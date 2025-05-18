const SubHeader = () => {
  return (
    <div>
        <div className='flex justify-between'>
            <p className='border border-black w-1/3 p-1'>G.R.NO.</p>
            <p className='border border-black w-1/3 p-1'>Medium : English</p>
        </div>
        <div className='flex justify-end'>
            <p className='border border-black w-1/3 p-1'>Board : Maharashtra</p>
        </div>
        <br />
        <div className='flex justify-between'>
            <span>No. </span>
            <span className='font-bold absolute border left-1/2 border-black p-1 rounded-lg'>LEAVING CERTIFICATE</span>
            <span>Date : __________________ </span>
        </div>
    </div>
  )
}

export default SubHeader