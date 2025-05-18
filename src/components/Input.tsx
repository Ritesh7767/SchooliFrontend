import { IoSearch } from "react-icons/io5";
import { useAppSelector } from "../hooks/reduxHooks";
import { useSearch } from "../context/SearchProvider";

const Input = () => {

  const studentReducer = useAppSelector(store => store.studentReducer)
  const teacherReducer = useAppSelector(store => store.teacherReducer)

  const {setSearchView, setSearchData} = useSearch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.trim()
    if (searchValue == ""){
      setSearchView(false)
      return setSearchData([])
    } 
    const regex = new RegExp(searchValue.split("").join(".*"), "i");
    let studentResult = studentReducer.studentData.filter(ele => regex.test(ele.firstname) || regex.test(ele.lastname))
    let teacherResult = teacherReducer.teacherData.filter(ele => regex.test(ele.firstname) || regex.test(ele.lastname))
    setSearchData([...studentResult, ...teacherResult])
    setSearchView(true)
  }

  return (
    <div className="w-11/12 mb-2 md:mb-0 m-auto p-3 flex items-center border-slate-500 border bg-white md:w-full md:p-1 rounded-md">
        <span className=""><IoSearch/></span>
        <input onChange={handleChange} className="pl-1 outline-none w-full" type="text" placeholder="Search here ,..." />
    </div>
  )
}

export default Input