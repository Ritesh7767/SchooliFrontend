import LeaderCard from "../components/LeaderCard";
import Banner from "../components/Banner";
import FrontPhoto from "../components/FrontPhoto";
import ContactDetails from "../components/ContactDetails";
import Login from "./Login";
import { Link } from "react-router-dom";

const mapping: {[key: string]: string[]} = {
  "https://res.cloudinary.com/duvoga9f5/image/upload/v1740071646/WhatsApp_Image_2025-02-20_at_10.57.15_qa2eqn.jpg": ["A good school is not just about grades; it's about character, curiosity, and creativity.", "A school is the foundation of a nation’s future. The values, knowledge, and discipline imparted here will define the society we live in tomorrow. It is not just about grades or ranks; it is about developing individuals who are kind, curious, and courageous enough to make a difference. Every student who walks these corridors carries the potential to shape the world."],
  "https://res.cloudinary.com/duvoga9f5/image/upload/v1740072046/WhatsApp_Image_2025-02-20_at_14.33.05_o4ul4n.jpg": ["A school should be a home of inspiration, a temple of wisdom, and a laboratory of success.", "Success is not determined by luck or talent alone, but by perseverance, discipline, and an unshakable belief in oneself. The students who embrace challenges, who dare to dream, and who work tirelessly towards their goals will always stand apart. The world does not need just intelligent individuals—it needs individuals with integrity, compassion, and a strong sense of purpose."],
  "https://res.cloudinary.com/duvoga9f5/image/upload/v1740071646/WhatsApp_Image_2025-02-20_at_11.06.51_xrh2to.jpg": ["In every child, there is a potential waiting to be discovered. A school must be the place where dreams take flight.", "A great school is not one that creates toppers; it is one that creates thinkers, leaders, and responsible citizens. Every student is unique, and education should be a celebration of diversity. Excellence is not about being better than others—it is about being better than yesterday. In our school, every child matters, every voice is heard, and every dream is valued."] 
}

const Front = () => {
  return (

    <div className="text-center parent relative border-2 bg-purple-50 flex flex-col gap-4">
      {/* <Login/> */}
      <nav className="flex justify-between items-center shadow-lg p-2 md:p-4">
        <span className="font-bold text-lg md:text-2xl font-serif text-purple-900">Schoooli</span>
        <Link to={'/login'} className="font-bold md:text-lg" >Login</Link>
      </nav>
      <div>
        <h1 className="font-bold text-3xl text-purple-950">St Paul's English High School</h1>
        <h2 className="font-semibold text-2xl">Welcomes You</h2>
      </div>
      <Banner/>
        <h2 className="font-bold text-lg">Meet Our Esteemed Leadership</h2>
        <div className="flex flex-col gap-6 p-5">
          {Object.keys(mapping).map((field: string, index: number) => (
            <>
              <LeaderCard key={index} index={index} quotes={mapping[field]} url={field} imagePosition={index % 2 == 0}/>
            </>
          ))}
        </div>
        <FrontPhoto/>
        <ContactDetails/>
    </div>
  )
}

export default Front