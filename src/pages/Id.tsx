import IdComponent from '../components/IdComponent'
import { useAppSelector } from '../hooks/reduxHooks'
import { StudentInterface } from '../utils/interfaces/StudentInterfaces'

const Id = () => {

  const {studentData} = useAppSelector(store => store.studentReducer)
  return (
    <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
      {
        studentData?.map((student: StudentInterface) => <IdComponent user={student}/>)
      }
    </div>
  )
}

export default Id