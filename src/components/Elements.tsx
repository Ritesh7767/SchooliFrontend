const Elements = ({role, value, url}: {role: string | null, value: number | string, url: string}) => {
  return (
    <div className='bg-white shadow-xl gap-3 rounded-xl p-3 flex justify-between items-center'>
      <div className='w-3/5 whitespace-nowrap'>
        <p style={{
          fontSize: ""
        }} className={`${!role ? "text-lg md:text-2xl": "text-5xl"} font-bold text-purple-900`}>{value}</p>
        {role && <p className='font-bold text-purple-900' >{`Total ${role}`}</p>}
      </div>
      <div className=' h-24'>
        <img className='h-full object-contain' src={url} />
      </div>
    </div>
  )
}

export default Elements