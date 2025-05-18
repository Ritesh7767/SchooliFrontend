import RoleHeading from "./RoleHeading"

const FrontPhoto = () => {
    
    let images = [
      'https://res.cloudinary.com/duvoga9f5/image/upload/v1740130574/rren23ndqcowpr7tznpe.jpg',
      'https://res.cloudinary.com/duvoga9f5/image/upload/v1740130575/lvvfniyxe4ku2pjnnqay.jpg',
      'https://res.cloudinary.com/duvoga9f5/image/upload/v1740130576/ucfqsrxex1fnkmj5ufd8.jpg',
      'https://res.cloudinary.com/duvoga9f5/image/upload/v1740130577/vwsazbqg1lsuapsr8i5w.jpg',
      'https://res.cloudinary.com/duvoga9f5/image/upload/v1740130580/rt35lpymmhjt8ogyenkh.jpg',
      'https://res.cloudinary.com/duvoga9f5/image/upload/v1740130581/ucovkgxhhrexqcv5dxct.jpg',
      'https://res.cloudinary.com/duvoga9f5/image/upload/v1740130582/nja4ieplmov0zc8sarhz.jpg',
      'https://res.cloudinary.com/duvoga9f5/image/upload/v1740130584/wek9iuyi6elubf9caocq.jpg'
    ]

  return (
    <div>
        <RoleHeading role="Special Events" />
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-5">
        {
            images?.map((ele: string, index: number) => (
                <img className="w-[45vw] rounded-lg shadow-2xl" key={index} src={ele} alt="images"/>
            ))
        }
        </div>
    </div>
  )
}

export default FrontPhoto