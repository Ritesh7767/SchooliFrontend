import { MdAdd } from 'react-icons/md'
import { Link } from 'react-router-dom'

const AddBtn = ({url}: {url: string}) => {
  return (
    <>
        <Link to={`/${url}`} className="flex justify-center items-center gap-2 p-2 pl-4 pr-4 border border-purple-800 rounded-3xl font-bold shadow-lg"> <span className='text-xl'><MdAdd/></span><span className='hidden sm:block'>Add</span></Link>
    </>
  )
}

export default AddBtn