import { FaHeart } from "react-icons/fa6";
import { FaComment } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { useState } from "react";

const EventCard = ({image}: {image: string}) => {
    const [heart, setHeart] = useState<boolean>(false)
    const handleHeart = () => {
        setHeart(prev => !prev)
    }

    const handleClick = async (e: React.MouseEvent) => {
        e.preventDefault()

        try {
            const response = await fetch(image)
            console.log(response)
            const blob = await response.blob()
            console.log(blob)
            const url = URL.createObjectURL(blob)

            const a = document.createElement("a")
            a.href = url
            a.download = `event-image-${Math.floor(Math.random() * 1000)}.jpg`
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
            URL.revokeObjectURL(url)
        } catch (error) {
            console.error("Failed downloading image")
        }
    }
  return (
    <>
        <div className='shadow-lg rounded-lg relative'>
            <img src={image} className="rounded-xl transition-all" />
            <div className="flex gap-7 absolute left-3 bottom-3 text-xl md:text-3xl text-white opacity-70">
                <span onClick={handleHeart} style={{color: heart ? "rgb(230, 64, 64)": ""}} className=""><FaHeart/></span>
                <span className=""><FaComment/></span>
                <span onClick={handleClick}><FaDownload/></span>
            </div>
        </div>
    </>
  )
}

export default EventCard