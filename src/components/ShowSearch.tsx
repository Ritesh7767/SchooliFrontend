import { useSearch } from '../context/SearchProvider'
import DisplayStudents from './DisplayStudents'

const ShowSearch = () => {
    const {searchView, searchData} = useSearch() 
    console.log(searchData)

  return (
    <div className='z-10 bg-transparent left-3 right-3 bottom-0 top-16 absolute rounded-xl'>
      {searchView && searchData && <div className='mb-12 blur-0 transition-all'>
        <DisplayStudents data={searchData} />
      </div>}
    </div>
  )
}

export default ShowSearch