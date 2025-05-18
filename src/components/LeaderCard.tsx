import RoleHeading from "./RoleHeading"

const roles = ["Managing Director", "Principal", "Vice-Principal"]

const LeaderCard = ({quotes, url, imagePosition, index}: {index: number, quotes: string[], url:string, imagePosition: boolean}) => {
  return (
    <div className="bg-white shadow-2xl rounded-xl">
      <RoleHeading role={roles[index]} />
      <div className={`flex gap-4 items-center p-4 relative ${imagePosition && "flex-row-reverse"}`}>
              <p className="italic sm:hidden">{quotes[0]}</p>
              <p className="italic hidden sm:block">{quotes[1]}</p>
              <div className="min-w-2/4 max-w-lg shadow-2xl bg-[#9e83a7] rounded-lg">
                <img className=' translate-y-2 translate-x-2 md:translate-y-3 md:translate-x-3 shadow-2xl rounded-lg' src={url}/>
              </div>
      </div> 
    </div>
  )
}

export default LeaderCard