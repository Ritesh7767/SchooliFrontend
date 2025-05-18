import Header from '../components/Header'
import SubHeader from '../components/SubHeader'

const LeavingCertificate = ({user}: any) => {
  return (
    <div>
      <Header/>
      <SubHeader/>
      <br />
      <div className='flex flex-col gap-2 p-2'>
        <div className='flex justify-between'>
            <p className=''>Student's Full Name : <span className='underline'>{user.fullname}</span></p>
            <p>Father's Name : <span className='underline'>{user.fatherName}</span></p>
        </div>
        <div className='flex '>
          <p>Mothers' Full Name <span className='underline'>{user.motherName}</span></p>
        </div>
        <div className='flex justify-between'>
          <p>Religion : <span className='underline'>{user.religion}</span></p>
          <p>Caste : <span className='underline'>{user.caste}</span></p>
          <p>Nationality : <span className='underline'>{user.nationality}</span></p>
        </div>
        <div className='flex justify-between'>
          <p>Birth Place : <span className='underline'>{user.birthPlace}</span></p>
          <p>Dist : <span className='underline'>{user.district}</span></p>
          <p>State : <span className='underline'>{user.state}</span></p>
        </div>
        <p>Birth Date (Christian Era) : <span className='underline'>{user.DOB}</span> </p>
        <p>Birth Date (in Words) : <span className='underline'>{user.birth}</span> </p>
        <p>Last School : Attended : <span className='underline'>{user.lastSchool}</span> </p>
        <p>School Admission Date : <span className='underline'>{user.createAt}</span></p>
        <div>
          <p>Progress : <span className='underline'>________________</span></p>
          <p>Conduct : <span className='underline'>_________________</span> </p>
        </div>
        <p>Date of Leaving School : <span className='underline'>{Date.now()}</span></p>
        <p>Std In Which Studying Since When : <span className='underline'></span></p>
        <p>Reason Of Leaving School : <span className='underline'>____________</span></p>
        <p>Remark : <span className='underline'>____________</span></p>

        <p className='text-center'>Certified That Above Information Is In Accordance With the School Register</p>
        <p className='italic'><span className='font-bold'>Note: </span> No Change In Any Entry In This Certificate Shall Be Made Except By The Authority Issuing In The Infringement Of this RequirementIs Liable to Invoice The Impostion Of a Penalty Such As That Of rustle.</p>
        <br />
        <div className='flex gap-3'>
          <p>Date: ________________</p>
          <p>Class Teacher / Clerk</p>
        </div>
      </div>
    </div>
  )
}

export default LeavingCertificate