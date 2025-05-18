const ContactDetails = () => {
  return (
    <div className="flex justify-between gap-4 text-xs sm:text-base p-4">
        <address className="text-left w-3/5 sm:w-1/2 bg-white rounded-lg p-2 shadow-2xl">
          <span>Visit us</span><br />
          1st floor, Anmol Plaza, <br />
          Opp. Rock Garden, <br />
          new Moregaon Talav,<br />
          Moregaon, <br />
          Virar Road <br />
          Nallasopara East 401-209
        </address>
        <div className="bg-white pl-2 pt-2 shadow-2xl sm:w-1/2 rounded-lg flex text-left flex-col gap-1 items-start justify-start">
          <span className="font-semibold">Contact Us</span>
          <span>Manoj Sir (Director) :- 8698549490</span>
          <span>Pradeep Sir (Principal) :- 9665142077</span>
          <span>Anjali Mam (Vice-Principal) :- 7398042077</span>
        </div>
    </div>
  )
}

export default ContactDetails