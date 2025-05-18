const Documents = ({view, name, handleClick, previewImage}: {view: boolean, name: string, handleClick: () => void, previewImage: string | null}) => {
  
    console.log(previewImage)
    console.log(name)
    return (
    <div onClick={() => !view && handleClick()} className='shadow-xl'>
        {previewImage && <img src={previewImage} className="object-cover rounded-lg w-72 h-72"/>}
        {!previewImage && <div className='h-72 flex justify-center rounded-lg items-center'>
            <p className='w-full font-semibold p-4'>Upload {name} to preview</p>
        </div>}
    </div>
  )
}

export default Documents