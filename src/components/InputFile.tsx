const InputFile = ({heading}: {heading: string}) => {
  return (
    <div>
        <label className='text-purple-800 font-bold' htmlFor="">{heading}</label><br />
        <input className='file:bg-white file:border-purple-800 file:rounded-lg file:p-2 file:pl-2 file:pr-2 file:active:bg-purple-800 file:active:text-white' type="file" placeholder={""}/>
    </div>
  )
}

export default InputFile