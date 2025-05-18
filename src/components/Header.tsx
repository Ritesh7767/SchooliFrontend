const Header = () => {
  return (
    <div className='border-2 border-black '>
      <div className='flex items-center justify-center gap-2 border-2 border-black text-center'>
        <div className='w-1/5'>
          <img src="./logo.png" alt="" />
        </div>
        <div className='text-center font-semibold'>
          <p className='text-center'>Saraswati Devi Educational Trust</p>
          <h1 className='font-bold text-3xl font-serif'>St. Paul's English High School</h1>
          <h2>REGD. NO. : E- 2492 (Palgar)</h2>
          <p>Add.: Anmol Plaza Building, Opp Rock Garden Virar Road Moregaon, Nallasopara (E) - 401209</p>
        </div>
      </div>
    </div>
  )
}

export default Header