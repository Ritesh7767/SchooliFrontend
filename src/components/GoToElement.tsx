import { Link } from 'react-router-dom'

const GoToElement = ({value, path, url}: {value: string, path: string, url: string}) => {
  return (
    <Link to={url} className='flex gap-1 pl-3 bg-white rounded-lg shadow-xl justify-between p-1 box-border items-center'>
        <p className='text-2xl w-3/5 font-bold text-purple-900 whitespace-nowrap'>{value}</p>
        <div className='h-[8vh] p-2'>
            <img className='h-full object-contain' src={`/${path}`} alt="" />
        </div>
    </Link>
  )
}

export default GoToElement