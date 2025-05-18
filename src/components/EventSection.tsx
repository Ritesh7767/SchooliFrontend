import EventCard from "./EventCard"

const EventSection = ({section}: any) => {

  return (
    <div className="">
        <h1 className="font-semibold text-center text-3xl font-serif text-red-900 italic">{section.title}</h1>
        <div className="flex flex-col gap-3 md:grid md:grid-cols-2">
            {
                section?.images.map((image: string) => <EventCard image={image}/>)
            }
        </div>
    </div>
  )
}

export default EventSection